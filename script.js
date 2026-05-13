const root = document.documentElement;
const buttons = document.querySelectorAll("[data-switch]");
const savedLang = (() => {
  try {
    return localStorage.getItem("resumeLang");
  } catch {
    return null;
  }
})();
const initialLang = savedLang || (navigator.language.toLowerCase().startsWith("ru") ? "ru" : "en");

function setLang(lang) {
  root.dataset.lang = lang;
  root.lang = lang;
  try {
    localStorage.setItem("resumeLang", lang);
  } catch {
    // Language switching still works when storage is unavailable.
  }

  buttons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.switch === lang));
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => setLang(button.dataset.switch));
});

setLang(initialLang);
