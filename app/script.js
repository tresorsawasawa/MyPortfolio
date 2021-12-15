const menu = document.querySelector('.header');
const humburger = document.querySelector('#humburger');
const closeMemu = document.querySelector('#close-menu');
const main = document.querySelector('main');
const html = document.querySelector('html');
const CardContainer = document.querySelector('.card-container');
const mobileData = [
  // Array of data implenented in the popup window
  {
    id: 'project-1',
    title: "Tresor's Portofolio",
    images: './images/app_screenshot.png',
  },
  {
    techno: ['JavaScript', 'Html', 'Css', 'Github', 'Boostrap', 'Terminal'],
    heading: "Tresor's Portofolio",
    list: [
      {
        icon: './images/icons/IconExport',
        text: 'See live',
        live: 'https://tresorsawasawa.github.io/MyPortfolio',
      },
      {
        icon: './images/icons/IconGithub',
        text: 'See Source',
        live: 'https://tresorsawasawa.github.io/MyPortfolio',
      },
    ],
    paragraph: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium exercitationem aliquam tenetur incidunt temporibus!',
  },
];

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

