import {
  currentLanguage,
  openLangPickerListener,
  setCurrentOption,
} from "./setLanguage";
import { setHeroContent } from "./hero";
import { renderContacts } from "./contacts";
import { renderSkills } from "./skills";
import { renderProjects } from "./projects";
import { renderWork } from "./work";

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
  renderProjects(currentLanguage);
  renderWork(currentLanguage);
}
