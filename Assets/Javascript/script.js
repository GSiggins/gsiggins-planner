var nineAM = document.getElementById('9')
var tenAM = document.getElementById('10')
var elevenAM = document.getElementById('11')
var twelvePM = document.getElementById('12')
var onePM = document.getElementById('13')
var twoPM = document.getElementById('14')
var threePM = document.getElementById('15')
var fourPM = document.getElementById('16')
var fivePM = document.getElementById('17')
var timeArray = [nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM]
console.log(timeArray)


//checks current time using moment.js against the time-slot 
//to determine if its past/present/future
function checkTime(timeArray) {
    let currentHour = (moment().format('H'));
    console.log("the current hour is " + currentHour);
    for (let i = 0; i < timeArray.length; i++) {
        let hourCheck = parseInt(timeArray[i].dataset.num)
        if (currentHour == hourCheck) {
            console.log("This is the current index I am checking: " + i);
            console.log(hourCheck + " is the current hour");
            timeArray[i].className = "present col-sm-9";
        } else if (currentHour > hourCheck) {
            timeArray[i].className = "past col-sm-9";
            console.log(hourCheck + " is in the past.");
            console.log("This is the current index I am checking: " + i);
        } else {
            timeArray[i].className = "future col-sm-9";
            console.log("It is not yet " + hourCheck);
            console.log("This is the current index I am checking: " + i);
        }
    }
}

// Displays "live" time in the jumbotron
let timeclock = function () {
    var time = moment().format('[It is currently ] dddd, MMMM Do YYYY [ at ] hh:mm:ss a');
    document.querySelector('#currentDay').innerHTML = time;
}

// Stores the text-area content when the save button is pressed.
function storeText(event) {
    var saveClick = event.target
    console.log(saveClick)
    var hourTodo = $(saveClick).siblings('.time-block').attr('id')
    var taskText = $(saveClick).siblings('textarea').val()
    console.log(taskText);
    localStorage.setItem(hourTodo, taskText);
    return;
}

// reads through localstorage to pull the keys/values out and display them
    $('#row9 .user-text').val(localStorage.getItem ('hour9'));
    $('#row10 .user-text').val(localStorage.getItem ('hour10'));
    $('#row11 .user-text').val(localStorage.getItem ('hour11'));
    $('#row12 .user-text').val(localStorage.getItem ('hour12'));
    $('#row13 .user-text').val(localStorage.getItem ('hour13'));
    $('#row14 .user-text').val(localStorage.getItem ('hour14'));
    $('#row15 .user-text').val(localStorage.getItem ('hour15'));
    $('#row16 .user-text').val(localStorage.getItem ('hour16'));
    $('#row17 .user-text').val(localStorage.getItem ('hour17'));

timeclock()
setInterval(timeclock, 1000)
checkTime(timeArray, 150000)


$('.saveBtn').on('click', storeText);