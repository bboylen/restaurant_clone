function generateNavbar() {
  let navbar = document.createElement('header');  
  navbar.classList.add('navbar')

  let navbarName = document.createElement('div');
  navbarName.classList.add('name');
  navbarName.textContent = "Covid Cookery"
  navbar.appendChild(navbarName);

  let navList = document.createElement('ul');
  navList.classList.add('page-tabs');

  function generateNavItem(text) {
    let navItem = document.createElement('li');
    navItem.textContent = text;
    return navItem;
  }

  let listItems = ['Home', 'Menu', 'Contact'];

  for (let item of listItems) {
    navList.appendChild(generateNavItem(item));
  }

  navbar.appendChild(navList);

  return navbar;
}

const generateMain = () => {
  let main = document.createElement('main');
  main.id = "main";
  return main;
}

function generatePageStructure() {
  document.body.appendChild(generateNavbar());
  document.body.appendChild(generateMain());
}

export default generatePageStructure;