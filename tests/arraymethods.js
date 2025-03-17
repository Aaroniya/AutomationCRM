/* Find Max and Min
FOR LOOP()

let numbers = [10, 5, 8, 20, 3, 15];

let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log("Maximum:", max); // 20
console.log("Minimum:", min); // 3

FOR EACH()

let numbers = [10, 5, 8, 20, 3, 15];

let max = numbers[0];
let min = numbers[0];

numbers.forEach(num => {
    if (num > max) max = num;
    if (num < min) min = num;
});

console.log("Maximum:", max); // 20
console.log("Minimum:", min); // 3

SORT METHOD()

let numbers = [10, 5, 8, 20, 3, 15];

// Sort in ascending order
numbers.sort((a, b) => a - b);

let min = numbers[0]; // Smallest element
let max = numbers[numbers.length - 1]; // Largest element

console.log("Maximum:", max); // 20
console.log("Minimum:", min); // 3

FILTER EVEN NUMBERS
FOR LOOP
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}
console.log(evenNumbers); // [2, 4, 6]

FOR EACH
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = [];
numbers.forEach(num => {
    if (num % 2 === 0) {
        evenNumbers.push(num);
    }
});
console.log(evenNumbers); // [2, 4, 6]

WHILE LOOP
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = [];
let i = 0;

while (i < numbers.length) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
    i++;
}
console.log(evenNumbers); // [2, 4, 6]
REVERSE STRING 
FOR LOOP
let str = "hello";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(reversed); // "olleh"
WHILE LOOP
let str = "hello";
let reversed = "";
let i = str.length - 1;
while (i >= 0) {
    reversed += str[i];
    i--;
}
console.log(reversed); // "olleh"
FOR EACH
let str = "hello";
let reversed = "";
str.split('').forEach(char => reversed = char + reversed);
console.log(reversed); // "olleh"

USING STACK (PUSH POP)
let str = "hello";
let stack = [];
for (let char of str) {
    stack.push(char);
}
let reversed = "";
while (stack.length > 0) {
    reversed += stack.pop();
}
console.log(reversed); // "olleh"

SORT AN ARRAY OF NUMBERS
SORT()
let numbers = [5, 2, 9, 1, 5, 6];

// Ascending order
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 5, 5, 6, 9]

// Descending order
numbers.sort((a, b) => b - a);
console.log(numbers); // [9, 6, 5, 5, 2, 1]

FOR LOOP
let numbers = [5, 2, 9, 1, 5, 6];

for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]) {
            // Swap numbers[i] and numbers[j]
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}

console.log(numbers); // [1, 2, 5, 5, 6, 9]
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] < numbers[j]) {
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}

console.log(numbers); // [9, 6, 5, 5, 2, 1]

AVERAGE USING ARRAY
FOR LOOP
let arr = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

let average = sum / arr.length;
console.log(average); // Output: 30

FOR EACH
let arr = [10, 20, 30, 40, 50];
let sum = 0;

arr.forEach(value => sum += value);

let average = sum / arr.length;
console.log(average); // Output: 30
WHILE LOOP
let arr = [10, 20, 30, 40, 50];
let sum = 0, i = 0;

while (i < arr.length) {
  sum += arr[i];
  i++;
}

let average = sum / arr.length;
console.log(average); // Output: 30
DO WHILE LOOP
let arr = [10, 20, 30, 40, 50];
let sum = 0, i = 0;

do {
  sum += arr[i];
  i++;
} while (i < arr.length);

let average = sum / arr.length;
console.log(average); // Output: 30

REMOVE DUPLICATE FROM ARRAY
SPLICE
const arr = [1, 2, 3, 4, 4, 5, 5, 6];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      arr.splice(j, 1);
      j--;
    }
  }
}
console.log(arr);
FOR EACH
const arr = [1, 2, 3, 4, 4, 5, 5, 6];
const uniqueArr = [];
arr.forEach(value => {
  if (!uniqueArr.includes(value)) uniqueArr.push(value);
});
console.log(uniqueArr);
DO WHILE
const arr = [1, 2, 3, 4, 4, 5, 5, 6];
const uniqueArr = [];
let i = 0;

do {
  if (!uniqueArr.includes(arr[i])) {
    uniqueArr.push(arr[i]);
  }
  i++;
} while (i < arr.length);

console.log(uniqueArr); 

Check if an array contains specific elements 
FOR LOOP
const arr = [1, 2, 3, 4, 5];
let found = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 3) {
    found = true;
    break;
  }
}
console.log(found);
FOR EACH
const arr = [1, 2, 3, 4, 5];
let found = false;

arr.forEach(num => {
  if (num === 3) {
    found = true;
  }
});
console.log(found);
SPLICE 
const arr = [1, 2, 3, 4, 5];
const target = 3;
let found = false;

for (let i = 0; i < arr.length; i++) {
  const removed = arr.splice(i, 1); 
  if (removed[0] === target) {
    found = true;
    arr.splice(i, 0, removed[0]);
    break; 
  }
  arr.splice(i, 0, removed[0]);
}

console.log(found);
REVERSE NUMBER
FOR EACH
const num = 12345;
const numArray = num.toString().split('');
let reversedNum = '';

numArray.forEach(digit => {
  reversedNum = digit + reversedNum;
});

console.log(parseInt(reversedNum));
FOR LOOP
const num = 12345;
const numStr = num.toString();
let reversedNum = '';

for (let i = numStr.length - 1; i >= 0; i--) {
  reversedNum += numStr[i];
}
console.log(parseInt(reversedNum)); 
SPLICE
const num = 12345; 
const numArray = num.toString().split('');
let reversedNumArray = [];

while (numArray.length > 0) {
  reversedNumArray.push(numArray.splice(numArray.length - 1, 1)[0]);
}

const reversedNum = parseInt(reversedNumArray.join(''));
console.log(reversedNum); 












