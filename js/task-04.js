const ctElement = document.querySelector("#value");

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const decreaseValue = () => {
  ctElement.textContent = +ctElement.textContent - 1;
};

const increaseValue = () => {
  ctElement.textContent = +ctElement.textContent + 1;
};

decrementBtn.addEventListener("click", decreaseValue);
incrementBtn.addEventListener("click", increaseValue);
