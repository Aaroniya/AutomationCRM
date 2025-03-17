/*let month="dec";
if(month=="April"||month=="May")
{
    console.log("Spring");
}
else if (month=="june"||month=="july")
{
    console.log('Summer');
}
else
{
    console.log("Autumn");
}
*/
let indhour=23;
let forhour=23;
function greet(hour)
{
    if (hour >=0 && hour <13)
    {
        console.log("Good Morning");
    }
    else if (hour>=13 && hour <17)
    {
        console.log("Good Afternoon");
    }
    else if (hour >=17 && hour <=23)
    {
        console.log("Good Night");
}
else {
    console.log("Invalid hour");
}
}
console.log("India:");
greet(indhour);
console.log("Foreign:");
greet(forhour);
