var userData = prompt( "Write Something");

console.log(userData);

var lowerCase = userData.toLowerCase();
var upperCase = userData.toUpperCase();

console.log(upperCase)

if (userData == upperCase) {
    console.log("THE USER IS YELLING")
    
  } else if (userData === lowerCase){
      console.log("the user is whispering")

  } else{
      console.log("The user is talking to normal")
  }