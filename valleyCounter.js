string1 = 'DDUUDDUDUUUD'; //returns 2
string2 = 'UDDDUDUU'; //Returns 1

//The array must save the running value and not just the sum of the prior value plus the current one
const pathRunningValueArray = (arr) => {
  let runningTotal = 0;
  let runningTotalArray = [];
  arr.forEach((element) => {
    runningTotalArray.push((runningTotal += element));
  });
  return runningTotalArray;
};

//Given an array of values, account for the number of times the running value is <0 right before it's 0 again.
const valleyCounter = (array) => {
  let counter = 0;
  array.forEach((element, i) => {
    if (element === 0 && array[i - 1] < 0) {
      counter += 1;
    }
  });
  return counter;
};

function countingValleys(path) {
  // 1. Transform path into an array of numbers
  const pathArray = path.split('');
  const arrayOfValues = pathArray.map((step) => (step === 'U' ? 1 : -1));
  // 2. Calculate path running total and save it into an array
  const runningTotalArray = pathRunningValueArray(arrayOfValues);
  //3. Count the number of valleys within the array
  const totalValleys = valleyCounter(runningTotalArray);
  return totalValleys;
}

console.log(countingValleys(string1));
console.log(countingValleys(string2));
