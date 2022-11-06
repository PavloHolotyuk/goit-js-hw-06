const upForm = document.querySelector(".login-form ");

const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Усі поля мають бути заповненні!");
  }
  const formDetails = { email: email.value, Password: password.value };
  console.log(userDetails);
  event.currentTarget.reset();
};

upForm.addEventListener("submit", handleSubmit);
