const buttonToUp = document.getElementById("buttonUp");
var navbar = document.getElementById("navbar");

//NOTE: Button Up appear when scroll down.
function goUp() {
  window.addEventListener("scroll", () => {
    var scroll = document.documentElement.scrollTop;
    if (scroll > 400) {
      buttonToUp.style.opacity = 100;
      buttonToUp.style.right = 2 + "rem";
    } else {
      buttonToUp.style.right = -10 + "rem";
      buttonToUp.style.opacity = 0;
    }
  });
}

//NOTE: Image changes when mouse hover.
buttonToUp.addEventListener("mouseover", function () {
  buttonToUp.style.opacity = "0";
  setTimeout(() => {
    buttonToUp.src = "/img/go-up-button.svg";
    buttonToUp.style.opacity = "1";
  }, 110);
});

buttonToUp.addEventListener("mouseout", function () {
  buttonToUp.style.opacity = "0";
  setTimeout(() => {
    buttonToUp.src = "/img/clickedButton.svg";
    buttonToUp.style.opacity = "1";
  }, 110);
});

//NOTE: Click to Up Button
function clickToUp() {
  buttonToUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

//NOTE: Scroll to top button
window.onscroll = function () {
  if (window.scrollY > 50) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
};

goUp();
