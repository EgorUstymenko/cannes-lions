const btns = document.querySelectorAll(".btn");
console.log(btns);
const info = document.querySelectorAll(".more__info");
const overlay = document.querySelector(".overlay");
const form = document.querySelector('.callback-form');

const body = document.querySelector('body');
const news = document.querySelector('.news');
console.log(body);

console.log(btns);
console.log(overlay);
console.dir(overlay);

btns.forEach(function(btn){
  btn.addEventListener('click', function(){
    overlay.style.display = 'flex';
    body.style.overflow = 'hidden';
  })
})

info.forEach(function(btn){
  btn.addEventListener('click', function(){
    overlay.style.display = 'flex';
    body.style.overflow = 'hidden';
  })
})

form.addEventListener('click', function(e){
  e.stopImmediatePropagation();
})

overlay.addEventListener('click', function(){
  overlay.style.display = 'none';
  body.style.overflow = 'auto';
})

