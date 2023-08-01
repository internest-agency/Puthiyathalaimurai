const preloader = document.getElementById("preloader");
document.body.onload = () => {
  preloader.style.display = "none";
}

const days = document.querySelector('.day .timer span');
const hours = document.querySelector('.hour .timer span');
const mins = document.querySelector('.min .timer span');
const secs = document.querySelector('.sec .timer span');

setInterval(()=> {
  const eventDate = new Date("08/11/2023 18:00:00");
const currentDate = Date.now();
const secRemains = Math.round((eventDate - currentDate)/1000);
const secondsRemains = Math.round(secRemains%60);
const minRemains = Math.round((secRemains%(3600))/60);
const hoursRemains = Math.round((secRemains%(3600*24))/3600);
const daysRemains = Math.round(secRemains/(3600*24));

days.innerText = daysRemains;
hours.innerText = hoursRemains;
mins.innerText = minRemains;
secs.innerText = secondsRemains;


}, 1000);

