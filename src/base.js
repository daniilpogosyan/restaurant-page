// Set of function that create base element of the website
// such as header, footer etc


import './base.css'


function createHeader() {
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

    const liWrap = document.createElement('li')
    liWrap.appendChild(tabContent);

    return liWrap;
  }

  const tabs = document.createElement('ul');
  tabs.appendChild(createTab('Home'));
  tabs.appendChild(createTab('Menu'));
  tabs.appendChild(createTab('About us'));

  return tabs;
}


export {createHeader};
