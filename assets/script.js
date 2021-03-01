var currentDay = document.querySelector("#currentDay");
var jumbotron = document.querySelector(".jumbotron");
var currentTime = moment().format("dddd, MMMM Do YYYY");
var textAreaEl = document.querySelector("textarea");
var events = [];

// display current date in header
currentDay.append(currentTime);

// load time block events back onto page
var loadEvents = () => {
   let data = localStorage.getItem("event");
   let retrieveData = JSON.parse(data);

   let index09 = document.getElementById("09");
   let index10 = document.getElementById("10");
   let index11 = document.getElementById("11");
   let index12 = document.getElementById("12");
   let index13 = document.getElementById("13");
   let index14 = document.getElementById("14");
   let index15 = document.getElementById("15");
   let index16 = document.getElementById("16");
   let index17 = document.getElementById("17");
   let index18 = document.getElementById("18");
   
    for (var i = 0; i < retrieveData.length; i++) {
        if (retrieveData[i].eventIndex === "09") {
            index09.append(retrieveData[i].eventText);
        } else if (retrieveData[i].eventIndex === "10") {
            index10.append(retrieveData[i].eventText);
        } else if (retrieveData[i].eventIndex === "11") {
            index11.append(retrieveData[i].eventText);
        } else if (retrieveData[i].eventIndex === "12") {
            index12.append(retrieveData[i].eventText);
        } else if (retrieveData[i].eventIndex === "13") {
            index13.append(retrieveData[i].eventText);
        } else if (retrieveData[i].eventIndex === "14") {
            index14.append(retrieveData[i].eventText);
        } else if (retrieveData[i].eventIndex === "15") {
            index15.append(retrieveData[i].eventText);
        } else if (retrieveData[i].eventIndex === "16") {
            index16.append(retrieveData[i].eventText);
        } else if (retrieveData[i].eventIndex === "17") {
            index17.append(retrieveData[i].eventText);
        } else if (retrieveData[i].eventIndex === "18") {
            index18.append(retrieveData[i].eventText);
        }
    }
}

// save events to local storage
$(".saveBtn").on("click", function() {
    let text = $(this).closest(".row").find("textarea").val();
    let index = $(this).closest(".row").find("textarea").attr("id");

    newEvents = {
        eventText: text,
        eventIndex: index
    }

    events = [...events, newEvents];

    localStorage.setItem("event", JSON.stringify(events));
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