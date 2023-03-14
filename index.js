
// Write your code here
// Define variables for multiply function
const num1 = 31;
const num2 = 2;
const multiply = num1 * num2;

// Define random function
const random = Math.floor(Math.random() * 100) + 1;

// Define variables for mod function
const num3 = 18;
const num4 = 7;
const mod = num3 % num4;

// Define variables for max function
const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const max = Math.max(...numbers);

module.exports = {
  multiply,
  random,
  mod,
  max
};

