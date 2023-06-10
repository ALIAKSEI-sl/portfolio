const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.navigation');
const overlay = document.querySelector(".overlay")
const menu_item = document.getElementsByClassName("menu-item")

function toggleMenu() {
  hamburger.classList.toggle('open');
  menu.classList.toggle('active');
  overlay.classList.toggle("overlay_open")
}

hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

for(let i = 0; i < menu_item.length; ++i) {
  menu_item[i].addEventListener("click", toggleMenu);
}


const portfolioBtns = document.querySelector('.container-portfolio');
function changeImage(event) {
  if(event.target.classList.contains('portfolio-button')) {    
    for(let i = 1; i <= 6; i++) {
      const img = document.querySelector(`.photo${i}`);
      img.src = `./assets/img/${event.target.dataset.season}${i}.jpg`;
    }
  }
}
portfolioBtns.addEventListener('click', changeImage);

const portfolioImages = document.querySelectorAll('.photo');
const seasons = ['winter', 'spring', 'summer', 'autumn'];
function preloadSummerImages() {
  for(let i = 0; i <= 3; i++) {   
  portfolioImages.forEach((img, i) => img.src = `./assets/img/${seasons[i]}${i + 1}.jpg`);
  }
}

const portfolioButton = document.querySelectorAll('.portfolio-button');
function changeClassActive(event) {
  for(let i = 0; i < portfolioButton.length; ++i) {
  portfolioButton[i].classList.remove('active-light');}
  event.target.classList.add('active-light')
}
for(let i = 0; i < portfolioButton.length; ++i) {
  portfolioButton[i].addEventListener("click", changeClassActive);
  }

  let theme = "theme";

  const imgMoon = document.querySelector('.moon');
  imgMoon.addEventListener("click", changeLight);
  function changeLight (event) {
    const classLight = ['.section-skills', '.section-portfolio', '.section-video', '.video-background', '.section-price'];
    classLight.forEach(element => {
      const string = document.querySelector(element);
      string.classList.toggle('light-theme');  
  })
  const titleLine = document.querySelectorAll('.title-line');
  titleLine.forEach(element => element.classList.toggle('title-line-leght'))
  const titleH2 = document.querySelectorAll('.title');
  titleH2.forEach(element => element.classList.toggle('title-leght'))
  imgMoon.classList.toggle('moon-light')
  const buttonBlack = document.querySelectorAll('.portfolio-button');
  buttonBlack.forEach(element => element.classList.toggle('button-black'))

  const navigation = document.querySelector('.navigation');
  navigation.classList.toggle('menu-light') 
}


