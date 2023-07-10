var anim_up = document.querySelectorAll('.anim_up');
var anim_down = document.querySelectorAll('.anim_down');
var anim_left = document.querySelectorAll('.anim_left');
var anim_right = document.querySelectorAll('.anim_right');

document.getElementById('up').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    showUp();
    showDown();
    showLeft();
    showRight();

    var scrollButton = document.getElementById('up');
    if (window.pageYOffset > 0) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
  });

  
  function showUp() {
    
    anim_up.forEach(box => {
        const boxPosition = box.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (boxPosition < windowHeight) {
          box.classList.add('show');
        }
    });
  }
  
  function showDown() {
    anim_down.forEach(box => {
        const boxPosition = box.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (boxPosition < windowHeight) {
          box.classList.add('show');
        }
    });
  }
  
  function showLeft() {
    anim_left.forEach(box => {
        const boxPosition = box.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (boxPosition < windowHeight) {
          box.classList.add('show');
        }
    });
  }
  
  function showRight() {
    anim_right.forEach(box => {
        const boxPosition = box.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (boxPosition < windowHeight) {
          box.classList.add('show');
        }
    });
  }

$(document).ready(function() {
    $('#main_modal').hide();
    // Прикрепляем клик по заголовкам acc-head
    $('#accordeon .head').on('click', f_acc);

    $('#burger').on('click', function() {
        $('#menu').addClass('show');
    });

    $('#cross').on('click', function() {
        $('#menu').removeClass('show');
    });

    $('.cross1').on('click', function() {
        $('#main_modal').fadeOut();
        $('#modal').fadeOut();
        $('#modal_thx').fadeOut();
        $('body').removeClass('over');
    });

    $('.modal_send').on('click', function() {
        $('#main_modal').fadeIn();
        $('#modal').show();
        $('body').addClass('over');
    });

    $('#send_ok').on('click', () => {
        location.reload();
    });

    $('#modal_form').submit(function(e) {
        e.preventDefault(); // Отмена отправки формы по умолчанию
        $('#modal').hide();
        $('#modal_thx').fadeIn();

        // var formData = $(this).serialize(); // Сериализация данных формы

        // Отправка данных формы через AJAX
        // $.ajax({
        //     type: 'POST',
        //     url: 'обработчик.php', // Замените на URL вашего обработчика на сервере
        //     data: formData,
        //     success: function(response) {
        //         // Открытие модального окна с результатами
        //         $('#myModal').css('display', 'block');
        //     },
        //     error: function(xhr, status, error) {
        //         console.log(xhr.responseText);
        //     }
        // });
    });

    $('#form1').submit(function(e) {
        e.preventDefault(); // Отмена отправки формы по умолчанию
        location.href = '/thanks.html';

        // var formData = $(this).serialize(); // Сериализация данных формы

        // Отправка данных формы через AJAX
        // $.ajax({
        //     type: 'POST',
        //     url: 'обработчик.php', // Замените на URL вашего обработчика на сервере
        //     data: formData,
        //     success: function(response) {
        //         // Открытие модального окна с результатами
        //         $('#myModal').css('display', 'block');
        //     },
        //     error: function(xhr, status, error) {
        //         console.log(xhr.responseText);
        //     }
        // });
    });

    $('#form2').submit(function(e) {
        e.preventDefault(); // Отмена отправки формы по умолчанию
        location.href = '/thanks.html';

        // var formData = $(this).serialize(); // Сериализация данных формы

        // Отправка данных формы через AJAX
        // $.ajax({
        //     type: 'POST',
        //     url: 'обработчик.php', // Замените на URL вашего обработчика на сервере
        //     data: formData,
        //     success: function(response) {
        //         // Открытие модального окна с результатами
        //         $('#myModal').css('display', 'block');
        //     },
        //     error: function(xhr, status, error) {
        //         console.log(xhr.responseText);
        //     }
        // });
    });

    $('#to_main').on('click', () => {
        location.href = '/index.html';
    });
    showUp();
    showDown();
    showLeft();
    showRight();

    //Скролл до якорей
    $("[data-scroll]").on("click", function() {
        $("#menu").removeClass("show");
        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;
    
        $("html, body").animate({
            scrollTop: blockOffset
        }, 1000);
    });
});

// $(window).on('scroll load', function() {
//     showUp();
//     showDown();
//     showLeft();
//     showRight();
//   });
  
//   function showUp() {
//     $('.anim_up').each(function() {
//       var boxPosition = $(this).offset().top;
//       var windowHeight = $(window).height();
//       if (boxPosition < windowHeight) {
//         $(this).addClass('show');
//       }
//     });
//   }
  
//   function showDown() {
//     $('.anim_down').each(function() {
//       var boxPosition = $(this).offset().top;
//       var windowHeight = $(window).height();
//       if (boxPosition < windowHeight) {
//         $(this).addClass('show');
//       }
//     });
//   }
  
//   function showLeft() {
//     $('.anim_left').each(function() {
//       var boxPosition = $(this).offset().top;
//       var windowHeight = $(window).height();
//       if (boxPosition < windowHeight) {
//         $(this).addClass('show');
//       }
//     });
//   }
  
//   function showRight() {
//     $('.anim_right').each(function() {
//       var boxPosition = $(this).offset().top;
//       var windowHeight = $(window).height();
//       if (boxPosition < windowHeight) {
//         $(this).addClass('show');
//       }
//     });
//   }


function f_acc() {
    // Если заголовок уже имеет класс "active", то убираем его и скрываем соответствующий блок
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).next().slideUp(500);
    } else {
        // Убираем класс "active" у всех заголовков
        $('#accordeon .head').removeClass('active');
        // Скрываем все блоки
        $('#accordeon .acc-body').slideUp(500);
        // Открываем блок под заголовком, по которому кликнули, и добавляем класс "active"
        $(this).next().slideToggle(500);
        $(this).addClass('active');
    }
}