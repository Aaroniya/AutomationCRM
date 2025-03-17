function countCharacterOccurrences(str) {
    const charCount = {};

    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    return charCount;
}

// Example usage
const inputString = "hello world";
const result = countCharacterOccurrences(inputString);
console.log(result);
