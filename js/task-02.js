const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElement = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
  const liElement = document.createElement('li');

  liElement.textContent = ingredient;
  liElement.classList = 'item';
  ulElement.appendChild(liElement);
  console.log(liElement);
}
