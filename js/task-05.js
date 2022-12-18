// Обращаемся к полю ввода

const inputNameHolder = document.querySelector("input#name-input");

// Обращаемся к значению вывода
const spanNameOutput = document.querySelector("span#name-output");

// Добавляем ввод с клавиатуры на span
inputNameHolder.addEventListener("input", (event) => {
  if (event.currentTarget.value == "") {
    spanNameOutput.textContent = "Anonymous";
    return;
  }
  spanNameOutput.textContent = event.currentTarget.value;
});
