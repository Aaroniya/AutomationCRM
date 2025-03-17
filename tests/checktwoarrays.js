function areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

let a = [1, 2, 3, 4];
let b = [1, 2, 3, 4];
let c = [1, 2, 3, 5];

console.log(areArraysEqual(a, b));
console.log(areArraysEqual(a, c)); 
