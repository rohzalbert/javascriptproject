// SRING MANIPULATION FUNCTIONS:
// TODO 1: Reverse a String: Write a function that reverses a given string.

function reverseString(str) {
  return str.split('').reverse().join('');
}

// Example:
const originalString = "hello";
const reversedString = reverseString(originalString);
console.log(reversedString); 



// TODO 2: Count Characters: Create a function that counts the number of characters in a string.
  
//  function countCharacters(str) {
//   return str.length;
// }

// Example:
// let myString = "Hello, world!";
// console.log("Number of characters: " + countCharacters(myString));



// TODO 3: Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
// function capitalizeWords(sentence) {
//   return sentence.replace(/\b\w/g, function(char) {
//       return char.toUpperCase();
//   });
// }

// // Example:
// const sentence = "this is a topic in javascript.";
// const capitalizedSentence = capitalizeWords(sentence);
// console.log(capitalizedSentence); 




// ARRAY FUNCTIONS 
// TODO 1: Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.

// function findMax(arr) {
//   if (arr.length === 0) {
//       return null;
//   }
  
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//           max = arr[i];
//       }
//   }
  
//   return max;
// }

// function findMin(arr) {
//   if (arr.length === 0) {
//       return null;
//   }
  
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < min) {
//           min = arr[i];
//       }
//   }
  
//   return min;
// }

// // Example:
// const numbers = [4, 8, 2, 10, 5];
// console.log("Maximum value: " + findMax(numbers)); 
// console.log("Minimum value: " + findMin(numbers)); 


//TODO 2: Sum of Array: Create a function that calculates the sum of all elements in an array.
// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//   }
//   return sum;
// }

// // Example:
// const numbers = [12, 201, 113, 904, 573];
// const totalSum = sumArray(numbers);
// console.log("Sum of the array: " + totalSum); 



//TODO 3: Filter Array: Implement a function that filters out elements from an array based on a given condition.
// function filterArray(arr, condition) {
//   let filteredArray = [];
//   for (let i = 0; i < arr.length; i++) {
//       if (condition(arr[i])) {
//           filteredArray.push(arr[i]);
//       }
//   }
//   return filteredArray;
// }

// // Example:
// const numbers = [1, 2, 3, 4, 5, 11, 13, 14, 18, 21];
// const filteredNumbers = filterArray(numbers, function(num) {
//   return num % 2 === 0; 
// });
// console.log(filteredNumbers); 




// MATHEMATICAL FUNCTIONS
// TODO 1: Factorial: Write a function to calculate the factorial of a given number.
// function calculateFactorial(num) {
//   if (num < 0) {
//       return "Factorial is not defined for negative numbers";
//   } else if (num === 0) {
//       return 1;
//   } else {
//       let factorial = 1;
//       for (let i = 1; i <= num; i++) {
//           factorial *= i;
//       }
//       return factorial;
//   }
// }

// // Example:
// const number = 5;
// const result = calculateFactorial(number);
// console.log(`The factorial of ${number} is: ${result}`);



//TODO 2: Prime Number Check: Create a function to check if a number is prime or not.
// function isPrime(number) {
//   if (number <= 1) {
//       return false;
//   }
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//           return false;
//       }
//   }
//   return true;
// }

// // Example:
// const num = 19;
// if (isPrime(num)) {
//   console.log(`${num} is a prime number`);
// } else {
//   console.log(`${num} is not a prime number`);
// }



// TODO 3: Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. 
// function generateFibonacciSequence(numTerms) {
//   const fibonacciSequence = [0, 1];
//   for (let i = 2; i < numTerms; i++) {
//       const nextFibonacci = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
//       fibonacciSequence.push(nextFibonacci);
//   }
//   return fibonacciSequence;
// }

// // Example:
// const numberOfTerms = 8;
// const fibonacciSequence = generateFibonacciSequence(numberOfTerms);
// console.log(`Fibonacci sequence up to ${numberOfTerms} terms: ${fibonacciSequence.join(', ')}`);



