const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const ingredientsList = ingredients.map((ingredient) => {
  const liElement = document.createElement("li");

  liElement.classList = "item";
  liElement.textContent = ingredient;

  return liElement;
});

console.log(ingredientsList);
ingredientsEl.append(...ingredientsList);
