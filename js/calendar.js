const calendar = document.querySelector("h3#calendar");

const date = new Date();
const today = date.toDateString();
calendar.innerText = today;