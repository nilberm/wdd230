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

// Weather

const apiKey = "3e5a363e7aa705a644a18fe4a1ad48f8";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=-3.73&lon=-38.52&appid=${apiKey}`;

const apiFetch = async () => {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      updateWeatherData(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
};

const updateWeatherData = (data) => {
  const iconElement = document.getElementById("icon");
  const tempElement = document.getElementById("temp");
  const conditionElement = document.getElementById("condition");

  const weatherIcon = data.weather[0].icon;
  const temperature = data.main.temp;
  const condition = data.weather[0].description;

  const temperatureCelsius = (temperature - 273.15).toFixed(1);

  iconElement.innerHTML = `<img src="https://openweathermap.org/img/w/${weatherIcon}.png">`;
  tempElement.textContent = `${temperatureCelsius} °C`;
  conditionElement.textContent = ` ${condition}`;
};

apiFetch();
