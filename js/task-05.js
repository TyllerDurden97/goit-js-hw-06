

const inputRef = document.querySelector('#name-input');
const titleSpanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', typeTextGreet);


function typeTextGreet(event) {
   titleSpanRef.textContent = event.currentTarget.value;
}

