// 10. Return the number of vowels in a string
//Try creating an array that contains the vowels

/*
Function countVowels pseudocode
Input: string
variable count to keep track of the findings
To iterate through each letter of the string:
	check if such letter is a vowel
	count it if it is a vowel
	if it's not a vowel, do nothing.
return the count from all the iterations

Questions:
1. How are we going to define what's a 'vowel'?
Create a vowels array
2. How to loop?
for each? is valid for strings? -> no, 
What about a normal loop using the string length until the index is length-1
We'll loop for each element until 
What about creating an array from the string and using that array? -> this would mean we would have to iterate through the string and then the array
3. How to assess equality?
if each letter is included in array vowel
*/
const string = 5;

const countVowels = (string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i <= string.length - 1; i++) {
    if (vowels.includes(string[i])) {
      count += 1;
    }
  }

  return count;
};

console.log(countVowels(string));
