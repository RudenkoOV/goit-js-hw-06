// const categoriesEL = document.querySelectorAll(".item");
// console.log(`Number of categories: ${categoriesEL.length}`);
// const categoryTextEls = document.querySelectorAll(".item");
// console.log(categoryTextEls);
// console.log(categoryTextEls.firstElementChild);
// console.log(categoryTextEls.lastElementChild);
// const listEls = document.querySelectorAll(".item > ul");

// function displayEl () {
//     for (let i=0; i < categoriesEL.length; i=i+1) {
//         console.log(`Category: ${categoryTextEls[i].textContent}`);
//         console.log(`Elements: ${listEls[i].children.length}`);
//     }
// }

// displayEl();
const body = document.body;

const ulEl = body.firstElementChild.nextElementSibling;
console.log(`Number of categories: ${ulEl.children.length}`);

const liitemEl = ulEl.firstElementChild; 
const liitemh2El = liitemEl.firstElementChild;
console.log(`Category: ${ liitemh2El.textContent }`);
const listEl = liitemEl.lastElementChild;
console.log(`Elements: ${listEl.children.length}`);

const liitemSiblingEl = ulEl.firstElementChild.nextElementSibling;
const liitemSiblingh2El = liitemSiblingEl.firstElementChild;
console.log(`Category: ${liitemSiblingh2El.textContent}`);
const listSiblingEl = liitemSiblingEl.lastElementChild;
console.log(`Elements: ${listSiblingEl.children.length}`);

const liitemLastEl = ulEl.lastElementChild; 
const liitemLasth2El = liitemLastEl.firstElementChild;
console.log(`Category: ${liitemLasth2El.textContent}`);
const listLastEl = liitemLastEl.lastElementChild;
console.log(`Elements: ${listLastEl.children.length}`);
