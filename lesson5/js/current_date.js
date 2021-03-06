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

const getCurrentDayOfWeek = () => {
    let date = new Date();
    return days[ date.getDay() ];
}

document.getElementById("current-date").textContent = formattedDateString;