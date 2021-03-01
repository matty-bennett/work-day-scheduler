let currentDay = document.querySelector("#currentDay");
let jumbotron = document.querySelector(".jumbotron");
var currentTime = moment().format("dddd, MMMM Do YYYY");
var textAreaEl = document.querySelector("textarea");
let events = [];

// display current date in header
currentDay.append(currentTime);

var loadEvents = () => {
    events = JSON.parse(localStorage.getItem("events"));

    if (!events) {
        events = {};
    }
}

var saveEvents = () => {
    localStorage.setItem("events", JSON.stringify(events))
}

$(".save").on("click", function() {
    var text = textAreaEl.val();
    events.text = text;
    saveEvents();
})

//Change textarea background color on diff hours
var checkTime = function () {

    //Get Current time
    var currentTime = moment().format('H');

    var timeBlocks = $(".textarea");

    //loop through textarea classes
    for (var i = 0 ; i < timeBlocks.length ; i++) {

        //Get element i's ID as a string
        var elementId = timeBlocks[i].id;

        //get element by ID
        var eventId = document.getElementById(timeBlocks[i].id)

        //remove any old classes from element
        $(timeBlocks[i].id).removeClass(".present .past .future");

        // apply new class if task is present/past/future
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