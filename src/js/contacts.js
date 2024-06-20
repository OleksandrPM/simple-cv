import contacts from "../content/contacts.json";
import sprite from "../images/sprite.svg";

document.querySelectorAll(".contacts_container").forEach((el) => {
  el.insertAdjacentHTML("beforeend", buildContactsHTML(contacts));
});

function buildContactsHTML(contacts) {
  const {
    phone,
    email,
    github,
    linkedin,
    address: { city, region, state },
  } = contacts;

  return `<address class="address">
            <a 
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
    </address>
            `;
}
