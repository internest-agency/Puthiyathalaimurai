const days = document.querySelector('.day .timer span');
const hours = document.querySelector('.hour .timer span');
const mins = document.querySelector('.min .timer span');
const secs = document.querySelector('.sec .timer span');

setInterval(()=> {
  const eventDate = new Date("2023-08-11T18:00:00");
const currentDate = new Date();
const differenceInMilliseconds = eventDate.getTime() - currentDate.getTime();
const secondsRemains = Math.floor((differenceInMilliseconds % (1000 * 60)) / 1000);
const minRemains = Math.floor((differenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
const hoursRemains = Math.floor((differenceInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const daysRemains = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

days.innerText = daysRemains;
hours.innerText = hoursRemains;
mins.innerText = minRemains;
secs.innerText = secondsRemains;


}, 1000);


const hideElement = document.querySelector('footer .container .line_animation');
hideElement.style.display = "none";

const insertElement = '<div class="line_area"></div><div class="line_area"></div><div class="line_area"></div><div class="line_area"></div><div class="line_area"></div><div class="line_area"></div><div class="line_area"></div><div class="line_area"></div>';
const getFooter = document.querySelector('footer');
const lineElement = document.createElement('div');
lineElement.classList.add('line_animation');
lineElement.innerHTML=insertElement;
getFooter.appendChild(lineElement);
