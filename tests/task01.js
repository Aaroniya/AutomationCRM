/*function reverseWords(sentence) {
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

function reverseWords(sentence) {
let words = sentence.split(' ');
for (let i = 0; i < words.length; i++) {
words[i] = [...words[i]].reverse().join('');
}
return words.join(' ');
}
let inputSentence = "We are working on sdet";
let outputSentence = reverseWords(inputSentence);
console.log(outputSentence);

*shift right side zeros*
 const arr = [2, 0, 1, 3, 0, 0, 5];
 let result=[];
 let result1=[];
 for(let i=0;i<=arr.length-1;i++)
 {
    if(arr[i]!=0)
    {
        result.push(arr[i]);
    }
    else
    {
        result1.push(arr[i]);
    }
 }
 console.log(result);
 console.log(result1);
 let output=result.concat(result1);
 console.log(output);
 
 *print odd and even character*

const input="AUTOMIND INFOTECH";
let evenchars=" ";
let oddchars=" ";
for(let i=0;i<input.length;i++)
{
    if(i%2===0)
    {
        oddchars+=input[i];
    }
    else
    {
       evenchars+=input[i]; 
    }
}
console.log(oddchars);
console.log(evenchars);

const arr = [2, 0, 1, 3, 0, 0, 5];
function moveZero(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            newArr.push(arr[i]);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            newArr.push(0);
        }
    }
  return newArr;
}
console.log(moveZero(arr));
*/

let array = [8,2,5,6,7,9];
let randomindex = Math.floor(Math.random()*array.length);
let randomvalue = array[randomindex];
console.log(randomvalue);