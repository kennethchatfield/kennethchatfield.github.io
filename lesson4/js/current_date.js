

let currentDateObject = new Date();

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const dayString = days[ currentDateObject.getDay() ];
const dateString = currentDateObject.getDate();
const monthString = months[ currentDateObject.getMonth() ];
const yearString = currentDateObject.getUTCFullYear();


const formattedDateString = [
    dayString + ",",
    dateString,
    monthString,
    yearString
].join(" ")

console.log(formattedDateString)

// console.log('Last Modified', new Date( document.lastModified).getUTCMonth)

document.getElementById("current-date").textContent = formattedDateString;