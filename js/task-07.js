const slider = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");

slider.addEventListener("input", (event) => {
  text.style.fontSize = `${slider.value}px`;
});
