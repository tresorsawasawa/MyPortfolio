const menu = document.querySelector('.header');
const hamburger = document.querySelector('#humburger');
const closeMenu = document.querySelector('#close-menu');

hamburger.addEventListener('click', () => {
  menu.classList.add('change-menu');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('change-menu');
});

window.addEventListener('mouseup', (e) => {
  if (e.target !== hamburger && e.target !== closeMenu) {
    menu.classList.remove('change-menu');
  }
});
