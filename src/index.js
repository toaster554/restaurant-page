import { generateNavbar, generateFooter } from './common.js';
import generateHomepage from './home.js';
import generateFoodPage from './food.js';
import generateDrinksPage from './drinks.js';

let content = document.querySelector('#content');
content.appendChild(generateNavbar());
content.appendChild(generateHomepage());
content.appendChild(generateFooter());

const switchPage = (navId) => {
    let targetPage;

    if (navId === 'nav-home') {
        targetPage = generateHomepage();
    } else if (navId == 'nav-food') {
        targetPage = generateFoodPage();
    } else {
        targetPage = generateDrinksPage();
    }

    content.replaceChild(targetPage, content.childNodes[1]);
}

let navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => switchPage(navLink.id));
});