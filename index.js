#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\t Welcome to devnahyank, CLI Number Guessing Game.\n ");
// 1) Computer will generate a random number
// 2) User input for guessing number
// 3) Campare the result with user and computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessingNumber",
        type: "number",
        message: "Please guess a number between 1 to 6: ",
    },
]);
if (answer.userGuessingNumber === randomNumber) {
    console.log("Congratulations you guessed right number");
}
else {
    console.log("You guessed wrong number");
}
