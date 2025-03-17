let str = "hello all i learn javascript";
let longest = str.split (" ");
let sorted = longest.sort((a,b) => {
    return b.length - a.length;
});
console.log("Given string:" +str);
console.log("The longest word is:"+sorted[0]);


