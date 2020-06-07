var name  = prompt("Please enter your name");

if (name.length > 0 & name != "null")  {
    document.write('<h3>Welcome ' + name + '</h3>');
} else if( name != "null"){
    document.write('<h3> Fine don\'t tell me</h3>');
}
else{
    document.write('<h3> Hitting cancel I see</h3>');
}
    