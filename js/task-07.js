const textItem = document.querySelector('#text');

const rangeControl = document.querySelector('#font-size-control');

textItem.style.fontSize = `${rangeControl.value}px`;

rangeControl.addEventListener('input', fontSizeChange);

function fontSizeChange() {
  textItem.style.fontSize = `${rangeControl.value}px`;
}
