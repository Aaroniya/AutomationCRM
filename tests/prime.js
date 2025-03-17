let num=17;
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

  console.log("This is a prime");
}
  else 
  {
  console.log("This is not a prime");
}