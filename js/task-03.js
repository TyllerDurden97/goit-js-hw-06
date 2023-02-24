const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//Варіант 1.-------------------------------------------

// const galery = document.querySelector('.gallery');

// const galeryItem = images.map(element => {
//    const listItem = document.createElement('li');

//    const itemImg = document.createElement('img');
//    itemImg.url = `${element.url}`;
//    itemImg.alt = `${element.alt}`;
//    listItem.style.listStyleType = 'none';

//    listItem.append(itemImg);
//    // console.log(listItem);
//    return listItem;   
// })

// // console.log(galeryItem);
   
// galery.append(...galeryItem);
// console.log(galery);


//Варіант 2.-------------------------------------------

const galeryList = document.querySelector('.gallery');

const makeGalery = ({ url, alt }) =>
   `<li class="list-item">
   <img
   src = "${url}",
   alt = "${alt}",
   width = 100%,
   >
   </li>`;


const galeryMarkup = images.map((picture) =>
   makeGalery(picture)).join("").style.listStyleType = 'none';


// console.log(galeryMarkup);

galeryList.insertAdjacentHTML('beforeBegin', galeryMarkup);

// const galeryItemNoMarker = document.querySelector('.list-item');
// galeryItemNoMarker.map(el => el.style.listStyleType = 'none'
// );

// console.log(galeryItemNoMarker);



// Використовуй масив об'єктів images для створення елементів <img>, 
// вкладених в < li >.Для створення розмітки використовуй шаблонні рядки 
// і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
