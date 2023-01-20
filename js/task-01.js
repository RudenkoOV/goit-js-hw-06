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


const categoryEls = document.body.firstElementChild.nextElementSibling.children;
console.log(`Number of categories: ${categoryEls.length}`);
for (const categoryEl of categoryEls) {
    console.log(`Category: ${categoryEl.firstElementChild.textContent}`);
    console.log(`Elements: ${categoryEl.lastElementChild.children.length}`);
}

