let burger = document.getElementById('Burger');
let nav = document.getElementById('nav');

burger.addEventListener('click', ()=>{
 nav.classList.toggle('active');
 burger.classList.toggle('active');
})