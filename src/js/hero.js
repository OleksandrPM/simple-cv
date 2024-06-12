import { name, surname, qualification, summary } from "../content/hero.json";

document.querySelector(".hero_container").insertAdjacentHTML(
  "beforeend",
  `<p class="hero_qualification">${qualification}</p>
    <h1 class="hero_title">${name} ${surname}</h1>
    <article class="summary hero_summary">
      <h2 class="summary-title ">Summary</h2>
      <p class="summary-text">${summary}</p>
    </article>`
);
