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
   makeGalery(picture)).join("");

galeryList.insertAdjacentHTML('afterBegin', galeryMarkup);


//Варіант 2.-------------------------------------------

// const galery = document.querySelector('.gallery');

// const galeryItem = images.map(element => {
//    const listItem = document.createElement('li');

//    const itemImg = document.createElement('img');
//    itemImg.src = `${element.url}`;
//    itemImg.alt = `${element.alt}`;
//    listItem.style.listStyleType = 'none';
//    listItem.classList = "list-item";

//    listItem.append(itemImg);
//    // console.log(listItem);
//    return listItem;   
// })

// // console.log(galeryItem);
   
// galery.append(...galeryItem);
// console.log(galery);
