const inputEl = document.querySelector("#validation-input");

const checkSymbQnt = (event) => {
  inputEl.classList.add(
    event.target.value.length >= inputEl.dataset.length ? "valid" : "invalid"
  );
};

const onFocusInput = () => {
  inputEl.classList.remove("valid", "invalid");
};

inputEl.addEventListener("blur", checkSymbQnt);
inputEl.addEventListener("focus", onFocusInput);
