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

const project1Container = document.getElementById('project-1');
const overlay = document.getElementById('overlay');
const modalElement = document.querySelectorAll('.d-none-modal');
const closeBtnModal = document.querySelector('.close-btn-modal');
const title = document.querySelector('.project h2');
const snap = document.querySelector('.project img.snap')
const cardDescription = document.querySelector('.project p')
const openBtn = document.querySelectorAll('.project .button.detail')
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
    linkToLiveVersion : '#',
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
    linkToLiveVersion : '#',
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
    linkToLiveVersion : '#',
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
    linkToLiveVersion : '#',
    linkToSource: '#',
  }
]

const originalContent = {
  name: 'Tonic',
  description: `A daily selection of privately personalized
    reads; no accounts or sign-ups required.`,
  technologies: ['html', 'JavaScript', 'css'],
  image: 'img/Snapshoot Portfolio.svg',
  linkToLiveVersion : '#',
  linkToSource: '#',
}


function displayCard () {
  project1Container.classList.add('modal');
  overlay.classList.add('modal');
  for (let i = 0; i < modalElement.length; i++) {
    modalElement[i].classList.remove('d-none-modal');
  }
}

function hideCard () {
  project1Container.classList.remove('modal');
  overlay.classList.remove('modal');
  for (let i = 0; i < modalElement.length; i++) {
    modalElement[i].classList.add('d-none-modal');
  }
}

function cardContent(event) {
  let i = (event.slice(12))-1;
  title.textContent = projects[i].name;
  snap.setAttribute('src', projects[i].image);
  cardDescription.textContent = projects[i].description;
}

function originalCard() {
  title.textContent = originalContent.name;
  snap.setAttribute('src', originalContent.image);
  cardDescription.textContent = originalContent.description;
}

function elementEvent (element) {
  element.addEventListener('click', () => {
    displayCard();
    cardContent(event.target.id);
  })
}

openBtn.forEach( element => {
  elementEvent(element);
});

closeBtnModal.addEventListener('click', () => {
  hideCard();
  originalCard();
});
