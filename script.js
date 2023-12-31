'use strict'

const navEl = document.querySelector('.navbar') ;
const btnEl = document.querySelector('.hamburger-button');

btnEl.addEventListener('click' , function(){
    navEl.classList.toggle('open-nav');
    
})

