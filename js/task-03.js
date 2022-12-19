const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listOfPictures = document.querySelector(".gallery");
console.log(listOfPictures);

const pictures = images.map((image) => {
  // const elementImg = listOfPictures.insertAdjacentHTML(
  //   "beforeend",
  //   `<li class="galery-style"><img src="${image.url}" alt="picture" width = "320px"/></li>`
  // );
  const elemImg = document.createElement("img");
  elemImg.classList.add("galery-style");
  elemImg.src = image.url;
  elemImg.alt = image.alt;
  elemImg.width = 480;
  return elemImg;
});

listOfPictures.append(...pictures);
