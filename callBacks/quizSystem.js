const prompt = require('prompt-sync')();


let score = 0;
const Quiz = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Rome", "Berlin", "Madrid"],
      answer: "A"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "B"
    },
    {
      question: "Who wrote Harry Potter?",
      options: ["J.K. Rowling", "J.R.R. Tolkien", "George R.R. Martin", "Stephen King"],
      answer: "A"
    }
  ];
  function askQuestions(index,callback){
    if(index>=Quiz.length){
        console.log(`Quiz is over. Your score was ${score}/${Quiz.length}`);
        return;
    }
   let quiz = Quiz[index];
    console.log(quiz.question);
    quiz.options.forEach(option => {
        console.log(option);
    });

    let answer = callback();
    if(answer == quiz.answer){
        console.log("Correct 🥳");
        score++;
    }
    else{
        console.log("Oh So close..... ");
    }
    
    setTimeout(()=> {
        askQuestions(index + 1,callback)
    },3000)
    console.log('');
  }
  function giveAnswer(){
    let answer = prompt("enter your answer (A,B,C,D): ").toUpperCase();
    return answer;
  }

  askQuestions(0,giveAnswer);
