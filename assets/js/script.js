//BUTTON VARIABLES
//Home Screen Buttons
const playButton = document.getElementById('play-button');
const rulesButton = document.getElementById('rules-button');
const scoresButton = document.getElementById('scores-button');
//Enter Name Screen
const submitName = document.getElementById('submit-name');
//Difficulty Buttons
const beginnerButton = document.getElementById('beginner');
const intermediateButton = document.getElementById('intermediate');
const advancedButton = document.getElementById('advanced');
//Dissable Intermediate & Advanced buttons at start of game
intermediateButton.disabled = true;
advancedButton.disabled = true;
//Game Screen Buttons
const question = document.getElementById('question');
const answerButton = document.getElementsByClassName('question-btn');
const nextButton = document.getElementById('next-btn');
const spacer = document.getElementById('spacer');
//Game Over Screen
const homeButton = document.getElementById('home-btn');
const playAgainButton = document.getElementById('play-again-btn');
const highScoresButton = document.getElementById('high-scores-btn');
//Back Buttons
const backButtonRules = document.getElementById('back-button-rules');
const backButtonScores = document.getElementById('back-button-scores');
const backButtonName = document.getElementById('back-button-name');
const backButtonDifficulty = document.getElementById('back-button-difficulty');
const backButtonGame = document.getElementById('back-button-game');
const backButtonGameOver = document.getElementById('back-button-game-over');
//Close game buttons
const closeGame = document.getElementById('close-game');
const continueGame = document.getElementById('continue-game');

//GAME SOUNDS
const correctAnswerSound = new Audio('assets/sounds/correct-answer.mp3');
const incorectAnswerSound = new Audio('assets/sounds/wrong-answer.mp3');
const selectSound = new Audio('assets/sounds/select.mp3');
let soundSlider = document.getElementById('sound-slider');
//Play the correct sound function for when correct answer selected
function playCorrectSound() {
  if (!soundSlider.checked) {
    return;
  } else if (soundSlider.checked) {
    correctAnswerSound.volume = 0.1;
    correctAnswerSound.play();
  }
}
//Play wrong sound function for when wrong answer selected
function playIncorrectSound() {
  if (!soundSlider.checked) {
    return;
  } else if (soundSlider.checked) {
    incorectAnswerSound.volume = 0.1;
    incorectAnswerSound.play();
  }
}
//Play selection sound function for when a button is clicked
function playSelectSound() {
  if (!soundSlider.checked) {
    return;
  } else if (soundSlider.checked) {
    selectSound.volume = 0.1;
    selectSound.play();
  }
}

//VARIABLES
let username;
let shuffledQuestions, shuffledAnswers;
let currentQuestionIndex = 0;
let finalScore;
let gameType;
let correctScore = document.getElementById('correct-score');

//CONTAINERS
const homeContainer = document.getElementById('home-container');
const rulesContainer = document.getElementById('rules-container');
const scoresContainer = document.getElementById('scores-container');
const difficultyContainer = document.getElementById('difficulty-container');
const gameContainer = document.getElementById('game-container');
const gameOverContainer = document.getElementById('end-game-container');
const nameContainer = document.getElementById('enter-name-container');
const congratulationsContainer = document.getElementById('congratulations-modal');
const closeGameWarning = document.getElementById('close-game-warning');

//OPEN AND CLOSE CONTAINERS
//Rules Container - Open
rulesButton.addEventListener('click', () => {
    homeContainer.classList.add('hide');
    rulesContainer.classList.remove('hide');
    playSelectSound();
});
//Rules Container - Close
backButtonRules.addEventListener('click', () => {
    rulesContainer.classList.add('hide');
    homeContainer.classList.remove('hide');
    playSelectSound();
});
//High Scores container - Open
scoresButton.addEventListener('click', () => {
    homeContainer.classList.add('hide');
    scoresContainer.classList.remove('hide');
    playSelectSound();
});
//High Scores container - Close
backButtonScores.addEventListener('click', () => {
    scoresContainer.classList.add('hide');
    homeContainer.classList.remove('hide');
    playSelectSound();
});
//Submit Name Container - Open
playButton.addEventListener('click', () => {
    homeContainer.classList.add('hide');
    nameContainer.classList.remove('hide');
    playSelectSound();
});
//Submit Name Container - Close
backButtonName.addEventListener('click', () => {
    nameContainer.classList.add('hide');
    homeContainer.classList.remove('hide');
    playSelectSound();
});
//Difficulty Container - Close
backButtonDifficulty.addEventListener('click', () => {
    difficultyContainer.classList.add('hide');
    homeContainer.classList.remove('hide');
    playSelectSound();
});
//Game Container - Close game warning popup
backButtonGame.addEventListener('click', () => {
  closeGameWarning.classList.remove('hide');
  playSelectSound();
});
//Confirm close game
closeGame.addEventListener('click', () => {
  gameContainer.classList.add('hide');
  closeGameWarning.classList.add('hide');
  currentQuestionIndex = 0;
  document.getElementById('correct-score').innerText = "0";
  document.getElementById('incorrect-score').innerText = "0";
  shuffledQuestions = [];
  shuffledAnswers = [];
  homeContainer.classList.remove('hide');
  playSelectSound();
});
//Cancel close game
continueGame.addEventListener('click', () => {
  closeGameWarning.classList.add('hide');
  playSelectSound();
});
//Close Game Over Container
backButtonGameOver.addEventListener('click', () => {
    gameOverContainer.classList.add('hide');
    homeContainer.classList.remove('hide');
    playSelectSound();
});
//Home button from game over
homeButton.addEventListener('click', () => {
  gameOverContainer.classList.add('hide');
  homeContainer.classList.remove('hide');
  playSelectSound();
});
//Play again from game over screen
playAgainButton.addEventListener('click', () => {
    gameOverContainer.classList.add('hide');
    difficultyContainer.classList.remove('hide');
    playSelectSound();
});
//Go to high scores from game over
highScoresButton.addEventListener('click', () => {
    gameOverContainer.classList.add('hide');
    scoresContainer.classList.remove('hide');
    playSelectSound();
});

//SUBMIT NAME
submitName.addEventListener('submit', (e) => {
    e.preventDefault();
    let x = document.forms["submit-name"]["name"].value;
    //Validate name
  if (x.trim()==null || x.trim()==""|| x===" ") {
      alert("Please enter your name");
      return false;
  } else {
    //Store name in local storage
    username = document.getElementById('name').value;
    localStorage.setItem('username', username);
    nameContainer.classList.add('hide');
    difficultyContainer.classList.remove('hide');
    playSelectSound();}
});

//SHUFFLE QUESTIONS: Fisher-Yates shuffle algorithm.
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

//START BEGINNER GAME
function displayBeginnerQuestion() {  
    //clear previous questions
    shuffledQuestions = [];
    shuffledAnswers = [];
    currentQuestionIndex = 0;
    //Shuffle questions
    shuffledQuestions = shuffleQuestions(beginnerQuestions);
    //display a shuffled question
    question.innerText = shuffledQuestions[0].question;
    //display the shuffled answers
    shuffledAnswers = shuffleQuestions(shuffledQuestions[0].answers);
    for (let i = 0; i < 4; i++) {
        answerButton[i].classList.remove('selected');
        answerButton[i].classList.remove('correct');
        answerButton[i].classList.remove('incorrect');
        answerButton[i].disabled = false;
        answerButton[i].innerText = shuffledAnswers[i].text;
    }
    //remove the asked question from the question list
    shuffledQuestions.splice(0, 1);
    //Unlock Intermediate Questions if 10 answered correctly
    if (correctScore.innerText === "10") {
      intermediateButton.disabled = false;
    }
    //Run endGame if you run out of questions
    if (shuffledQuestions.length < 1) {
      endGame();
    }
}
//Event listener for beginner button to run beginner game
beginnerButton.addEventListener('click', () => {
    gameType = 'beginner';
    difficultyContainer.classList.add('hide');
    gameContainer.classList.remove('hide');
    displayBeginnerQuestion();
    nextButton.classList.add('hide');
    spacer.classList.remove('hide');
    playSelectSound();  
});

//START INTERMEDIATE GAME
function displayIntermediateQuestion() {
  //Clear previous questions
  shuffledQuestions = [];
  shuffledAnswers = [];
  currentQuestionIndex = 0;
  shuffledQuestions = shuffleQuestions(intermediateQuestions);
  //display a shuffled question
  question.innerText = shuffledQuestions[0].question;
  //display the shuffled answers
  shuffledAnswers = shuffleQuestions(shuffledQuestions[0].answers);
  for (let i = 0; i < 4; i++) {
      answerButton[i].classList.remove('selected');
      answerButton[i].classList.remove('correct');
      answerButton[i].classList.remove('incorrect');
      answerButton[i].disabled = false;
      answerButton[i].innerText = shuffledAnswers[i].text;
  }
  //remove the question from the question list
  shuffledQuestions.splice(0, 1);
   //Unlock Advanced Questions if 20 answered correctly
   if (correctScore.innerText === '20') {
    advancedButton.disabled = false;
  }
  //End the game if all questions have been asked
  if (shuffledQuestions.length < 1) {
    endGame();
  }
}
//Event listener for intermediate button to run intermediate game
intermediateButton.addEventListener('click', () => {
  gameType = 'intermediate';
  difficultyContainer.classList.add('hide');
  gameContainer.classList.remove('hide');
  displayIntermediateQuestion();
  nextButton.classList.add('hide');
  spacer.classList.remove('hide');
  playSelectSound();
});

//START ADVANCED GAME
function displayAdvancedQuestion() {
  //Clear previous questions
  shuffledQuestions = [];
  shuffledAnswers = [];
  currentQuestionIndex = 0;
  shuffledQuestions = shuffleQuestions(advancedQuestions);
  //display a shuffled question
  question.innerText = shuffledQuestions[0].question;
  //display the shuffled answers
  shuffledAnswers = shuffleQuestions(shuffledQuestions[0].answers);
  for (let i = 0; i < 4; i++) {
      answerButton[i].classList.remove('selected');
      answerButton[i].classList.remove('correct');
      answerButton[i].classList.remove('incorrect');
      answerButton[i].disabled = false;
      answerButton[i].innerText = shuffledAnswers[i].text;
  }
  //remove the question from the question list
  shuffledQuestions.splice(0, 1);
  //End the game if all questions have been asked
  if (shuffledQuestions.length < 1) {
    endGame();
  }
}
//Event listener for advanced game button to start advanced game
advancedButton.addEventListener('click', () => {
  gameType = 'advanced';
  difficultyContainer.classList.add('hide');
  gameContainer.classList.remove('hide');
  displayAdvancedQuestion();
  nextButton.classList.add('hide');
  spacer.classList.remove('hide');
  playSelectSound();
});

//DISPLAY NEXT QUESTION
function displayNextQuestion() {
  //enable clicking of buttons and remove previous button displays
  for (let i = 0; i < 4; i++) {
      answerButton[i].disabled = false;
      answerButton[i].classList.remove("correct", "selected", "incorrect");
  }
  //hide next button & add spacer
  nextButton.classList.add('hide');
  spacer.classList.remove('hide');
  //get the next question
  if (gameType === 'beginner') {
  displayBeginnerQuestion();
  } else if (gameType === 'intermediate') {
    displayIntermediateQuestion();
  } else if (gameType === 'advanced') {
    displayAdvancedQuestion();
  }
  }
//Event listener for next question
nextButton.addEventListener('click', () => {
  displayNextQuestion();
  playSelectSound();
});

//CONGRATULATIONS PAGES
const nextLevelButton = document.getElementById('next-level-btn');
const nextQuestionButton = document.getElementById('next-question-btn');
//Event listener for next level button
nextLevelButton.addEventListener('click', () => {
  //Open game difficulty
  congratulationsContainer.classList.add('hide');
  gameContainer.classList.add('hide');
  difficultyContainer.classList.remove('hide');
  playSelectSound();
  if (gameType === 'beginner') {
    intermediateButton.disabled = false;
  } else if (gameType === 'intermediate') {
    advancedButton.disabled = false;
  }
});
//Event listener for next question
nextQuestionButton.addEventListener('click', () => {
  congratulationsContainer.classList.add('hide');
  displayNextQuestion();
  playSelectSound();
});

//ADD TO SCORE
//Add to the Correct Score
function addToCorrectScore() {
    playCorrectSound();
    let oldCorrectScore = parseInt(document.getElementById('correct-score').innerText);
    document.getElementById('correct-score').innerText = ++oldCorrectScore;
    //Add celebration to correct score if new level is unlocked
    if (correctScore.innerText === '10' && gameType === 'beginner') {
      //congratulations popup
      congratulationsContainer.classList.remove('hide');
    } else if (correctScore.innerText === '20' && gameType === 'intermediate') {
      congratulationsContainer.classList.remove('hide');
    }
}
//Add to the Incorrect Score
function addToIncorrectScore() {
    playIncorrectSound();
    let oldIncorrectScore = parseInt(document.getElementById('incorrect-score').innerText);
    document.getElementById('incorrect-score').innerText = ++oldIncorrectScore;
    //End game of you have 5 wrong answers
    if (oldIncorrectScore >= 5) {
      endGame();
    }
}

//Check the answer, add to the score
function checkAnswer() {
    const selectedAnswer = document.querySelector('.selected');
    const correctAnswer = shuffledAnswers.find(answer => answer.correct);
    //If correct add to correct score and display next button
    if (selectedAnswer.textContent === correctAnswer.text) {
        selectedAnswer.classList.add('correct');
        addToCorrectScore();
        nextButton.classList.remove('hide');
        spacer.classList.add('hide');
    } else {
        //If incorrect add to incorrect score and display next button
        selectedAnswer.classList.add('incorrect');
        addToIncorrectScore();
        nextButton.classList.remove('hide');
        spacer.classList.add('hide');
        //Display what the correct answer was
        for (let i = 0; i < 4; i++) {
            if (answerButton[i].innerText === correctAnswer.text) {
                answerButton[i].classList.add('correct');
            }
        }
    }
    //dissable selection of another answer
    for (let i = 0; i < 4; i++) {
      answerButton[i].disabled = true;
    }
}

//Listen to each button and run checkAnswer if clicked
for (let i = 0; i < 4; i++) {
  answerButton[i].addEventListener('click', function(e) {
    answerButton[i].classList.add('selected');
    checkAnswer();
});
}

//these 2 lines are from James Q Quick tutorial used inside endGame to populate the scoreboard
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const highScoresList = document.getElementById("highScoresList");

//END GAME
function endGame() {
    //hide next button
    nextButton.classList.add('hide');
    //Store Final Score and Display it
    finalScore = parseInt(document.getElementById('correct-score').innerText);
    gameContainer.classList.add('hide');
    gameOverContainer.classList.remove('hide');
    document.getElementById('final-score').innerText = finalScore;
    //Congratulate if over 6
    if (finalScore > 6) {
        document.getElementById('congratulate').innerText = "Congratulations!";
        document.getElementById('try-again').innerText = "Try a harder level!";
    } else {
      //Encourage if below 6 correct answers answered
        document.getElementById('congratulate').innerText = "Game Over";
        document.getElementById('try-again').innerText = "Give it another go, you can do better!";
    }
    //Add Name & Score to HighScores
    const score = {
        score: finalScore,
        name: username
    };

    //Code from James Q Quick tutorial to sort scores https://www.youtube.com/watch?v=DFhmNLKwwGw&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=9
    highScores.push(score); //Add new score to high scores
    highScores.sort( (a,b) =>  b.score - a.score); //Sort the scores
    highScores.splice(10); //Remove any not in the top 10
    localStorage.setItem('highscores', JSON.stringify(highScores)); //Send the highscores to local storage
    //Turn the scores into a list and send to scoreboard
    highScoresList.innerHTML = highScores
    .map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
    .join("");

    //Clear Score, Question Index, Shuffled Questions, Counter & Level Complete for Next Game
    currentQuestionIndex = 0;
    document.getElementById('correct-score').innerText = "0";
    document.getElementById('incorrect-score').innerText = "0";
    shuffledQuestions = [];
    shuffledAnswers = [];
}