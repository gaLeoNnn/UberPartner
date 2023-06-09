const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuItem = document.querySelectorAll(".menu__item");
console.log(menuItem);
hamburger.addEventListener("click", (e) => {
  hamburger.classList.toggle("hamburger__active");
  menu.classList.toggle("menu__active");
});
