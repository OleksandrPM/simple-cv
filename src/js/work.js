import work from "../content/work.json";

document.querySelector(".work-list").innerHTML = `${buildWorkListHTML(work)}`;

function buildWorkListHTML(work) {
  return `${work
    .map((workItem) => {
      return `<li class="work-item">${buildWorkItemHTML(workItem)}</li>`;
    })
    .join("")}`;
}

function buildWorkItemHTML(workItem) {
  const { employer, startTime, endTime, position, description } = workItem;

  return `<article class="work-article">
            <h3 class="work-position">${position}
              <span class="non-emphasis"> at </span>
              <span class="work-employer">${employer}</span>
            </h3>           
            <p class="work-period">Period: ${startTime} - ${endTime}</p>
            <p class="work-description">${description}</p>            
          </article>`;
}
