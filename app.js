

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
    while(question !== "Yes" && question !== "yes" && question !== "No" && question !== "no" && question !== null)
    {
        question = prompt("Please enter Yes or No")
    }
    if (question == "Yes" || question == "yes"){
        var message = ' I am glad to hear that.';
        askClass.innerText = message;
    } else if (question == "No" || question == "no"){
        var message = ' I am sorry to hear that.';
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
//Gets ratign of site



// function compileImg(){
    
//     var result = '';
//     var rating = getRating();
    
//     for (var i = 0 ; i < rating ; i++){
//         result = result + '<img src="Ashe.png class="rating">';
//     }
    
//     return result;
// }
// function displayRating(){
    
//     var result = compileImg();
//     var message = result;
//     document.write(result);

// }
function getRating(){
    var rating = prompt(" How many Stars out of 5 would you give this site");
    var result = '';

    while( isNaN(rating) || rating > 5 || rating ==='')
    {
        var rating = prompt(" Please Enter a number between 0 and 5");
    }
    
    for(var i = 0 ; i < rating ; i++)
    {
        result = result + '<p class="rating"><img src="Ashe.png" class="rating"></p>'; 
        console.log(result);
    }
    return result;  
    }

    