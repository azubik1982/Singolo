// // // menu-navigation // Делел по 1-й лекции Сергея Шаляпина
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
       if (elMenuId.offsetTop - 77 <= curPos && (elMenuId.offsetTop + elMenuId.offsetHeight) - 77 > curPos){
          navMenuLincs.forEach((a) => {
          a.classList.remove('active');
          if (elMenuId.getAttribute('id') === a.getAttribute('href').substring(1)) {
            a.classList.add('active');
          }
        })
      }
    });
}

// menu-portfolio- click-styles
portfolio.addEventListener('click', (eventClick) => {
  if (eventClick.target.classList.contains("button_borderd")) {
    portfolio.querySelectorAll('button').forEach(el => el.classList.remove('button_borderd_active'));
      if (eventClick.target.classList.contains("button_borderd")) {
          eventClick.target.classList.add('button_borderd_active');
      }
  }

}

);

// shufle portfolio images

var parent = document.getElementById("shufle");
//  console.log(parent);
 var imgs = parent.children;
//  console.log(imgs);
// Create a document fragment to hold the shuffled elements
 var frag = document.createDocumentFragment();
// Loop until every element is moved out of the parent and into the document fragment
 while (imgs.length) {
   // select one random child element and move it into the document fragment
      frag.appendChild(imgs[Math.floor(Math.random() * imgs.length)]);
  }
// appending the document fragment appends all the elements, in the shuffled order
 parent.appendChild(frag);






// slider-skript // -- работает

const images = document.querySelectorAll('.slider .slider-line img'); //take all images in slider-section
const sliderLine = document.querySelector('.slider-line');             //take all images-array
let count = 1; //number of active slide
let width;

//set- width-height size of slider item for working-place

function init(){
  // console.log('resize');
  width = document.querySelector('.slider').offsetWidth; //find a width of slider-block from working-place
  sliderLine.style.width = width * images.length + 'px'; //find the length of images-array
  images.forEach( item => {
    //do the width of image - for slider-block
    item.style.width = width + 'px';
    //add height = auto - for item, for work addaptive
    item.style.height = 'auto';
  });
  rollSlider();
  // console.log(width);
}

window.addEventListener('resize' , init);               //start init-function when resize-happens
init();

//scroll images-in slider block

document.querySelector('.slider_left').addEventListener('click' , function() {
  sliderLine.style.transition = "transform .5s ease-in-out";
  var max = images.length;
  count <= 0 ? false : count--;

  rollSlider();
  jump();
});


document.querySelector('.slider_right').addEventListener('click' , function() {
  sliderLine.style.transition = "transform .5s ease-in-out";
  var max = images.length;
  count >= max - 1 ? false : count++;

  rollSlider();
  jump();
});

//move - slide-function
function rollSlider(){
  sliderLine.style.transform = 'translate(-'+count*width + 'px)';
};

//jump for do hide-adding of images in slider

function jump() {
  sliderLine.addEventListener('transitionend', function(){
    images[count].id === "first_clone" ? count = 1 : count;
    images[count].id === "last_clone" ? count = images.length - 2 : count;
    sliderLine.style.transition = "none";
    rollSlider()
  });
}
