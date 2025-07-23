let burger = document.querySelector('.burger');
let navBar = document.querySelector('#nav-menu');


let searchIcon = document.querySelector('#searchIcon');
let search = document.querySelector('#Search-bar');

let carImge = document.querySelector('#car-image');
let carInfo = document.querySelector('#car-Infor');

carImge.addEventListener('click',()=>{
carInfo.classList.toggle('active');
});


burger.addEventListener('click',()=>{
  navBar.classList.toggle('active');
  });

  searchIcon.addEventListener('click',()=>{
    search.classList.toggle('active');
  });