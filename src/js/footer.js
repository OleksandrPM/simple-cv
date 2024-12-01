import { contacts } from "../content/contactsContent.json";

export function renderFooter() {
  document.querySelector(".footer_content").innerHTML = buildFooterHTML();
}

function buildFooterHTML() {
  return `<p class="footer_copyright">&copy</p>
          <p class="footer_year">
            ${new Date().getFullYear().toString()}
          </p>
          <a
            href="${contacts.linkedin}"
            class="footer_link touchable"
            target="_blank"
            rel="noopener noreferrer"
            title="See my LinkedIn page"
            >OleksPM
          </a>
        `;
}
