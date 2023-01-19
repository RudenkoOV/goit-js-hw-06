function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let width = 30;
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('#controls > input');
const boxesEl = document.getElementById('boxes');
console.log(btnCreateEl, btnDestroyEl, inputEl);
boxesEl.style.display = 'flex';

function createBoxes(amount) {
  let divEl = [];

  for (let i = 0; i < amount; i++) {
    divEl[i] = document.createElement('div');
    divEl[i].className = 'new-div';
    divEl[i].style.width = `${width}px`;
    divEl[i].style.height = `${width}px`;
    divEl[i].style.backgroundColor = getRandomHexColor();
    divEl[i].style.margin = '2px';
    width += 10;
  }
 boxesEl.append(...divEl);
}

btnCreateEl.addEventListener('click', function () { createBoxes(inputEl.value) });

btnDestroyEl.addEventListener('click', function () {
  boxesEl.innerHTML = ''
  return width = 30;
});




