const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// 1. Создаём селектор ul
const ingredientsBySelector = document.querySelector("ul");
// console.log(ingredientsBySelector);

// 2. Раскладываем массив значений на отдельные элементы и добавляем
// их отдельными значениями на в селектор li

const elements = ingredients.map((ingredient) => {
  const liIngr = document.createElement("li");
  liIngr.textContent = ingredient;
  liIngr.classList.add(".item");
  return liIngr;
});
// console.log(elements);

// 3. Распыляем при помощьи spread наши элементы в ранее созданный селектор ul
ingredientsBySelector.append(...elements);
