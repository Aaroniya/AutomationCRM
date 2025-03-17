//inbuilt method
//let original ="welcome world";
//let reversed =original.split('').reverse().join('');
//console.log(reversed);

//spread operator
//let original ="welcome world"
//let reversed =[...original ].reverse ().join (" ");
//console.log (reversed)

//character occurance
//const text ="welcome to automind infotech"
//const char = " 0 "
//const count =text.split (char).length -1;
//console.log (count);

//for loop
let original ="Hello World"
let reversed ="";
for (let i= original.length -1;i>=0;i--)
{
    reversed +=original [i];
}
console.log(reversed);