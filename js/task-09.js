const bodyForColor = document.querySelector('body');

const button = document.querySelector('.change-color');

const colorText = document.querySelector('.color');

button.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  const color = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  bodyForColor.style.backgroundColor = color;
  colorText.textContent = color;
}
