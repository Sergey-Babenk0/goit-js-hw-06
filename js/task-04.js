// 1.Создай переменную counterValue,
//в которой будет храниться текущее значение
//счетчика и инициализируй её значением 0.

let counterValue = 0;

// 2. Добавь слушатели кликов на кнопки,
//внутри которых увеличивай или уменьшай значение счётчика
// 3. Обновляй интерфейс новым значением переменной counterValue.

// добавляем механизм клика на кнопку "-"
const btnDecrement = document.querySelector('button[data-action="decrement"]');

// обращаемся к интерфейсу со значением, которое необходимо изменить
const valueCounter = document.querySelector("span#value");

// уменьшаем на 1
btnDecrement.addEventListener("click", () => {
  counterValue -= 1;

  // Изменяем значение присваивая значение counterValue
  valueCounter.textContent = counterValue;
});

// добавляем механизм клика на кнопку "+"
const btnIncrement = document.querySelector('button[data-action="increment"]');

// увеличиваем на 1
const btnIncrementClick = () => {
  counterValue += 1;

  // Изменяем значение присваивая значение counterValue
  valueCounter.textContent = counterValue;
};
btnIncrement.addEventListener("click", btnIncrementClick);
