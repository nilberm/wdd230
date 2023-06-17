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
