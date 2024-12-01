import navTitles from "../content/navTitles.json";
import { setSectionsIds } from "./sectionsId";

const navEls = document.querySelectorAll(".nav-list");
const sectionEls = document.querySelectorAll("section");

const linkClassName = "nav-link";
const activeLinkClassName = "active";

export function renderNavigation(language) {
  const sectionsIds = setSectionsIds();

  navEls.forEach((navEl) => {
    navEl.innerHTML = buildNavListHTML(sectionsIds, language);
  });
}

function buildNavListHTML(sectionsIds, language) {
  return sectionsIds
    .map((id) => {
      return buildNavItemHTML(id, language);
    })
    .join("");
}

function buildNavItemHTML(sectionId, language) {
  return `<li class="nav-item">
            <a href="#${sectionId}" 
              class="nav-link touchable ${
                sectionId === "hero" ? "active" : ""
              }" 
              data-id="${sectionId}">
              ${navTitles[sectionId][language]}
            </a>
          </li>`;
}

export function switchNavLinkInScrolling() {
  let currentSectionId = "";

  sectionEls.forEach((sectionEl) => {
    if (sectionEl.getAttribute("id")) {
      if (scrollY >= sectionEl.offsetTop - 100) {
        currentSectionId = sectionEl.getAttribute("id");
      }
    }
  });

  switchCurrentNavLink(currentSectionId);
}

export function switchNavLinkByClick(DOMEl) {
  const elClasses = DOMEl.classList;

  if (elClasses.contains(linkClassName)) {
    const currentLinkId = DOMEl.dataset.id;

    switchCurrentNavLink(currentLinkId);
  }
}

function switchCurrentNavLink(currentId) {
  navEls.forEach((navEl) => {
    const navLinkEls = navEl.querySelectorAll(".nav-link");

    navLinkEls.forEach((navLinkEl) => {
      if (
        !navLinkEl.classList.contains(activeLinkClassName) &&
        navLinkEl.dataset.id === currentId
      ) {
        navLinkEl.classList.add(activeLinkClassName);
      }
      if (navLinkEl.dataset.id !== currentId) {
        navLinkEl.classList.remove(activeLinkClassName);
      }
    });
  });
}
