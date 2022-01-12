const navLinks = document.getElementById("navLinks");
const bars = document.getElementById("bars");
const close = document.getElementById("close");
const closebutton = document.querySelector('.fa-times');
const barbutton = document.querySelector('.fa-bars');
const about = document.getElementById("about"); 
const homepage = document.getElementById("container");
const home = document.getElementById("home");
const abtMe = document.querySelector(".abt_me");

function showMenu() {
  navLinks.style.right = "0";
  bars.style.display = "none";
  myButton.style.transform = 'translateY(-200px)';
}
function hideMenu() {
  navLinks.style.right = "-200px";
  bars.style.display = "flex";
  myButton.style.transform = 'translateY(0px)';
}

closebutton.addEventListener('click', hideMenu);
barbutton.addEventListener('click', showMenu);

about.addEventListener('click', () => {
  homepage.style.display = "none";
  abtMe.style.display = "block";
})

home.addEventListener('click', () => {
  homepage.style.display = "block";
  abtMe.style.display = "none";
})