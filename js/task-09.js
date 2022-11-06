function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ownColor = document.querySelector("body");
const secondColor = document.querySelector(".color");
const colorBtn = document.querySelector(".change-color");

const changeBgColor = () => {
  const randomColor = getRandomHexColor();
  ownColor.style.backgroundColor = randomColor;
  secondColor.innerHTML = randomColor;
};

colorBtn.addEventListener("click", changeBgColor);
