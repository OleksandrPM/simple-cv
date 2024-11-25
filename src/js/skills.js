import {
  techSkills,
  softSkills,
  languageSkills,
} from "../content/skillsContent.json";
import sprite from "../images/sprite.svg";

export function renderSkills(currentLanguage) {
  document.querySelectorAll(".tech-skills_container").forEach((el) => {
    const { sectionTitle, skills } = techSkills[currentLanguage];

    el.querySelector(".section-title").textContent = sectionTitle;
    el.querySelector(".skills-list").innerHTML = buildSkillsListHTML(skills);
  });

  document.querySelectorAll(".soft-skills_container").forEach((el) => {
    const { sectionTitle, skills } = softSkills[currentLanguage];

    el.querySelector(".section-title").textContent = sectionTitle;
    el.querySelector(".skills-list").innerHTML = buildSkillsListHTML(skills);
  });

  document.querySelectorAll(".languages_container").forEach((el) => {
    const { sectionTitle, languages } = languageSkills[currentLanguage];

    el.querySelector(".section-title").textContent = sectionTitle;
    el.querySelector(".skills-list").innerHTML =
      buildLanguagesListHTML(languages);
  });
}

function buildSkillsListHTML(skills) {
  return skills.map((skill) => `<li><p>${skill}</p></li>`).join("");
}

function buildLanguagesListHTML(languages) {
  return languages
    .map(
      (language) => `<li>
                      <svg>
                        <use href="${sprite + "#" + language.id}"></use>
                      </svg>
                      <p>${language.language} - ${language.level}</p>
                    </li>`
    )
    .join("");
}
