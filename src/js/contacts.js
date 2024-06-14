import contacts from "../content/contacts.json";

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
                class="contacts-link contacts-phone"
                title="Call me"
                >${phone.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            </a>
            <a
                href="mailto:${email}" 
                class="contacts-link contacts-email"
                title="Write me"
                >${email}
            </a>
            <a
                href="${github}" 
                class="contacts-link contacts-github" 
                target="_blank" 
                rel="noopener noreferrer"
                title="See my GitHub page"
                >GitHub
            </a>
            <a
                href="${linkedin}" 
                class="contacts-link contacts-linkedin" 
                target="_blank" 
                rel="noopener noreferrer"
                title="See my LinkedIn page"
                >LinkedIn
            </a>
            <p class="contacts-address">${city}<br/>${region}<br/>${state}</p>
    </address>
            `;
}
