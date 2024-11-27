import {
  sectionTitle,
  employerTitle,
  positionTitle,
  periodTitle,
  works,
} from "../content/workContent.json";

const sectionEl = document.querySelector(".work");
const titleEl = sectionEl.querySelector(".section-title");
const listEl = sectionEl.querySelector(".work-list");

export function renderWork(language) {
  titleEl.textContent = sectionTitle[language];
  listEl.innerHTML = buildWorkListHTML(works[language], language);
}

function buildWorkListHTML(works, language) {
  return `${works
    .map((workItem) => {
      return `<li class="work-item">${buildWorkItemHTML(
        workItem,
        language
      )}</li>`;
    })
    .join("")}`;
}

function buildWorkItemHTML(workItem, language) {
  const { employer, startTime, endTime, position, description } = workItem;

  return `<article class="work-article">
            <h3 class="work-position">${positionTitle[language]}: ${position}</h3>  
            <p>${employerTitle[language]}: <span class="work-employer">${employer}</span></p>         
            <p>${periodTitle[language]}: ${startTime} - ${endTime}</p>
            <p>${description}</p>            
          </article>`;
}
