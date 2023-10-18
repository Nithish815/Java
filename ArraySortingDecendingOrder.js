const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter numbers separated by spaces: ', (input) => {
  const numbers = input.split(' ').map(Number); // Split input into numbers
  const sortedArray = sortArrayDescending(numbers);

  console.log('Sorted array in descending order: ' + sortedArray.join(' '));
  rl.close();
});

function sortArrayDescending(arr) {
  return arr.sort((a, b) => b - a); // Sort in descending order
}
