const hamBurger = document.getElementById("hamburger");
const menuList = document.getElementById("menu");
const body = document.getElementById('body');

hamBurger.addEventListener('click', function () {
  menuList.classList.toggle('hidden')
  console.log("Menu Activated")
});
