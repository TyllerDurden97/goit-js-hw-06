

const inputRef = document.querySelector('#name-input');
const titleSpanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', typeTextGreet);


function typeTextGreet(event) {
   if (!event.currentTarget.value) {
      titleSpanRef.textContent = 'Anonymous';
   } else { titleSpanRef.textContent = event.currentTarget.value; }

}

