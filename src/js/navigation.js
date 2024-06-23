const navEls = document.querySelectorAll(".nav-list");
const sectionEls = document.querySelectorAll("section");

const linkClassName = "nav-link";
const activeLinkClassName = "active";

export function addNavItemHTML(sectionName) {
  navEls.forEach((nav) => {
    nav.insertAdjacentHTML(
      "beforeend",
      `<li class="nav-item">
          <a href="#${sectionName}" 
            class="nav-link ${sectionName === "hero" ? "active" : ""}" 
            data-id="${sectionName}">
            ${sectionName === "hero" ? "Home" : sectionName}
          </a>
      </li>`
    );
  });
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

  navEls.forEach((navEl) => {
    const navLinkEls = navEl.querySelectorAll(".nav-link");

    navLinkEls.forEach((navLinkEl) => {
      if (
        !navLinkEl.classList.contains(activeLinkClassName) &&
        navLinkEl.dataset.id === currentSectionId
      ) {
        navLinkEl.classList.add(activeLinkClassName);
      }
      if (navLinkEl.dataset.id !== currentSectionId) {
        navLinkEl.classList.remove(activeLinkClassName);
      }
    });
  });
}

export function switchCurrentNavLink(event) {
  const elClasses = event.target.classList;

  if (elClasses.contains(linkClassName)) {
    const currentLinkId = event.target.dataset.id;

    navEls.forEach((navEl) => {
      const navLinkEls = navEl.querySelectorAll(".nav-link");

      navLinkEls.forEach((navLinkEl) => {
        if (
          navLinkEl.dataset.id === currentLinkId &&
          !navLinkEl.classList.contains(activeLinkClassName)
        ) {
          navLinkEl.classList.add(activeLinkClassName);
        }
        if (
          navLinkEl.dataset.id !== currentLinkId &&
          navLinkEl.classList.contains(activeLinkClassName)
        ) {
          navLinkEl.classList.remove(activeLinkClassName);
        }
      });
    });
  }
}
