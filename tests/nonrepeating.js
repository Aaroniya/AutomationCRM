let str = "i am learning javascript";
let res = null;
for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
        res = char;
        break;
    }
}
console.log("Given string: " + str);
console.log("Non-repeating character: " + res);