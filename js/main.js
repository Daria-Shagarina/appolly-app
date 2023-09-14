var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 100,
      stretch: 0,
      depth: 100,
      modifier: 0,
      slideShadows: true,
    },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

  const menuBtn = document.querySelector('.menu__btn');
  const menuMobile = document.querySelector('.header__menu-list');
  menuBtn.addEventListener('click', ()=> {
    menuMobile.classList.toggle('menu--open');
  })




