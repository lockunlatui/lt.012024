const addCart1 = document.getElementById("addCart");
const oldText = addCart1.innerHTML
let check = true;
function changeText() {
    if (check === true) {
    addCart1.innerHTML = "Added";
    addCart1.style.color = "white";
    addCart1.style.fontWeight = "bold";
    check = false;
    } else {
        addCart1.innerHTML = oldText;
        check = true;
    }
}

const numberCart = document.getElementById("number-cart");
let number = 0;
function addNumber() {
    number++;
    numberCart.innerText = number;
}
function minusNumber() {
    number--;
    numberCart.innerText = number;
    if (number < 1) {
        numberCart.innerText = 0;
        number = 0;
    }
}

const openCloseMenu = document.getElementById("open-close-menu");
function menuOpen() {
    openCloseMenu.style.display = "flex";
}
function menuClose() {
    openCloseMenu.style.display = "none";
}
