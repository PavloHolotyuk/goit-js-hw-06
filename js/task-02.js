const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientElement = document.querySelector(`#ingredients`);
const ingredientsList = [];

ingredients.forEach((el) => {
  const ingredienstItem = document.createElement("li");
  ingredienstItem.classList.add("item");
  ingredienstItem.textContent = el;
  ingredientsList.push(ingredienstItem);
});

ingredientElement.append(...ingredientsList);
