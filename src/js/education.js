import education from "../content/education.json";
import sprite from "../images/sprite.svg";

const educationListEl = document.querySelector(".education-list");

educationListEl.innerHTML = `${buildEducationListHTML(education)}`;

const showDiplomaBtnEls = educationListEl.querySelectorAll(".showDiploma-btn");

showDiplomaBtnEls.forEach((btn) => {
  btn.addEventListener("click", onBtnClick);
});

function buildEducationListHTML(education) {
  return `${education
    .map((school) => {
      return `<li class="education-item">${buildEducationItemHTML(
        school
      )}</li>`;
    })
    .join("")}`;
}

function buildEducationItemHTML(school) {
  const { id, schoolName, startTime, endTime, qualification } = school;

  return `<article class="education-article">
            <h3 class="school-name">${schoolName}</h3> 
            <p class="education-period">Period: ${startTime} - ${endTime}</p>          
            <p class="education-qualification">${qualification}</p>   
            <button class="showDiploma-btn touchable" type="button" data-id="${id}" title="open document">
              <svg>
                <use href="${sprite + "#icon-pdf"}"></use>
              </svg>
            </button>         
          </article>`;
}

function onBtnClick(event) {
  const btnId = event.target.dataset.id;
  const link = education.find((school) => school.id === btnId).diplomaLink;

  window.open(link, "_blank");
}
