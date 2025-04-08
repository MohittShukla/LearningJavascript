// Importing prompt-sync to take input from the user in terminal
const prompt = require('prompt-sync')();

// Starting score is 0
let score = 0;

// Array of quiz questions with options and correct answer
const Quiz = [
  {
    question: "What is the capital of France?",
    options: ["A. Paris", "B. Rome", "C. Berlin", "D. Madrid"],
    answer: "A"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["A. Earth", "B. Mars", "C. Jupiter", "D. Venus"],
    answer: "B"
  },
  {
    question: "Who wrote Harry Potter?",
    options: ["A. J.K. Rowling", "B. J.R.R. Tolkien", "C. George R.R. Martin", "D. Stephen King"],
    answer: "A"
  }
];

// This function asks one question at a time and uses recursion to move to the next
function askQuestions(index, callback) {
  // If we've reached the end of the quiz, show final score and stop
  if (index >= Quiz.length) {
    console.log(`Quiz is over. Your score was ${score}/${Quiz.length}`);
    return;
  }

  // Picking the current quiz question
  let quiz = Quiz[index];

  // Printing the question
  console.log(quiz.question);

  // Printing all the options one by one
  quiz.options.forEach(option => {
    console.log(option);
  });

  // Taking input from user
  let answer = callback();

  // Checking if the user's answer is correct
  if (answer === quiz.answer) {
    console.log("Correct 🥳");  // keeping the original emoji as it is
    score++;
  } else {
    console.log("Oh So close..... ");  // Wrong answer message
  }

  console.log('');

  // Wait for 3 seconds before asking the next question
  setTimeout(() => {
    askQuestions(index + 1, callback);
  }, 3000);
}

// This function handles user input and converts it to uppercase
function giveAnswer() {
  let answer = prompt("enter your answer (A,B,C,D): ").toUpperCase();
  return answer;
}

// Calling the function to start the quiz from index 0
askQuestions(0, giveAnswer);
