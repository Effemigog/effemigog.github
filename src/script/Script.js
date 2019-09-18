// Скрипт аккардеона

let panelItem = document.querySelectorAll('.accordion__title');
let active = document.getElementsByClassName('accordion__text-open');

Array.from(panelItem).forEach(function (item, i, panelItem) {
  item.addEventListener('click', function (e) {
    if (active.length > 0 && active[0] !== this)
      active[0].classList.remove('accordion__text-open');
    this.classList.toggle('accordion__text-open');
  });
});

// Кнопка меню
$('.fullscreen__btn').on('click', function() {
  $('.fullscreen-menu').toggleClass('fullscreen-menu-active')
});
$('.close').on('click', function() {
  $('.fullscreen-menu-active').removeClass('fullscreen-menu-active')
})

// слайдер меню
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const sliderList = document.querySelector("#sliderList");

let slideStep = 0;

left.addEventListener('click', function () {
  if (slideStep === 0) {
    slideStep += calculateMaxWidth;
    sliderList.style.transform = 'translate(-' + slideStep + 'px)';
  }else {
    slideStep -= calculateMaxWidth;
  sliderList.style.transform = 'translate(-' + slideStep + 'px)';
  }  
})

right.addEventListener('click', function () {
  if (slideStep === 0) {
    slideStep += calculateMaxWidth;
    sliderList.style.transform = 'translate(-' + slideStep + 'px)';
  }else {
    slideStep -= calculateMaxWidth;
  sliderList.style.transform = 'translate(-' + slideStep + 'px)';
  }  
})

let calculateMaxWidth = sliderList.offsetWidth;
console.log(calculateMaxWidth)

// Слайдеp отзывы

$('.navigation__pic').on('click', function (e) {
  e.preventDefault();
  let $this = $(this)
  let step = 0;
  let f = $('.rev__item').width();
  console.log(f);
  step = f;
  if ($this.hasClass('navigation__pic-a')) {
    $('.rev__item').css('transform', 'translate(0)');

  }
  if ($this.hasClass('navigation__pic-v')) {
    $('.rev__item').css('transform', 'translate(-' + f + 'px)');

  }
  if ($this.hasClass('navigation__pic-m')) {
    $('.rev__item').css('transform', 'translate(-' + f*2 + 'px)');

  }
})

// Команда

let team = document.querySelectorAll('.team__hover-name'),
  activeTeam = document.getElementsByClassName('team__hover-active');
let pol = document.querySelectorAll('.team__poligon'),
  activePol = document.getElementsByClassName('team__poligon-active');

Array.from(pol).forEach(function (item, i, pol) {
  item.addEventListener('click', function (e) {
    if (activePol.length > 0 && activePol[0] !== this)
      activePol[0].classList.remove('team__poligon-active');
    this.classList.toggle('team__poligon-active');
  });
});
Array.from(team).forEach(function (item, i, team, pol) {
  item.addEventListener('click', function (e) {
    if (activeTeam.length > 0 && activeTeam[0] !== this)
      activeTeam[0].classList.remove('team__hover-active');
    this.classList.toggle('team__hover-active');
  });
});


// Форма доставки

let myForm = document.querySelector('#form');
let btnForm = document.querySelector('#btnForm');

btnForm.addEventListener('click', function (e) {
  e.preventDefault();
  if (validityForm(myForm)) {

    const data = new FormData();
    data.append('name', myForm.getElementsByClassName('name'));
    data.append('phone', '89456411120');
    data.append('comment', 'comment');
    data.append('to', 'to@mail.ru');



    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.onload = function () {
      alert(xhr.response)
    }
    xhr.send(data);
    console.log(data)
  }

});

function validityForm(form) {
  let valid = true;

  if (!validityField(myForm.elements.name)) {
    valid = false;
  }

  if (!validityField(myForm.elements.phone)) {
    valid = false;
  }

  if (!validityField(myForm.elements.comment)) {
    valid = false;
  }

  return valid;
}


function validityField(field) {
  field.nextElementSibling.textContent = field.validationMessage;
  return field.checkValidity();
}

let phone = form.phone;

phone.addEventListener('keydown', function (e) {
  let isDigit = false;
  if (e.key >= 0 || e.key <= 9 || e.key == 'Backspace' || e.key == 'ArrowLeft' || e.key == '-' || e.key == 'ArrowRight') {
    isDigit = true
  } else {
    e.preventDefault();
  }
})

let home = form.home;

home.addEventListener('keydown', function (e) {
  let isDigit = false;
  if (e.key >= 0 || e.key <= 9 || e.key == 'Backspace' || e.key == 'ArrowLeft' || e.key == '-' || e.key == 'ArrowRight') {
    isDigit = true
  } else {
    e.preventDefault();
  }
})

let body = form.body;

body.addEventListener('keydown', function (e) {
  let isDigit = false;
  if (e.key >= 0 || e.key <= 9 || e.key == 'Backspace' || e.key == 'ArrowLeft' || e.key == '-' || e.key == 'ArrowRight') {
    isDigit = true
  } else {
    e.preventDefault();
  }
})

let apartment = form.apartment;

apartment.addEventListener('keydown', function (e) {
  let isDigit = false;
  if (e.key >= 0 || e.key <= 9 || e.key == 'Backspace' || e.key == 'ArrowLeft' || e.key == '-' || e.key == 'ArrowRight') {
    isDigit = true
  } else {
    e.preventDefault();
  }
})

let floor = form.floor;

floor.addEventListener('keydown', function (e) {
  let isDigit = false;
  if (e.key >= 0 || e.key <= 9 || e.key == 'Backspace' || e.key == 'ArrowLeft' || e.key == '-' || e.key == 'ArrowRight') {
    isDigit = true
  } else {
    e.preventDefault();
  }
})


// кнопка состав

$('.composition__icon').on('click', e => {

  $('.composition__list').toggleClass('composition__list-open')

});


