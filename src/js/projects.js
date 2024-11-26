import projectsContent from "../content/projectsContent.json";

const {
  sectionTitle,
  roleTitle,
  livepageTitle,
  codeTitle,
  frontendCodeTitle,
  backendCodeTitle,
  projects,
} = projectsContent;

const sectionEl = document.querySelector(".projects");
const titleEl = sectionEl.querySelector(".section-title");
const listEl = sectionEl.querySelector(".project-list");

export function renderProjects(language) {
  titleEl.textContent = sectionTitle[language];
  listEl.innerHTML = `${buildProjectListHTML(projects, language)}`;
}

function buildProjectListHTML(projects, language) {
  return `${projects
    .map((project) => {
      return `<li class="project-item">${buildProjectHTML(
        project,
        language
      )}</li>`;
    })
    .join("")}`;
}

function buildProjectHTML(project, language) {
  const { name, links, techstack, description, role } = project;

  return `<article class="project-article">
            <h3 class="project-name">${name}
              <span class="project-stack">[${techstack.join(", ")}]</span>
            </h3>                 
            <p class="project-description">${description[language]}</p>
            <p class="project-role">
              <span class="emphasis">${roleTitle[language]}: </span>${
    role[language]
  }
            </p>
            <ul class="project-links">
              ${buildLinkListHTML(links, language)}
            </ul>
          </article>`;
}

function buildLinkListHTML(links, language) {
  let listHTML = "";

  for (let prop in links) {
    listHTML += `<li class="project-links_item">
                  <span class="emphasis">${getLinkTitle(
                    prop,
                    language
                  )}: </span>
                  <a
                    href="${links[prop]}"
                    class="project-link touchable"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="follow the link"
                    >${links[prop]}
                  </a>                  
                </li>`;
  }

  return listHTML;
}

function getLinkTitle(prop, language) {
  switch (prop) {
    case "livepage":
      return livepageTitle[language];
    case "code":
      return codeTitle[language];
    case "code-frontend":
      return frontendCodeTitle[language];
    case "code-backend":
      return backendCodeTitle[language];

    default:
      return "link";
  }
}
