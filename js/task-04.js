

const buttonMinus = document.querySelector('button[data-action="decrement"]');
console.log(buttonMinus);

const buttonPlus = document.querySelector('button[data-action="increment"]');
console.log(buttonPlus);

const counterValue = document.querySelector('#value');
console.log(counterValue);

let counterValuInit = 0;

buttonMinus.addEventListener('click', () => {
   counterValuInit -= 1;

   counterValue.textContent = counterValuInit;
   return    
}
);
 
buttonPlus.addEventListener('click', () => {
   counterValuInit += 1;

   counterValue.textContent = counterValuInit;
   return    
}
 );



