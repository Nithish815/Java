const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a sentence: ', (sentence) => {
  const reversedSentence = reverseWordsInSentence(sentence);
  console.log('Reversed sentence: ' + reversedSentence);
  rl.close();
});

function reverseWordsInSentence(sentence) {
  const words = sentence.split(' '); // Split the sentence into words
  const reversedWords = words.map(reverseWord); // Reverse each word
  return reversedWords.join(' '); // Join the reversed words back into a sentence
}

function reverseWord(word) {
  return word.split('').reverse().join(''); // Reverse the characters in the word
}
