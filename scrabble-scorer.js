// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
	for (let i = 0; i < word.length; i++) {

	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt(word) {
 
   console.log("Let's play some scrabble! \n ");
    return input.question("Enter a word to score: ");

};

let simpleScore = function(word) {
  word = word.toUpperCase();
  let simplePoints = 0;
  for (i=0; i < word.length; i++) {
    simplePoints++;
    }
    return simplePoints;
    
  }

let vowelBonusScore = function(word) {
  word = word.toUpperCase();
  let bonusPoints = 0;
  for (i=0; i < word.length; i++) {
    if (word[i] === 'A' || word[i] === 'E' || word[i] === 'I' || word[i] === 'O' || word[i] === 'U') {
      bonusPoints += 2;
    }
    bonusPoints += 1;

  }
  return bonusPoints;
};

let scrabbleScore = 0;

const scoringAlgorithms = [
  { name: 'Simple Score', description: 'Each letter is worth 1 point', scorerFunction: simpleScore },
  { name: 'Bonus Vowels', description: 'Vowels are 3 pts, consonants are 1 pt.', scorerFunction: vowelBonusScore }, 
  { name: 'Scrabble', description: 'The traditional scoring algorithm', scorerFunction: oldScrabbleScorer}

];

function scorerPrompt(word) {
  let number = input.question(`which scoring algorithm would you like to use?\n
0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}
1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}
2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}
  Enter 0, 1, or 2: `)

  if (number === '0'){
    console.log("algorithm name: ", scoringAlgorithms[0].name);
    return `scoreFunction result: ${scoringAlgorithms[0].scorerFunction(word)}`
  }
  else if (number === '1'){
    console.log("algorithm name: ", scoringAlgorithms[1].name);
    return `scorerFunction result: ${scoringAlgorithms[1].scorerFunction(word)}`;
  }
  else if (number === '2'){
      console.log("algorithm name: ", scoringAlgorithms[2].name);
      return `scorerFunction result: ${scoringAlgorithms[2].scorerFunction(word)}`
    }
  }


function transform(object) {};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   let word = initialPrompt();
   console.log(scorerPrompt(word))
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

