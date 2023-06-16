const menuList = document.querySelector("#menuList");
const imageBtnOpen = document.querySelector("#imageBtnOpen");
const imageBtnClose = document.querySelector("#imageBtnClose");

document.getElementById("menuBtn").addEventListener("click", () => {
  menuList.classList.toggle("menuClose");
  imageBtnOpen.classList.toggle("visible");
  imageBtnClose.classList.toggle("visible");
});
