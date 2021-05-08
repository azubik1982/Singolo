// menu-navigation- button-click styles-change//
document.addEventListener('scroll', onScroll);

function onScroll(eventScroll) {
  const curPos = window.scrollY;
  const menuLink = document.querySelectorAll('.menu-link');
  const navMenuLincs = document.querySelectorAll('#nav-menu a');

  menuLink.forEach((elMenuId) => {
  let elementPadding =  elMenuId.offsetTop - document.querySelector('header').offsetHeight;
  let elementPaddingTop =  (elMenuId.offsetTop + elMenuId.offsetHeight) - document.querySelector('header').offsetHeight;
    if (elementPadding <= curPos && elementPaddingTop > curPos){
          navMenuLincs.forEach((a) => {
            a.classList.remove('active');

            if (elMenuId.getAttribute('id') === a.getAttribute('href').substring(1)) {
              a.classList.add('active');
              burgerMenu.parentElement.parentElement.classList.remove('__clickBrg');
              document.body.classList.remove('_lock');

              document.querySelector('a.active').addEventListener('click' , function() {
                  burgerMenu.parentElement.parentElement.classList.remove('__clickBrg');
                  document.body.classList.remove('_lock');
              });
            }
        });
      }
    });
}


// menu-portfolio- button-click styles-change //
portfolio.addEventListener('click', (eventClick) => {
  if (eventClick.target.classList.contains("button_borderd")) {
    portfolio.querySelectorAll('button').forEach(el => el.classList.remove('button_borderd_active'));
      if (eventClick.target.classList.contains("button_borderd")) {
          eventClick.target.classList.add('button_borderd_active');
      }

      // shufle portfolio images - when click//
      const parent = document.getElementById("shufle"),
            imgs = parent.children,
            frag = document.createDocumentFragment();

  while (imgs.length) {
      frag.appendChild(imgs[Math.floor(Math.random() * imgs.length)]);
  }
  parent.appendChild(frag);
  }
}
);


// slider-skript //
const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 1;
let width;
let _bckGr1;

function init(){
  width = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = width * images.length + 'px';
  images.forEach( item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
  rollSlider();
}

window.addEventListener('resize' , init);
init();

document.querySelector('.slider_left').addEventListener('click' , function() {
  sliderLine.style.transition = "transform .5s ease-in-out";
  if(count <= 0) {
    false;} else {count--;}

    rollSlider();
  jump();
});

document.querySelector('.slider_right').addEventListener('click' , function() {
  sliderLine.style.transition = "transform .5s ease-in-out";
  let max = images.length;
  if(count >= max - 1) {
    false;} else {count++;}

  rollSlider();
  jump();
});

function rollSlider(){
  sliderLine.style.transform = 'translate(-'+count*width + 'px)';
};

function jump() {
   function sliderLineListener(){
   if(images[count].id === "first_clone"){
     count = 1;
   } else if (images[count].id === "last_clone") {
     count = images.length - 2;
   } else { count;}

    sliderLine.style.transition = "none";
    rollSlider()
  }

  sliderLine.addEventListener('transitionend', sliderLineListener);

  const sliderBckGr = document.querySelector('#home');
  if (count % 2 === 0) {
    sliderBckGr.classList.add('_bckGr2');
  } else {
    sliderBckGr.classList.remove('_bckGr2');
  }
}


//burger-menu//
const navMenuLincs = document.querySelectorAll('#nav-menu a');
const burgerMenu = document.querySelector('.hamburger');
burgerMenu.addEventListener('click', function(){
  burgerMenu.parentElement.parentElement.classList.toggle('__clickBrg');
  document.body.classList.toggle('_lock');
  document.querySelector('.slider').classList.toggle('_lock');
})
