const btnMenu = document.querySelector('.btn--menu');
const headerMenu = document.querySelector('.header__menu');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

const mobileMenu = function () {
   if (headerMenu.classList.contains('header-active')) {
      btnMenu.classList.remove('menu--active');
      btnMenu.setAttribute('aria-expanded', false);
      headerMenu.classList.remove('header-active');
      overlay.classList.remove('overlay-active');
      body.classList.remove('no-scroll');
   } else {
      btnMenu.classList.add('menu--active');
      btnMenu.setAttribute('aria-expanded', true);
      headerMenu.classList.add('header-active');
      overlay.classList.add('overlay-active');
      body.classList.add('no-scroll');
   }
};

btnMenu.addEventListener('click', mobileMenu);
overlay.addEventListener('click', mobileMenu);

document.addEventListener('keydown', function (e) {
   if (e.key === 'Escape') {
      mobileMenu();
   }
});

const form = document.querySelector('.footer__form');
const result = document.querySelector('.footer__form__result');
const emailSuccess = document.querySelector('.email-success');

form.addEventListener('submit', function (e) {
   e.preventDefault();
   const email = document.querySelector('#email');
   let re = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

   if (re.test(email.value)) {
      emailSuccess.classList.add('success');
      setTimeout(() => emailSuccess.classList.remove('success'), 1300);
      result.classList.remove('error');
      email.value = '';
   } else {
      result.classList.add('error');
   }
});

/** Sticky nav */
const hero = document.querySelector('#hero');
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
console.log(headerHeight);
const stickyNav = function (entries) {
   const [entry] = entries;

   if (!entry.isIntersecting) {
      header.classList.add('header-scroll');
   } else {
      header.classList.remove('header-scroll');
   }
};

const heroObserver = new IntersectionObserver(stickyNav, {
   root: null,
   threshold: 0,
   rootMargin: `-${headerHeight}px`,
});

heroObserver.observe(hero);

/**** Slider */

const slides = document.querySelectorAll('.sliders__slide');
const sliderContainer = document.querySelector('.sliders__slider');
const dotsContainer = document.querySelector('.dots');
const maxSlides = slides.length;
let currentSlide = 0;

const createDots = function () {
   slides.forEach(function (_, i) {
      dotsContainer.insertAdjacentHTML(
         'beforeend',
         `<button class="dots__dot" data-slide="${i - 1}"></button>`
      );
   });
};

createDots();

const activateDots = function (slide) {
   document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

   document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
};

activateDots(0);

const goToSlides = function (s) {
   slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - s)}%)`;
   });
};

goToSlides(0);

const nextSlide = function () {
   currentSlide === maxSlides - 2 ? (currentSlide = 0 - 1) : currentSlide++;
   goToSlides(currentSlide);
   activateDots(currentSlide);
};

const prevSlides = function () {
   currentSlide === 0 - 1 ? (currentSlide = maxSlides - 2) : currentSlide--;
   goToSlides(currentSlide);
   activateDots(currentSlide);
};

document.addEventListener('keydown', function (e) {
   console.log(e.key);
   if (e.key === 'ArrowRight' || e.key === 'd') {
      nextSlide();
   }

   if (e.key === 'ArrowLeft' || e.key === 'a') {
      prevSlides();
   }
});

dotsContainer.addEventListener('click', function (e) {
   if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlides(slide);
      activateDots(slide);
   }
});

// Touch mobile for slider
sliderContainer.addEventListener(
   'touchstart',
   function (ev) {
      console.log(ev.touches);
      let clientX, clientY;
      clientX = ev.touches[0].clientX;
      clientY = ev.touches[0].clientY;
      console.log(clientX, clientY);
      clientX <= 190 ? prevSlides() : nextSlide();
   },
   false
);

/**
 * Intersection Observer
 */
const allSection = document.querySelectorAll('.section');

const sectionAnimation = function (entries, observer) {
   const [entry] = entries;
   if (!entry.isIntersecting) return;

   entry.target.classList.remove('section--hidden');
   observer.unobserve(entry.target);
};
const sectionObserve = new IntersectionObserver(sectionAnimation, {
   root: null,
   threshold: 0,
});

allSection.forEach(section => {
   section.classList.add('section--hidden');
   sectionObserve.observe(section);
});
