var question  = prompt("Are you enjoying this 102 class? Yes or No");

if (question == "Yes" || question == "yes"){
    document.write('<h3> Glad to hear it </h3>');
} else if ( question == "No" || question == "no")
{
    document.write('<h3> Sorry to hear it </h3> ');
}
else if( question != null){
    document.write('<h3> I said Yes or No, but ok </h3>');
}
else{
    document.write('<h3> you like that cancel button don\'t you.</h3>');
}
    