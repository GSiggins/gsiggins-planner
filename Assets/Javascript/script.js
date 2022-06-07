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
    let currentHour = (moment().format('12'));
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

timeclock()
setInterval(timeclock, 1000)
checkTime(timeArray, 150000)

function storeText (event) {
    console.log("storetext init")
var target = $(event.target)
if (target.is('saveBtn')) {
    var userText = target.siblings('user-text').val().trim();
    localStorage.setItem('savedText', JSON.stringify(userText));
}
}




$('.saveBtn').on('click', storeText)