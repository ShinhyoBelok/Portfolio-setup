const openMenu = document.querySelector('.open-menu');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');
const navItems = document.querySelectorAll('.nav-item');

openMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
  openMenu.classList.toggle('hide');
  closeMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
  openMenu.classList.toggle('show');
  openMenu.classList.toggle('hide');
  closeMenu.classList.toggle('show');
});

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    menu.classList.toggle('active');
    openMenu.classList.toggle('show');
    openMenu.classList.toggle('hide');
    closeMenu.classList.toggle('show');
  });
});

const popupContainer = document.getElementById('popup-window');
const overlay = document.getElementById('overlay');
const closeBtnModal = document.querySelector('.close-btn-modal');
const title = document.querySelector('.modal h2');
const snap = document.querySelector('.modal img.snap');
const cardDescription = document.querySelector('.modal p');
const openBtn = document.querySelectorAll('.project .button.detail');
const projects = [
  {
    name: 'Tonic',
    description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s, when an unknown printer 
      took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into 
      electronic typesetting, remaining essent`,
    image: 'img/Snapshoot Portfolio.svg',
    technologies: ['html', 'JavaScript', 'css'],
    linkToLiveVersion: '#',
    linkToSource: '#',
  },

  {
    name: 'Multi-Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s, when an unknown printer 
      took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into 
      electronic typesetting, remaining essent`,
    image: 'img/Snapshoot Portfolio 2.svg',
    technologies: ['html', 'JavaScript', 'css'],
    linkToLiveVersion: '#',
    linkToSource: '#',
  },

  {
    name: 'Tonic',
    description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s, when an unknown printer 
      took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into 
      electronic typesetting, remaining essent`,
    image: 'img/Snapshoot Portfolio 3.svg',
    technologies: ['html', 'JavaScript', 'css'],
    linkToLiveVersion: '#',
    linkToSource: '#',
  },

  {
    name: 'Multi-Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s, when an unknown printer 
      took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into 
      electronic typesetting, remaining essent`,
    image: 'img/Snapshoot Portfolio 4.svg',
    technologies: ['html', 'JavaScript', 'css'],
    linkToLiveVersion: '#',
    linkToSource: '#',
  },
];

function cardContent(event) {
  const i = (event.slice(12)) - 1;
  title.textContent = projects[i].name;
  snap.setAttribute('src', projects[i].image);
  cardDescription.textContent = projects[i].description;
}

function elementEvent(element) {
  element.addEventListener('click', (event) => {
    popupContainer.style.transform = 'scale(1)';
    overlay.style.transform = 'scale(1)';
    cardContent(event.target.id);
  });
}

openBtn.forEach((element) => {
  elementEvent(element);
});

closeBtnModal.addEventListener('click', () => {
  popupContainer.style.transform = 'scale(0)';
  overlay.style.transform = 'scale(0)';
});
