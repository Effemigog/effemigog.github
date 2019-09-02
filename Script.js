// Скрипт аккордеона
let berry = document.querySelector('#berry');
let berryOpen = document.querySelector('#berryOpen').classList;

berry.addEventListener('click', function(){
    if (berryOpen.contains('accordion__text--open')){
        berryOpen.remove('accordion__text--open');
    } 
    else {
        berryOpen.add('accordion__text--open');
    }
})

let fruit = document.querySelector('#fruit');
let fruitOpen = document.querySelector('#fruitOpen').classList;

fruit.addEventListener('click', function(){
    if (fruitOpen.contains('accordion__text--open')){
        fruitOpen.remove('accordion__text--open');
    } 
    else {
        fruitOpen.add('accordion__text--open');
    }
})

let milk = document.querySelector('#milk');
let milkOpen = document.querySelector('#milkOpen').classList;

milk.addEventListener('click', function(){
    if (milkOpen.contains('accordion__text--open')){
        milkOpen.remove('accordion__text--open');
    } 
    else {
        milkOpen.add('accordion__text--open');
    }
})

// Кнопка меню

const fullscreenBtn = document.querySelector('#fullscreenMenuBtn');
const fullscreenMenu = document.querySelector('#fullscreenMenu').classList;

fullscreenBtn.addEventListener('click', function() {
    if (fullscreenMenu.contains('fullscreen-menu')){
        fullscreenMenu.add('fullscreen-menu-active');
    }
})

const closeMenu = window.getComputedStyle(document.querySelector('#fullscreenMenu'), ':before').content;
console.log(typeof closeMenu);


    

