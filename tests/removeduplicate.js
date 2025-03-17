/*
let a=[10,20,20,30,40,50,50];
let s=new Set(a);
let a1=[...s]
console.log(a1);

let a=[10,20,20,30,40,50,50];
let a1 = [];
a.forEach(element => {
    if (!a1.includes (element)){
        a1.push(element)
    }
});
console.log(a1);


function printDuplicateCharacters(inputString) {
    const duplicates = new Set();
    for (let i = 0; i < inputString.length; i++) {
        for (let j = i + 1; j < inputString.length; j++) {
            if (inputString[i] === inputString[j]) {
                duplicates.add(inputString[i]);
                break;
            }
        }
    }
    if (duplicates.size > 0) {
        console.log("Duplicate characters:", Array.from(duplicates).join(", "));
    } else {
        console.log("No duplicate characters found.");
    }
}
printDuplicateCharacters("programming");
*/
function removeDuplicateCharacters(inputString) {
    const duplicates = new Set();
    const uniqueCharacters = new Set();
    let result = "";
    for (let i = 0; i < inputString.length; i++) {
        if (uniqueCharacters.has(inputString[i])) {
            duplicates.add(inputString[i]);
        } else {
            uniqueCharacters.add(inputString[i]);
        }
    }
    for (const char of inputString) {
        if (!duplicates.has(char)) {
            result += char;
        }
    }

    console.log("String after removing duplicates:", result);
    return result;
}
removeDuplicateCharacters("programming");
