const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEL = document.getElementById('ingredients');
function createIngridients (items) {
  let itemEl = [];
  for (let i=0; i<items.length; i++) {
  itemEl[i] = document.createElement("li");
  itemEl[i].className = 'item';
  itemEl[i].textContent = items[i];
  console.log(itemEl[i]);
}
return itemEl;
}
ulEL.append(...createIngridients (ingredients));

