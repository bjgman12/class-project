var noon = 12;
var evening = 18;
var lunchtime = 12;
var classtime = 18;
var showTime = function(){

    //displaying string on page
    var clock = document.getElementById('clock');
    
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
    
    //Setting hours
    if( hours >= 12){
        meridian = "PM";
    }

    if (hours > noon){
        hours = hours - 12;
    }
    // Settign minutes
    if(minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Setting seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    //combining elements
    var clockTime = hours + ':' + minutes + ':' + seconds + ':' + meridian + "!";
    
    clock.innerText = clockTime;

}

// getting clock to update

var updateClock = function()
{
    var time = new Date().getHours();
    showTime();
}
updateClock();

//second updates
var oneSecond = 1000;
setInterval(updateClock,oneSecond);