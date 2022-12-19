const submitForm = document.querySelector("form.login-form");

submitForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Все поля должны быть заполнены!");
    return;
  }
  console.log(`${email.value}, ${password.value}`);
  event.currentTarget.reset();
}
