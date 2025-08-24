import promp from "./promp.js";
import data from "./data.js";

/* Get one random word from data */
const word = data[Math.floor(Math.random() * data.length)];

// 1. solution 
let attempts = 7;
let progress = "";

async function runGame () {
    const answer =  await promp(`${word.question} `);

    if (answer.toLowerCase() !== word.word){

        // 2. solution 
        attempts--;
        progress = "HANGMAN".slice(0, 7 - attempts);
        console.log(progress);
        
        if(attempts === 1) console.log(`Hint: ${word.hint}`);
        if(attempts === 0) {
            console.log(`Game Over! The word was: ${word.word}`)
            return;
        }

    } else {
        console.log("Congratulations! You've guessed the word correctly.");
        return;
    }
    return runGame();
}

runGame();