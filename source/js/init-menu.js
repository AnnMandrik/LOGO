const mainNav = document.querySelector('.main-nav');
const mainNavToggle = document.querySelector('.header__toggle');
// const mainConteiner = document.querySelector('.main-container');

mainNav.classList.remove('main-nav--nojs');
mainNavToggle.classList.remove('header__toggle--nojs');
// mainConteiner.classList.remove('main-container--nojs');

const getMenuOpenClose = () => {
  mainNavToggle.addEventListener('click', handleChangeMenuButton);
}

function handleChangeMenuButton() {
  if (mainNav.classList.contains('main-nav--closed') && mainNavToggle.classList.contains('header__toggle--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNavToggle.classList.remove('header__toggle--closed');
    mainNav.classList.add('main-nav--opened');
    mainNavToggle.classList.add('header__toggle--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNavToggle.classList.add('header__toggle--closed');
    mainNav.classList.remove('main-nav--opened');
    mainNavToggle.classList.remove('header__toggle--opened');
  }
}


export {getMenuOpenClose};
