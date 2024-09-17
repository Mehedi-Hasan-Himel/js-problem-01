/* 
Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.
*/

function celsiusToFahrenheit(celsius) {
   let fahrenheit = (celsius * 9/5) + 32;
   return fahrenheit;
}

// Example usage
let celsius = 25;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius}°C is equal to ${fahrenheit}°F`);


