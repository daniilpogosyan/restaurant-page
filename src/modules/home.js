import '../styles/home.css';
import heroImg from '../assets/home/hero_icecream.svg';


export function createHero() {
  const hero = document.createElement('div');
  hero.classList.add('hero');

  const heroImage = new Image(500,500);
  heroImage.classList.add('hero__image')
  heroImage.src = heroImg;
  hero.appendChild(heroImage);

  const heroHeading = document.createElement('h1');
  heroHeading.classList.add('hero__heading')
  heroHeading.textContent = "Hot like hell out there, huh?";
  hero.appendChild(heroHeading);

  return hero;
}

export function createHomeInfo() {
  const aboutRestaurant = document.createElement('p');
  const aboutIcecream = document.createElement('p');
  const callToAction = document.createElement('p');

  aboutRestaurant.textContent = 'We are the best icecream restaurant EVER. And you know that. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et nulla at dui dictum aliquam. Aliquam ut ipsum mauris. Morbi augue nulla, tristique sit amet tempor ac, vestibulum in nisl. Maecenas hendrerit, purus et sollicitudin rutrum, justo ipsum gravida dolor, eu porta neque orci non orci. Morbi lobortis nisl eget mauris mattis, ac egestas augue bibendum. Praesent ipsum libero, dapibus volutpat dui a, tristique mattis tortor. Donec maximus risus a dolor malesuada consequat. Praesent non urna et velit placerat fermentum. Aenean ut urna eu neque pellentesque volutpat. Donec facilisis nibh ac nisl aliquam, in scelerisque neque porttitor. Morbi vitae condimentum odio, vitae iaculis magna. Morbi commodo dui ac eros mollis, nec rutrum elit congue. Etiam nec augue non nulla dictum posuere. Maecenas massa mi, dictum in vestibulum et, sagittis id lectus. Aliquam erat volutpat.';
  aboutIcecream.textContent = 'MMMMMILK is DELICIOUSSS.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et nulla at dui dictum aliquam. Aliquam ut ipsum mauris. Morbi augue nulla, tristique sit amet tempor ac, vestibulum in nisl. Maecenas hendrerit, purus et sollicitudin rutrum, justo ipsum gravida dolor, eu porta neque orci non orci. Morbi lobortis nisl eget mauris mattis, ac egestas augue bibendum. Praesent ipsum libero, dapibus volutpat dui a, tristique mattis tortor. Donec maximus risus a dolor malesuada consequat. Praesent non urna et velit placerat fermentum. Aenean ut urna eu neque pellentesque volutpat. Donec facilisis nibh ac nisl aliquam, in scelerisque neque porttitor. Morbi vitae condimentum odio, vitae iaculis magna. Morbi commodo dui ac eros mollis, nec rutrum elit congue. Etiam nec augue non nulla dictum posuere. Maecenas massa mi, dictum in vestibulum et, sagittis id lectus. Aliquam erat volutpat.';
  callToAction.textContent = 'So, what are you waiting for?';

  const homeInfo = document.createElement('article');
  homeInfo.append(aboutRestaurant, aboutIcecream, callToAction);
  
  return homeInfo;
}