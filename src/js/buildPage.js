import { renderContacts } from "./contacts";
import { setHeroContent } from "./hero";
import {
  currentLanguage,
  openLangPickerListener,
  setCurrentOption,
} from "./setLanguage";
import { renderSkills } from "./skills";

// Set document`s lang attribute
document.documentElement.lang = currentLanguage;

// Set languages picker`s current language
setCurrentOption(currentLanguage);

buildPage(currentLanguage);

openLangPickerListener(buildPage);

export function buildPage(currentLanguage) {
  setHeroContent(currentLanguage);
  renderContacts(currentLanguage);
  renderSkills(currentLanguage);
}
