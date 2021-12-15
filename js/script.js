const menu = document.querySelector('.header');
const humburger = document.querySelector('#humburger');
const closeMemu = document.querySelector('#close-menu');
const main = document.querySelector('main');
const html = document.querySelector('html');
const CardContainer = document.querySelector('.card-container');
const mobileData = [
  // Array of data implenented in the popup window
  {
    id: 'project1',
    secondTitle: "Tresor's Portfolio",
    images: {
      img: './images/Snapshoot-Portfolio.png',
      closePop: './images/icons/Close_icon_dark.png',
    },
    techno: ['Ruby on rails', 'Css', 'Javascript', 'Html'],
    heading: "Tresor's Portfolio",
    list: [
      {
        icon: './images/icons/IconExport.svg',
        text: 'See Live',
        live: 'https://tresorsawasawa.github.io/MyPortfolio/',
      },
      {
        text: 'See Source',
        icon: './images/icons/IconGitHub.svg',
        live: 'https://github.com/tresorsawasawa/MyPortfolio',
      },
    ],
    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus at illo explicabo voluptatum maiores eum exercitationem fugit? In, nobis asperiores!',
  },
  {
    id: 'project2',
    secondTitle: "Tresor's Portfolio",
    images: {
      img: './images/Snapshoot-Portfolio.png',
      closePop: './images/icons/Close_icon_dark.png',
    },
    techno: ['Ruby on rails', 'Css', 'Javascript', 'Html'],
    heading: "Tresor's Portfolio",
    list: [
      {
        icon: './images/icons/IconExport.svg',
        text: 'See Live',
        live: 'https://tresorsawasawa.github.io/MyPortfolio/',
      },
      {
        text: 'See Source',
        icon: './images/icons/IconGitHub.svg',
        live: 'https://github.com/tresorsawasawa/MyPortfolio',
      },
    ],
    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus at illo explicabo voluptatum maiores eum exercitationem fugit? In, nobis asperiores!',
  },
  {
    id: 'project3',
    secondTitle: "Tresor's Portfolio",
    images: {
      img: './images/Snapshoot-Portfolio.png',
      closePop: './images/icons/Close_icon_dark.png',
    },
    techno: ['Ruby on rails', 'Css', 'Javascript', 'Html'],
    heading: "Tresor's Portfolio",
    list: [
      {
        icon: './images/icons/IconExport.svg',
        text: 'See Live',
        live: 'https://tresorsawasawa.github.io/MyPortfolio/',
      },
      {
        text: 'See Source',
        icon: './images/icons/IconGitHub.svg',
        live: 'https://github.com/tresorsawasawa/MyPortfolio',
      },
    ],
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    id: 'project4',
    secondTitle: "Tresor's Portfolio",
    images: {
      img: './images/Snapshoot-Portfolio.png',
      closePop: './images/icons/Close_icon_dark.png',
    },
    techno: ['Ruby on rails', 'Css', 'Javascript', 'Html'],
    heading: "Tresor's Portfolio",
    list: [
      {
        icon: './images/icons/IconExport.svg',
        text: 'See Live',
        live: 'https://tresorsawasawa.github.io/MyPortfolio/',
      },
      {
        text: 'See Source',
        icon: './images/icons/IconGitHub.svg',
        live: 'https://github.com/tresorsawasawa/MyPortfolio',
      },
    ],
    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus at illo explicabo voluptatum maiores eum exercitationem fugit? In, nobis asperiores!',
  },
  {
    id: 'project5',
    secondTitle: "Tresor's Portfolio",
    images: {
      img: './images/Snapshoot-Portfolio.png',
      closePop: './images/icons/Close_icon_dark.png',
    },
    techno: ['Ruby on rails', 'Css', 'Javascript', 'Html'],
    heading: "Tresor's Portfolio",
    list: [
      {
        icon: './images/icons/IconExport.svg',
        text: 'See Live',
        live: 'https://tresorsawasawa.github.io/MyPortfolio/',
      },
      {
        text: 'See Source',
        icon: './images/icons/IconGitHub.svg',
        live: 'https://github.com/tresorsawasawa/MyPortfolio',
      },
    ],
    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus at illo explicabo voluptatum maiores eum exercitationem fugit? In, nobis asperiores!',
  },
  {
    id: 'project6',
    secondTitle: "Tresor's Portfolio",
    images: {
      img: './images/Snapshoot-Portfolio.png',
      closePop: './images/icons/Close_icon_dark.png',
    },
    techno: ['Ruby on rails', 'Css', 'Javascript', 'Html'],
    heading: "Tresor's Portfolio",
    list: [
      {
        icon: './images/icons/IconExport.svg',
        text: 'See Live',
        live: 'https://tresorsawasawa.github.io/MyPortfolio/',
      },
      {
        text: 'See Source',
        icon: './images/icons/IconGitHub.svg',
        live: 'https://github.com/tresorsawasawa/MyPortfolio',
      },
    ],
    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus at illo explicabo voluptatum maiores eum exercitationem fugit? In, nobis asperiores!',
  },
];
// let project = 1;
// const sections = [];
// const cards = [];

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
  const section = document.createElement('section');
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
  listElements.className = 'card-buttons popBtn';
  imgContainer.className = 'popImgContainer';
  close.classList = 'close-icon';

  section.id = asection.id;
  img.src = asection.images.img;
  close.src = asection.images.closePop;
  paragraph.innerText = asection.paragraph;
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
  asection.list.forEach((element) => {
    const btn = document.createElement('a');
    btn.href = element.live;
    btn.innerHTML = `<span>${element.text}</span> <img src=${element.icon}>`;
    btn.className = 'card-see button-gren';
    buttonList.push(btn);
  });
  container.appendChild(successBtn);
  asection.techno.forEach((element) => {
    const li = document.createElement('li');
    li.innerHTML = `<button class="button">${element}</button>`;
    technoList.push(li);
  });

  buttonList.forEach((abtn) => successBtn.appendChild(abtn));
  technoList.forEach((element) => listElements.appendChild(element));
  buttonList = [];
  technoList = [];
  sections.push(section);
  closePop.addEventListener('click', () => {
    const child = main.children[3];
    html.classList.add('anim-popup');
    setTimeout(() => {
      html.classList.remove('anim-popup');
      html.classList.remove('scrollHtml');
      main.removeChild(child);
    }, 500);
  });
});
