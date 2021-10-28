let dayNight = document.querySelector(".dayNight");
let body = document.querySelector("body");

// dark and light mode navigation
dayNight.onclick = function () {
  body.classList.toggle("dark");
  dayNight.classList.toggle("active");
};

// sticky navbar
window.onscroll = function () {
  stickyNavbar();
};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// menu-toggle-action
const navigation = document.querySelector(".navigation");
let menuToggle = document.querySelector(".menuToggle");

menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("nav-active");
};

function hideMenu() {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("nav-active");
}

// get system year for footer
const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;
