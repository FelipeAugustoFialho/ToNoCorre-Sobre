const menu = document.querySelector("navMobile");
const list = document.querySelector('li');

const menuIcon = document.querySelector('.menu-icon');
const menuOptions = document.querySelector('.menu-options');


function toggleMenu() {
    menuOptions.classList.toggle('active');
}


menuIcon.addEventListener('click', toggleMenu);