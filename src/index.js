import generatePageStructure from './modules/page-structure.js';
import generateHome from './modules/home.js';

generatePageStructure();
generateHome();

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
  }
}

setListeners();