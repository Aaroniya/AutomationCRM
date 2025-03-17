/*const fruits = ['apple', 'banana', 'cherry'];

const result = fruits.map(function(fruit, index) {
  return `${index}: ${fruit}`;
});
console.log(result);
*/
const fruits =['apple','banana','cherry'];
const fruitsdetail=fruits.map(function(fruits,index,array) {
return {
fruits:fruits,
length:fruits.length,
position:index,
totalwords:array.length,
};
});
console.table(fruitsdetail);

