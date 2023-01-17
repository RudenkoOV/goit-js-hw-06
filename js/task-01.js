const categoriesEL = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesEL.length}`);
const categoryTextEls = document.querySelectorAll(".item > h2");
const listEls = document.querySelectorAll(".item > ul");

function displayEl () {
    for (let i=0; i < categoriesEL.length; i=i+1) {
        console.log(`Category: ${categoryTextEls[i].textContent}`);
        console.log(`Elements: ${listEls[i].children.length}`);
    }    
}

displayEl();