

//pseudo code

//step 1
// insert greeting into a function
//insert into code
setTimeout( function askName(){

   
    var name = prompt('Please enter your name');
    var askName = document.getElementById('askName');

    if (name.length > 0 & name != "null"){
        var message = ' Welcome ' + name + '!';
        askName.innerText = message;
    } else if( name !="null"){
        var message = ' Fine don\'t tell me';
        askName.innerText = message;
    } else {
        var message = ' Hitting cancel I see.';
        askName.innerText = message;
    }
}, 800);


setTimeout (function askClass(){
    var question = prompt("Are you enjoying this 102 course? Yes or No?");
    var askClass = document.getElementById('askClass');

    if (question == "Yes" || question == "yes"){
        var message = ' I am glad to hear that.';
        askClass.innerText = message;
    } else if (question == "No" || question == "no"){
        var message = ' I am sorry to hear that.';
        askClass.innerText = message;
    } else if ( question != null){
        var message = ' I said yes or no but ok';
        askClass.innerText = message;
    } else {
        var message = ' You like that cancel button dont you';
        askClass.innerText = message;
    }
}, 1000);



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

//var buildCake = function(cakeType,frosting, filling){
  //  var message =('I want a ' + cakeType + ' cake iced with ' + frosting + ' frosting and filled with ' + filling + '!')
    //return message;
//}

//buildCake('white','lavender','lemon custard');