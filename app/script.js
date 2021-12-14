const menu = document.querySelector('.header');
const humburger = document.querySelector('#humburger');
const closeMemu = document.querySelector('#close-menu');

// Add the Change-menu class to open the and close the mobile menu

humburger.addEventListener('click', () => {
  menu.classList.add('change-menu');
});

closeMemu.addEventListener('click', () => {
  menu.classList.remove('change-menu');
});

window.addEventListener('mouseup', (e) => {
  if (e.target !== humburger && e.target !== closeMemu) {
    menu.classList.remove('change-menu');
  }
});
