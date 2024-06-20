import { techSkills, softSkills, languages } from "../content/skills.json";
import sprite from "../images/sprite.svg";

document.querySelectorAll(".tech-skills_container").forEach((el) => {
  el.insertAdjacentHTML("beforeend", buildSkillsListHTML(techSkills));
});

document.querySelectorAll(".soft-skills_container").forEach((el) => {
  el.insertAdjacentHTML("beforeend", buildSkillsListHTML(softSkills));
});

document.querySelectorAll(".languages_container").forEach((el) => {
  el.insertAdjacentHTML("beforeend", buildLanguagesListHTML(languages));
});

function buildSkillsListHTML(skills) {
  return `<ul class="skills-list marked-list">${skills
    .map((skill) => `<li><p>${skill}</p></li>`)
    .join("")}</ul>`;
}

function buildLanguagesListHTML(languages) {
  return `<ul class="skills-list languages">${languages
    .map(
      (language) => `<li>
                      <svg>
                        <use href="${sprite + "#" + language.id}"></use>
                      </svg>
                      <p>${language.language} - ${language.level}</p>
                    </li>`
    )
    .join("")}</ul>`;
}
