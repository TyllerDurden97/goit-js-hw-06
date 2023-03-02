
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

btnChangeColor.addEventListener('click', handleBtnClick);

function handleBtnClick() {
   document.body.style.backgroundColor = getRandomHexColor();
   spanColor.textContent = getRandomHexColor();
}

