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

const projects = [
  {
    name: 'To-do list',
    description: `I created a To-do list website with a really nice UX using 
    webpack that let you create a list that is saved in the local storage of 
    your browser, let you mark them as completed and let erase them`,
    resume: `To do taks is a website that allows you to create a list of task 
    that you want to save online.`,
    image: 'img/todo-list.png',
    technologies: ['html', 'JavaScript', 'css'],
    linkToLiveVersion: 'https://shinhyobelok.github.io/To-do-list/',
    linkToSource: 'https://github.com/ShinhyoBelok/To-do-list',
    dot: 'img/Counter.svg',
    canopyli1: 'Back End Dev',
    canopyli2: '2015',
    projectLanguages: [
      'html', 'css', 'javaScript',
    ],
    btnId: 'see-project-1',
    contentDirection: '',
  },

  {
    name: 'Multi-Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s, when an unknown printer 
      took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into 
      electronic typesetting, remaining essent`,
    resume: `A daily selection of privately personalized reads; 
      no accounts or sign-ups required.`,
    image: 'img/Snapshoot Portfolio 2.svg',
    technologies: ['html', 'JavaScript', 'css'],
    linkToLiveVersion: '#',
    linkToSource: '#',
    dot: 'img/Counter.svg',
    canopyli1: 'Back End Dev',
    canopyli2: '2015',
    projectLanguages: [
      'html', 'css', 'javaScript',
    ],
    btnId: 'see-project-2',
    contentDirection: 'reverseGrid',
  },

  {
    name: 'Tonic',
    description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s, when an unknown printer 
      took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into 
      electronic typesetting, remaining essent`,
    resume: `A daily selection of privately personalized reads; 
      no accounts or sign-ups required.`,
    image: 'img/Snapshoot Portfolio 3.svg',
    technologies: ['html', 'JavaScript', 'css'],
    linkToLiveVersion: '#',
    linkToSource: '#',
    dot: 'img/Counter.svg',
    canopyli1: 'Back End Dev',
    canopyli2: '2015',
    projectLanguages: [
      'html', 'css', 'javaScript',
    ],
    btnId: 'see-project-3',
    contentDirection: '',
  },

  {
    name: 'Multi-Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s, when an unknown printer 
      took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into 
      electronic typesetting, remaining essent`,
    resume: `A daily selection of privately personalized reads; 
      no accounts or sign-ups required.`,
    image: 'img/Snapshoot Portfolio 4.svg',
    technologies: ['html', 'JavaScript', 'css'],
    linkToLiveVersion: '#',
    linkToSource: '#',
    dot: 'img/Counter.svg',
    canopyli1: 'Back End Dev',
    canopyli2: '2015',
    projectLanguages: [
      'html', 'css', 'javaScript',
    ],
    btnId: 'see-project-4',
    contentDirection: 'reverseGrid',
  },
];

const workSection = document.querySelector('#work');

function createProgrammingLanguages(x) {
  let list = '';
  for (let i = 0; i < projects[x].projectLanguages.length; i += 1) {
    list += `<li>${projects[x].projectLanguages[i]}</li>`;
  }
  return list;
}

for (let i = 0; i < projects.length; i += 1) {
  const projectCard = `
    <section class="project" id="project-${i}">
                  <img class="snap ${projects[i].contentDirection}" src="${projects[i].image}" alt="First project card picture">
                  <h2>${projects[i].name}</h2>
                  <section>
                      <ul class="canopy">
                          <li>CANOPY</li>
                          <li><img src="${projects[i].dot}" alt="Dot icon"></li>
                          <li><span class="lightgray">${projects[i].canopyli1}</span></li>
                          <li><img src="${projects[i].dot}" alt="Dot icon"></li>
                          <li><span class="lightgray">${projects[i].canopyli2}</span></li>
                      </ul>
                  </section>
                  <p>${projects[i].resume}</p>
                  <ul class="programmingLanguages">
                    ${createProgrammingLanguages(i)}
                  </ul>
                  <button class="button detail" id="${projects[i].btnId}">See Project</button>
              </section>
  `;
  workSection.innerHTML += projectCard;
}

workSection.innerHTML += `
  <section class="modal" id="popup-window">
    <header>
        <h2></h2>
        <button class="close-btn-modal"><img src="img/Icon-Cancel-detailmode.svg" alt="X"/></button>
    </header>
    <section>
        <ul class="canopy">
            <li>CANOPY</li>
            <li><img src="img/Counter.svg" alt="Dot icon"></li>
            <li><span class="lightgray">Back End Dev</span></li>
            <li><img src="img/Counter.svg" alt="Dot icon"></li>
            <li><span class="lightgray">2015</span></li>
        </ul>
    </section>
    <img class="snap" src="" alt="First project card picture">
    <article class="modal-description">
        <div class="side">
            <p></p>
        </div>
        <div class="side-description">
            <ul class="programmingLanguages">
                <li>html</li>
                <li>css</li>
                <li>javaScript</li>
            </ul>
            <section class="btnSection">
                <button class="button modal-btn"><a class="seeLive" href="">See live</a><img src="img/Icon - Export-btn.svg" alt="Export Icon"/></button>
                <button class="button modal-btn"><a class="seeSource" href="">See Source</a><img src="img/Icon -GitHub-btn.svg" alt="Github Icon"/></button>
            </section>
        </div>
    </article>
  </section>
  <div class="modal" id="overlay"></div>
`;
/* start dynamic modal */
const popupContainer = document.getElementById('popup-window');
const overlay = document.getElementById('overlay');
const closeBtnModal = document.querySelector('.close-btn-modal');
const title = document.querySelector('.modal h2');
const snap = document.querySelector('.modal img.snap');
const cardDescription = document.querySelector('.modal p');
const openBtn = document.querySelectorAll('.project .button.detail');
const seeLive = document.querySelector('.seeLive');
const seeSource = document.querySelector('.seeSource');

function cardContent(event) {
  const i = (event.slice(12)) - 1;
  title.textContent = projects[i].name;
  snap.setAttribute('src', projects[i].image);
  cardDescription.textContent = projects[i].description;
  seeLive.href = projects[i].linkToLiveVersion;
  seeSource.href = projects[i].linkToSource;
}

function elementEvent(element) {
  element.addEventListener('click', (event) => {
    cardContent(event.target.id);
    popupContainer.style.transform = 'scale(1)';
    overlay.style.transform = 'scale(1)';
  });
}

openBtn.forEach((element) => {
  elementEvent(element);
});

closeBtnModal.addEventListener('click', () => {
  popupContainer.style.transform = 'scale(0)';
  overlay.style.transform = 'scale(0)';
});
/* end dynamic modal */
/* start lower case error */
const form = document.querySelector('#contact-me-form');
const emailError = document.querySelector('small.error');

function showError() {
  emailError.textContent = 'Kindly only use lower case for the Email';
  emailError.classList.add('active');
}

function hideError() {
  emailError.textContent = '';
  emailError.classList.remove('active');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = form.email.value;
  if (email !== email.toLowerCase()) {
    showError();
  } else {
    hideError();
    form.submit();
  }
});

form.email.addEventListener('keyup', (event) => {
  event.preventDefault();
  if (event.target.value !== event.target.value.toLowerCase()) {
    showError();
  } else {
    hideError();
  }
});

/* end lower case error */