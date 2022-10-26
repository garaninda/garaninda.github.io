const slider = document.querySelector('.swiper-container');
const header = document.getElementById("sticky-header");
const sticky = header.offsetTop;

window.addEventListener('scroll', function () {
  stickMenu();
});

function stickMenu() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

const modal = new Modal();

let mySwiper = new Swiper(slider, {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {

    600: {
      slidesPerView: 2,
      spaceBetween: 35,

    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

slider.addEventListener("mouseover", function () {
  mySwiper.autoplay.stop();
});

slider.addEventListener("mouseout", function () {
  mySwiper.autoplay.start();
});


const addClassToLetters = () => {
  document.querySelectorAll('.letters').forEach(el => {
    el.classList.add('after-load');
  });
}

document.addEventListener('DOMContentLoaded', () => {
     
  setTimeout( addClassToLetters, 800);
  
  const menuBtn = document.querySelector('.header-burger-btn');

  menuBtn.addEventListener('click', () => {
    if(menuBtn) {
      menuBtn.classList.toggle('change');
      document.querySelector('.header__nav').classList.toggle('menu--visible');
    }
  });

});
  
$(function () {

  $('a[href^="#"').on('click', function () {

    let href = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 300);
    return false;
  });

  $('input[type="tel"]').inputmask({
    "mask": "+7 (999) 999-9999"
  });

  $('form').each(function () {
    $(this).validate({
      rules: {
        Имя: {
          required: true,
          minlength: 2
        },
        Телефон: {
          required: true,
        },
        'E-mail': {
          required: true,
          email: true,
        }
      },
      messages: {
        Имя: {
          required: "Укажите имя",
          minlength: "Минимум 2 символа"
        },
        Телефон: {
          required: "Введите номер телефона",
        },
        'E-mail': {
          required: "Введите e-mail",
          email: "Не похоже на e-mail",
        }
      },

      submitHandler(form) {
        let th = $(form);

        if (th.find($('input[type="checkbox"]')).is(':checked')) {

          $.ajax({
            type: 'POST',
            url: '/mail.php',
            data: th.serialize(),
          }).done(() => {
            th.trigger('reset');
            modal.close();
            modal.modalContainer = document.querySelector(`[data-target="thanks"]`);
            modal.open();
          });

          return false;

        } else th.find($('input[type="checkbox"]')).parent().css({
          color: 'red'
        });

      }
    });

  });

});
