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

const modalContainer = document.querySelector('.detailMode')
const seeProjectBtn = document.querySelector('.see-project-2')
const closeDetailBtn = document.querySelector('.close-btn-detail')

seeProjectBtn.addEventListener('click', () => {
  modalContainer.style.display = 'block';
});

closeDetailBtn.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});
