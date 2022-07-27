/* ----------------------- BEGIN GLOBAL SCRIPT CODE ----------------------- */

// Change theme to Dark-Mode
function changeTheme() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  if (document.querySelectorAll(".cubeBlack").length > 0) {
    const boxes = document.querySelectorAll(".cubeBlack");
    boxes.forEach(function (box) {
      box.classList.replace("cubeBlack", "cubeWhite");
    });
  } else {
    const boxes = document.querySelectorAll(".cubeWhite");
    boxes.forEach(function (box) {
      box.classList.replace("cubeWhite", "cubeBlack");
    });
  }
}

// Change theme to grayscale
function changeGray() {
  var element = document.documentElement;
  element.classList.toggle("grayScale");
}

// Open Navigation Menu
function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}

// Close Navigation Menu
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Define if the scroll button should be visible
function shouldShowScrollButton() {
  if (document.documentElement.scrollTop > 10) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

window.onscroll = () => {
  shouldShowScrollButton();
};

// Change font Size
window.onload = function () {
  var elementBody = document.querySelector("body");
  var elementBtnIncreaseFont = document.getElementById("increase-font");
  var elementBtnDecreaseFont = document.getElementById("decrease-font");

  var fontSize = 100;
  var increaseDecrease = 10;

  elementBtnIncreaseFont.addEventListener("click", function (event) {
    fontSize = fontSize + increaseDecrease;
    elementBody.style.fontSize = fontSize + "%";
  });
  elementBtnDecreaseFont.addEventListener("click", function (event) {
    fontSize = fontSize - increaseDecrease;
    elementBody.style.fontSize = fontSize + "%";
  });
};

// Open Summary List
function openList() {
  if (document.getElementById("panelBtn").style.display === "none") {
    document.getElementById("panelBtn").style.display = "block";
  } else {
    document.getElementById("panelBtn").style.display = "none";
  }
}

// Return to top of page
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function handleClickOutsideF(event) {
  let overlayf = document.getElementById("overlay-front");
  let modal1 = document.getElementById("modal-front");
  if (!modal1.contains(event.target)) {
    modal1.style.display = "none";
    overlayf.style.display = "none";
    document.removeEventListener("click", handleClickOutsideF, false);
  }
}

function handleClickOutsideB(event) {
  let overlayb = document.getElementById("overlay-back");
  let modal2 = document.getElementById("modal-back");
  if (!modal2.contains(event.target)) {
    modal2.style.display = "none";
    overlayb.style.display = "none";
    document.removeEventListener("click", handleClickOutsideB, false);
  }
}

function openModalFront() {
  let overlay = document.getElementById("overlay-front");
  let modal = document.getElementById("modal-front");
  overlay.style.display = "flex";
  modal.style.display = "flex";
  setTimeout(() => {
    document.addEventListener("click", handleClickOutsideF, false);
  }, 200);
}

function openModalBack() {
  let overlay = document.getElementById("overlay-back");
  let modal = document.getElementById("modal-back");
  overlay.style.display = "flex";
  modal.style.display = "flex";
  setTimeout(() => {
    document.addEventListener("click", handleClickOutsideB, false);
  }, 200);
}
