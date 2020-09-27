const slider = document.querySelector('.swiper-container');
const slider1 = document.querySelector('.swiper-container1');

let mySwiper = new Swiper(slider, {
  slidesPerView: 1,
  pagination: {
    el: '.pag1',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
});

let mySwiper1 = new Swiper(slider1, {
  slidesPerView: 1,
  pagination: {
    el: '.pag2',
    type: 'bullets',
    clickable: true,
  },
  slideToClickedSlide: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1170: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  loop: true,
});

lightbox.option({
  'resizeDuration': 300,
  'wrapAround': true,
  'disableScrolling': true
})
