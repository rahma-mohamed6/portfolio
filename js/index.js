let close=document.querySelector('.close i');
let menu=document.querySelector('.menu');
let body=document.querySelector('body');
let header=document.querySelector('header');
menu.addEventListener('click',()=>{
    header.classList.add('active')

})
close.addEventListener('click',()=>{
    header.classList.remove('active')
})
body.addEventListener('click',(e)=>{
    let clicked=e.target;
if(!clicked.classList.contains('menu')&& !clicked.classList.contains('menu-right')){
    header.classList.remove('active')
}
})