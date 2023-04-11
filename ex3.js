let today = new Date();
  let day = today.getDay();
  let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ')
  {
  if (minute===0 && second===0)
  {
  hour=12;
  prepand=' Noon';
  }
  else
  {
  hour=12;
  prepand=' PM';
  }
  }
  if (hour===0 && prepand===' AM ')
  {
  if (minute===0 && second===0)
  {
  hour=12;
  prepand=' Midnight';
  }
  else
  {
  hour=12;
  prepand=' AM';
  }
  }
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);
const myTimeout = setTimeout(myGreeting, 5000);
function myGreeting() {
  console.log("I am Ready!")
}
// 3. Create a function to convert today’s temperature from Celsius to Fahrenheit
// a) Celsius to Fahrenheit: (°C × 9/5) + 32 = °F
// b) Fahrenheit to Celsius: (°F − 32) x 5/9 = °C
/*const kelvin = 0; // kelvin is constant at 293
let celsius = kelvin - 273; /*console.log(celsius); */
const kelvin = 300; //Today's forecast in Kelvin
const celsius = kelvin - 273; // Forecast convertefd to celcius
Fahrenheit = celsius * (9/5) + 32; //Celsius converted to Fahrenheit
Fahrenheit = Math.floor(Fahrenheit); //Fahrenheit is rounded to the nearest number
console.log(`The temperature in Farenheit degrees ${Fahrenheit}.`);
newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature in newton degrees ${newton}.`);
