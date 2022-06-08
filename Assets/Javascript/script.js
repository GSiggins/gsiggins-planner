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

let timeclock = function () {
    var time = moment().format('[It is currently ] dddd, MMMM Do YYYY [ at ] hh:mm:ss a');
    document.querySelector('#currentDay').innerHTML = time;
}


function storeText(event) {
    var saveClick = event.target
    var hourTodo = $(saveClick).siblings('.time-block').attr('id')
    var taskText = $(saveClick).siblings('.user-text').val()

    localStorage.setItem(hourTodo, taskText)
}


function storageText() {
    var hourNum = 9

    while (hourNum <=17) {
        var renderTask = localStorage.getItem(hourNum);
        console.log(renderTask);
        hourNum++;
    }
}

// function storeText(event) {
//     var button = $(event.target)
//     console.log(button);
//     var userText = $('.user-text').val();
//     console.log(userText);
//     var stagedStorage = $(event.target).siblings('.user-text').text();
//     stagedStorage.text();
//     var hourBlock = button.dataset.num;
//     localStorage.setItem(hourBlock, userText)
//     console.log(userText);
// }
// var hours = $(target).parent('.time-block').attr('id');
//     console.log(hours);
//         localStorage.setItem(hours, trimmedInput);
    


timeclock()
setInterval(timeclock, 1000)
checkTime(timeArray, 150000)

$('.saveBtn').on('click', storeText);