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

const gallary = document.querySelector(".gallery");
const imgEl = images
  .map(
    (el) =>
      `<li class="gallery__item"><img src="${el.url}" width = "400" alt ="${el.alt}"></li>`
  )
  .join("");
gallary.insertAdjacentHTML("beforeend", imgEl);

gallary.style.display = "flex";
gallary.style.gap = "60px";
