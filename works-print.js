const root = document.getElementById("print-root");
const printNowBtn = document.getElementById("print-now");
const STORAGE_KEY = "tskWorksPrintPayload";
const LOCAL_PREFIX = "tskWorksPrintPayload:";
const LATEST_KEY = "tskWorksPrintPayload:latest";
let hasRenderedContent = false;
let cachedMarkup = "";
let hasPaginated = false;

function readStamp() {
  try {
    const url = new URL(window.location.href);
    return url.searchParams.get("stamp") || "";
  } catch (_error) {
    return "";
  }
}

function readPayloadFromSession() {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (_error) {
    return null;
  }
}

function readMarkupFromLocal(stamp) {
  if (!stamp) return "";
  try {
    return window.localStorage.getItem(`${LOCAL_PREFIX}${stamp}`) || "";
  } catch (_error) {
    return "";
  }
}

function readLatestMarkup() {
  try {
    return window.localStorage.getItem(LATEST_KEY) || "";
  } catch (_error) {
    return "";
  }
}

function readMarkupFromOpener() {
  try {
    if (!window.opener || typeof window.opener.__TSK_GET_WORKS_PRINT_PAYLOAD__ !== "function") {
      return "";
    }
    const payload = window.opener.__TSK_GET_WORKS_PRINT_PAYLOAD__();
    if (!payload || typeof payload.markup !== "string") return "";
    return payload.markup;
  } catch (_error) {
    return "";
  }
}

function resolveMarkup() {
  if (cachedMarkup.trim()) {
    return cachedMarkup;
  }

  const stamp = readStamp();
  const sessionPayload = readPayloadFromSession();
  if (sessionPayload && typeof sessionPayload.markup === "string" && sessionPayload.markup.trim()) {
    return sessionPayload.markup;
  }

  const localMarkup = readMarkupFromLocal(stamp);
  if (localMarkup.trim()) {
    return localMarkup;
  }

  const latestMarkup = readLatestMarkup();
  if (latestMarkup.trim()) {
    return latestMarkup;
  }

  return readMarkupFromOpener();
}

function renderPayload() {
  const markup = resolveMarkup();
  if (!markup || !markup.trim()) {
    if (hasRenderedContent) {
      return;
    }
    root.innerHTML = '<p style="margin:20px 0;">인쇄할 데이터가 없습니다. Works 팝업에서 인쇄 버튼을 다시 눌러주세요.</p>';
    return;
  }

  root.innerHTML = markup;
  cachedMarkup = markup;
  hasRenderedContent = true;
  hasPaginated = false;
}

function getPxPerMm() {
  const probe = document.createElement("div");
  probe.style.position = "absolute";
  probe.style.visibility = "hidden";
  probe.style.width = "100mm";
  probe.style.height = "1px";
  document.body.appendChild(probe);
  const px = probe.getBoundingClientRect().width / 100;
  probe.remove();
  return px || 3.7795;
}

function measureSectionHeightPx(sectionMarkup, widthPx) {
  const host = document.createElement("div");
  host.style.position = "absolute";
  host.style.visibility = "hidden";
  host.style.pointerEvents = "none";
  host.style.left = "-99999px";
  host.style.top = "0";
  host.style.width = `${widthPx}px`;
  host.innerHTML = sectionMarkup;
  document.body.appendChild(host);
  const section = host.firstElementChild;
  const height = section ? section.getBoundingClientRect().height : 0;
  host.remove();
  return height;
}

function buildPrintSection(headerHtml, rowHtmlList) {
  return `
    <section class="print-page">
      <table class="print-table" role="presentation">
        <thead>${headerHtml}</thead>
        <tbody>${rowHtmlList.join("")}</tbody>
      </table>
    </section>
  `;
}

function paginatePrintPages() {
  if (hasPaginated || !root) return;
  const sourcePages = Array.from(root.querySelectorAll(".print-page"));
  if (sourcePages.length === 0) return;

  const pxPerMm = getPxPerMm();
  const pageBodyHeightPx = (297 - 10 - 12) * pxPerMm;
  const rootWidth = root.getBoundingClientRect().width || 1000;
  const resultSections = [];

  sourcePages.forEach((page) => {
    const table = page.querySelector(".print-table");
    const thead = table?.querySelector("thead");
    const rows = Array.from(table?.querySelectorAll("tbody > tr.print-project-row") || []);
    if (!table || !thead || rows.length === 0) {
      resultSections.push(page.outerHTML);
      return;
    }

    const headerHtml = thead.innerHTML;
    const rowHtmlList = rows.map((row) => row.outerHTML);
    let currentRows = [];

    rowHtmlList.forEach((rowHtml) => {
      const testRows = [...currentRows, rowHtml];
      const testSection = buildPrintSection(headerHtml, testRows);
      const testHeight = measureSectionHeightPx(testSection, rootWidth);
      if (testHeight <= pageBodyHeightPx || currentRows.length === 0) {
        currentRows = testRows;
        return;
      }

      resultSections.push(buildPrintSection(headerHtml, currentRows));
      currentRows = [rowHtml];
    });

    if (currentRows.length > 0) {
      resultSections.push(buildPrintSection(headerHtml, currentRows));
    }
  });

  root.innerHTML = resultSections.join("");
  hasPaginated = true;
}

function buildSnapshotHtml(markupSnapshot) {
  const cssUrl = new URL("works-print.css?v=20260209-07", window.location.href).toString();
  return `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TSK Works Print</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Chakra+Petch:wght@500;600;700&family=Orbitron:wght@600;700;800&family=Noto+Sans+KR:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="${cssUrl}" />
    <style>
      .print-toolbar { display: none !important; }
      #print-root { margin: 0 !important; width: 100% !important; }
    </style>
  </head>
  <body>
    <main id="print-root">${markupSnapshot}</main>
  </body>
</html>`;
}

function printViaHiddenFrame() {
  const markupSnapshot = root?.innerHTML || "";
  if (!markupSnapshot.trim()) {
    return false;
  }

  const frame = document.createElement("iframe");
  frame.setAttribute("aria-hidden", "true");
  frame.style.position = "fixed";
  frame.style.right = "0";
  frame.style.bottom = "0";
  frame.style.width = "1px";
  frame.style.height = "1px";
  frame.style.opacity = "0";
  frame.style.pointerEvents = "none";
  frame.style.border = "0";
  document.body.appendChild(frame);

  const doc = frame.contentDocument;
  const frameWindow = frame.contentWindow;
  if (!doc || !frameWindow) {
    frame.remove();
    return false;
  }

  doc.open();
  doc.write(buildSnapshotHtml(markupSnapshot));
  doc.close();

  const cleanup = () => {
    window.setTimeout(() => frame.remove(), 500);
  };

  const triggerPrint = () => {
    try {
      frameWindow.focus();
      frameWindow.print();
    } catch (_error) {
      cleanup();
      return;
    }
    cleanup();
  };

  frameWindow.addEventListener("afterprint", cleanup, { once: true });
  window.setTimeout(triggerPrint, 220);
  return true;
}

function openSnapshotPrintWindow() {
  const markupSnapshot = root?.innerHTML || "";
  if (!markupSnapshot.trim()) {
    return false;
  }

  const popup = window.open("", "_blank");
  if (!popup) return false;

  popup.document.open();
  popup.document.write(buildSnapshotHtml(markupSnapshot));
  popup.document.close();
  window.setTimeout(() => {
    try {
      popup.focus();
      popup.print();
    } catch (_error) {
      // noop
    }
  }, 220);
  return true;
}

function renderWithRetry(maxRetry = 12, delayMs = 150) {
  let tries = 0;
  const tick = () => {
    renderPayload();
    if (hasRenderedContent || tries >= maxRetry) return;
    tries += 1;
    window.setTimeout(tick, delayMs);
  };
  tick();
}

renderWithRetry();
window.setTimeout(paginatePrintPages, 80);
window.setTimeout(paginatePrintPages, 260);

if (printNowBtn) {
  printNowBtn.addEventListener("click", () => {
    if (!hasRenderedContent) {
      renderPayload();
    }
    paginatePrintPages();
    if (!printViaHiddenFrame() && !openSnapshotPrintWindow()) {
      window.print();
    }
  });
}
