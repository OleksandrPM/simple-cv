import content from "../content/contactsContent.json";
import sprite from "../images/sprite.svg";

export function renderContacts(currentLanguage) {
  const { sectionTitle, contacts } = content;

  document.querySelectorAll(".contacts_container").forEach((el) => {
    el.querySelector(".section-title").textContent =
      sectionTitle[currentLanguage];
    el.querySelector(".address").innerHTML = buildContactsHTML(
      contacts,
      currentLanguage
    );
  });
}

function buildContactsHTML(contacts, currentLanguage) {
  const { phone, email, github, linkedin, address } = contacts;
  const { city, region, state } = address[currentLanguage];

  return `<a
            href="tel:${phone}"
            class="contacts-link contacts-phone touchable"
            title="Call me"
          >
            <svg>
               <use href="${sprite + "#phone"}"></use>
            </svg>
            ${phone.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
          </a>
          <a
            href="mailto:${email}"
            class="contacts-link contacts-email touchable"
            title="Write me"
          >
            <svg>
              <use href="${sprite + "#envelop"}"></use>
            </svg>
            ${email}
          </a>
          <a
            href="${github}"
            class="contacts-link contacts-github touchable"
            target="_blank"
            rel="noopener noreferrer"
            title="See my GitHub page"
          >
            <svg>
              <use href="${sprite + "#github"}"></use>
            </svg>
            GitHub
          </a>
          <a
            href="${linkedin}"
            class="contacts-link contacts-linkedin touchable"
            target="_blank"
            rel="noopener noreferrer"
            title="See my LinkedIn page"
          >
            <svg>
              <use href="${sprite + "#linkedin"}"></use>
            </svg>
            LinkedIn
          </a>
          <p class="contacts-address">
            <svg>
              <use href="${sprite + "#home"}"></use>
            </svg>
            ${city},<br/>${region},<br/>${state}
          </p>  
        `;
}
