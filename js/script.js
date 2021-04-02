$(document).ready(function() {
  $('.header__burger').click(function(event) {// при клике на бургер
    $('.header__burger,.header__menu').toggleClass('active');// бургеру и меню добавить класс .active
    $('body').toggleClass('lock');//добавили к body класс .lock
  });
  $('.header__menu').click(function(){// при клике на menu
    $('.header__burger, .header__menu').removeClass('active');// можно закрыть если нажать на что то друго кроме ссылки
    $('body').removeClass('lock'); //  убираем класс .lock
  });

  $('.content-feedback__open_circle').click(function(event) {// при клике на круг
    $('.content-feedback__open_circle,.content-feedback__form,.content-feedback-body').toggleClass('active');// добавляем класс .active
  });
  $('.content-feedback__form-close').click(function(){// при клике на крестик
    $('.content-feedback__open_circle,.content-feedback__form,.content-feedback-body').removeClass('active');// убираем класс .active
  });
});

    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
       var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
