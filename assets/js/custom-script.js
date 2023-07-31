const eventDate = new Date("08/11/2023 18:00:00");
const currentDate = Date.now();
const secRemains = Math.round((eventDate - currentDate)/1000);

console.log(secRemains);