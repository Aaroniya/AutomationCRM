/*for in loop
const person = {
    name: "sarah",
    age: 20
}

for (let key in person) {
    console.log("key: " + key);
    console.log("key:"+ person[key])
}
    using array
let colour=['red','blue','green'];
for (let key in colour)
{
    console.log(colour [key]);
}
/* fibo using for in loop
class fibo{
    static main(){
        let n1=5,n2=8;
        let count=7;
        console.log(n1);
        console.log(n2)
        const range=Array(count).fill(0);
        for (let key in range)
{
    let n3=n1+n2;
    console.log(n3);
    n1=n2;
    n2=n3;
    }    }
}
fibo.main();
*/
class oddnumber
{
    static main()
    {
        const number=[1,2,3,4,5,6,7,8,9,10];

console.log("for.in loop");
for(let index in number)
{
    let num=number[index];
    if(num%2!==0)
    {
        console.log(num);
    }
}
console.log("using for.of loop");
for (let num of number)
{
    if (num%2!==0)
    {
        console.log(num)
    }
}
    }
}
oddnumber.main();