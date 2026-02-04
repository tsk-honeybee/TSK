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
    type: "timeline",
    groups: [
      {
        year: "2022",
        items: ["TSK x DrAquinas - ==달가림 (Lunar Eclipse)=="],
      },
    ],
  },
};

const youtubeLinks = {
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
  "aiobahn 2nd ep all connected - ==resonance ft. KOCHO (TSK Remix)==":
    "https://www.youtube.com/watch?v=Z-VzHs2VFeU",
  "Blue Archive - ==Blue Archive Original Soundtrack Vol.1== / © 2022 Nexon Games Co., Ltd.":
    "",
  "シュガーリリック - ==Back to the Masquerade== (Vocal Engineering) / © 2022 774inc.":
    "https://www.youtube.com/watch?v=ZKQNG-Grck4",
  "メイビーME - ==めびみ☆== (Vocal Engineering)": "https://youtu.be/1Gtwh_sPTXs?si=dwcMTD8HktYfLTeg",
  'MEGAREX "SPD GAR 004" - ==Lov3 Me!==': "https://www.youtube.com/watch?v=bRXzgf7Vjn4",
  'MARIGAN "Current-Voltage" - ==ロボットの歌 (feat. 夏色花梨)==': "https://www.youtube.com/watch?v=sAmdAVmIK_w",
  'MARIGAN "Current-Voltage" - ==Above==': "https://www.youtube.com/watch?v=9u6BpG2U8zY",
  'TERRAGAZER "TERRA\'N\'BASS" - ==Keep On==': "https://www.youtube.com/watch?v=ax8ib62juGM",
  'TERRAGAZER "TERRA-FORMING 2" - ==No Matter==': "https://www.youtube.com/watch?v=lqnhxe0rdAo",
  "TSK x DrAquinas - ==달가림 (Lunar Eclipse)==": "https://www.youtube.com/watch?v=cDpczuv4wbg",
};

const overlay = document.getElementById("modal-overlay");
const backdrop = document.getElementById("overlay-backdrop");
const closeBtn = document.getElementById("modal-close");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const menuButtons = Array.from(document.querySelectorAll(".menu-btn"));

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

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

function renderTimeline(groups) {
  return `
    <div class="timeline">
      ${groups
        .map(
          ({ year, items }) => `
            <article class="year-group">
              <h3>${escapeHtml(year)}</h3>
              <ul>
                ${items
                  .map((item) => {
                    const href = youtubeLinks[item];
                    const content = renderItemText(item);
                    if (!href) return `<li>${content}</li>`;
                    return `<li><a class="track-link" href="${escapeHtml(
                      href
                    )}" target="_blank" rel="noreferrer">${content}</a></li>`;
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

function setActiveButton(sectionKey) {
  menuButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.section === sectionKey);
  });
}

function openModal(sectionKey) {
  const section = sections[sectionKey];
  if (!section) return;

  modalTitle.textContent = section.title;
  modalBody.innerHTML = renderTimeline(section.groups);
  overlay.hidden = false;
  document.body.style.overflow = "hidden";
  setActiveButton(sectionKey);
}

function closeModal() {
  overlay.hidden = true;
  document.body.style.overflow = "";
  setActiveButton("");
}

menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openModal(button.dataset.section);
  });
});

closeBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !overlay.hidden) {
    closeModal();
  }
});
