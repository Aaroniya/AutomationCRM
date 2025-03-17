class Main {
    static main() {
        let str = "automind";
        let vowels = ""; // Changed variable name for clarity
        let chars = str.toLowerCase(); // No need for .split() if iterating directly
        for (let c of chars) {
            if ('aeiou'.includes(c)) { // Simplified vowel check
                vowels += c;
            }
        }
        console.log(vowels); // Correct method to print in JavaScript
    }
}

// Call the method
Main.main();
