let num1, num2, operator;
let correctAnswers = 0;
let totalQuestions = 4;
let currentQuestion = 0;

function startGame() {
  document.getElementById('gameContainer').style.display = 'block';
  document.getElementById('question').innerText = generateQuestion();
}

function generateQuestion() {
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
  
  let questionText = `${num1} ${operator} ${num2} = `;
  return questionText;
}

function checkAnswer() {
  const userAnswer = parseFloat(document.getElementById('answerInput').value);
  let correctAnswer;
  
  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    case '/':
      correctAnswer = (num1 / num2).toFixed(2);
      break;
  }

  if (userAnswer === correctAnswer) {
    correctAnswers++;
  }

  if (currentQuestion < totalQuestions - 1) {
    currentQuestion++;
    document.getElementById('question').innerText = generateQuestion();
    document.getElementById('answerInput').value = '';
  } else {
    endGame();
  }
}

function endGame() {
  document.getElementById('gameContainer').style.display = 'none';
  alert(`You answered correctly ${correctAnswers} from ${totalQuestions} questions.`);
}
