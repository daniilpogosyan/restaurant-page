import {createHeader, createFooter, createMain} from "./base";

const content = document.getElementById('content');
content.appendChild(createHeader())
content.appendChild(createMain())
content.appendChild(createFooter())