const formEl = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Заповніть усі порожні поля");
  }
  console.log({ email: email.value, password: password.value });
  event.currentTarget.reset();
};

formEl.addEventListener("submit", handleSubmit);
