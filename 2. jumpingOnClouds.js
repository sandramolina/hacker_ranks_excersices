const path1 = [0, 1, 0, 0, 0, 1, 0];
const path2 = [0, 1, 0, 0, 0, 1, 0];

let jumps = 0;
const getPath = (c) => {
  if (c.length === 1) {
    return 0;
  }
  if (c[2] === 0 && c.length > 1) {
    jumps += 1;
    const newC = c.slice(2);
    getPath(newC);
  } else if (c[1] === 0 && c.length > 1) {
    jumps += 1;
    const newC = c.slice(1);
    getPath(newC);
  }
  return jumps;
};

console.log(getPath(path1));

//AI SOLUTION:
// const getMinJumps = (arr, jumps = 0) => {
//   if (arr.length === 1) {
//     return 0;
//   }

//   if (arr[2] === 0 && arr.length > 1) {
//     jumps += 1;
//     const newC = arr.slice(2);
//     getMinJumps(newC, jumps);
//   } else if (arr[1] === 0 && arr.length > 1) {
//     jumps += 1;
//     const newC = arr.slice(1);
//     getMinJumps(newC, jumps);
//   } else {
//     return jumps;
//   }
// };
// console.log(getMinJumps(path1));
