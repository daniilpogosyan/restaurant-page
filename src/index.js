import {createHeader, createFooter, createMain} from "./base";
import {createHero, createHomeInfo} from "./home";
const content = document.getElementById('content');

const header = createHeader();
content.appendChild(header)

const main = createMain();
content.appendChild(main)

const footer = createFooter();
content.appendChild(footer)

main.appendChild(createHero());
main.appendChild(createHomeInfo());