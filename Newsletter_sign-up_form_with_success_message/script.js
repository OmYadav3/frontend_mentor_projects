const btn = document.querySelector(".btn-box");
const email = document.querySelector("#email");
const errorMessage = document.querySelector(".error-message");
const emailbox = document.querySelector("#email-box");
console.log(emailbox);


window.addEventListener("load", () => {
emailbox.addEventListener("click", () => {
    emailbox.classList.remove("error");
    errorMessage.style.display = "none";
});
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    if (isValidEmail(email.value) == true) {
        window.location.pathname ="/index1.html";
        emailbox.classList.remove("error");
        errorMessage.style.display = "none";
    }
    else{
        errorMessage.style.display = "initial";
        emailbox.classList.add("error");
    }
});
});

const isValidEmail = (email) => {
    const regularExpression =
    /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}/;
  return regularExpression.test(email);
};
