const btnEn = document.querySelector(".english");
const btnHi = document.querySelector(".hindi");
const btnGu = document.querySelector(".gujrati");

const DEFAULT_LANG = "English";
const LANG_KEY = "selectedLanguage";

// translations come from assets/js/data.js, which must be loaded first
let translations = typeof translationsData !== "undefined" ? translationsData : {};

// set active button
function setActiveButton(activeBtn) {
  [btnEn, btnHi, btnGu].forEach((btn) => btn.classList.remove("active"));
  activeBtn.classList.add("active");
}

// set active current page
function setActivePage() {
  const pageLinks = document.querySelectorAll(".pages .page");
  const currentPage = window.location.pathname.split("/").pop();

  pageLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// apply language
function applyLanguage(lang) {
  const langData = translations[lang];
  if (!langData) return;

  document.documentElement.lang = lang;

  if (lang === "English") {
    document.body.setAttribute("data-lang", "en");
    setActiveButton(btnEn);
  } else if (lang === "Hindi") {
    document.body.setAttribute("data-lang", "hi");
    setActiveButton(btnHi);
  } else if (lang === "Gujarati") {
    document.body.setAttribute("data-lang", "gu");
    setActiveButton(btnGu);
  }

  document.querySelectorAll("[data-lang-key]").forEach((el) => {
    const key = el.getAttribute("data-lang-key");
    if (langData[key] !== undefined) {
      el.innerHTML = String(langData[key]).replace(/\n/g, "<br>");
    }
  });

  localStorage.setItem(LANG_KEY, lang);
}

/* ===== render topic points from data ===== */
// A topic page (topic-1.html, topic-2.html, topic-3.html) calls this with
// its own number before initializing its swipers. It builds the slide markup
// from topicPoints[topicNumber] (assets/js/data.js) instead of the page
// hardcoding each slide, so adding a point there — plus a matching
// assets/videos/<topic>-<id>.mp4 — is enough for it to render, no HTML edits.
function renderTopicPoints(topicNumber) {
  if (typeof topicPoints === "undefined") return;
  const points = topicPoints[topicNumber];
  if (!points || !points.length) return;

  const langField = { English: "english", Hindi: "hindi", Gujarati: "guj" };

  Object.keys(langField).forEach((lang) => {
    const field = langField[lang];
    const subField = "sub" + field[0].toUpperCase() + field.slice(1);
    translations[lang] = translations[lang] || {};

    points.forEach((point) => {
      translations[lang][`slide-${topicNumber}.${point.id}`] = point[field] ?? "";
      if (point[subField] !== undefined) {
        translations[lang][`sub-point-${topicNumber}.${point.id}`] = point[subField];
      }
    });
  });

  const textWrapper = document.querySelector(".text-swiper .swiper-wrapper");
  const videoWrapper = document.querySelector(".video-swiper .swiper-wrapper");
  if (!textWrapper || !videoWrapper) return;

  textWrapper.innerHTML = points
    .map((point) => {
      const slideKey = `slide-${topicNumber}.${point.id}`;
      const subKey = `sub-point-${topicNumber}.${point.id}`;
      const hasSub = point.subEnglish !== undefined;
      return (
        `<div class="swiper-slide">` +
        `<div class="slide-text" data-lang-key="${slideKey}"></div>` +
        (hasSub ? `<div class="sub-text" data-lang-key="${subKey}"></div>` : "") +
        `</div>`
      );
    })
    .join("");

  videoWrapper.innerHTML = points
    .map(
      (point) =>
        `<div class="swiper-slide">` +
        `<video muted playsinline loop preload="metadata">` +
        `<source src="./assets/videos/${topicNumber}-${point.id}.mp4" type="video/mp4" />` +
        `</video>` +
        `</div>`,
    )
    .join("");
}

/* ===== click sound effects ===== */

const AUDIO_PATH = "./assets/audio/";
const homeClickSound = new Audio(`${AUDIO_PATH}pop.mp3`);
const swiperClickSound = new Audio(`${AUDIO_PATH}swiper.mp3`);
const topicClickSound = new Audio(`${AUDIO_PATH}topic.mp3`);
const dropClickSound = new Audio(`${AUDIO_PATH}click.mp3`);
const langClickSounds = {
  English: new Audio(`${AUDIO_PATH}Eng.mpeg`),
  Hindi: new Audio(`${AUDIO_PATH}Hin.mpeg`),
  Gujarati: new Audio(`${AUDIO_PATH}Guj.mpeg`),
};

[
  homeClickSound,
  swiperClickSound,
  topicClickSound,
  dropClickSound,
  ...Object.values(langClickSounds),
].forEach((audio) => {
  audio.preload = "auto";
});

function playSound(audio) {
  audio.currentTime = 0;
  audio.play().catch(() => {});
}

// play a sound, then follow the link once it finishes or this cap is hit
function navigateWithSound(link, audio, maxWait) {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (!href) return;

    e.preventDefault();

    let navigated = false;
    const go = () => {
      if (navigated) return;
      navigated = true;
      window.location.href = href;
    };

    audio.currentTime = 0;
    audio.addEventListener("ended", go, { once: true });

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(go);
    }

    setTimeout(go, maxWait);
  });
}

function wireClickSounds() {
  document.querySelectorAll(".swiper-ctrl-next, .swiper-ctrl-prev").forEach((btn) => {
    btn.addEventListener("click", () => playSound(swiperClickSound));
  });

  document.querySelectorAll(".home-btn").forEach((link) => {
    navigateWithSound(link, homeClickSound, 600);
  });

  document.querySelectorAll(".topics .topic, .pages .page").forEach((link) => {
    navigateWithSound(link, topicClickSound, 2200);
  });

  document.querySelectorAll(".drop").forEach((link) => {
    navigateWithSound(link, dropClickSound, 600);
  });
}

// restore the previously selected language on page load
window.addEventListener("DOMContentLoaded", () => {
  setActivePage();
  wireClickSounds();

  if (!Object.keys(translations).length) {
    console.error("Translations not loaded: include assets/js/data.js before app.js");
    return;
  }

  const savedLang = localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
  applyLanguage(savedLang);
});

// button clicks
btnEn.addEventListener("click", () => {
  playSound(langClickSounds.English);
  applyLanguage("English");
});
btnHi.addEventListener("click", () => {
  playSound(langClickSounds.Hindi);
  applyLanguage("Hindi");
});
btnGu.addEventListener("click", () => {
  playSound(langClickSounds.Gujarati);
  applyLanguage("Gujarati");
});