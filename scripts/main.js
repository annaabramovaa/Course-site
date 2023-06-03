const btn = document.querySelector('.btn');
const btn_2 = document.querySelector('.btn_2');
const about_button = document.querySelector('.about_button');
const overlay = document.querySelector('.overlay');
const callback_form = document.querySelector('.callback_form');


btn.addEventListener('click', function(){
    overlay.style.display = 'flex';
})
btn_2.addEventListener('click', function(){
    overlay.style.display = 'flex';
})
about_button.addEventListener('click', function(){
    overlay.style.display = 'flex';
})

    overlay.addEventListener('click', function(){
    overlay.style.display = 'none';
})
callback_form.addEventListener('click', function(e){
    e.stopPropagation();
})

