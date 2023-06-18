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
  const stringLength = stringLower.length;
  const occurrencesInString = countLetterA(stringLower);

  const repetitions = Math.floor(n / stringLength);
  const remainder = n % stringLength;
  const partialString = stringLower.slice(0, remainder);

  const aCount =
    occurrencesInString * repetitions + countLetterA(partialString);

  return aCount;
}

function countLetterA(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'a') {
      count++;
    }
  }
  return count;
}

console.log(repeatedString('ba', 4));
// console.log('bababababa'.length);

/*
Calculate the length of the original string s (stringLength).
Calculate the number of occurrences of 'a' in the original string (occurrencesInString) using the countLetterA function.
Calculate the number of full repetitions of the string within n (repetitions) by dividing n by stringLength using Math.floor.
Calculate the remaining characters after the full repetitions (remainder) by taking the modulus (%) of n with stringLength.
Create a partial string (partialString) by slicing the original string from index 0 to the value of remainder.
Calculate the total number of 'a' occurrences (aCount) by multiplying occurrencesInString with repetitions and adding the count of 'a' occurrences in the partialString using the countLetterA function.
Return the final count of 'a' occurrences (aCount).
With this optimization, the function can handle larger values of n more efficiently while still returning the correct result.
*/
