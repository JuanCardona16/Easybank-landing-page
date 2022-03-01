const menu = document.getElementById('menu');
const nav = document.getElementById('nav__link');

menu.addEventListener('click', () => {
  if (menu.src.includes('icon-hamburger.svg')) {
    menu.src = './images/icon-close.svg';
    nav.classList.add('is-active');
  } else {
    menu.src = './images/icon-hamburger.svg';
    nav.classList.remove('is-active');
  }
})