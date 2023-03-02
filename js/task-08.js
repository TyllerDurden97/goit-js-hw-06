
// ------Варіант 1-----------------------------------------

const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSubmitValid)

function handleSubmitValid(event) {
   event.preventDefault();

   if (event.currentTarget.elements.email.value === '' ||
      event.currentTarget.elements.password.value === '') {
      alert('Потрібно заповнити всі поля, друже!')
   
   } else {
      const formData = new FormData(event.target);
      console.log(formData);

      formData.forEach((value, name) => {

         console.log(`${name}: ${value}`)
      })

      event.currentTarget.reset();
   };
};

// -------Варіант 2----------------------------------------------------------

// const formEl = document.querySelector(".login-form");

// formEl.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { email, password }
//   } = event.currentTarget;   

//   if (email.value === "" || password.value === "") {
//     return alert('Потрібно заповнити всі поля, друже!');
//   }

//   console.log(`Email: ${email.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }   



 

      


