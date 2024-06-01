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

  return `<article class="workItem">
            <h3 class="work-position">${position}</h3>           
            <p class="work-description">
                <span class="work-employer">${employer}</span>  |  
                <span class="work-period">${startTime} - ${endTime}</span><br />
                <span>${description}</span>
            </p>            
          </article>`;
}
