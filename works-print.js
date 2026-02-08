const root = document.getElementById("print-root");
const printNowBtn = document.getElementById("print-now");
const STORAGE_KEY = "tskWorksPrintPayload";

function readPrintPayload() {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (_error) {
    return null;
  }
}

function renderPayload() {
  const payload = readPrintPayload();
  if (!payload || typeof payload.markup !== "string" || !payload.markup.trim()) {
    root.innerHTML = '<p style="margin:20px 0;">인쇄할 데이터가 없습니다. Works 팝업에서 인쇄 버튼을 다시 눌러주세요.</p>';
    return;
  }

  root.innerHTML = payload.markup;
}

renderPayload();

if (printNowBtn) {
  printNowBtn.addEventListener("click", () => {
    window.print();
  });
}
