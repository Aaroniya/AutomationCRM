/* FIBONACCI SERIES
let n1=0
let n2=1
let count=5;
   console.log(n1,n2);
   for (let i=1;i<=count;i++)

{
  let n3=n1+n2

  console.log(n3);
 n1=n2
 n2=n3
}

MAXIMUM AND MINIMUM 
console.log("Find Max and Min");
const array = [17, 24, 37, 2, 15, 44];
let max = Number.MIN_VALUE; 
let min = Number.MAX_VALUE; 

for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
    if (array[i] < min) {
        min = array[i];
    }
}

console.log("Max:", max);
console.log("Min:", min);
*/
console.log("Find Max and Min");
const array = [17, 24, 37, 2, 15, 44];

let max = Math.max(...array);
let min = Math.min(...array);

console.log("Max:", max);
console.log("Min:", min);

