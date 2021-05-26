// To log “Good Afternoon” to the console - use a named function 

function greeting(){
    console.log("Good Afternoon");
 }
 greeting();
  

// That takes the message as a parameter and logs the message to the console 
 function greeting(msg){
    console.log(msg);
 }
 greeting("Good Morning");
 greeting("Good Afternoon");
 greeting("Good Day");
 
 // That takes two number parameters and adds them. Use return to return the result. - Try fat arrow function
 function sum(num1,num2){
    return (num1 + num2);
 }
 let result = sum(10,2);
 console.log(result);
  
 //That logs “The current date and time is “ - the current date and time  (Anonymous function)
 function displayDate(){
    let todayD =  new Date().toLocaleString();
    console.log( `The current date and time is  ${todayD} `);
 }
 displayDate();
 
 //That prints “I’m ready” after 5 seconds. (Anonymous function)
 let setMsg =  function(){
    console.log("I'm ready");
  }
 setTimeout(setMsg,5000);
 
 //To convert today’s temperature from Celsius to Fahrenheit 
 let todayCTemp = 25;
 function checkTemp(){
    let todayFTemp = (todayCTemp * 9/5) + 32;
    console.log (todayFTemp + " degrees Farenheit");
 }
 checkTemp();
 
 