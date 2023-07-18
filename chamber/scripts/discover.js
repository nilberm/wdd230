var currentDate = new Date();

var lastVisit = localStorage.getItem("lastVisit");

if (lastVisit) {
  var timeDiff = currentDate.getTime() - new Date(lastVisit).getTime();

  var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  if (daysDiff === 0) {
    document.getElementById("visitorDate").textContent =
      "Back so soon! Awesome!";
  } else {
    var message = "You last visited ";
    if (daysDiff === 1) {
      message += "1 day ago.";
    } else {
      message += daysDiff + " days ago.";
    }
    document.getElementById("visitorDate").textContent = message;
  }
} else {
  document.getElementById("visitorDate").textContent =
    "Welcome! Let us know if you have any questions.";
}
localStorage.setItem("lastVisit", currentDate);
