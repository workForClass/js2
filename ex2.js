// the following code has errors, find them and fix them and use node to check it is working

var inputArr = [8, 4, 2, 3, 5];
 
let bubbleSort = (inputArray) => {
   let len = inputArr.length;
   for (let i = 0; i < len; i++) {
       for (let j = 0; j < len; i++) {
           if (inputArr[j] > inputArr[j + 1]) {
               let tmp = inputArr[j];
               inputArr[j] = inputArr[j + 1];
               inputArr[j + 1] = tmp;
           }
       }
   }
   
};
 
console.log(bubbleSort(inputArr));

// diagram for bubble sort for context : https://www.productplan.com/uploads/bubble-sort-1024x683-2.png
// the above function when working should take the array and sort it from lowest to highest
