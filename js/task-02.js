const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ul = [...ingredients].map(element => {
  const liElement = document.createElement('li');
  liElement.classList.add('item');
  liElement.textContent = element;
  return liElement;
});

const ulIngredients = document.querySelector('#ingredients');
ulIngredients.append(...ul);
console.log(ulIngredients);
