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
