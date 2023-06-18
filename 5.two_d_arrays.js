let MathScore = [
  ['John Doe', 20, 60, 'A'],
  ['Jane Doe', 10, 52, 'B'],
  ['Petr Chess', 5, 24, 'F'],
  ['Ling Jess', 28, 43, 'A'],
  ['Ben Liard', 16, 51, 'B'],
];

// Sum all elements of the matrix - nested for loops
let numberArr = [
  [10, 20, 60],
  [8, 10, 52],
  [15, 5, 24],
  [26, 28, 43],
  [12, 16, 51],
];

let sum = 0;
numberArr.forEach((array) => {
  array.forEach((element) => {
    sum += element;
  });
});
// console.log(sum);

// Add a new elemnent to array on index 0
// MathScore[0].push('B');
// console.table(MathScore);

//Add a new column to all arrays - this adds the total score to the end (array[1] and array[2] are scores)
MathScore.forEach((array) => {
  let totalScore = array[1] + array[2];
  array.push(totalScore);
});
console.table(MathScore);
