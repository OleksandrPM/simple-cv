import { techSkills, softSkills, languages } from "../content/skills.json";

document
  .querySelector(".tech-skills_container")
  .insertAdjacentHTML("beforeend", buildSkillsListHTML(techSkills));

document
  .querySelector(".soft-skills_container")
  .insertAdjacentHTML("beforeend", buildSkillsListHTML(softSkills));

document
  .querySelector(".languages_container")
  .insertAdjacentHTML("beforeend", buildLanguagesListHTML(languages));

function buildSkillsListHTML(skills) {
  return `<ul class="skills-list">${skills
    .map((skill) => `<li><p>${skill}</p></li>`)
    .join("")}</ul>`;
}

function buildLanguagesListHTML(languages) {
  return `<ul class="skills-list">${languages
    .map(
      (language) => `<li><p>${language.language} - ${language.level}</p></li>`
    )
    .join("")}</ul>`;
}
