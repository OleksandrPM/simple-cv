import content from "../content//heroContent.json";

export function setHeroContent(language) {
  const currentContent = content[language];

  const { name, surname, qualification, summaryTitle, summary } =
    currentContent;

  const heroEl = document.querySelector(".hero_container");

  heroEl.querySelector(".hero_qualification").textContent = qualification;
  heroEl.querySelector(".hero_title").textContent = `${name} ${surname}`;
  heroEl.querySelector(".summary-title").textContent = summaryTitle;
  heroEl.querySelector(".summary-text").textContent = summary;
}
