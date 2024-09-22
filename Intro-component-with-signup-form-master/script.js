const firstInput = document.querySelector(".input-cls1");
const secondInput = document.querySelector(".input-cls2");
const thirdInput = document.querySelector(".input-cls3");
const fourthInput = document.querySelector(".input-cls4");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  // Check if any input field is empty
  if (firstInput.value.trim() === "") {
    firstInput.classList.add("error");
    firstInput.placeholder = "First Name is cannot be empty";
    firstInput.addEventListener("click", () => {
        firstInput.value = "";
        firstInput.placeholder = "First Name";
    });
  } else {
    firstInput.classList.remove("error");
  }

  if (secondInput.value.trim() === "") {
    secondInput.classList.add("error");
    secondInput.placeholder = "Last Name is cannot be empty";
    secondInput.addEventListener("click", () => {
      secondInput.value = "";
      secondInput.placeholder = "Last Name";
      secondInput.classList.remove("error");

    });
  } else {
    secondInput.classList.remove("error");
  }

  if (thirdInput.value.trim() === "") {
    thirdInput.classList.add("error");
    thirdInput.placeholder = "look like is not a valid email";
    thirdInput.addEventListener("click", () => {
      thirdInput.value = "";
      thirdInput.placeholder = "Email";
    });
  } else {
    thirdInput.classList.remove("error");
  }

  if (fourthInput.value.trim() === "") {
    fourthInput.classList.add("error");
    fourthInput.placeholder = "Password is cannot be empty";
    fourthInput.addEventListener("click", () => {
      fourthInput.value = "";
      fourthInput.placeholder = "password";
    });
  } else {
    fourthInput.classList.remove("error");
  }
});
