const days = [
    "Monday",
    "Tuesday",
    "Wednessday",
    "THursday",
    "Friday",
    "Saturday",
    "Sunday"
];
const months = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
];

let date = new Date();
const dayName = days[date.getDay()];
const monthName = months[date.getMonth()];
const dateString = `${ dayName }, ${ monthName } ${ date.getDate() }, ${ date.getFullYear() }`;

document.getElementById("current-date").textContent = dateString;