import projectsData from './projectsData.js';

const main = document.querySelector('main');
const html = document.querySelector('html');
const CardContainer = document.querySelector('.card-container');
const sections = [];
const cards = [];
let project = 1;

// Create the popup window
projectsData.forEach((asection) => {
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

// Implementation of the flex card
projectsData.forEach((asection) => {
  const list = document.createElement('li');
  list.innerHTML = `<div class="card">
  <div class="image"><div class="project-bg"></div><img class="project-img" src='${
  asection.images.img
}' alt="${asection.secondTitle} Project screenshot"></div>
    <div class="card-info">
      <h2>${asection.secondTitle}</h2>
      <ul class="card-buttons">
        ${asection.techno
    .map(
      (atechno) => `<li>
          <button type="button">${atechno}</button>
        </li>`,
    )
    .join('')}
      </ul>
      <button type="button" id="show-popup" class="card-see button-gren show-popup" > See Project </button>
    </div>
  </div>`;
  cards.push(list);
});

// Filtration of popup window data using project "id's"
cards.forEach((card) => {
  CardContainer.appendChild(card);
  const button = card.querySelector('#show-popup');
  button.id = `project${project}`;
  project += 1;
  button.addEventListener('click', () => {
    const displaySection = sections.filter(
      (section) => section.id === button.id,
    );
    main.appendChild(displaySection[0]);
    html.classList.add('scrolHtml');
    document.body.style.overflow = 'hidden';
  });
});
