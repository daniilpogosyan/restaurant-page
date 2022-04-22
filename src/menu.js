import './menu.css';

const itemsImages = require.context('./', false, /\.(jpg)|(jpeg)|(png)/);

export function createItemsList() {
  const list = document.createElement('ul');
  list.classList.add('menu-list');
  itemsImages.keys().map(itemsImages).forEach(img =>{
    console.log(img)
    let item = createItem('icecream', img);
    list.appendChild(item);
  })

  return list;
}

// Menu-items factory
export function createItem(name, img) {
  const item = document.createElement('li');
  item.classList.add('menu-list__item');

  const itemImage = new Image();
  itemImage.src = img;
  itemImage.classList.add('item__image')

  const itemName = document.createElement('h3');
  itemName.textContent = name.toUpperCase()
  itemName.classList.add('item__heading');

  item.append(itemName, itemImage);

  return item;
}