import { name, surname, qualification, summary } from "../content/hero.json";
import photo from "../images/CV_photo.jpg";

document.querySelector(
  ".hero_container"
).innerHTML = `<div class="img-thumb hero_img-thumb">
      <img src="${photo}" alt="the photo of the CV owner" />
    </div>
    <p class="hero_qualification">${qualification}</p>
    <h1 class="hero_title">${name} ${surname}</h1>
    <article class="summary hero_summary">
      <h2 class="summary-title hero_section-title">Summary</h2>
      <p class="summary-text">${summary}</p>
    </article>`;
