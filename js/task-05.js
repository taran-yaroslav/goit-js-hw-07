const nameSpan = document.querySelector('#name-output');

const inputName = document.querySelector('#name-input');

inputName.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value.trim() !== '') {
    return (nameSpan.textContent = event.currentTarget.value);
  }
  return (nameSpan.textContent = 'Anonymous');
}
