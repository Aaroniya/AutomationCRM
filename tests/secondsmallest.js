/*
function secondSmallestElement(arr) {
    arr.sort((a, b) => a - b);
    return arr[1];
}

const numbers = [5, 2, 8, 3, 1, 7];
console.log("Second smallest element:", secondSmallestElement(numbers));
*/

function secondSmallestElement(arr) {
    let smallest = Infinity;
    let secondSmallest = Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i];
        }
    }
    
    return secondSmallest;
}

const numbers = [5, 2, 8, 3, 1, 7];
console.log("Second smallest element:", secondSmallestElement(numbers));
