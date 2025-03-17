//Every using function
/*n=[10,20,30,40,50];
function even(value)
{
    return value % 2==0;
}
result=n.every(even);
console.log("All Elements are even :",result);

//Some using function
n=[10,20,30,40,50];
function even(value)
{
    return value % 2==0;
}
result=n.some(even);
console.log("All Elements are even :",result);

//USING OBJECTS()
const user =[
    {name:"sita",age:20},{name:"siva",age:19},{name:"ram",age:30},{name:"roja",age:25}
];
function isEligible(element){
    return element.age >=18;
}
    result = user.every (isEligible);
    console.log("Every Eligible:",result);
    result = user.some (isEligible);
    console.log("Some Eligible:",result);
    
//Every()
n=[10,20,30,40,50];
let result =n.every((value)=>{
    return value % 2 == 0;
});
console.log("All Elements are Even:", result); 

//Some()
n=[10,20,30,40,50];
let result =n.some((value)=>{
    return value % 2 == 0;
});
console.log("All Elements are Even:", result);