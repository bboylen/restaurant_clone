function generateMenuCategory(headingText, link1, food1, link2, food2) {
  let categoryDiv = document.createElement("div");
  categoryDiv.classList.add("menu-category");

  let heading = document.createElement("h3");
  heading.textContent = headingText;
  categoryDiv.appendChild(heading);

  let itemsDiv = document.createElement("div");
  itemsDiv.classList.add("items");
  categoryDiv.appendChild(itemsDiv);

  cardData = [
    [link1, food1],
    [link2, food2],
  ];

  for (let card of cardData) {
    itemsDiv.appendChild(generateCard(card[0], card[1]));
  }

  return categoryDiv;
}

function generateCard(link, food) {
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  let img = document.createElement("img");
  img.src = link;
  cardDiv.appendChild(img);

  let foodDiv = document.createElement("div");
  foodDiv.classList.add("card-bottom");
  foodDiv.textContent = food;
  cardDiv.appendChild(foodDiv);

  return cardDiv;
}

function generateMenuTitle() {
  let titleDiv = document.createElement('div');
  titleDiv.classList.add("menu-title");

  menuTitle = document.createElement('h1');
  menuTitle.textContent = "Menu";
  titleDiv.appendChild(menuTitle);

  return titleDiv;
}

function generateMenu() {
  let main = document.getElementById("main");

  let menuTitle = generateMenuTitle();
  main.appendChild(menuTitle);
  
  let menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");
  main.appendChild(menuDiv);

  let appetizer = generateMenuCategory(
    "Appetizers",
    "assets/images/bat_soup.webp",
    "Bat Soup",
    "assets/images/vaccine-danish.jpg",
    "Vaccine Danish"
  );

  let entrees = generateMenuCategory(
    "Entrees",
    "assets/images/corona-burger.jpg",
    "Coronavirus Burger",
    "assets/images/mask-curry.jpg",
    "Masked Curry"
  );

  menuDiv.appendChild(appetizer);
  menuDiv.appendChild(entrees);
}

export default generateMenu;
