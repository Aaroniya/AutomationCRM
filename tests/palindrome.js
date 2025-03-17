/*function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}

let str1 = "malayalam";
let str2 = "jenet";
let str3 = "dad";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));

*/
function isPalindrome(str){
   function reverseString(s){
    let reversedstr ='';
    for(let i=str.length-1; i>=0; i--){
        reversedstr += str[i];
   }
   return reversedstr;
}
const cleanedstr = str.toLowerCase();
return cleanedstr === reverseString(cleanedstr);
}
console.log(isPalindrome('madam'));
