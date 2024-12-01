const mainEl = document.querySelector("main");

export function setSectionsIds() {
  let sectionsIds = [];

  for (const child of mainEl.children) {
    const id = child.classList[0];

    if (id !== "sidebar") {
      child.setAttribute("id", id);
      sectionsIds.push(id);
    }
  }
  return sectionsIds;
}
