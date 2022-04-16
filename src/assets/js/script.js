const openMenu = document.querySelector('.header__menu');
const closeMenu = document.querySelector('.menu__close');
const menu = document.querySelector('.header__nav');

openMenu.addEventListener('click', () => {
    menu.classList.add('header__nav--show');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('header__nav--show');
});

