//To print “I am a happy programmer” 10 times
let x=0;
while (x<10){
   console.log ("I'm a happy programmer");
   x++;
}

// Log all numbers from 1 to 20 
for(let i=1;i<=10;i++){
   console.log(i);
}

// Loop through all numbers from 50 to 1 backwards and print their sum 
let sum =0;
for (let i=50;i>=1;i--){
   sum += i;
}
console.log(sum);

// Log numbers from 1 to 100 that are divisible by 5
for (let i=1;i<=100;i++){
   if (i%5 == 0)
   {
       console.log(i);
   }
}

// A nested for loop to print “I’m the outer loop” 3 times and “I’m the inner loop” within the inner loop.
for(var i = 1; i <=3; i++) {
 console.log("I'm the outer loop", i);
 for(var j = 1; j <=3; j++) {
   console.log("\tI'm the inner loop", j);
 }
}


