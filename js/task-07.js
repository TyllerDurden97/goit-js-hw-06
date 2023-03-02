
const inputRange = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

inputRange.addEventListener('input', changeFontSize);

function changeFontSize(event) {
   textSpan.style.fontSize = event.currentTarget.value+'px';

   console.log(`Розмір тексту: ${inputRange.value}px`);
}


