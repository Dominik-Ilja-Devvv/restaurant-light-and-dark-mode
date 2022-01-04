/* ==================== MENU SHOW ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu');
    });
  }
};
showMenu('nav__toggle', 'nav__menu');

// =================== REMOVE MENU MOBILE ==================== */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav__menu');
  navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/* ==================== SCROLL SECTIONS ACTIVE LINK ==================== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

/* ==================== CHANGE BACKGROUND HEADER ==================== */
function scrollHeader() {
  const nav = document.getElementById("header");

  // When the scoll is greater than 200 viewport height, add the scroll header class
  if (this.scrollY >= 200) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);


/* ==================== SHOW SCROLL TOP ==================== */
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");

  // When the scroll is higher than 560 viewport height, add the show-scroll class
  if (this.scrollY >= 560) {
    scrollTop.classList.add("show-scroll-top");
  } else {
    scrollTop.classList.remove("show-scroll-top");
  }
}
