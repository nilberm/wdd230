const menuList = document.querySelector("#menuList");
const imageBtnOpen = document.querySelector("#imageBtnOpen");
const imageBtnClose = document.querySelector("#imageBtnClose");

const darkBtn = document.querySelector("#darkBtn");
const body = document.querySelector("body");

document.getElementById("menuBtn").addEventListener("click", () => {
  menuList.classList.toggle("menuClose");
  imageBtnOpen.classList.toggle("visible");
  imageBtnClose.classList.toggle("visible");
});

darkBtn.addEventListener("click", () => {
  body.classList.toggle("darkMode");
});

const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
  visitsDisplay.textContent = numVisits;
} else {
  visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}
numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

const password = document.querySelector("#password");
const rePassword = document.querySelector("#rePassword");
const message = document.querySelector("#formmessage");

rePassword.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
  if (password.value !== rePassword.value) {
    message.textContent = "❗Passwords DO NOT MATCH!";
    message.style.visibility = "show";
    rePassword.style.backgroundColor = "#fff0f3";
    rePassword.value = "";
    rePassword.focus();
  } else {
    message.style.display = "none";
    rePassword.style.backgroundColor = "#fff";
    rePassword.style.color = "#000";
  }
}

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("range");

// RANGE event listener
range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);

function displayRatingValue() {
  rangevalue.innerHTML = range.value;
}
