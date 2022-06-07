var nineAM = $('9')
var tenAM = $('10')
var elevenAM = $('11')
var twelvePM = $('12')
var onePM = $('13')
var twoPM = $('14')
var threePM = $('15')
var fourPM = $('16')
var fivePM = $('17')
var timeArray = [nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM]

function checkTime() {
    let currentHour = moment().format('H').value
    for (let i = 0; i < timeArray.length; i++) {
        if (currentHour == timeArray.)
        
    }
    if (currentHour === 
}






let timeclock = function() {
    var time = moment().format('[It is currently ] dddd, MMMM Do YYYY [ at ] hh:mm:ss a');
    document.querySelector('#currentDay').innerHTML = time;
}

timeclock()
setInterval(timeclock, 1000)