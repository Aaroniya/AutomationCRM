/*
let arr = [1, 2, 3];
arr.push(4);
console.log(arr);

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

    RANDOM ARRAY
let array = [8,2,5,6,7,9];
let randomindex = Math.floor(Math.random()*array.length);
let randomvalue = array[randomindex];
console.log(randomvalue);

FILTER EVEN NUMBER USING ARRAY
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        evenNumbers.push(numbers[i]);
    }
}

console.log("Even Numbers:", evenNumbers);

SORT METHOD
*/
const a = [5, 2, 9, 1, 7];

// Ascending order
a.sort((x, y) => x - y);
console.log(a);

// Descending order
a.sort((x, y) => y - x);
console.log(a);