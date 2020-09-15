$(function () {

  const disableScroll = function (){
    $("body, html").css("overflow", "hidden");
    $('.popup-window').css("overflow", "auto")};
    
  const enableScroll = function (){
    $("body, html").css("overflow", "auto")};
  
  $('.offices__btn').on('click', function () {
    let value = $(this).parent().find('.offices__title').text();
    $('.popup__heading').text(value);
    $('#booking-desc').val(value);
    $('.popup-offices').fadeIn(800, disableScroll);

    });
    
  $('.tarif__action').on('click', function () {  
    $('.popup-tarif').fadeIn(800, disableScroll);
    });

  $('.popup-offices, .popup-tarif').on('click', function(event) {
    if(event.target == this) {
      $(this).fadeOut(500,enableScroll);
    }
  })

  $('.cancel-btn').on('click', function () {
    $('.popup-offices, .popup-tarif').fadeOut(500,enableScroll);
  });

  $('#nav-mobile').on('click', function(){
    if ($('.header__nav').is(':visible')) {
      $('.header__nav').fadeOut(300);
    } else {
      $('.header__nav').fadeIn(300);
    }
  });

  $('.cls-5').on('click', function(){
    $('.cls-5').removeClass('busy');
    $(this).addClass('busy');
    let idTab = $(this).parent().attr('id');
    $('#tarif-place__input').val(idTab);
  });
  // $('#fixed-place__input').on('change',function() {
  //   if ($(this).is(':checked')) {
  //     if ($('select').val() == 'Новичок') {
  //       // $('#sum') = 
  //     }
  //   }
  // });

  ( function( factory ) {
    if ( typeof define === "function" && define.amd ) {
  
      // AMD. Register as an anonymous module.
      define( [ "../widgets/datepicker" ], factory );
    } else {
  
      // Browser globals
      factory( jQuery.datepicker );
    }
  }( function( datepicker ) {
  
  datepicker.regional.ru = {
    closeText: "Закрыть",
    prevText: "&#x3C;Пред",
    nextText: "След&#x3E;",
    currentText: "Сегодня",
    monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
    "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
    monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
    "Июл","Авг","Сен","Окт","Ноя","Дек" ],
    dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
    dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
    dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
    weekHeader: "Нед",
    dateFormat: "dd.mm.yy",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: "" };
  datepicker.setDefaults( datepicker.regional.ru );
  
  return datepicker.regional.ru;
  
  } ) );

  $( ".datepicker" ).datepicker({
    firstDay: 1,
    defaultDate: null,
    minDate: 0,
    maxDate: "+3M"
    
  });

  // $( "#start-date" ).datepicker( "option", "defaultDate", +7 );
  // var currentDate = $( ".selector" ).datepicker( "getDate" );

  $('#tarif__select').change(function() {
      if ($(this).val() == 'Новичок') {
        $('.radio-newbie').show();
        $('.radio-week').hide();
        $('.radio-month').hide();
      } else if ($(this).val() == 'Гость') {
        $('.radio-newbie').hide();
        $('.radio-week').show();
        $('.radio-month').hide();
      } else {
        $('.radio-newbie').hide();
        $('.radio-week').hide();
        $('.radio-month').show();
      }
  });

  

  $('input[type="tel"]').inputmask({ "mask": "+7 (999) 999-9999" });
  // $('input[type="date"]').inputmask("99/99/9999");


  $('.tarif-nav__list a').on('click', function (e) {
    e.preventDefault();

    $('.tarif-nav__list a').removeClass('active');
    $(this).addClass('active');

    let href = $(this).attr('href');
    $('.tarif-pane').removeClass('active').removeClass('in');
    $(href).addClass('active');

    setTimeout(function () {
      $(href).addClass('in');
    }, 300);
  });

  $('.cls-4').on('click', function () {
    let idTab = $(this).parent().attr('id');
    console.log(idTab);
  });
  

  // $('#room-C').on('hover', function (){
  //   $('.room-c').show();
  // });
  
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var mySwiper = new Swiper('.gallery-container', {
    slidesPerView: '1',
    loop: true,
    autoplay: {
      delay: 5000,
    },
    spaceBetween: 20,
    // autoHeight: true,
    // centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
    
  });

  $('form').each(function () {
    $(this).validate({
      errorPlacement(error, element) {
        return true;
      },
      // focusInvalid: false,
      rules: {
        Телефон: {
          required: true,
          minlength: 17,
        },
        Имя: {
          required: true,
          minlength: 2,
        },
        Сообщение: {
          required: true,      
        }
      },
      messages: {
        Телефон: {
          required: 'Вы забыли телефон',
          minlength: 'Проверьте кол-во цифр',
        },
        Имя: {
          required: 'Представьтесь пожалуйста',
          minlength: 'Минимум 2 буквы'
        },
        Сообщение: {
          required: 'Это поле обязательно для заполнения'
        }
      },
      submitHandler(form) {
        let th = $(form);

        $.ajax({
          type: 'POST',
          url: '/mail.php',
          data: th.serialize(),
          // eslint-disable-next-line func-names
        }).done(() => {
          alert('Сообщение отправлено!');
          th.trigger('reset');
        });

        return false;
      }
    });
  });

  // $('#fixed-place').on('click',function(){
  //   if ($('#fixed-place').is(':checked')) {
  //     console.log('1');
  //     $('.tarif__price').text("от 1000 рублей");
  //   }
  // });

});