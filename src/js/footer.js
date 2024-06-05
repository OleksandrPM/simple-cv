import { linkedin } from "../content/contacts.json";
import image from "../images/black-cat.ico";

document
  .querySelector(".footer_container")
  .insertAdjacentHTML("beforeend", buildFooterHTML(linkedin, image));

function buildFooterHTML(URL, image) {
  return `<img class="footer_image" src="${image}" alt="black cat">
      <p class="footer_content">
        Created by
        <a
          href="${URL}"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          >OleksPM</a
        >
      </p>
      <p class="footer_year">${new Date().getFullYear()}</p>`;
}
