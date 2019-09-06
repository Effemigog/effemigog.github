// Скрипт аккардеона
let panelItem = document.querySelectorAll('.accordion__title');
active = document.getElementsByClassName('accordion__text-open');

Array.from(panelItem).forEach(function (item, i, panelItem) {
  item.addEventListener('click', function (e) {
    if (active.length > 0 && active[0] !== this)
      active[0].classList.remove('accordion__text-open');
    this.classList.toggle('accordion__text-open');
  });
});

// Кнопка меню

const fullscreenBtn = document.querySelector('#fullscreenMenuBtn');
const fullscreenMenu = document.querySelector('#fullscreenMenu').classList;

fullscreenBtn.addEventListener('click', function () {
  if (fullscreenMenu.contains('fullscreen-menu')) {
    fullscreenMenu.add('fullscreen-menu-active');
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

    const data = {
      name: myForm.elements.name.value,
      phone: myForm.elements.phone.value,
      comment: myForm.elements.comment.value
    };
      const formData = new FormData();
      formData.append('data');
      console.log(formData);
    

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(JSON.stringify(data));
    console.log(data)
    xhr.addEventListener('load', () => {
      console.log(xhr.response);
    })
   
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

let iconBtn = document.querySelector('#iconBtn');
let listComposotionOpen = document.querySelector('#listComposotionOpen').classList;

iconBtn.addEventListener('click', function () {
  if (listComposotionOpen.contains('composition__list-open')) {
    listComposotionOpen.remove('composition__list-open');
  }
  else {
    listComposotionOpen.add('composition__list-open');
  }
})

let iconBtn2 = document.querySelector('#iconBtn2');
let listComposotionOpen2 = document.querySelector('#listComposotionOpen2').classList;

iconBtn2.addEventListener('click', function () {
  if (listComposotionOpen2.contains('composition__list-open')) {
    listComposotionOpen2.remove('composition__list-open');
  }
  else {
    listComposotionOpen2.add('composition__list-open');
  }
})



