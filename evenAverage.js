/* 
Even number of array average.
*/

function evenAverage(numbers) {
   const even = [];
   for (const number of numbers) {
     if (number % 2 === 0) {
       even.push(number);
     }
   }
 
   if (even.length === 0) {
     return "No even numbers found"; // Custom message when no even numbers
   }
 
   let sum = 0;
   for (const number of even) {
     sum += number;
   }
   
   const average = sum / even.length;
   return average;
 }
 
 const numbers = [42, 13, 58, 65, 81, 96, 7, 5];
 const avg = evenAverage(numbers);
 
 console.log(avg);
 