import recipes from "./recipes.mjs";

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getRandomRecipe() {
  return recipes[getRandomNumber(recipes.length)];
}

function tagsTemplate(tags) {
  return tags.map(tag => `<span class="tag">${tag}</span>`).join('');
}

function ratingTemplate(rating) {
  let html = `
    <span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">
  `;
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += '<span aria-hidden="true" class="icon-star">⭐</span>';
    } else {
      html += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
    }
  }
  html += "</span>";
  return html;
}

function recipeTemplate(recipe) {
  return `
    <div class="recipe">
      <img src="${recipe.image}" alt="image of ${recipe.name}" />
      <div class="recipe-info">
        <div class="tags-box">
          ${tagsTemplate(recipe.tags)}
        </div>
        <h2>${recipe.name}</h2>
        <div class="rating">
          ${ratingTemplate(recipe.rating)}
        </div>
        <p>${recipe.description}</p>
      </div>
    </div>
  `;
}

function renderRecipes(recipeList) {
  const recipesContainer = document.querySelector(".recipes");
  recipesContainer.innerHTML = recipeList.map(recipeTemplate).join("");
}

function init() {
  const recipe = getRandomRecipe();
  renderRecipes([recipe]);
}

init();

function filterRecipes(query) {
  const lowerCaseQuery = query.toLowerCase();
  return recipes
    .filter((recipe) => {
      return (
        recipe.name.toLowerCase().includes(lowerCaseQuery) ||
        recipe.description.toLowerCase().includes(lowerCaseQuery) ||
        recipe.tags.some((tag) => tag.toLowerCase().includes(lowerCaseQuery)) ||
        recipe.recipeIngredient.some((ingredient) =>
          ingredient.toLowerCase().includes(lowerCaseQuery)
        )
      );
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

document.querySelector(".search-form button").addEventListener("click", function (event) {
  event.preventDefault();
  const query = document.querySelector(".search-form input").value;
  const filteredRecipes = filterRecipes(query);
  renderRecipes(filteredRecipes);
});
