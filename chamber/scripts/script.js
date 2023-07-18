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

// Banner

function showBanner() {
  var banner = document.querySelector(".banner");
  if (
    new Date().getDay() === 1 ||
    new Date().getDay() === 2 ||
    new Date().getDay() === 3
  ) {
    banner.style.display = "block";
  } else {
    banner.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", showBanner);

function closeBanner() {
  var banner = document.querySelector(".banner");
  banner.style.display = "none";
}

document.querySelector(".banner").addEventListener("click", closeBanner);

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

// Spotlight

fetch("data/members.json")
  .then((response) => response.json())
  .then((data) => {
    const companies = data.companies;

    const filteredCompanies = companies.filter(
      (company) =>
        company.membershipLevel === "Silver" ||
        company.membershipLevel === "Gold"
    );

    const numAds = Math.floor(Math.random() * 2) + 2;
    const selectedCompanies = [];
    while (selectedCompanies.length < numAds && filteredCompanies.length > 0) {
      const index = Math.floor(Math.random() * filteredCompanies.length);
      const company = filteredCompanies.splice(index, 1)[0];
      selectedCompanies.push(company);
    }

    const spotlightAdsHTML = selectedCompanies
      .map(
        (company) => `
      <div class="spotlight-ad">
        <h4>${company.name}</h4>
        <p>${company.otherInfo}</p>
        <a href="${company.website}">Visit Website</a>
        <img src="${company.image}" alt="${company.name}" />
      </div>
    `
      )
      .join("");

    const advertisementsSection = document.querySelector(
      ".advertisementsContent"
    );
    advertisementsSection.innerHTML = `
      ${spotlightAdsHTML}
    `;
  })
  .catch((error) => {
    console.error("Error loading JSON data:", error);
  });
