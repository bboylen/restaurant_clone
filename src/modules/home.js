function generateHomeElements() {
  let imageDiv = document.createElement('div');
  imageDiv.classList.add('coronavirus');

  let coronavirusImage = document.createElement('img');
  coronavirusImage.src='assets/images/coronavirus.png'
  coronavirusImage.alt='Coronavirus'

  imageDiv.appendChild(coronavirusImage);

  let homeText = document.createElement('div');
  homeText.classList.add('home-text');

  let paragraphs = [
    "Welcome to the Covid Cookery! The world's premiere destination for the 2020 Coronavirus Outbreak themed dishes.", 
    "Rated 3 stars by Michelin and called the \"most novel dining   establishment since Gusteau's\", we are sure you will find something you  love."]

  for (let paragraph of paragraphs) {
    let para = document.createElement('p');
    para.textContent = paragraph;
    homeText.appendChild(para);
  }
  return {
    imageDiv,
    homeText
  }
}

function generateHome() {
  let main = document.getElementById("main");
  console.log(generateHomeElements());
  let elements = generateHomeElements();
  for (let element in elements) {
    main.appendChild(elements[element]);
  }
}

export default generateHome;