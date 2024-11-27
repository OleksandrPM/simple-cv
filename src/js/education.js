import {
  sectionTitle,
  periodTitle,
  educations,
} from "../content/educationContent.json";
import sprite from "../images/sprite.svg";

const sectionEl = document.querySelector(".education");
const titleEl = sectionEl.querySelector(".section-title");
const listEl = sectionEl.querySelector(".education-list");

export function renderEducation(language) {
  titleEl.textContent = sectionTitle[language];
  listEl.innerHTML = buildEducationListHTML(educations[language], language);

  addListenersOnBtns(educations[language]);
}

function buildEducationListHTML(education, language) {
  return `${education
    .map((school) => {
      return `<li class="education-item">${buildEducationItemHTML(
        school,
        language
      )}</li>`;
    })
    .join("")}`;
}

function buildEducationItemHTML(school, language) {
  const { id, schoolName, startTime, endTime, qualification } = school;

  return `<article class="education-article">
            <h3 class="school-name">${schoolName}</h3> 
            <p class="education-period">${
              periodTitle[language]
            }: ${startTime} - ${endTime}</p>          
            <p class="education-qualification">${qualification}</p>   
            <button class="showDiploma-btn touchable" type="button" data-id="${id}" title="open document">
              <svg>
                <use href="${sprite + "#icon-pdf"}"></use>
              </svg>
            </button>         
          </article>`;
}

function addListenersOnBtns(educations) {
  const showDiplomaBtnEls = listEl.querySelectorAll(".showDiploma-btn");

  showDiplomaBtnEls.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      console.log(event);
      const btnId = event.target.dataset.id;

      const link = educations.find((school) => school.id === btnId).diplomaLink;

      window.open(link, "_blank");
    });
  });
}
