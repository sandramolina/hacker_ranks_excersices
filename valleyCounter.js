string1 = 'DDUUDDUDUUUD'; //returns 2
string2 = 'UDDDUDUU'; //Returns 1

// function countingValleys(steps, path) {
//     // Write your code here

// }

//Transform string into an array of numbers
const array = string2.split('');
arrayOfValues = array.map((step) => (step === 'U' ? 1 : -1));
// console.log(arrayOfValues);

//A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Valley --> when the running score is over 0 and then becomes <0 until it becomes > 0.

// Calculate path running total and save it into an array
//TODO: the array must save the running value and not just the sum of the prior value plus the current one
const pathRunningValueArray = (arr) => {
  let runningTotal = 0;
  let runningTotalArray = [];
  arr.forEach((element) => {
    runningTotalArray.push((runningTotal += element));
    //console.log('element: ', element, 'runningT: ', runningTotal);
  });
  return runningTotalArray;
};
//console.log(pathRunningValueArray(arrayOfValues));

//TODO:Given an array of values, account for the number of times the running value is <0 right before it's 0 again.
const valleyCounter = (array) => {
  let counter = 0;
  array.forEach((element, i) => {
    if (element === 0 && array[i - 1] < 0) {
      counter += 1;
    }
  });
  return counter;
};
console.log(valleyCounter(pathRunningValueArray(arrayOfValues)));
// pathRunningValue = arrayOfValues.map((value, i) => {
//   if (i === 0) {
//     return value;
//   } else {
//     console.log(i, value, arrayOfValues[i - 1], value + arrayOfValues[i - 1]);
//     //return value + arrayOfValues[i - 1];
//   }
// });
//console.log(pathRunningValue);
