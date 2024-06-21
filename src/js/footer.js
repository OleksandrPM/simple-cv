import { linkedin } from "../content/contacts.json";
// import image from "../images/black-cat.ico";

document
  .querySelector(".footer_container")
  .insertAdjacentHTML("beforeend", buildFooterHTML(linkedin));

function buildFooterHTML(URL) {
  return `<div class="footer_content">
            <p class="footer_copyright">&copy</p>
            <p class="footer_year">
              ${new Date().getFullYear().toString()}
            </p>
            <a
              href="${URL}"
              class="footer_link touchable"
              target="_blank"
              rel="noopener noreferrer"
              title="See my LinkedIn page"
              >OleksPM
            </a>
        </div>`;
}
