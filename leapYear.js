/* 
simple logic
year will be leapYear if the year is divisible by 4.
*/

/* function isLeapYear(year) {
  if (year % 4 === 0) {
    return "Leap Year";
  }
}

console.log(isLeapYear(2020));
 */
/* 
1. those year that is not divisible by 100. if the year is divisible by 4: then it will be a leap year.

2. if the year is divisible by 400 , then it is leap year.

3. else it is not a leap year
*/

function isLeapYear(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2400));

