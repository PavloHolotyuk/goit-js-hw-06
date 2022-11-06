const inputElem = document.querySelector("#name-input");
const textInput = document.querySelector("#name-input");

const outputElem = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  outputElem.textContent = event.target.value;
  if (event.target.value === "") {
    outputElem.textContent = "Anonymous";
  }
});
