document.querySelector("#lastMode").innerHTML = document.lastModified;

var cards = document.querySelectorAll(".card");

function carousel() {
  setTimeout(() => {
    cards[0].classList.toggle("visibleCard");
    cards[1].classList.toggle("visibleCard");
  }, 5000);

  setTimeout(() => {
    cards[1].classList.toggle("visibleCard");
    cards[2].classList.toggle("visibleCard");
  }, 10000);

  setTimeout(() => {
    cards[2].classList.toggle("visibleCard");
    cards[3].classList.toggle("visibleCard");
  }, 15000);

  setTimeout(() => {
    cards[3].classList.toggle("visibleCard");
    cards[0].classList.toggle("visibleCard");
  }, 20000);

  setTimeout(carousel, 25000);
}

carousel();
