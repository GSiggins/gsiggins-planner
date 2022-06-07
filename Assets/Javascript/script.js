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
    let currentHour = (moment().format('h'));
    console.log(currentHour);
    for (let i = 0; i < timeArray.length; i++) {
        let index = timeArray[i]
        if (currentHour == index.dataset.num) {
            console.log(i);
            console.log(index.dataset.num);
            timeArray[i].className = "present col-sm-9";
        } else if (currentHour > index.dataset.num) {
            timeArray[i].className = "past col-sm-9";
            console.log(index.dataset.num);
            console.log(i);
        } else {
            timeArray[i].className = "future col-sm-9";
            console.log(index.dataset.num);
            console.log(i);
        }
    }
}






let timeclock = function () {
    var time = moment().format('[It is currently ] dddd, MMMM Do YYYY [ at ] hh:mm:ss a');
    document.querySelector('#currentDay').innerHTML = time;
}

timeclock()
setInterval(timeclock, 1000)
checkTime(timeArray)