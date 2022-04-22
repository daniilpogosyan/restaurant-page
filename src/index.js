import {createHeader, createFooter, createContent} from "./base";
import {createHero, createHomeInfo} from "./home";
import {createItem, createItemsList} from "./menu";
import {createContacts} from "./contactUs";


const content = (() => {
  const header = createHeader();
  const content = createContent();
  const footer = createFooter();

  document.body.append(header, content, footer);

  const clear = () => {
    content.innerHTML = "";
  }

  const build = {
    "home": () => {
      clear();
      content.appendChild(createHero());
      content.appendChild(createHomeInfo());
    },
    "menu": () => {
      clear();
      content.appendChild(createItemsList())
    },
    "contact-us": () => {
      clear();
      content.appendChild(createContacts());
    },
  };

  //start in home tab
  build["home"];

  // return {buildHomeBlock, buildMenuBlock, buildContactUsBlock};
  return {clear, build};
})();




// binding tab's event listeners
(() => {
  const tabs = [...document.getElementsByClassName('header__tab')];  

  tabs.forEach(tab => tab.addEventListener('click', (e) => {

    //update content
    content.build[e.target.dataset.builderName]();

    //highlight active tab
    tabs.forEach(tab => tab.classList.remove('header__tab--active'));
    e.target.classList.add('header__tab--active');
  }));
})();