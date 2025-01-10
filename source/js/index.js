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





document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const navbar = document.getElementById('navbar');
    const overlay = document.getElementById('shadow');
    const navLinks = document.querySelectorAll('.nav__link');
    
    function toggleMenu() {
        navbar.classList.toggle('active');
        overlay.style.display = 'block';
        burger.classList.toggle('active');
    }

    function hideMenu() {
        navbar.classList.remove('active');
        overlay.style.display = 'none';
        burger.classList.remove('active');
    }

    burger.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', hideMenu);
    });

    overlay.addEventListener('click', hideMenu);
});

goUp();
