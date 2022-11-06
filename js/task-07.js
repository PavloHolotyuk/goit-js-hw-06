const elChange = document.querySelector("#font-size-control");
const textChange = document.querySelector("#text");

elChange.addEventListener("change", (event) => {
  textChange.style.fontSize = `${event.target.value}px`;
});
