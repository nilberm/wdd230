document.addEventListener("DOMContentLoaded", function () {
  const gridBtn = document.getElementById("gridBtn");
  const listBtn = document.getElementById("listBtn");
  const membersContainer = document.getElementById("membersContainer");

  // Fetch JSON data
  fetch("data/members.json")
    .then((response) => response.json())
    .then((data) => {
      // Display members initially in grid view
      displayMembers(data, "grid");

      // Toggle between grid and list views
      gridBtn.addEventListener("click", () => displayMembers(data, "grid"));
      listBtn.addEventListener("click", () => displayMembers(data, "list"));
    });

  function displayMembers(data, view) {
    // Clear members container
    membersContainer.innerHTML = "";

    // Create member cards based on selected view
    data.companies.forEach((member) => {
      const card = document.createElement("div");
      card.classList.add("member-card");

      const img = document.createElement("img");
      img.src = member.image;
      img.alt = member.name;
      card.appendChild(img);

      const name = document.createElement("h3");
      name.textContent = member.name;
      card.appendChild(name);

      const address = document.createElement("p");
      address.textContent = member.address;
      card.appendChild(address);

      const phone = document.createElement("p");
      phone.textContent = member.phone;
      card.appendChild(phone);

      const website = document.createElement("p");
      const link = document.createElement("a");
      link.href = member.website;
      link.textContent = member.website;
      website.appendChild(link);
      card.appendChild(website);

      const level = document.createElement("p");
      level.textContent = "Membership Level: " + member.membershipLevel;
      card.appendChild(level);

      const otherInfo = document.createElement("p");
      otherInfo.textContent = member.otherInfo;
      card.appendChild(otherInfo);

      membersContainer.appendChild(card);
    });

    // Toggle view class
    membersContainer.className = view === "grid" ? "grid-view" : "list-view";

    // Set active button based on selected view
    if (view === "grid") {
      gridBtn.classList.add("active");
      listBtn.classList.remove("active");
    } else if (view === "list") {
      gridBtn.classList.remove("active");
      listBtn.classList.add("active");
    }
  }
});
