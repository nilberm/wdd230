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
