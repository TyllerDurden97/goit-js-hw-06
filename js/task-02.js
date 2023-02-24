const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngr = document.querySelector('#ingredients');

const makeItemsOfList = (array) => {
   return array.map(elem => {
   const listEl = document.createElement('li');
      listEl.classList.add('item');
      listEl.textContent = elem;  
      listEl.style.listStyleType = 'thai';
   // console.log(listEl);  
   return listEl;
});
}

const itemsOfList = makeItemsOfList(ingredients);
// console.log(itemsOfList); 
listOfIngr.append(...itemsOfList);
console.log(listOfIngr); 














   






















