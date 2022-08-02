string1 = 'DDUUDDUDUUUD'; //returns 2
string2 = 'UDDDUDUU'; //Returns 1

// function countingValleys(steps, path) {
//     // Write your code here

// }

//Transform string into an array of numbers
const array = string2.split('');
arrayOfValues = array.map((step) => (step === 'U' ? 1 : -1));

// Calculate path running total and save it into an array
//TODO: the array must save the running value and not just the sum of the prior value plus the current one
pathRunningValue = arrayOfValues.map((value, i) => {
  if (i === 0) {
    return value;
  } else {
    console.log(i, value, arrayOfValues[i - 1], value + arrayOfValues[i - 1]);
    //return value + arrayOfValues[i - 1];
  }
});
//console.log(pathRunningValue);
