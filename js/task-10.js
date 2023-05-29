// Додаємо селектор на інпут
const inputSquares = document.querySelector('input');

// Додаємо селектор на кнопку додати
const createSquares = document.querySelector('[data-create]');

// Додаємо селектор на кнопку очистити
const destroySquares = document.querySelector('[data-destroy]');

// Додаємо селектор на загальний контейнер для квадратів
const aLotOfBoxes = document.querySelector('#boxes');

// Додаємо слухач подій на кнопку додати
createSquares.addEventListener('click', createSomeSquares);

// Додаємо слухач подій на кнопку очистити
destroySquares.addEventListener('click', destroyBoxes);

// Функція створення квадратів
function createSomeSquares() {
  let number = Number(inputSquares.value);

  const squaresArr = [];

  // Якщо введене число від 1 до 100 перебираємо введене число та створюємо окремі квадрати
  if (number >= inputSquares.attributes.min.value && number <= inputSquares.attributes.max.value) {
    for (let index = 1; index <= number; index++) {
      const item = document.createElement('div');
      item.style.width = `${30 + (index - 1) * 10}px`;
      item.style.height = `${30 + (index - 1) * 10}px`;
      item.style.backgroundColor = getRandomHexColor();
      squaresArr.push(item);
    }

    // Розпилюємо квадрати у загальний контейнер
    aLotOfBoxes.append(...squaresArr);
  }
  // Якщо введене число менше за 1 та більше за 100 виводимо алерт
  else {
    alert('Введи число від 1 до 100');
  }
}

function getRandomHexColor() {
  const color = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  return color;
}

// Функція очистки загального контейнера
function destroyBoxes() {
  inputSquares.value = '';
  aLotOfBoxes.innerHTML = '';
}
