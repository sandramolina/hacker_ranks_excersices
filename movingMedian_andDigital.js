//STRING PERIODS
function StringPeriods(str) {
  const stringSize = str.length;

  if (stringSize > 1) {
    for (let i = Math.ceil(stringSize / 2); i > 1; i--) {
      const subString = str.slice(0, i);
      const repetitions = subString.repeat(stringSize / i);

      if (repetitions === str) {
        return subString;
      }
    }
  }
  return -1;
}

//MOVING MEDIAN
const testData = [3, 0, 0, -2, 0, 2, 0, -2];

function median(array) {
  array.sort((a, b) => a - b);

  if (array.length === 1) {
    return array[0];
  }
  if (array.length % 2 !== 0) {
    const medianIndex = array.length % 2;
    return array[medianIndex];
  }
  const firstIndex = array.length / 2;
  const secondIndex = firstIndex + 1;
  // console.log(firstIndex, secondIndex);
  return (array[firstIndex - 1] + array[secondIndex - 1]) / 2;
}

function calculateMedian(arr) {
  const windowSize = arr.shift();
  const medianArr = [];

  let arrPosition = 0;
  while (arrPosition < arr.length) {
    const startWindow =
      arrPosition - windowSize < 0 ? 0 : arrPosition - windowSize;
    const endWindow = arrPosition + 1;
    // console.log(startWindow);
    const intermediateArr = arr.slice(startWindow, endWindow);
    // console.log(intermediateArr);
    const newValue = median(intermediateArr);
    medianArr.push(newValue);
    arrPosition++;
  }
  return medianArr;
}

console.log(calculateMedian(testData));
