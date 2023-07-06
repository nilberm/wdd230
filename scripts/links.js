const baseURL = "https://nilberm.github.io/wdd230/";
const linksURL = "https://nilberm.github.io/wdd230/data/links.json";

const displayLinks = (weeks) => {
  const ulElement = document.getElementById("week-list");

  weeks.forEach((weekObj, index) => {
    const weekTitle = weekObj.week;
    const links = weekObj.links;

    const liElement = document.createElement("li");
    liElement.textContent = weekTitle + ":";
    liElement.id = `week-${index + 1}`;

    links.forEach((link, linkIndex) => {
      const linkElement = document.createElement("a");
      linkElement.href = link.url;
      linkElement.textContent = link.title;
      linkElement.id = `week-${index + 1}-link-${linkIndex + 1}`;

      liElement.appendChild(linkElement);
    });

    ulElement.appendChild(liElement);
  });
};

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

getLinks();
