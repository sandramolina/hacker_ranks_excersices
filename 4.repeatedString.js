/*
There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.
Example
s='abac'
n=10
The substring we consider is 4, the first  characters of the infinite string. There are  occurrences of a in the substring.

TEST pseudocode:
repeatedString('abab', 10) = 4
repeatedString('a', 10) = 10

Pseudocode:
- Initialize a count to 0
- Initialize a newString variable
- Make sure that the passes string is in lowercase
- Base case: if string is equal to 'a' then return n
- Iterate through the string until the lenght of newString is equal to n:
    - Append each character 
- Count how many times is 'a' on this new string

Questions? 
How are we going to append each character? using concat()
*/

function repeatedString(s, n) {
  const stringLower = s.toLowerCase();
  let aCount = 0;
  let repeatedString = '';

  if (stringLower === 'a') {
    aCount = n;
  } else {
    do {
      for (let char of stringLower) {
        if (repeatedString.length === n) {
          break;
        } else {
          repeatedString = repeatedString.concat(char);
        }
      }
    } while (repeatedString.length < n);
    aCount = countLetterA(repeatedString);
  }
  return aCount;
}

const countLetterA = (string) => {
  let count = 0;
  for (char of string) {
    if (char === 'a') {
      count++;
    }
  }
  return count;
};

console.log(
  repeatedString(
    'kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm',
    736778906400
  )
);
// console.log('bababababa'.length);
