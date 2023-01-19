function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const formBtn = document.querySelector('.change-color');
const formSpan = document.querySelector('.color');
const formBody = document.querySelector('body');
formBtn.addEventListener('click', changeColor);

function changeColor () {
  formSpan.textContent = getRandomHexColor();
  formBody.style.backgroundColor = formSpan.textContent;
}