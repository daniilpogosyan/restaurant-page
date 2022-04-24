import '../styles/contactUs.css';


const contactWays = {
  location: 'Middle of the nowhere',
  phone: '+1234567890',
  email: 'hithere@yourmail.com',
  clock: '8:00 - 22:00'
};

export function createContacts() {
  const createContact = (way) => {
    const contact = document.createElement('li');
    contact.classList.add('contact')

    const contactWay = document.createElement('h3');
    contactWay.classList.add('contact-way');
    contactWay.textContent = way;

    const contactInfo = document.createElement('p');
    contactInfo.textContent = contactWays[way];
    contactInfo.classList.add('contact-info');

    contact.append(contactWay, contactInfo);

    return contact;
  }

  const contacts = document.createElement('ul');
  contacts.classList.add('our-contacts')

  for (let way in contactWays) {
    contacts.appendChild(createContact(way))
  }

  return contacts;
}