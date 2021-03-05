// // menu-navigation // Делел по 1-й лекции Сергея Шаляпина

// const menu = document.getElementById('nav-menu');
// const navMenuLincs = document.querySelectorAll('#nav-menu a');

// menu.addEventListener('click', (event) => {
//   menu.querySelectorAll('#nav-menu a').forEach(el => el.classList.remove('active'));
//     event.target.classList.add('active');
// });



// // menu-navigation-scrolling function // Делал по лекции 2 Сергея Шаляпина (от 17 марта)
// const menu = document.getElementById('nav-menu');


document.addEventListener('scroll', onScroll);

function onScroll(eventScroll) {
    // console.log(eventScroll); // работает
  const curPos = window.scrollY;
    // console.log(curPos); // работает

  const menuLink = document.querySelectorAll('.menu-link'); //выбираем элементы с классом меню-линк (якоря) -- Работает выводит 3 элемента
  const navMenuLincs = document.querySelectorAll('#nav-menu a'); //выбираем ссылки из меню-навигации -- Работает выводит 5 ссылок

  // Для элемнтов с классом меню-линк, хочу вывести их id - работает
  menuLink.forEach((elMenuId) => {
      // console.log(elMenuId);
      //  debugger;
      // elMenuId.getAttribute('id'); // - выводит id элементов - работает


      if (elMenuId.offsetTop - 77 <= curPos && (elMenuId.offsetTop + elMenuId.offsetHeight) - 77 > curPos) {
        navMenuLincs.forEach((a) => {
          a.classList.remove('active');
          if (elMenuId.getAttribute('id') === a.getAttribute('href').substring(1)) {
            a.classList.add('active');
          }
        })
      }
    });
}


// menu-portfolio

PORTFOLIO.addEventListener('click', (eventClick) => {
  if (eventClick.target.classList.contains("button_borderd")) {
      PORTFOLIO.querySelectorAll('button').forEach(el => el.classList.remove('button_borderd_active'));
      if (eventClick.target.classList.contains("button_borderd")) {
          eventClick.target.classList.add('button_borderd_active');
      }
  }
});



// // slider-skript // -- не работает

// (function () {

//   var doc = document,
//       index = 1;

//   var Slider = function () {
//       this.box = doc.querySelector('.slider-container');
//       this.slidesBox = doc.querySelectorAll('.slider-line');
//       this.slides = doc.querySelectorAll('.slide');
//       this.btns = doc.querySelectorAll('.btn');
//       this.size = this.box.clientWidth;

//       this.position();
//   };

//   Slider.prototype.position = function () {
//       var size = this.size;
//       this.slidesBox.style.transform = 'translateX(' + (- index * size) + 'px)';
//   };

//   new Slider ();

// })();
