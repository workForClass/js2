// Write a function  ...

// 1. That logs “The current date and time is “ - the current date and time 
// hint; you will need to research the Date object to get the current date! (https://www.w3schools.com/jsref/jsref_obj_date.asp)

// 2. That prints “I’m ready” after 5 seconds.
// hint: you will need to research the setTimeout JavaScript function. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

// 3. Create a function to convert today’s temperature from Celsius to Fahrenheit
// a) Celsius to Fahrenheit: (°C × 9/5) + 32 = °F
// b) Fahrenheit to Celsius: (°F − 32) x 5/9 = °C


// The current date and time function

function displayDate(){
    let todayD = new Date().toLocaleString();
    console.log( 'The current date and time is ${todayD}' );
}
displayDate();


//print "I am ready"
let setMsg = function(){
    console.log("I am ready");
    }
setTimeout(setMsg,7000);

//Convert today's temperature from Celsius to Fahrenheit
let todayCTemp = 19;
function checkTemp(){
    let todayFTemp = (todayCTemp * 9/5) + 32;
    console.log (todayFTemp - 32) * 5/9;

}
checkTemp();
