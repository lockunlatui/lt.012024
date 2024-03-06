const body = document.querySelector("body");
const mainDiv = document.getElementById('main-div');
const overallList = document.getElementById('overall-list');
const pageSearch = document.getElementById('page-search');
const searchContainer = document.getElementById('search-container');
const backgroundContainer = document.getElementById('background-container');
const input = document.getElementById('page-search');
const night = document.getElementById('night');
const light = document.getElementById('light');
let isLight = true;

function mode(bodyBgColor, mainBgColor, listSearchColor, iconLight, iconNight) {
  body.style.backgroundColor = bodyBgColor;
  mainDiv.style.backgroundColor = mainBgColor;
  overallList.style.color = listSearchColor;
  pageSearch.style.backgroundColor = mainBgColor;
  pageSearch.style.color = listSearchColor;
  searchContainer.style.backgroundColor = mainBgColor;
  light.style.display = iconLight;
  night.style.display = iconNight;
}

function changeNight() {
  mode('#181824', '#25273c', 'white', 'block', 'none')
  isLight = false;

  if (window.innerWidth <= 375) {
    body.style.backgroundImage = "url('./images/bg-mobile-dark.jpg')";
  } else {
    body.style.backgroundImage = "url('./images/bg-desktop-dark.jpg')";
  }
}

function changeLight() {
  mode('white', 'white', 'black', 'none', 'block')
  isLight = true;

  if (window.innerWidth <= 375) {
    body.style.backgroundImage = "url('./images/bg-mobile-light.jpg')";
  } else {
    body.style.backgroundImage = "url('./images/bg-desktop-light.jpg')";
  }
}

function checkMode(linkLight, linkDark) {
  if (isLight) {
    body.style.backgroundImage = `url(${linkLight})`;
  } else {
    body.style.backgroundImage = `url(${linkDark})`;
  }
} 

window.addEventListener('resize', function(event) {
  if (window.innerWidth <= 375) {
    checkMode('./images/bg-mobile-light.jpg', './images/bg-mobile-dark.jpg')
  } else {
    checkMode('./images/bg-desktop-light.jpg', './images/bg-desktop-dark.jpg')
  }
}, true);

function addList() {
  let li = document.createElement('li');
  let inputValue = input.value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You haven't written anyting boy/girl =.=");
  } else {
    
  }
}