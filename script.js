// // menu-navigation // Делел по 1-й лекции Сергея Шаляпина

// const menu = document.getElementById('nav-menu');
// const navMenuLincs = document.querySelectorAll('#nav-menu a');

// menu.addEventListener('click', (event) => {
//   menu.querySelectorAll('#nav-menu a').forEach(el => el.classList.remove('active'));
//     event.target.classList.add('active');
// });



// // menu-navigation-scrolling function // Делал по лекции 2 (17 марта)
const menu = document.getElementById('nav-menu');
const navMenuLincs = document.querySelectorAll('#nav-menu a'); //выбираем ссылки из меню-навигации -- Работает выводит 5 ссылок
const menuLink = document.querySelectorAll('.menu-link'); //выбираем элементы с классом меню-линк (якоря) -- Работает выводит 3 элемента

document.addEventListener('scroll', onScroll);

function onScroll(eventScroll) {
  const curPos = window.scrollY;

  // Для элемнтов с классом меню-линк, хочу вывести id
  // с этого момента - не работает
    menuLink.forEach((elMenuLink) => {
      console.log(elMenuLink.getAttribute('id'));
      // debugger;
      elMenuLink.getAttribute('id');

      // if (elMenuLink.offsetTop <= curPos && (navMenuLink.offsetTop + navMenuLink.offSetHeight) > curPos) {
      //   document
      //   navMenuLincs.forEach((a) => {
      //     a.classList.remove('active');
      //     if (elNavMenuLink.getAttribute('id') === a.getAttribute('href').substring(1)) {
      //       a.classList.add('active');
      //     }
      //   });
      // }
      });
}





























// //   const divs = document.querySelectorAll('body,section');
// //   const links = document.querySelectorAll('#menu-nav a');

// //   divs.forEach((el) => {
//     if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
//       links.forEach((a) => {
//         a.classList.remove('active');
//         if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
//           a.classList.add('active');
//         }
//       })
//     }
//   });
// }

// jQuery(window).scroll(function(){
//     var $sections = $('section');

//     $sections.each(function(i,el){

//     var top  = $(el).offset().top-100;
//     var bottom = top +$(el).height();
//     var scroll = $(window).scrollTop();
//     var id = $(el).attr('id');

//     if( scroll > top && scroll < bottom){
//         $('a.active').removeClass('active');
//     $('a[href="#'+id+'"]').addClass('active');

//     }
//     })
//     });

//     $("nav").on("click","a", function (event) {
//     // исключаем стандартную реакцию браузера
//     event.preventDefault();

//     // получем идентификатор блока из атрибута href
//     var id  = $(this).attr('href'),

//     // находим высоту, на которой расположен блок
//         top = $(id).offset().top;

//     // анимируем переход к блоку, время: 800 мс
//     $('body,html').animate({scrollTop: top}, 800);
//     });

// menu-portfolio

PORTFOLIO.addEventListener('click', (eventClick) => {
  if (eventClick.target.classList.contains("button_borderd")) {
      PORTFOLIO.querySelectorAll('button').forEach(el => el.classList.remove('button_borderd_active'));
      if (eventClick.target.classList.contains("button_borderd")) {
          eventClick.target.classList.add('button_borderd_active');}
  }
});



// slider-skript

// 'use strict';
// var multiItemSlider = (function () {

//   function _isElementVisible(element) {
//     var rect = element.getBoundingClientRect(),
//       vWidth = window.innerWidth || doc.documentElement.clientWidth,
//       vHeight = window.innerHeight || doc.documentElement.clientHeight,
//       elemFromPoint = function (x, y) { return document.elementFromPoint(x, y) };
//     if (rect.right < 0 || rect.bottom < 0
//       || rect.left > vWidth || rect.top > vHeight)
//       return false;
//     return (
//       element.contains(elemFromPoint(rect.left, rect.top))
//       || element.contains(elemFromPoint(rect.right, rect.top))
//       || element.contains(elemFromPoint(rect.right, rect.bottom))
//       || element.contains(elemFromPoint(rect.left, rect.bottom))
//     );
//   }

//   return function (selector, config) {
//     var
//       _mainElement = document.querySelector(selector), // основный элемент блока
//       _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
//       _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
//       _sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
//       _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
//       _sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
//       _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
//       _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента
//       _positionLeftItem = 0, // позиция левого активного элемента
//       _transform = 0, // значение транфсофрмации .slider_wrapper
//       _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
//       _items = [], // массив элементов
//       _interval = 0,
//       _html = _mainElement.innerHTML,
//       _states = [
//         { active: false, minWidth: 0, count: 1 },
//         { active: false, minWidth: 980, count: 2 }
//       ],
//       _config = {
//         isCycling: true, // автоматическая смена слайдов
//         //direction: 'right', // направление смены слайдов
//         //interval: 5000, // интервал между автоматической сменой слайдов
//         //pause: true // устанавливать ли паузу при поднесении курсора к слайдеру
//       };

//     for (var key in config) {
//       if (key in _config) {
//         _config[key] = config[key];
//       }
//     }

//     // наполнение массива _items
//     _sliderItems.forEach(function (item, index) {
//       _items.push({ item: item, position: index, transform: 0 });
//     });

//     var _setActive = function () {
//       var _index = 0;
//       var width = parseFloat(document.body.clientWidth);
//       _states.forEach(function (item, index, arr) {
//         _states[index].active = false;
//         if (width >= _states[index].minWidth)
//           _index = index;
//       });
//       _states[_index].active = true;
//     }

//     var _getActive = function () {
//       var _index;
//       _states.forEach(function (item, index, arr) {
//         if (_states[index].active) {
//           _index = index;
//         }
//       });
//       return _index;
//     }

//     var position = {
//       getItemMin: function () {
//         var indexItem = 0;
//         _items.forEach(function (item, index) {
//           if (item.position < _items[indexItem].position) {
//             indexItem = index;
//           }
//         });
//         return indexItem;
//       },
//       getItemMax: function () {
//         var indexItem = 0;
//         _items.forEach(function (item, index) {
//           if (item.position > _items[indexItem].position) {
//             indexItem = index;
//           }
//         });
//         return indexItem;
//       },
//       getMin: function () {
//         return _items[position.getItemMin()].position;
//       },
//       getMax: function () {
//         return _items[position.getItemMax()].position;
//       }
//     }

//     var _transformItem = function (direction) {
//       var nextItem;
//       if (!_isElementVisible(_mainElement)) {
//         return;
//       }
//       if (direction === 'right') {
//         _positionLeftItem++;
//         if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
//           nextItem = position.getItemMin();
//           _items[nextItem].position = position.getMax() + 1;
//           _items[nextItem].transform += _items.length * 100;
//           _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
//         }
//         _transform -= _step;
//       }
//       if (direction === 'left') {
//         _positionLeftItem--;
//         if (_positionLeftItem < position.getMin()) {
//           nextItem = position.getItemMax();
//           _items[nextItem].position = position.getMin() - 1;
//           _items[nextItem].transform -= _items.length * 100;
//           _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
//         }
//         _transform += _step;
//       }
//       _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
//     }

//     var _cycle = function (direction) {
//       if (!_config.isCycling) {
//         return;
//       }
//       _interval = setInterval(function () {
//         _transformItem(direction);
//       }, _config.interval);
//     }

//     // обработчик события click для кнопок "назад" и "вперед"
//     var _controlClick = function (e) {
//       if (e.target.classList.contains('slider__control')) {
//         e.preventDefault();
//         var direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
//         _transformItem(direction);
//         clearInterval(_interval);
//         _cycle(_config.direction);
//       }
//     };

//     // обработка события изменения видимости страницы
//     var _handleVisibilityChange = function () {
//       if (document.visibilityState === "hidden") {
//         clearInterval(_interval);
//       } else {
//         clearInterval(_interval);
//         _cycle(_config.direction);
//       }
//     }

//     var _refresh = function () {
//       clearInterval(_interval);
//       _mainElement.innerHTML = _html;
//       _sliderWrapper = _mainElement.querySelector('.slider__wrapper');
//       _sliderItems = _mainElement.querySelectorAll('.slider__item');
//       _sliderControls = _mainElement.querySelectorAll('.slider__control');
//       _sliderControlLeft = _mainElement.querySelector('.slider__control_left');
//       _sliderControlRight = _mainElement.querySelector('.slider__control_right');
//       _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width);
//       _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width);
//       _positionLeftItem = 0;
//       _transform = 0;
//       _step = _itemWidth / _wrapperWidth * 100;
//       _items = [];
//       _sliderItems.forEach(function (item, index) {
//         _items.push({ item: item, position: index, transform: 0 });
//       });
//     }

//     var _setUpListeners = function () {
//       _mainElement.addEventListener('click', _controlClick);
//       if (_config.pause && _config.isCycling) {
//         _mainElement.addEventListener('mouseenter', function () {
//           clearInterval(_interval);
//         });
//         _mainElement.addEventListener('mouseleave', function () {
//           clearInterval(_interval);
//           _cycle(_config.direction);
//         });
//       }
//       document.addEventListener('visibilitychange', _handleVisibilityChange, false);
//       window.addEventListener('resize', function () {
//         var
//           _index = 0,
//           width = parseFloat(document.body.clientWidth);
//         _states.forEach(function (item, index, arr) {
//           if (width >= _states[index].minWidth)
//             _index = index;
//         });
//         if (_index !== _getActive()) {
//           _setActive();
//           _refresh();
//         }
//       });
//     }

//     // инициализация
//     _setUpListeners();
//     if (document.visibilityState === "visible") {
//       _cycle(_config.direction);
//     }
//     _setActive();

//     return {
//       right: function () { // метод right
//         _transformItem('right');
//       },
//       left: function () { // метод left
//         _transformItem('left');
//       },
//       stop: function () { // метод stop
//         _config.isCycling = false;
//         clearInterval(_interval);
//       },
//       cycle: function () { // метод cycle
//         _config.isCycling = true;
//         clearInterval(_interval);
//         _cycle();
//       }
//     }

//   }
// }());

// var slider = multiItemSlider('.slider', {
//   isCycling: true
// })
