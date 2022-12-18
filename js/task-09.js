function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector("button.change-color");
console.log(btnChangeColor);
const body = document.querySelector("body");
const spanColorValue = document.querySelector("span.color");
btnChangeColor.addEventListener("click", (event) => {
  body.style.backgroundColor = getRandomHexColor();
  spanColorValue.textContent = body.style.backgroundColor;
});
