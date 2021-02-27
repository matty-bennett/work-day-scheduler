let currentDay = document.querySelector("#currentDay");
let jumbotron = document.querySelector(".jumbotron");
var currentTime = moment().format("dddd, MMMM Do YYYY");

// display current date in header
currentDay.append(currentTime);
