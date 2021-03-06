// Set of function that create base element of the website
// such as header, footer etc


import '../styles/base.css'


export function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const heading = document.createElement('h1');
  heading.textContent = 'Ice Age';
  heading.classList.add('heading');
  header.appendChild(heading);
  
  const tabs = createTabs();
  tabs.classList.add('tab-list')
  header.appendChild(tabs);
  return header;
}

function createTabs() {
  const createTab = (name) => {
    const tabContent = document.createElement('button');
    tabContent.textContent = name;
    tabContent.dataset.builderName = name.toLowerCase().replace(/\s+/g,'-');
    tabContent.classList.add('header__tab');

    const liWrap = document.createElement('li')
    liWrap.appendChild(tabContent);

    return liWrap;
  }

  const tabs = document.createElement('ul');
  tabs.appendChild(createTab('Home'));
  tabs.appendChild(createTab('Menu'));
  tabs.appendChild(createTab('Contact us'));

  return tabs;
}

export function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const copyright = document.createElement('p');
  copyright.textContent = 'Created by Thor';
  copyright.classList.add('copyright')

  footer.appendChild(copyright);
  
  return footer;
}

export function createContent() {
  const content = document.createElement('main');
  content.classList.add('content');
  content.id = 'content';
  
  return content;
}