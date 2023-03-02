
   
   // ------- ЧЕРЕЗ ТЄРНІ, АЛЕ САМОСТІЙНО----------------------------

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const operateCollectionIntrf = document.querySelector('#controls');
const colectionField = document.querySelector('#boxes');
const QuantityElToCreateInput = operateCollectionIntrf.children[0];
const createElButton = operateCollectionIntrf.children[1];
const destroyElButton = operateCollectionIntrf.children[2];
QuantityElToCreateInput.placeholder = '1-100';

createElButton.addEventListener('click', handleCreateBtn);
destroyElButton.addEventListener('click', destroyBoxes);

function handleCreateBtn() {
   
   if (QuantityElToCreateInput.value >= 1 && QuantityElToCreateInput.value <= 100) {
      createBoxes(QuantityElToCreateInput.value);
   } else {
      alert('Введіть число від 1 до 100');
   }
 QuantityElToCreateInput.value = ''; 
}

function createBoxes(amount) {  
   
   let prewSize = 20;
   let calcSize = 0;
   for (let e = 0; e < amount; e += 1) {  
      
      prewSize += 10;
      calcSize = `${prewSize}px`

   const ElOfCollection = document.createElement("div");
   ElOfCollection.style.backgroundColor = getRandomHexColor();
   ElOfCollection.style.width = `${calcSize}`;
   ElOfCollection.style.height =  `${calcSize}`;

   colectionField.append(ElOfCollection);
   }
}

function destroyBoxes() {
  colectionField.innerHTML = "";
}

