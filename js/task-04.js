let counter = document.querySelector('#value');

const addCounter = document.querySelector('[data-action="increment"]');

const removeCounter = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

addCounter.addEventListener('click', () => {
  counterValue += 1;
  counter.textContent = counterValue;
});

removeCounter.addEventListener('click', () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});
