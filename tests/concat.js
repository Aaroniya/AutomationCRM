const a =[10,20,30];
const b =[40,50,60];
const c =[70,80,90];
let d = a.concat(b);
console.log(d);

d =a.concat(b,c);
console.log(d);

d =a.concat(b,c,25,35,55,60);
console.log(d);

d =a.concat(b,c,25,35,45,['a','b','c','d']);
console.log(d);

