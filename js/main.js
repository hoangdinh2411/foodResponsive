const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const header = $('header')
const menuIcon = $('.menu-icon')

window.addEventListener('scroll',function(){
    
    header.classList.toggle('sticky',window.scrollY>0);
})

function menuToggle(){
    menuIcon.classList.toggle('active');
    header.classList.toggle('active')
}