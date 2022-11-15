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