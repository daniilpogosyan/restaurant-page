import './home.css';
import heroImg from './hero_icecream.svg';


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