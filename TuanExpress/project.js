const searchBoxButton = document.getElementById("search-box-button");
const cover = document.getElementById("cover");
const menuOpen = document.getElementById('menu-open');
let isSearchClose = true;
let isMenuClose = true;

function openSearchBox() {
  if (isSearchClose === true) {
    searchBoxButton.style.display = "inline-block";
    cover.style.display = "none";
    isSearchClose = false;
  } else {
    searchBoxButton.style.display = "none";
    cover.style.display = "inline-block";
    isSearchClose = true;
  }
}

function menuOpenClose() {
  if (isMenuClose === true) {
    menuOpen.style.display = "flex";
    isMenuClose = false;
  } else {
    menuOpen.style.display = "none";
    isMenuClose = true;
  }
}
