import projects from "../content/projects.json";

document.querySelector(".project-list").innerHTML = `${buildProjectListHTML(
  projects
)}`;

function buildProjectListHTML(projects) {
  return `${projects
    .map((project) => {
      return `<li class="project-item">${buildProjectHTML(project)}</li>`;
    })
    .join("")}`;
}

function buildProjectHTML(project) {
  const { name, links, techstack, description, role } = project;

  return `<article class="project-article">
            <h3 class="project-name">${name}
              <span class="project-stack">[${techstack.join(", ")}]</span>
            </h3>                 
            <p class="project-description">${description}</p>
            <p class="project-role">
              <span class="emphasis">Role: </span>${role}
            </p>
            <ul class="project-links"><span class="emphasis">Links:</span>${buildLinkListHTML(
              links
            )}</ul>
          </article>`;
}

function buildLinkListHTML(links) {
  let listHTML = "";

  for (let prop in links) {
    listHTML += `<li class="project-links_item">
                  <p class="link-name">${prop}: 
                    <a
                    href="${links[prop]}"
                    class="project-link touchable"
                    target="_blank"
                    rel="noopener noreferrer"
                    >${links[prop]}
                    </a>
                  </p>
                  
                </li>`;
  }

  return listHTML;
}
