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
      img: './images/Portfolio2.png',
      closePop: './images/icons/Close_icon_dark.png',
    },
    techno: ['Html', 'Css', 'Javascript'],
    heading: "Tresor's Portfolio",
    list: [
      {
        icon: './images/icons/IconExport.svg',
        text: 'See Live',
        live: 'https://tresorsawasawa.github.io/My_Portfolio/',
      },
      {
        text: 'See Source',
        icon: './images/icons/IconGitHub.svg',
        live: 'https://github.com/tresorsawasawa/My_Portfolio',
      },
    ],
    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus at illo explicabo voluptatum maiores eum exercitationem fugit? In, nobis asperiores!',
  },
  {
    id: 'project2',
    secondTitle: "Tresor's Portfolio",
    images: {
      img: './images/bg-image.png',
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
      img: './images/bg-image.png',
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
      img: './images/bg-image.png',
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
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum consequatur officia cumque sit at voluptates, suscipit explicabo repudiandae fugit enim eveniet, perspiciatis voluptate debitis quasi odio recusandae quibusdam porro vel non iste. Neque alias voluptate exercitationem accusantium blanditiis veritatis incidunt aperiam, veniam ex facere cum autem tenetur, repudiandae rem sint.',
  },
  {
    id: 'project5',
    secondTitle: "Tresor's Portfolio",
    images: {
      img: './images/bg-image.png',
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
      img: './images/bg-image.png',
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
let project = 1;
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
  paragraph.className = 'project-msg';
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

// Implememtation of the flex card
mobileData.forEach((asection) => {
  const list = document.createElement('li');
  list.innerHTML = `<div class="card">
  <div class="image"><div class="project-bg"></div><img class="project-img" src='${asection.images.img}'></div>
    <div class="card-info">
      <h2>${asection.secondTitle}</h2>
      <ul class="card-buttons">
        ${asection.techno.map((atechno) => `<li>
          <button type="button">${atechno}</button>
        </li>`).join('')}
      </ul>
      <button type="button" id="show-popup" class="card-see button-gren show-popup" > See Project </button>
    </div>
  </div>`;
  cards.push(list);
});

// Filteration of popup window data using project "id's"
cards.forEach((card) => {
  CardContainer.appendChild(card);
  const button = card.querySelector('#show-popup');
  button.id = `project${project}`;
  project += 1;
  button.addEventListener('click', () => {
    const displaySection = sections.filter((section) => section.id === button.id);
    main.appendChild(displaySection[0]);
    html.classList.add('scrolHtml');
  });
});

// Client validation inputs

// const contactForm = document.querySelector('.form-container');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputComment = document.querySelector('#message');
// const myData = {};

function putErrorContainer(input) {
  const parent = input.parentElement;
  const div = document.createElement('div');
  div.className = 'error';
  parent.appendChild(div);
}

putErrorContainer(inputName);
putErrorContainer(inputEmail);
putErrorContainer(inputComment);

// Implement Error message

function showError(input) {
  const errorContainer = input.parentElement;
  const errorText = errorContainer.querySelector('div');
  errorText.innerHTML = `Please this '${input.name}' form is required`;
}

// Implement Success message

function success(input) {
  const parent = input.parentElement;
  const div = parent.querySelector('div');
  div.innerHTML = '';
}

// Impement Validation function
function inputValidation() {
  const inputNameValue = inputName.value.trim();
  const inputEmailValue = inputEmail.value.trim();
  const inputCommentValue = inputComment.value.trim();

  const emailText = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  const IsEmailValid = emailText.test(inputEmailValue);

  if (inputNameValue === '') {
    showError(inputName);
  } else {
    success(inputName);
  }

  if (inputEmailValue === '') {
    showError(inputEmail);
    span.classList.remove('remove');
    span.innerText = 'Invalid, Email is required';
  } else if (!IsEmailValid) {
    span.classList.remove('remove');
    span.innerText = 'Kindly check your email';
    span.style.color = '#d1220e';
    const div = inputEmail.parentElement.querySelector('div');
    div.innerText = 'Check your email please, the email should be VALID and in LOWERCASE';
    div.style.color = '#d1220e';
  } else {
    span.classList.add('remove');
    success(inputEmail);
  }

  if (inputCommentValue === '') {
    showError(inputComment);
  } else {
    success(inputComment);
  }
}

