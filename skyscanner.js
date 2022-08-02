const solution = (arr) => {
  if (arr === null || arr.length === 0 || arr.length === 1) {
    return '';
  }

  let leftBranchTotal = 0;
  let rightBranchTotal = 0;

  const leftBranchStartingIndex = 1;
  const rightBranchStartingIndex = 2;

  //Calculate each branch sum
  //     leftBranchTotal = calculateBranchSum(arr, leftBranchStartingIndex)
  //     rightBranchTotal = calculateBranchSum(arr, rightBranchStartingIndex)

  //Solution function return
  if (leftBranchTotal > rightBranchTotal) {
    return 'Left';
  }
  if (rightBranchTotal > leftBranchTotal) {
    return 'Right';
  }

  return '';
};

// const calculateBranchSum(arr, startingIndex){
//         //pass
//     }

////

const solution = (numbers) => {
  const arraylength = numbers.length;
  if (numbers === null || arraylength === 0) {
    return 0;
  } else {
    numbers.sort((a, b) => a - b);
    return numbers[arraylength - 1];
  }
};
