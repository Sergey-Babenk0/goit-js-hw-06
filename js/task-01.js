// 1. Скрипт, который считатет и выводит в консоль количество категорий в
// ul#categories, то есть элементов li.item.

const elementsByClass = document.querySelectorAll(".item");
console.log(`Number of categories: ${elementsByClass.length}`);

// 2. Скрипт, выводящий в консоль текст заголовка и количество элементов, вложенных в него
// (ul#categories для каждого li.item)

let textElContent;
let countEl;

for (const element of elementsByClass) {
  textElContent = element.firstElementChild.textContent;
  countEl = element.lastElementChild.children.length;

  console.log(`Category: ${textElContent}`);
  console.log(`Elements: ${countEl}`);
}
