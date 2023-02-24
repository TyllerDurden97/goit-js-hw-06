const quantityOfCategor = document.querySelectorAll('.item').length;

console.log(`Number of categories: ${quantityOfCategor}`);

const itemsOfCategor = document.querySelectorAll('.item');
itemsOfCategor.forEach(item => {
   const categoryTitleText = item.firstElementChild.textContent;
   const categoryTitle = item.firstElementChild;
   
   const categoryItemsQuantity = categoryTitle.nextElementSibling.children.length;
   console.log(`Category: ${categoryTitleText}`);
   console.log(`Elements: ${categoryItemsQuantity}`);   
});





