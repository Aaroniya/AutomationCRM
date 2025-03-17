//function test() {
  //  return "Hello";
  //}
  //console.log(typeof test);
  //let obj = {};
//console.log(typeof obj);

//console.log(typeof null);
//(function() {
   // console.log("Hello!");
  //})();
 // console.log(typeof undefined === typeof null);
 
 
 /*var season="autumn";

 if(season =="spring")
 {
  console.log("enjoy the blooming flowers");
 }
 if (season == "summer")
 {
  console.log("have a fun in sun");
 }
 if (season == "autumn")
 {
  console.log("admire the colourful leaves");
 }
 if (season == "winter")
 {
  console.log("bundle up and stay warm");
 }
 
for(let count=1;count<=5;count=count+1)
{
  console.log("aaro");
}


let a=new Array(3);
a[0]="java";
a[1]="js";
a[2]="sql";
console.log(a);

// Initial array
let numbers = [10, 20, 30, 40, 50];

// Display the original array
console.log("Original Array:", numbers);

// Using shift() to remove the first element
let removedElement = numbers.shift();

// Display the removed element
console.log("Removed Element:", removedElement);

// Display the modified array
console.log("Modified Array:", numbers);

// Initial array
//let numbers = [10, 20, 30, 40, 50];

// Display the original array
//console.log("Original Array:", numbers);

// Using unshift() to add an element at the beginning
//let newLength = numbers.unshift(5);  // Adds 5 to the beginning

// Display the new length and the modified array
//console.log("New Length of Array:", newLength);
//console.log("Modified Array:", numbers);



// Initial array of fruits
let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Display the original array
console.log("Original Fruits Array:", fruits);

// Using unshift() to add a fruit at the beginning
let newLength = fruits.unshift('Pineapple');  // Adds 'Pineapple' to the beginning

// Display the new length and modified array
console.log("New Length of Fruits Array:", newLength);
console.log("Modified Fruits Array:", fruits);

// Using unshift() to add multiple fruits at the beginning
newLength = fruits.unshift('Grapes', 'Strawberry');  // Adds 'Grapes' and 'Strawberry'

console.log("New Length of Fruits Array after multiple unshift:", newLength);
console.log("Modified Fruits Array after multiple unshift:", fruits);



// Function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Taking user input
let userInput = prompt("Enter a string to reverse:");

// Reversing the string and displaying the result
let reversedString = reverseString(userInput);
alert("Reversed string: " + reversedString);

function fact(n) { 
  let res = 1; 
  
  if(n ==0)
      return 1;
  for (let i = 2; i <= n; i++) 
      res = res * i; 
  return res; 
}

let n = 5; 
console.log(fact(n));

hoistedVariable = 8;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;

hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling

function hoistedFunction(){ 
  console.log(" Hello world! ");
} 
  */
var x = 220;
var y = "Hello";
var z = undefined;
        
x || y    // Returns 220 since the first value is truthy
        
x || z   // Returns 220 since the first value is truthy
        
x && y    // Returns "Hello" since both the values are truthy
        
y && z   // Returns undefined since the second value is falsy
        
if( x && y ){ 
  console.log("Code runs" ); // This block runs because x && y returns "Hello" (Truthy)
}   
        
if( x || z ){
  console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
}