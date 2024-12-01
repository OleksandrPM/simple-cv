import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

import { switchNavLinkByClick } from "./navigation";

const mobMenuEl = document.querySelector(".mobile-menu");
const mobMenuBtnEl = mobMenuEl.querySelector(".menu-button");
const mobMenuNavEl = mobMenuEl.querySelector(".nav");

const openBtnTitle = "Close menu";
const closeBtnTitle = "Open menu";

mobMenuNavEl.classList.add("mobile-menu_nav", "scrolled");

mobMenuBtnEl.addEventListener("click", handleButtonClick);

function handleButtonClick() {
  mobMenuBtnEl.classList.toggle("open");

  if (mobMenuBtnEl.classList.contains("open")) {
    mobMenuBtnEl.setAttribute("title", openBtnTitle);
    mobMenuEl.classList.add("open");
    disableBodyScroll(mobMenuNavEl);
    document.addEventListener("click", handleDocumentClick);
  } else {
    mobMenuBtnEl.setAttribute("title", closeBtnTitle);
    mobMenuEl.classList.remove("open");
    enableBodyScroll(mobMenuNavEl);
    document.removeEventListener("click", handleDocumentClick);
  }
}

function handleDocumentClick(event) {
  switchNavLinkByClick(event.target);

  if (!mobMenuEl.contains(event.target) || event.target.tagName === "A") {
    mobMenuBtnEl.classList.toggle("open");
    mobMenuBtnEl.setAttribute("title", closeBtnTitle);
    mobMenuEl.classList.remove("open");
    enableBodyScroll(mobMenuNavEl);
    document.removeEventListener("click", handleDocumentClick);
  }
}
