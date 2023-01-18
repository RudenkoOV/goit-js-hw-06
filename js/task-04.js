
const decrementEl = document.querySelector('[data-action="increment"]');
const incrementEl = document.querySelector('[data-action="decrement"]');
const value = document.getElementById('value');
let counterValue = 0;

decrementEl.addEventListener('click', () => {
    counterValue = counterValue + 1;
    value.textContent = counterValue;
});
incrementEl.addEventListener('click', () => {
    counterValue = counterValue - 1;
    value.textContent = counterValue
});