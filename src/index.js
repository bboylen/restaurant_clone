import generatePageStructure from './modules/page-structure.js';
import generateHome from './modules/home.js';
import generateMenu from './modules/menu.js';
import generateContact from './modules/contact.js';

generatePageStructure();
generateHome();
//generateMenu();
//generateContact();

function setListeners() {
  let tabs = document.getElementsByClassName('page-tabs')[0].children;
  tabs = Array.from(tabs);

  tabs.forEach(tab => {
    tab.addEventListener("click", switchPage)
  });

  function switchPage(e) {
    let tabSelected = e.target;
    tabSelected.classList.add('selected');
    let notSelected = tabs.filter(tab => tab != tabSelected)
    for (let tab of notSelected) tab.classList.remove('selected');

    populatePage(tabSelected.textContent);
  }
}

function populatePage(tab) {
  let main = document.getElementById("main");
  main.querySelectorAll('*').forEach(n => n.remove());

  switch(tab) {
    case "Home":
      generateHome();
      break;
    case "Menu":
      generateMenu();
      break;
    case "Contact":
      generateContact();
      break;
  }
}
setListeners();