const languages = ["en", "cs", "uk"];
const defaultLanguage = "en";

export let currentLanguage = getInitialLanguage();

const pickerEl = document.querySelector("#language-picker-select");
const optionEls = pickerEl.querySelectorAll("option");

export function openLangPickerListener(buildPageFoo) {
  pickerEl.addEventListener("change", (event) => {
    const selectedLang = event.target.value;

    if (selectedLang) {
      if (languages.includes(selectedLang)) {
        setCurrentOption(selectedLang);
        currentLanguage = selectedLang;
        buildPageFoo(currentLanguage);
      } else {
        alert(`Language is not supported`);
      }
    }
  });
}

export function setCurrentOption(language) {
  optionEls.forEach((option) => {
    if (option.lang === language) {
      option.setAttribute("selected", "");
    }
  });
}

function getInitialLanguage() {
  const browserLanguage = navigator.language;

  if (browserLanguage) {
    const languageIndex = languages.findIndex((lang) => {
      return browserLanguage.includes(lang);
    });

    if (languageIndex !== -1) {
      return languages[languageIndex];
    } else {
      return defaultLanguage;
    }
  } else {
    return defaultLanguage;
  }
}
