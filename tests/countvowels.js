/*class Main {
    static main() {
        let str = "AUTOMIND";
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

vowels and constants

function countVowelsConsonants(str) {
    // Convert string to lowercase for uniformity
    str = str.toLowerCase();
    
    // Define vowels
    const vowels = "aeiou";
    
    // Initialize counters
    let vowelCount = 0;
    let consonantCount = 0;
    
    // Iterate through each character
    for (let char of str) {
        if (/[a-z]/.test(char)) { // Check if the character is a letter
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }
    
    return { vowels: vowelCount, consonants: consonantCount };
}

// Example usage
const string = "Hello World!";
const result = countVowelsConsonants(string);
console.log(`Vowels: ${result.vowels}, Consonants: ${result.consonants}`);

        let str = "AUTOMIND";
        let vowelsCount = 0;      // Counter for vowels
        let consonantsCount = 0;  // Counter for consonants
        
        let chars = str.toLowerCase(); // Convert string to lowercase
        
        for (let c of chars) {
            if ('aeiou'.includes(c)) { // Check if the character is a vowel
                vowelsCount++;
            } else if (/[a-z]/.test(c)) { // Check if the character is a consonant
                consonantsCount++;
            }
        }
        
        console.log(`Vowels: ${vowelsCount}, Consonants: ${consonantsCount}`); // Print counts
    
        function separateLetters(str) {
            let vowels = "";
            let consonants = "";
            for (let i = 0; i < str.length; i++) {
              let letter = str[i].toLowerCase();
              if ("aeiou".includes(letter)) {
                vowels += letter;
              } else if (letter >= "a" && letter <= "z") {
                consonants += letter;
              }
            }
            return { vowels, consonants };
          }
          
          console.log(separateLetters("welcome to automind"));

*/
function separateLetters(str) {
    let vowels = "";
    let consonants = "";
    let vowelCount = 0;
    let consonantCount = 0;
    for (let i = 0; i < str.length; i++) {
      let letter = str[i].toLowerCase();
      if ("aeiou".includes(letter)) {
        vowels += letter;
        vowelCount++;  
      }  else if (letter >= 'a' && letter <= 'z') {
        consonants += letter;
        consonantCount++;  
      }
    }
    return { vowels, vowelCount,consonants,consonantCount };
  }
  
  console.log(separateLetters("welcome to automind"));
