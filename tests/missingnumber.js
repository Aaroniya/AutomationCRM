function MissingNumber(arr) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
    return arr.length + 1;
}

const numbers = [1,2, 3, 4, 5, 7, 8, 9, 10];
const missingNumber = MissingNumber(numbers);
console.log("The missing number is:",missingNumber);