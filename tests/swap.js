/*let x=40;
let y=20;
console.log("Before swap:"+" x ="+x+",y="+y);
x=x+y;
y=x-y;
x=x-y;
console.log("After swap:"+"x="+x+",y="+y);

SWAP VARIABLES
let x=40;
let y=20;
console.log("Before swap:"+" x ="+x+",y="+y);
x=x*y;
y=x/y;
x=x/y;
console.log("After swap:"+"x="+x+",y="+y);


console.log("Find Max and Min");
const array =[17,24,37,2,15,44];
let max =Math.max (...array);
let min =Math.min (...array);
console.log ("Max:",max);
console.log("Min:",min);

console.log("Reverse string using Array");
const str ="hello";
const reversed =str.split(' ').reverse().join(' ');
console.log("Reverse string:",reversed);
*/
let a = 40;
let b = 20;

console.log(`Before Swap: a = ${a}, b = ${b}`);

// Swap without using a third variable
a = a + b; // a becomes 60
b = a - b; // b becomes 40
a = a - b; // a becomes 20

console.log(`After Swap: a = ${a}, b =${b}`);