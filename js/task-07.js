const slider = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");

slider.addEventListener("input", (event) => {
  if (slider.value >= 16 || slider.value <= 96) {
    text.style.fontSize = `${slider.value}px`;
  }
});
