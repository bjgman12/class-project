

//pseudo code

//step 1
// insert greeting into a function
//insert into code

function askName()
{
    var name  = prompt("Please enter your name");

if (name.length > 0 & name != "null")  {
   return document.write('<h3>Welcome ' + name + '</h3>');
} else if( name != "null"){
     return document.write('<h3> Fine don\'t tell me</h3>');
}
else{
   return document.write('<h3> Hitting cancel I see</h3>');
}
    
}

//step 2
//insert clock into function
//insert into code
function askClass()
{
    var question  = prompt("Are you enjoying this 102 class? Yes or No");

if (question == "Yes" || question == "yes"){
   return document.write('<h3> Glad to hear it </h3>');
} else if ( question == "No" || question == "no")
{
     return document.write('<h3> Sorry to hear it </h3> ');
}
else if( question != null){
     return document.write('<h3> I said Yes or No, but ok </h3>');
}
else{
    return document.write('<h3> you like that cancel button don\'t you.</h3>');
}
}

//step 3
//insert three into function
//insert into code
function clock(){
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

}

//function logger(){
  //  var message = 'hello playa';
    //console.log(message);
    //return message ;

//}
//function logUsername(username){
 //   var message = 'Hello' + username + '!';
  //  return message ;

//}

var buildCake = function(cakeType,frosting, filling){
    var message =('I want a ' + cakeType + ' cake iced with ' + frosting + ' frosting and filled with ' + filling + '!')
    return message;
}

buildCake('white','lavender','lemon custard');