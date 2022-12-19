const inputForm = document.querySelector("#validation-input");

//  1 способ

// inputForm.addEventListener("input", (enterChar) => {
// inputForm.classList.add("invalid");
//   if (enterChar.currentTarget.value.length == inputForm.dataset.length) {
//     inputForm.classList.replace("invalid", "valid");
//     console.log(6);
//     return;
//   } else {
//     inputForm.classList.replace("valid", "invalid");
//   }
// });

// 2 способ
inputForm.addEventListener("blur", (enterChar) => {
  inputForm.classList.add("invalid");
  if (
    enterChar.currentTarget.value.length === Number(inputForm.dataset.length)
  ) {
    inputForm.classList.replace("invalid", "valid");
    return;
  } else {
    inputForm.classList.replace("valid", "invalid");
  }
});
