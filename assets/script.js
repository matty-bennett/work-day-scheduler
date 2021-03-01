let currentDay = document.querySelector("#currentDay");
let jumbotron = document.querySelector(".jumbotron");
var currentTime = moment().format("dddd, MMMM Do YYYY");
var textAreaEl = document.querySelector("textarea");
let events = [];

// display current date in header
currentDay.append(currentTime);

// load time block events back onto page
var loadEvents = () => {
    events = JSON.parse(localStorage.getItem("events"));

    if (!events) {
        events = {};
    }
}

// save events to local storage
var saveEvents = () => {
    localStorage.setItem("events", JSON.stringify(events))
}

$(".saveBtn").on("click", function() {
    
})

//Change textarea background color on diff hours
var checkTime = function () {

    //Get Current time
    var currentTime = moment().format('H');

    var timeBlocks = $(".textarea");

    // loop through all textarea elements
    for (var i = 0 ; i < timeBlocks.length ; i++) {

        var elementId = timeBlocks[i].id;

        var eventId = document.getElementById(timeBlocks[i].id)

        $(timeBlocks[i].id).removeClass(".present .past .future");

        // apply new class if event is present/past/future
        if (elementId < currentTime) {
            $(eventId).addClass("past");
        } else if (elementId > currentTime) {
            $(eventId).addClass("future");
        } else {
            $(eventId).addClass("present");
        }
    }
}

// checkTime every 5 minutes
setInterval(checkTime(), (1000 * 60) * 5);

loadEvents();