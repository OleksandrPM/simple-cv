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

  return `<article class="project">
            <h3 class="project-name">${name}
              <span class="project-stack">[${techstack.join(", ")}]</span>
            </h3>
            <h4 >Links:</h4>
            <ul class="project-links">${buildLinkListHTML(links)}</ul>
            <p class="project-description">${description}</p>
            <p class="project-role">
              <span class="project-role_title">Role: </span>${role}
            </p>
          </article>`;
}

function buildLinkListHTML(links) {
  let listHTML = "";

  for (let prop in links) {
    listHTML += `<li class="project-links_item">
                  <p class="link-name">${prop}</p>
                  <a
                    href="${links[prop]}"
                    class="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >${links[prop]}
                  </a>
                </li>`;
  }

  return listHTML;
}
