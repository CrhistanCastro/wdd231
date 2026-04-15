export function mealCard(filterMeals) {
  document.querySelector(".img-grid").innerHTML = "";
  filterMeals.forEach(meal => {
    let card = document.createElement("div");
    let name = document.createElement("h3");
    let ingredients = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = meal.mealName;
    ingredients.innerHTML = `<span class="label">Description: </span>${meal.ingredients}`;
    img.setAttribute("src", meal.imageUrl);
    img.setAttribute("alt", `${meal.mealName}`);
    img.setAttribute("loading", "lazy");
    img.width = 400;
    img.height = 300;
        
    card.appendChild(name);
    card.appendChild(ingredients);
    card.appendChild(img);

    document.querySelector(".img-grid").appendChild(card);
  });
}