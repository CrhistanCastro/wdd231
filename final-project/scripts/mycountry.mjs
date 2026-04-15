import { mealCard } from "./meals.mjs";

const url = "./data/meals.json"

async function getMealsData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data);
  mealCard(data.meals);
}

getMealsData();

const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

const currentYear = new Date().getFullYear();

const yearSpan = document.getElementById('currentyear');
if (yearSpan) {
    yearSpan.textContent = `© ${currentYear}`;
}

const lastMod = document.getElementById('lastModified');
if (lastMod) {
    lastMod.textContent = `Last modified: ${document.lastModified}`;
}
