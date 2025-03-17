/*ARMSTRONG NUMBER
const num = 153;
let temp = num;
let calculated = 0;
while(temp>0){
    let rem=temp%10;
    calculated=rem*rem*rem+calculated;
    temp= Math.floor(temp/10);
    }
if (num==calculated)
{
    console.log("Armstrong number");
}
else
{
    console.log("Not an Armstrong number");
}
fibbonic series
let n=10;
let n1=1;
let n2=1;
let n3=0;
console.log(n1,n2);
for (let i=0; i<n; i++)
{
    n3=n1+n2;
    n1=n2;
    n2=n3;
    console.log(n3);
}
prime numbers
let count=0
let i,j 
for(j=2;j<=100;j++)
{
for( i=1;i<=j;i++)
{
  if(j%i==0)
  count++
  }
if(count==2)
console.log(j)
count=0
}

PRIME NUMBERS
let number = 30;
let isPrime = true; 
for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}
if (isPrime && number > 1) {
    console.log(${number} is a prime number.);
  } else {
    console.log(${number} is not a prime number.);
  }
    PRIME NUMBER SAMPLE 2
  let number = 29; // Example number
  let isPrime = true; // Assume number is prime
  
  // Check divisibility from 2 to the number-1
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false; // If divisible, it's not prime
      break; // No need to check further
    }
  }
  
  // Output result
  if (isPrime && number > 1) {
    console.log(${number} is a prime number.);
  } else {
    console.log(${number} is not a prime number.);
  }
    
  let number = 29; // Example number
  let isPrime = true; // Assume number is prime
  
  // Check divisibility from 2 to the number-1
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false; // If divisible, it's not prime
      break; // No need to check further
    }
  }
  
  // Output result
  if (isPrime && number > 1) {
    console.log(`${number} is a prime number.`);  // Use backticks for string interpolation
  } else {
    console.log(`${number} is not a prime number.`);  // Use backticks for string interpolation
  }
  
  PRIME NUMBER SAMPLE 3
  function isPrime(num) {
    if (num <= 1) return false;      
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;  
    }
    
    return true;  
}
console.log(isPrime (13));
console.log(isPrime(16));

PRIME NUMBER SAMPLE 4
let num=20;
let prime=true;
for(i=2;i<num/2;i++)
{
  if(num%i==0)
  {
    prime=false;
    break;
  }
}

  if(prime){

  console.log("This is prime");
}
  else 
  {
  console.log("not prime");
}
*/
function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime numbers
  for (let j = 2; j < num; j++) {
      if (num % j === 0) return false; // If divisible by any number, not prime
  }
  return true; // Prime if no divisors found
}

for (let i = 2; i <= 20; i++) {
  if (isPrime(i)) {
      console.log(i);
  }
}