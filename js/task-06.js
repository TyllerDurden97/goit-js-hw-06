

const validnInput = document.querySelector('#validation-input');

validnInput.addEventListener('blur', makeValidat);

function makeValidat(event) {
   if (event.currentTarget.value.length == event.currentTarget.dataset.length) {
      event.currentTarget.classList.add('valid');
      event.currentTarget.classList.remove('invalid');
   } else {
      event.currentTarget.classList.add('invalid');
      event.currentTarget.classList.remove('valid'); }
         }


