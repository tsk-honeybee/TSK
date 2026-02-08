const sections = {
  works: {
    title: "Works",
    type: "timeline",
    groups: [
      {
        year: "2026",
        items: ["StarDream - ==Break It Out=="],
      },
      {
        year: "2025",
        items: [
          "Blue Archive - ==Twinkle☆Magic== (Vocal Engineering) / © 2025 Nexon Games Co., Ltd.",
          "HUZ - ==Glow==",
          "HUZ - ==Start Connection==",
        ],
      },
      {
        year: "2024",
        items: [
          "엔터더스콘 - ==Opening Music== / © 2024 미츄(meechu)",
          "DEEMO II - ==Jump Up== / © 2024 Rayark Inc.",
          "DEEMO II - ==Sweet Sweet== / © 2024 Rayark Inc.",
          "DEEMO II - ==From There== / © 2024 Rayark Inc.",
          "Hakos Baelz - ==GIMME MORE== / © 2024 COVER Corp.",
          "Hakos Baelz - ==RIDE== / © 2024 COVER Corp.",
        ],
      },
      {
        year: "2023",
        items: [
          "DEEMO II - ==Echoes of Obscurity== / © 2023 Rayark Inc.",
          "Hakos Baelz - ==BOOM== (Vocal Engineering) / © 2023 COVER Corp.",
        ],
      },
      {
        year: "2022",
        items: [
          "Blue Archive - ==Blue Archive 1st Anniversary OST== / © 2022 Nexon Games Co., Ltd.",
          "Blue Archive - ==Blue Archive Original Soundtrack Vol.2== / © 2022 Nexon Games Co., Ltd.",
          "SUPER SPEEDRUN MARATHON 2022 - ==Theme Music== / © 2022 Super Speedrun Marathon",
          "aiobahn 2nd ep all connected - ==resonance ft. KOCHO (TSK Remix)==",
          "Blue Archive - ==Blue Archive Original Soundtrack Vol.1== / © 2022 Nexon Games Co., Ltd.",
          "シュガーリリック - ==Back to the Masquerade== (Vocal Engineering) / © 2022 774inc.",
        ],
      },
      {
        year: "2021",
        items: ["メイビーME - ==めびみ☆== (Vocal Engineering)"],
      },
    ],
  },
  compilation: {
    title: "Works (Doujin)",
    type: "timeline",
    groups: [
      {
        year: "2025",
        items: ['MEGAREX "SPD GAR 004" - ==Lov3 Me!=='],
      },
      {
        year: "2023",
        items: [
          'MARIGAN "Current-Voltage" - ==ロボットの歌 (feat. 夏色花梨)==',
          'MARIGAN "Current-Voltage" - ==Above==',
        ],
      },
      {
        year: "2022",
        items: [
          'TERRAGAZER "TERRA\'N\'BASS" - ==Keep On==',
          'TERRAGAZER "TERRA-FORMING 2" - ==No Matter==',
        ],
      },
    ],
  },
  discography: {
    title: "Discography",
    type: "discography",
    groups: [
      {
        category: "Singles",
        items: ["TSK x DrAquinas - ==달가림 (Lunar Eclipse)=="],
      },
    ],
  },
};

const youtubeLinks = {
  "StarDream - ==Break It Out==": "https://youtu.be/d68gIXrr_yY?si=egouDQoQr9vcaF5e",
  "Blue Archive - ==Twinkle☆Magic== (Vocal Engineering) / © 2025 Nexon Games Co., Ltd.":
    "https://www.youtube.com/watch?v=TUDWnlyePv4",
  "HUZ - ==Glow==": "https://www.youtube.com/watch?v=P6V-IKg8f3M",
  "HUZ - ==Start Connection==": "https://www.youtube.com/watch?v=u5yBBZyqY5M",
  "엔터더스콘 - ==Opening Music== / © 2024 미츄(meechu)":
    "",
  "DEEMO II - ==Jump Up== / © 2024 Rayark Inc.": "https://www.youtube.com/watch?v=un5EndF6Q40",
  "DEEMO II - ==Sweet Sweet== / © 2024 Rayark Inc.": "https://www.youtube.com/watch?v=ki4ktd7qD44",
  "DEEMO II - ==From There== / © 2024 Rayark Inc.": "https://youtu.be/oUcKwFRT0uY?si=u8RwouiFFbZWOZ5g",
  "Hakos Baelz - ==GIMME MORE== / © 2024 COVER Corp.": "https://www.youtube.com/watch?v=-gyqLWiMS74",
  "Hakos Baelz - ==RIDE== / © 2024 COVER Corp.": "https://www.youtube.com/watch?v=_hEzJPgdF5Q",
  "DEEMO II - ==Echoes of Obscurity== / © 2023 Rayark Inc.": "https://www.youtube.com/watch?v=pSNb7yJf-2A",
  "Hakos Baelz - ==BOOM== (Vocal Engineering) / © 2023 COVER Corp.": "https://www.youtube.com/watch?v=7-tyBtksqNA",
  "Blue Archive - ==Blue Archive 1st Anniversary OST== / © 2022 Nexon Games Co., Ltd.":
    "",
  "Blue Archive - ==Blue Archive Original Soundtrack Vol.2== / © 2022 Nexon Games Co., Ltd.":
    "",
  "SUPER SPEEDRUN MARATHON 2022 - ==Theme Music== / © 2022 Super Speedrun Marathon":
    "https://www.youtube.com/watch?v=BiBhRXYQKLg",
  "© 2022 Super Speedrun Marathon": "https://www.youtube.com/watch?v=BiBhRXYQKLg",
  "aiobahn 2nd ep all connected - ==resonance ft. KOCHO (TSK Remix)==":
    "https://www.youtube.com/watch?v=Z-VzHs2VFeU",
  "aiobahn - ==resonance ft. KOCHO (TSK Remix)==": "https://www.youtube.com/watch?v=Z-VzHs2VFeU",
  "Blue Archive - ==Blue Archive Original Soundtrack Vol.1== / © 2022 Nexon Games Co., Ltd.":
    "",
  "シュガーリリック - ==Back to the Masquerade== (Vocal Engineering) / © 2022 774inc.":
    "https://www.youtube.com/watch?v=ZKQNG-Grck4",
  "Vocal Engineering / © 2022 774inc.": "https://www.youtube.com/watch?v=ZKQNG-Grck4",
  "Vocal Engineering": "https://youtu.be/1Gtwh_sPTXs?si=dwcMTD8HktYfLTeg",
  "メイビーME - ==めびみ☆== (Vocal Engineering)": "https://youtu.be/1Gtwh_sPTXs?si=dwcMTD8HktYfLTeg",
  'MEGAREX "SPD GAR 004" - ==Lov3 Me!==': "https://www.youtube.com/watch?v=bRXzgf7Vjn4",
  'MARIGAN "Current-Voltage" - ==ロボットの歌 (feat. 夏色花梨)==': "https://www.youtube.com/watch?v=sAmdAVmIK_w",
  'MARIGAN "Current-Voltage" - ==Above==': "https://www.youtube.com/watch?v=9u6BpG2U8zY",
  'TERRAGAZER "TERRA\'N\'BASS" - ==Keep On==': "https://www.youtube.com/watch?v=ax8ib62juGM",
  'TERRAGAZER "TERRA-FORMING 2" - ==No Matter==': "https://www.youtube.com/watch?v=lqnhxe0rdAo",
  "TSK x DrAquinas - ==달가림 (Lunar Eclipse)==": "https://www.youtube.com/watch?v=cDpczuv4wbg",
};

const thumbnailOverrides = {
  "엔터더스콘 - ==Opening Music== / © 2024 미츄(meechu)":
    "assets/thumbs/enterdscon-opening.jpg",
  "Blue Archive - ==Blue Archive 1st Anniversary OST== / © 2022 Nexon Games Co., Ltd.":
    "assets/thumbs/bluearchive-1st-anniv-ost.jpg",
  "Blue Archive - ==Blue Archive Original Soundtrack Vol.2== / © 2022 Nexon Games Co., Ltd.":
    "assets/thumbs/bluearchive-ost-vol2.jpg",
  "Blue Archive - ==Blue Archive Original Soundtrack Vol.1== / © 2022 Nexon Games Co., Ltd.":
    "assets/thumbs/bluearchive-ost-vol1.jpg",
  "TSK x DrAquinas - ==달가림 (Lunar Eclipse)==":
    "assets/thumbs/lunar-eclipse.jpg",
};

const localYoutubeThumbnails = {
  d68gIXrr_yY: "assets/thumbs/d68gIXrr_yY.jpg",
  TUDWnlyePv4: "assets/thumbs/TUDWnlyePv4.jpg",
  "P6V-IKg8f3M": "assets/thumbs/P6V-IKg8f3M.jpg",
  u5yBBZyqY5M: "assets/thumbs/u5yBBZyqY5M.jpg",
  un5EndF6Q40: "assets/thumbs/un5EndF6Q40.jpg",
  ki4ktd7qD44: "assets/thumbs/ki4ktd7qD44.jpg",
  oUcKwFRT0uY: "assets/thumbs/oUcKwFRT0uY.jpg",
  "-gyqLWiMS74": "assets/thumbs/-gyqLWiMS74.jpg",
  _hEzJPgdF5Q: "assets/thumbs/_hEzJPgdF5Q.jpg",
  "pSNb7yJf-2A": "assets/thumbs/pSNb7yJf-2A.jpg",
  "7-tyBtksqNA": "assets/thumbs/7-tyBtksqNA.jpg",
  BiBhRXYQKLg: "assets/thumbs/BiBhRXYQKLg.jpg",
  "Z-VzHs2VFeU": "assets/thumbs/Z-VzHs2VFeU.jpg",
  "ZKQNG-Grck4": "assets/thumbs/ZKQNG-Grck4.jpg",
  "1Gtwh_sPTXs": "assets/thumbs/1Gtwh_sPTXs.jpg",
  bRXzgf7Vjn4: "assets/thumbs/bRXzgf7Vjn4.jpg",
  sAmdAVmIK_w: "assets/thumbs/sAmdAVmIK_w.jpg",
  "9u6BpG2U8zY": "assets/thumbs/9u6BpG2U8zY.jpg",
  ax8ib62juGM: "assets/thumbs/ax8ib62juGM.jpg",
  lqnhxe0rdAo: "assets/thumbs/lqnhxe0rdAo.jpg",
  cDpczuv4wbg: "assets/thumbs/cDpczuv4wbg.jpg",
};

const worksCategoryGroups = [
  {
    category: "Game Works",
    projects: [
      {
        title: "Blue Archive",
        period: "2021-2025",
        officialUrl: "https://bluearchive.jp/",
        image: "assets/thumbs/bluearchive-cover.jpg",
        items: [
          "Blue Archive - ==Twinkle☆Magic== (Vocal Engineering) / © 2025 Nexon Games Co., Ltd.",
          "Blue Archive - ==Blue Archive 1st Anniversary OST== / © 2022 Nexon Games Co., Ltd.",
          "Blue Archive - ==Blue Archive Original Soundtrack Vol.2== / © 2022 Nexon Games Co., Ltd.",
          "Blue Archive - ==Blue Archive Original Soundtrack Vol.1== / © 2022 Nexon Games Co., Ltd.",
        ],
      },
      {
        title: "DEEMO II",
        period: "2023-2024",
        officialUrl: "https://deemo.com/deemo2/",
        image: "assets/thumbs/deemo2-cover.jpg",
        items: [
          "DEEMO II - ==Jump Up== / © 2024 Rayark Inc.",
          "DEEMO II - ==Sweet Sweet== / © 2024 Rayark Inc.",
          "DEEMO II - ==From There== / © 2024 Rayark Inc.",
          "DEEMO II - ==Echoes of Obscurity== / © 2023 Rayark Inc.",
        ],
      },
    ],
  },
  {
    category: "Vtuber",
    projects: [
      {
        title: "StarDream - Break It Out",
        period: "2026",
        image: "assets/thumbs/d68gIXrr_yY.jpg",
        items: ["StarDream - ==Break It Out=="],
      },
      {
        title: "HUZ - Glow",
        period: "2025",
        image: "assets/thumbs/P6V-IKg8f3M.jpg",
        items: ["HUZ - ==Glow=="],
      },
      {
        title: "HUZ - Start Connection",
        period: "2025",
        image: "assets/thumbs/u5yBBZyqY5M.jpg",
        items: ["HUZ - ==Start Connection=="],
      },
      {
        title: "Hakos Baelz - ZODIAC",
        period: "2024",
        officialUrl: "https://www.youtube.com/playlist?list=OLAK5uy_nKp29RuXFk2zJTVYw5lLD_S0mCI7pSjqo",
        image: "assets/thumbs/hakos-zodiac.jpg",
        items: [
          "Hakos Baelz - ==GIMME MORE== / © 2024 COVER Corp.",
          "Hakos Baelz - ==RIDE== / © 2024 COVER Corp.",
        ],
      },
      {
        title: "엔터더스콘 - Opening Music",
        period: "2024",
        image: "assets/thumbs/enterdscon-opening.jpg",
        items: ["엔터더스콘 - ==Opening Music== / © 2024 미츄(meechu)"],
      },
      {
        title: "Hakos Baelz - BOOM",
        period: "2023",
        image: "assets/thumbs/7-tyBtksqNA.jpg",
        items: ["Hakos Baelz - ==BOOM== (Vocal Engineering) / © 2023 COVER Corp."],
      },
      {
        title: "シュガーリリック - Back to the Masquerade",
        period: "2022",
        image: "assets/thumbs/ZKQNG-Grck4.jpg",
        items: ["Vocal Engineering / © 2022 774inc."],
      },
    ],
  },
  {
    category: "etc.",
    projects: [
      {
        title: "SUPER SPEEDRUN MARATHON - Theme Music",
        period: "2022",
        image: "assets/thumbs/super-speedrun-marathon.jpg",
        items: ["© 2022 Super Speedrun Marathon"],
      },
      {
        title: "aiobahn - resonance ft. KOCHO (TSK Remix)",
        period: "2022",
        image: "assets/thumbs/Z-VzHs2VFeU.jpg",
        items: ["aiobahn - ==resonance ft. KOCHO (TSK Remix)=="],
      },
      {
        title: "メイビーME - めびみ☆",
        period: "2021",
        image: "assets/thumbs/1Gtwh_sPTXs.jpg",
        items: ["Vocal Engineering"],
      },
    ],
  },
];

const overlay = document.getElementById("modal-overlay");
const backdrop = document.getElementById("overlay-backdrop");
const closeBtn = document.getElementById("modal-close");
const modalPrintOpenBtn = document.getElementById("modal-print-open");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const modalScrollbar = document.getElementById("modal-scrollbar");
const modalScrollbarThumb = document.getElementById("modal-scrollbar-thumb");
const menuButtons = Array.from(document.querySelectorAll(".menu-btn"));
let scrollbarThumbHeight = 36;
let draggingScrollbarThumb = false;
let dragOffsetY = 0;
let activeSectionKey = "";

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

syncFullscreenToggleButton();

function renderMarkedText(text) {
  const escaped = escapeHtml(text);
  return escaped
    .replace(/==(.+?)==/g, '<span class="mark-box">$1</span>')
    .replace(/\bVocal Engineering\b/g, '<span class="role-box">Vocal Engineering</span>');
}

function renderItemText(text) {
  const normalized = text.replace(/\(\s*Vocal Engineering\s*\)/g, "Vocal Engineering");
  const companyMatch = normalized.match(/\s*\/\s*(©.*)$/);
  const mainText = companyMatch ? normalized.slice(0, companyMatch.index).trim() : normalized;
  const companyText = companyMatch ? companyMatch[1].trim() : "";

  const renderedMain = renderMarkedText(mainText);
  if (!companyText) return renderedMain;

  return `${renderedMain} <span class="company-meta">/ ${escapeHtml(companyText)}</span>`;
}

function getYoutubeVideoId(url) {
  if (!url) return "";

  try {
    const parsedUrl = new URL(url);
    const host = parsedUrl.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      return parsedUrl.pathname.replace("/", "").split("/")[0] || "";
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsedUrl.pathname === "/watch") {
        return parsedUrl.searchParams.get("v") || "";
      }

      const pathParts = parsedUrl.pathname.split("/").filter(Boolean);
      if ((pathParts[0] === "shorts" || pathParts[0] === "embed") && pathParts[1]) {
        return pathParts[1];
      }
    }
  } catch (_error) {
    return "";
  }

  return "";
}

function getTrackThumbnail(item) {
  if (thumbnailOverrides[item]) {
    return thumbnailOverrides[item];
  }

  const href = youtubeLinks[item];
  const videoId = getYoutubeVideoId(href);
  if (videoId && localYoutubeThumbnails[videoId]) {
    return localYoutubeThumbnails[videoId];
  }

  return "assets/profile.jpg";
}

function renderTimeline(groups, showThumbnails = true) {
  return `
    <div class="timeline">
      ${groups
        .map(
          ({ year, items }) => `
            <article class="year-group">
              <h3><span class="year-chip">${escapeHtml(year)}</span></h3>
              <ul class="${showThumbnails ? "track-list" : "simple-list"}">
                ${items
                  .map((item) => {
                    const href = youtubeLinks[item];
                    const content = renderItemText(item);
                    const contentMarkup = href
                      ? `<a class="track-link" href="${escapeHtml(
                          href
                        )}" target="_blank" rel="noreferrer">${content}</a>`
                      : `<span class="track-text">${content}</span>`;

                    if (!showThumbnails) {
                      return `<li>${contentMarkup}</li>`;
                    }

                    const thumbnail = getTrackThumbnail(item);
                    const titleForAlt = escapeHtml(item.replaceAll("==", ""));

                    return `
                      <li class="track-item">
                        <div class="track-thumb-wrap">
                          <img
                            class="track-thumb"
                            src="${escapeHtml(thumbnail)}"
                            alt="${titleForAlt} thumbnail"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div class="track-item-body">${contentMarkup}</div>
                      </li>
                    `;
                  })
                  .join("")}
              </ul>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderCategoryItem(item) {
  const href = youtubeLinks[item];
  const content = renderItemText(item);
  if (!href) return `<span class="track-text">${content}</span>`;

  return `
    <a class="track-link" href="${escapeHtml(href)}" target="_blank" rel="noreferrer">
      ${content}
    </a>
  `;
}

function getSingleItemDisplayText(item, title) {
  const normalizedItem = item.replace(/\(\s*Vocal Engineering\s*\)/g, "Vocal Engineering").replaceAll("==", "").trim();
  const normalizedTitle = title.trim();
  let summary = normalizedItem;

  if (summary === normalizedTitle) return "";
  if (summary.startsWith(`${normalizedTitle} / `)) {
    summary = summary.slice(normalizedTitle.length + 3).trim();
  } else if (summary.startsWith(`${normalizedTitle} `)) {
    summary = summary.slice(normalizedTitle.length).trim();
  }

  if (summary.startsWith("- ")) {
    summary = summary.slice(2).trim();
  }

  return summary;
}

function renderCategoryItemPlain(text) {
  if (!text) return "";
  return `<span class="track-text">${renderItemText(text)}</span>`;
}

function renderCategoryItemList(items) {
  return items.map((item) => `<li>${renderCategoryItem(item)}</li>`).join("");
}

function getDiscographyTitle(item) {
  const markedMatch = item.match(/==(.+?)==/);
  if (markedMatch?.[1]) return markedMatch[1].trim();

  const normalized = item.replaceAll("==", "").trim();
  const dividerIndex = normalized.indexOf(" - ");
  if (dividerIndex >= 0) return normalized.slice(dividerIndex + 3).trim();
  return normalized;
}

function renderDiscography(groups) {
  return `
    <div class="works-categories">
      ${groups
        .map(
          ({ category, items }) => `
            <section class="works-category-group">
              <h3 class="category-badge">${escapeHtml(category)}</h3>
              <ul class="discography-grid">
                ${items
                  .map((item) => {
                    const href = youtubeLinks[item];
                    const thumbnail = getTrackThumbnail(item);
                    const title = getDiscographyTitle(item);
                    const titleForAlt = escapeHtml(title);

                    return `
                      <li class="discography-item">
                        ${
                          href
                            ? `<a class="discography-link" href="${escapeHtml(
                                href
                              )}" target="_blank" rel="noreferrer">
                                <img
                                  class="discography-thumb"
                                  src="${escapeHtml(thumbnail)}"
                                  alt="${titleForAlt} thumbnail"
                                  loading="lazy"
                                  decoding="async"
                                />
                                <span class="discography-title">${escapeHtml(title)}</span>
                              </a>`
                            : `<div class="discography-link">
                                <img
                                  class="discography-thumb"
                                  src="${escapeHtml(thumbnail)}"
                                  alt="${titleForAlt} thumbnail"
                                  loading="lazy"
                                  decoding="async"
                                />
                                <span class="discography-title">${escapeHtml(title)}</span>
                              </div>`
                        }
                      </li>
                    `;
                  })
                  .join("")}
              </ul>
            </section>
          `
        )
        .join("")}
    </div>
  `;
}

function renderWorksCategories(groups, expandAllDetails = false) {
  return `
    <div class="works-categories">
      ${groups
        .map(
          ({ category, projects }) => `
            <section class="works-category-group">
              <h3 class="category-badge">${escapeHtml(category)}</h3>
              <div class="works-project-list">
                ${projects
                  .map(({ title, period, image, items, officialUrl }) => {
                    const singleItem = items.length === 1 ? items[0] : "";
                    const singleItemHref = singleItem ? youtubeLinks[singleItem] : "";
                    const titleHref = officialUrl || (items.length === 1 ? singleItemHref : "");
                    const singleItemDisplayText = singleItem ? getSingleItemDisplayText(singleItem, title) : "";
                    const titleMarkup =
                      titleHref
                        ? `<a class="works-project-title works-project-title-link" href="${escapeHtml(
                            titleHref
                          )}" target="_blank" rel="noreferrer">${escapeHtml(title)}</a>`
                        : `<span class="works-project-title">${escapeHtml(title)}</span>`;

                    return `
                      <article class="works-project-card">
                        <img
                          class="works-project-thumb"
                          src="${escapeHtml(image)}"
                          alt="${escapeHtml(title)} thumbnail"
                          loading="lazy"
                          decoding="async"
                        />
                        <div class="works-project-body">
                          <p class="works-project-title-row">
                            ${titleMarkup}
                            <span class="works-project-period">(${escapeHtml(period)})</span>
                          </p>
                          ${
                            items.length === 1
                              ? singleItemDisplayText
                                ? `<div class="works-project-single">${renderCategoryItemPlain(singleItemDisplayText)}</div>`
                                : ""
                              : `<details class="works-project-dropdown"${expandAllDetails ? " open" : ""}>
                                  <summary>
                                    <span>info</span>
                                    <span class="dropdown-arrow" aria-hidden="true">▾</span>
                                  </summary>
                                  <ul class="simple-list category-detail-list">
                                    ${renderCategoryItemList(items)}
                                  </ul>
                                </details>`
                          }
                        </div>
                      </article>
                    `;
                  })
                  .join("")}
              </div>
            </section>
          `
        )
        .join("")}
    </div>
  `;
}

function setActiveButton(sectionKey) {
  menuButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.section === sectionKey);
  });
}

function resetModalScroll() {
  modalBody.scrollTop = 0;
  modalScrollbarThumb.style.transform = "translateY(0)";
}

function syncModalScrollbar() {
  const viewHeight = modalBody.clientHeight;
  const contentHeight = modalBody.scrollHeight;
  const canScroll = contentHeight - viewHeight > 1;

  modalScrollbar.hidden = !canScroll;
  if (!canScroll) return;

  const trackHeight = modalScrollbar.clientHeight;
  scrollbarThumbHeight = Math.max(36, (viewHeight / contentHeight) * trackHeight);
  const maxThumbTop = Math.max(0, trackHeight - scrollbarThumbHeight);
  const maxScrollTop = Math.max(1, contentHeight - viewHeight);
  const thumbTop = (modalBody.scrollTop / maxScrollTop) * maxThumbTop;

  modalScrollbarThumb.style.height = `${scrollbarThumbHeight}px`;
  modalScrollbarThumb.style.transform = `translateY(${thumbTop}px)`;
}

function setScrollFromThumbPosition(nextThumbTop) {
  const maxThumbTop = Math.max(0, modalScrollbar.clientHeight - scrollbarThumbHeight);
  const clampedThumbTop = Math.min(maxThumbTop, Math.max(0, nextThumbTop));
  const ratio = maxThumbTop === 0 ? 0 : clampedThumbTop / maxThumbTop;
  modalBody.scrollTop = ratio * (modalBody.scrollHeight - modalBody.clientHeight);
}

function syncFullscreenToggleButton() {
  const isWorks = activeSectionKey === "works";
  if (modalPrintOpenBtn) {
    modalPrintOpenBtn.hidden = !isWorks;
  }
}

function renderWorksPrintPages(groups) {
  return groups
    .map((group) => {
      const categoryMarkup = renderWorksCategories([group], true);
      return `
        <section class="print-page">
          <header class="print-page-head">TSK Works</header>
          <div class="print-page-body">${categoryMarkup}</div>
        </section>
      `;
    })
    .join("");
}

function openWorksPrintPage() {
  if (activeSectionKey !== "works") return;

  const markup = renderWorksPrintPages(worksCategoryGroups);
  const payload = {
    stamp: Date.now(),
    markup,
  };

  try {
    window.sessionStorage.setItem("tskWorksPrintPayload", JSON.stringify(payload));
  } catch (_error) {
    alert("인쇄 데이터를 준비하지 못했습니다. 다시 시도해주세요.");
    return;
  }

  const url = new URL("works-print.html", window.location.href);
  url.searchParams.set("stamp", String(payload.stamp));
  const printWindow = window.open(url.toString(), "_blank");
  if (!printWindow) {
    alert("팝업이 차단되었습니다. 팝업 허용 후 다시 시도해주세요.");
  }
}

function openModal(sectionKey) {
  const section = sections[sectionKey];
  if (!section) return;

  activeSectionKey = sectionKey;
  modalTitle.textContent = section.title;
  if (sectionKey === "works") {
    modalBody.innerHTML = renderWorksCategories(worksCategoryGroups, false);
  } else if (section.type === "discography") {
    modalBody.innerHTML = renderDiscography(section.groups);
  } else {
    const showThumbnails = sectionKey !== "compilation";
    modalBody.innerHTML = renderTimeline(section.groups, showThumbnails);
  }
  resetModalScroll();
  overlay.classList.toggle("is-works-section", sectionKey === "works");
  overlay.hidden = false;
  document.body.style.overflow = "hidden";
  document.body.classList.add("modal-open");
  setActiveButton(sectionKey);
  syncFullscreenToggleButton();
  requestAnimationFrame(() => {
    resetModalScroll();
    syncModalScrollbar();
  });
}

function closeModal() {
  resetModalScroll();
  overlay.hidden = true;
  overlay.classList.remove("is-works-section");
  document.body.style.overflow = "";
  document.body.classList.remove("modal-open");
  setActiveButton("");
  modalScrollbar.hidden = true;
  activeSectionKey = "";
  syncFullscreenToggleButton();
}

menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openModal(button.dataset.section);
  });
});

if (modalPrintOpenBtn) {
  modalPrintOpenBtn.addEventListener("click", openWorksPrintPage);
}

closeBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);
modalBody.addEventListener("scroll", syncModalScrollbar);
window.addEventListener("resize", syncModalScrollbar);

modalScrollbarThumb.addEventListener("pointerdown", (event) => {
  if (modalScrollbar.hidden) return;
  draggingScrollbarThumb = true;
  dragOffsetY = event.clientY - modalScrollbarThumb.getBoundingClientRect().top;
  modalScrollbarThumb.setPointerCapture(event.pointerId);
  event.preventDefault();
});

modalScrollbarThumb.addEventListener("pointermove", (event) => {
  if (!draggingScrollbarThumb) return;
  const trackTop = modalScrollbar.getBoundingClientRect().top;
  setScrollFromThumbPosition(event.clientY - trackTop - dragOffsetY);
});

modalScrollbarThumb.addEventListener("pointerup", (event) => {
  draggingScrollbarThumb = false;
  if (modalScrollbarThumb.hasPointerCapture(event.pointerId)) {
    modalScrollbarThumb.releasePointerCapture(event.pointerId);
  }
});

modalScrollbarThumb.addEventListener("pointercancel", () => {
  draggingScrollbarThumb = false;
});

modalScrollbar.addEventListener("pointerdown", (event) => {
  if (event.target === modalScrollbarThumb || modalScrollbar.hidden) return;
  const trackTop = modalScrollbar.getBoundingClientRect().top;
  setScrollFromThumbPosition(event.clientY - trackTop - scrollbarThumbHeight / 2);
  syncModalScrollbar();
});

if (window.ResizeObserver) {
  const modalBodyResizeObserver = new ResizeObserver(syncModalScrollbar);
  modalBodyResizeObserver.observe(modalBody);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !overlay.hidden) {
    closeModal();
  }
});
