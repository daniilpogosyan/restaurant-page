import {createHeader, createFooter, createContent} from "./base";
import {createHero, createHomeInfo} from "./home";

const header = createHeader();
const content = createContent();
const footer = createFooter();

document.body.append(header, content, footer)

content.appendChild(createHero());
content.appendChild(createHomeInfo());