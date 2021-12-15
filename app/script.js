const menu = document.querySelector('.header');
const humburger = document.querySelector('#humburger');
const closeMemu = document.querySelector('#close-menu');
// const main = document.querySelector('main');
// const html = document.querySelector('html');
// const CardContainer = document.querySelector('.card-container');
const mobileData = [
  // Array of data implenented in the popup window
  {
    id: 'project-1',
    title: "Tresor's Portofolio",
    images: './images/app_screenshot.png',
  },
  {
    techno: ['JavaScript', 'Html', 'Css', 'Github'],
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
let project = 0;
const sections = [];
const cards = [];

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

// Create the popup window
mobileData.forEach((asection) => {
  const section = document.createElement('div');
  const container = document.createElement('div');
  const filterBackground = document.createElement('div');
  const img = document.createElement('img');
  const closePop = document.createElement('div');
  const imgContainer = document.createElement('div');
  const heading2 = document.createElement('h2');
  const listElements = document.createElement('ul');
  const paragraph = document.createElement('p');
  const close = document.createElement('img');

  section.className = 'popupWindow';
  container.className = 'popupContainer';
  filterBackground.className = 'filterBackground';
  img.className = 'pop-image';
  closePop.className = 'closePop';
  heading2.className = 'heading2';
  listElements.className = 'cardBtns popBtn';
  imgContainer.className = 'popImgContainer';
  close.classList = 'close-icon';

  section.id = asection.id;
  img.src = asection.images.img;
  close.src = asection.images.closePop;
  paragraph.innerText = asection.images.id;
  heading2.innerText = asection.heading;

  section.appendChild(container);
  section.appendChild(filterBackground);
  container.appendChild(imgContainer);
  container.appendChild(heading2);
  container.appendChild(listElements);
  container.appendChild(paragraph);
  imgContainer.appendChild(img);
  imgContainer.appendChild(closePop);
  closePop.appendChild(close);

  let technoList = [];
  let buttonList = [];
  const successBtn = document.createElement('div');
  successBtn.className = 'see-btn';
  asection.listElements.forEach((el) => {
    const btn = document.createElement('a');
    btn.href = el.live;
    btn.innerHTML = `<span>${el.text}</span> <img src=${el.icon}>`;
    btn.className = 'card-see button-gren';
    buttonList.push(btn);
  });
  container.appendChild(successBtn);
  asection.techno.forEach((el) => {
    const li = document.createElement('li');
    li.innerHTML = `<button>${el}</button>`;
    technoList.push(li);
  });

  buttonList.forEach((abtn) => successBtn.appendChild(abtn));
  technoList.forEach((el) => successBtn.appendChild(el));
  buttonList = [];
  technoList = [];
  sections.push(section);
});
