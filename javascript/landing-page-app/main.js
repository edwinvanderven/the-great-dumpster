const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
}

function addZero(number) {
  return (parseInt(number, 10) < 10 ? '0' : '') + number;
}

function setBackground() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = 'url(./img/morning.jpg)';
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = 'url(./img/afternoon.jpg)';
  } else {
    // Evening
    document.body.style.backgroundImage = 'url(./img/night.jpg)';
  }
}

function setGreeting() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    greeting.textContent = 'Good Morning';
  } else if (hour < 18) {
    // Afternoon
    greeting.textContent = 'Good Afternoon';
  } else {
    // Evening
    greeting.textContent = 'Good Evening';
    document.body.style.color = 'white';
  }
}


function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

function setName(event) {
  if (event.type === 'keypress') {
    if (event.which === 13 || event.keyCode === 13) {
      localStorage.setItem('name', event.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', event.target.innerText);
  }
}


function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

function setFocus(event) {
  if (event.type === 'keypress') {
    if (event.which === 13 || event.keyCode === 13) {
      localStorage.setItem('focus', event.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', event.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
setBackground();
setGreeting();
getName();
getFocus();