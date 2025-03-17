/*function printPattern(n) {
    for (let i = 1; i <= n; i++) {
      let str = '';
  
      // Print leading spaces
      for (let j = 1; j <= n - i; j++) {
        str += '  '; // Two spaces for alignment
      }
  
      // Print decreasing numbers
      for (let j = i; j >= 1; j--) {
        str += j + ' ';
      }
  
      // Print increasing numbers
      for (let j = 2; j <= i; j++) {
        str += j + ' ';
      }
  
      console.log(str.trim()); // Trim extra spaces at the end
    }
  }
  // Example usage
let n = 5;
printPattern(n);

function printPattern(n) {
    for (let i = 1; i <= n; i++) {
      let str = '';
  
      // Print leading spaces
      for (let j = 1; j <= n - i; j++) {
        str += '  '; // Two spaces for alignment
      }
  
      // Print decreasing numbers
      for (let j = i; j >= 1; j--) {
        str += j + ' ';
      }
  
      // Print increasing numbers
      for (let j = 2; j <= i; j++) {
        str += j + ' ';
      }
  
      console.log(str.trim()); // Trim extra spaces at the end
    }
  }
  // Example usage
let n = 5;
printPattern(n);

function printPattern(n) {
    for (let i = 1; i <= n; i++) {
      let str = '';
    for (let j = 1; j <= n - i; j++) {
        str += '  ';
      }
    for (let j = i; j >= 1; j--) {
        str += j + ' ';
      }
    for (let j = 2; j <= i; j++) {
        str += j + ' ';
      }
      console.log(str.trim());
    }
  }
let n = 5;
printPattern(n);

function printPyramidPattern(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        
        // Add spaces for alignment
        for (let j = 1; j <= n - i; j++) {
            str += ' ';
        }

        // Add decreasing numbers
        for (let j = i; j >= 1; j--) {
            str += j + ' ';
        }

        // Add increasing numbers
        for (let j = 2; j <= i; j++) {
            str += j + ' ';
        }

        // Print the current row
        console.log(str.trim());
    }
}

let n = 5; // You can change n to print a different sized pyramid
printPyramidPattern(n);

let n = 5; 
for (let i = 1; i <= n; i++) { 
	let str = "* "; 
	let space = ' '; 
	console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
}
  */
let n = 5;
for (let i = 1; i <= n; i++) {
	let str = '';
	let count = 1;
	for (let j = 1; j <= 2 * n; ++j) {
		if (i + j >= n + 1 && (i >= j - n + 1)) {
			// Add a space after each number
			str += count.toString() + ' ';
			count++;
		} else {
			// Add two spaces for the gap
			str += ' ';
		}
	}

	console.log(str);
}
