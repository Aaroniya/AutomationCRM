/*function area(l,b)
{
    var area=l*b
    console.log("Area is:"+area)

}
var length=10
var breadth=20

area(10,20)

function myname()
{
return ("derika")
}
var a=myname()
console.log(a)

let array = [1, 2, 3, 4, 5];
let result = array.toString();
console.log(result); 

let array = [10, 20, 30, 40, 50];
let result = array.at(3); // Accessing the 3rd element (index starts from 0)
console.log(result);  // Output: 40

let array = [10, 20, 30, 40, 50];
array.length = 3;  // Truncate to the first 3 elements
console.log(array);  // Output: [10, 20, 30]

let array = [1, 2, 3, 4, 5];
let result = array.join();
console.log(result);  // Output: "1,2,3,4,5"

let array = [10, 20, 30, 40, 50];
let removedElement = array.pop();
console.log(removedElement);  // Output: 50
console.log(array);           // Output: [10, 20, 30, 40]


let array = [10, 20, 30];
let newLength = array.push(40);
console.log(newLength);  // Output: 4
console.log(array);      // Output: [10, 20, 30, 40]

let array = [10, 20, 30, 40];
let removedElement = array.shift();
console.log(removedElement);  // Output: 10
console.log(array);           // Output: [20, 30, 40]

let array = [20, 30, 40];
let newLength = array.unshift(10);
console.log(newLength);  // Output: 4
console.log(array);      // Output: [10, 20, 30, 40]

let numbers = [10, 20, 30, 40, 50];

let maxValue = Math.max(...numbers);  // Spread the array
console.log(maxValue);  // Output: 50

let minValue = Math.min(...numbers);  // Spread the array
console.log(minValue);  // Output: 10
*/
let numbers = [10, 20, 30, 40, 50];
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

console.log("Max:", max);  // Output: Max: 50
console.log("Min:", min);  // Output: Min: 10
