/*function reverseWords(str) {
   let words = str.split(" "); // Split the string into an array of words
   let reversedWords = [];

   for (let word of words) {
       let reversedWord = "";
       for (let i = word.length - 1; i >= 0; i--) {
           reversedWord += word[i]; // Reverse the current word
       }
       reversedWords.push(reversedWord); // Add reversed word to the result array
   }

   return reversedWords.join(" "); // Join reversed words into a single string
}

// Example usage:
let original = "Hello World";
let reversed = reverseWords(original);
console.log(reversed);

*/
function reverseWords(sentence) {
    // Split the sentence into words
    let words = sentence.split(' ');
    
    // Reverse each word
    let reversedWords = words.map(word => word.split('').reverse().join(''));
    
    // Join the reversed words back into a single string
    return reversedWords.join(' ');
  }
  
  // Example usage
  let inputSentence = "We are working on sdet";
  let outputSentence = reverseWords(inputSentence);
  console.log(outputSentence);