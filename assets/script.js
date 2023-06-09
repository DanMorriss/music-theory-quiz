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
//Game Screen Buttons
const question = document.getElementById('question');
const answerButton = document.getElementsByClassName('question-btn');
const answerButton1 = document.getElementById('answer1');
const answerButton2 = document.getElementById('answer2');
const answerButton3 = document.getElementById('answer3');
const answerButton4 = document.getElementById('answer4');
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

//VARIABLES
let username;
let shuffledQuestions, shuffledAnswers;
let currentQuestionIndex = 0;
let finalScore, displayedScore;
let gameType;

//CONTAINERS
const homeContainer = document.getElementById('home-container');
const rulesContainer = document.getElementById('rules-container');
const scoresContainer = document.getElementById('scores-container');
const difficultyContainer = document.getElementById('difficulty-container');
const gameContainer = document.getElementById('game-container');
const gameOverContainer = document.getElementById('end-game-container');
const nameContainer = document.getElementById('enter-name-container');

//OPEN AND CLOSE CONTAINERS
//Rules Container
rulesButton.addEventListener('click', () => {
    homeContainer.classList.add('hide');
    rulesContainer.classList.remove('hide');
})
backButtonRules.addEventListener('click', () => {
    rulesContainer.classList.add('hide');
    homeContainer.classList.remove('hide');
})
//High Scores container
scoresButton.addEventListener('click', () => {
    homeContainer.classList.add('hide');
    scoresContainer.classList.remove('hide');
})
backButtonScores.addEventListener('click', () => {
    scoresContainer.classList.add('hide');
    homeContainer.classList.remove('hide');
})
//Submit Name Container
playButton.addEventListener('click', () => {
    homeContainer.classList.add('hide');
    nameContainer.classList.remove('hide');
})
backButtonName.addEventListener('click', () => {
    nameContainer.classList.add('hide');
    homeContainer.classList.remove('hide');
})
//Difficulty Container
backButtonDifficulty.addEventListener('click', () => {
    difficultyContainer.classList.add('hide');
    homeContainer.classList.remove('hide');
})
//Game Container
backButtonGame.addEventListener('click', () => {
  gameContainer.classList.add('hide');
  homeContainer.classList.remove('hide');
})
//Game Over Container
backButtonGameOver.addEventListener('click', () => {
    gameOverContainer.classList.add('hide');
    homeContainer.classList.remove('hide');
})
//Play again from game over screen
playAgainButton.addEventListener('click', () => {
    gameOverContainer.classList.add('hide');
    difficultyContainer.classList.remove('hide');
})
//Go to high scores from game over
highScoresButton.addEventListener('click', () => {
    gameOverContainer.classList.add('hide');
    scoresContainer.classList.remove('hide');
})

//SUBMIT NAME
submitName.addEventListener('submit', (e) => {
    e.preventDefault();
    username = document.getElementById('name').value;
    nameContainer.classList.add('hide');
    difficultyContainer.classList.remove('hide');
})

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
    //clear previous answer selection

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
    //Run endGame if you run out of questions
    if (shuffledQuestions.length < 1) {
      endGame();
    }
}

beginnerButton.addEventListener('click', () => {
    gameType = 'beginner';
    difficultyContainer.classList.add('hide');
    gameContainer.classList.remove('hide');
    displayBeginnerQuestion();
})

//START INTERMEDIATE GAME
function displayIntermediateQuestion() {
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
  //End the game if all questions have been asked
  if (shuffledQuestions.length < 1) {
    endGame();
  }
}

intermediateButton.addEventListener('click', () => {
  gameType = 'intermediate';
  difficultyContainer.classList.add('hide');
  gameContainer.classList.remove('hide');
  displayIntermediateQuestion();
})

//START ADVANCED GAME
function displayAdvancedQuestion() {
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

advancedButton.addEventListener('click', () => {
  gameType = 'advanced';
  difficultyContainer.classList.add('hide');
  gameContainer.classList.remove('hide');
  displayAdvancedQuestion();
})

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
  //if previous question x, do another one the same
  if (gameType === 'beginner') {
  displayBeginnerQuestion();
  } else if (gameType === 'intermediate') {
    displayIntermediateQuestion();
  } else if (gameType === 'advanced') {
    displayAdvancedQuestion();
  }
  }

nextButton.addEventListener('click', () => {
  displayNextQuestion();
})

//ADD TO SCORE
//Add to the correct score
function addToCorrectScore() {
    let oldCorrectScore = parseInt(document.getElementById('correct-score').innerText);
    document.getElementById('correct-score').innerText = ++oldCorrectScore;
}
//Add to the incorrect score
function addToIncorrectScore() {
    let oldIncorrectScore = parseInt(document.getElementById('incorrect-score').innerText);
    document.getElementById('incorrect-score').innerText = ++oldIncorrectScore;
    //end game of you have 5 wrong answers
    if (oldIncorrectScore > 4) {
      endGame();
    }
}

//Check the answer
function checkAnswer() {
    const selectedAnswer = document.querySelector('.selected');
    const correctAnswer = shuffledAnswers.find(answer => answer.correct);
    if (selectedAnswer.textContent === correctAnswer.text) {
        selectedAnswer.classList.add('correct');
        addToCorrectScore();
        nextButton.classList.remove('hide');
        spacer.classList.add('hide');
    } else {
        selectedAnswer.classList.add('incorrect');
        addToIncorrectScore();
        nextButton.classList.remove('hide');
        spacer.classList.add('hide');
        //add correct answer
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
})
}

//these 4 lines are from James Q Quick tutorial used inside endGame to populate the scoreboard
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 10;
const highScoresList = document.getElementById("highScoresList");

//END GAME
function endGame() {
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
    highScores.sort( (a,b) =>  b.score - a.score) //Sort the scores
    highScores.splice(10); //Remove any not in the top 10
    localStorage.setItem('highscores', JSON.stringify(highScores)); //Send the highscores to local storage
    //Turn the scores into a list and send to scoreboard
    highScoresList.innerHTML = highScores
    .map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
    .join("");

    //Clear Score, Question Index, Shuffled Questions & Counter for Next Game
    currentQuestionIndex = 0;
    document.getElementById('correct-score').innerText = "0";
    document.getElementById('incorrect-score').innerText = "0";
    shuffledQuestions = [];
    shuffledAnswers = [];
    //hide next button
    nextButton.classList.add('hide');
    //display spacer where next button will be
    spacer.classList.remove('hide');
}

//BEGINNER QUESTIONS
const beginnerQuestions = [
    {
        question: 'What is the relative minor key of C major?',
        answers: [
          { text: 'A minor', correct: true },
          { text: 'C minor', correct: false},
          { text: 'G minor', correct: false},
          { text: 'E minor', correct: false}
        ]
      },
    {
        question: 'What is the relative minor key of F major?',
        answers: [
            { text: 'D minor', correct: true },
            { text: 'F minor', correct: false},
            { text: 'G minor', correct: false},
            { text: 'A minor', correct: false}
        ]
    },
    {
        question: 'What is the relative minor key of D major?',
        answers: [
            { text: 'B minor', correct: true },
            { text: 'F minor', correct: false},
            { text: 'D minor', correct: false},
            { text: 'A minor', correct: false}
        ]
    },
    {
        question: 'What is the relative major key of A minor?',
        answers: [
            { text: 'C major', correct: true },
            { text: 'G major', correct: false},
            { text: 'D major', correct: false},
            { text: 'A major', correct: false}
        ]
    },
    {
        question: 'What is the relative major key of D minor?',
        answers: [
            { text: 'F major', correct: true },
            { text: 'D major', correct: false},
            { text: 'G major', correct: false},
            { text: 'C major', correct: false}
        ]
    },
    {
        question: 'What is the relative major key of E minor?',
        answers: [
            { text: 'G major', correct: true },
            { text: 'D major', correct: false},
            { text: 'E major', correct: false},
            { text: 'C major', correct: false}
        ]
    },
    {
        question: 'What is the relative major key of B minor?',
        answers: [
            { text: 'D major', correct: true },
            { text: 'G major', correct: false},
            { text: 'B major', correct: false},
            { text: 'C major', correct: false}
        ]
    },
    {
        question: 'How many sharps are in the key of C major?',
        answers: [
            { text: '0', correct: true },
            { text: '1', correct: false},
            { text: '2', correct: false},
            { text: '3', correct: false}
        ]
    },
    {
        question: 'How many flats are in the key of F major?',
        answers: [
            { text: '1', correct: true },
            { text: '0', correct: false},
            { text: '2', correct: false},
            { text: '3', correct: false}
        ]
    },
    {
        question: 'How many sharps are in the key of G major?',
        answers: [
            { text: '1', correct: true },
            { text: '0', correct: false},
            { text: '2', correct: false},
            { text: '3', correct: false}
        ]
    },
    {
        question: 'How many sharps are in the key of D major?',
        answers: [
            { text: '2', correct: true },
            { text: '1', correct: false},
            { text: '0', correct: false},
            { text: '3', correct: false}
        ]
    },
    {
        question: 'How many sharps are in the key of A minor?',
        answers: [
            { text: '0', correct: true },
            { text: '1', correct: false},
            { text: '2', correct: false},
            { text: '3', correct: false}
        ]
    },
    {
        question: 'How many flats are in the key of D minor?',
        answers: [
            { text: '1', correct: true },
            { text: '0', correct: false},
            { text: '2', correct: false},
            { text: '3', correct: false}
        ]
    },
    {
        question: 'How many sharps are in the key of E minor?',
        answers: [
            { text: '1', correct: true },
            { text: '0', correct: false},
            { text: '2', correct: false},
            { text: '3', correct: false}
        ]
    },
    {
        question: 'How many sharps are in the key of B minor?',
        answers: [
            { text: '2', correct: true },
            { text: '1', correct: false},
            { text: '0', correct: false},
            { text: '3', correct: false}
        ]
    },
    {
        question: 'How many beats are in a 4/4 time signature?',
        answers: [
            { text: '4', correct: true },
            { text: '1', correct: false},
            { text: '2', correct: false},
            { text: '8', correct: false}
        ]
    },
    {
        question: 'How many beats are in a 3/4 time signature?',
        answers: [
            { text: '3', correct: true },
            { text: '4', correct: false},
            { text: '2', correct: false},
            { text: '6', correct: false}
        ]
    },
    {
        question: 'How many crotchets can you fit in a bar of 4/4?',
        answers: [
            { text: '4', correct: true },
            { text: '1', correct: false},
            { text: '2', correct: false},
            { text: '8', correct: false}
        ]
    },
    {
        question: 'How many crotchets can you fit in a bar of 3/4?',
        answers: [
            { text: '3', correct: true },
            { text: '4', correct: false},
            { text: '2', correct: false},
            { text: '6', correct: false}
        ]
    },
    {
        question: 'How many quavers can you fit in a bar of 4/4?',
        answers: [
            { text: '8', correct: true },
            { text: '4', correct: false},
            { text: '2', correct: false},
            { text: '16', correct: false}
        ]
    },
    {
        question: 'How many quavers can you fit in a bar of 3/4?',
        answers: [
            { text: '6', correct: true },
            { text: '4', correct: false},
            { text: '8', correct: false},
            { text: '12', correct: false}
        ]
    },
    {
        question: 'How many quavers can you fit in a bar of 6/8?',
        answers: [
            { text: '6', correct: true },
            { text: '4', correct: false},
            { text: '8', correct: false},
            { text: '12', correct: false}
        ]
    },
    {
        question: 'How many quavers can you fit in a bar of 12/8?',
        answers: [
            { text: '12', correct: true },
            { text: '4', correct: false},
            { text: '8', correct: false},
            { text: '16', correct: false}
        ]
    },
    {
        question: 'How many quavers make up a crotchet?',
        answers: [
            { text: '2', correct: true },
            { text: '1', correct: false},
            { text: '4', correct: false},
            { text: '8', correct: false}
        ]
    },
    {
        question: 'How many quavers make up a minim?',
        answers: [
            { text: '4', correct: true },
            { text: '1', correct: false},
            { text: '8', correct: false},
            { text: '12', correct: false}
        ]
    },
    {
        question: 'How many quavers make up a semi-breve?',
        answers: [
            { text: '8', correct: true },
            { text: '1', correct: false},
            { text: '4', correct: false},
            { text: '12', correct: false}
        ]
    },
    {
        question: 'How many crotchets make up a minim?',
        answers: [
            { text: '2', correct: true },
            { text: '1', correct: false},
            { text: '4', correct: false},
            { text: '8', correct: false}
        ]
    },
    {
        question: 'How many crotchets make up a semi-breve?',
        answers: [
            { text: '4', correct: true },
            { text: '1', correct: false},
            { text: '2', correct: false},
            { text: '8', correct: false}
        ]
    },
    {
        question: 'How many minims make up a semi-breve?',
        answers: [
            { text: '2', correct: true },
            { text: '1', correct: false},
            { text: '4', correct: false},
            { text: '8', correct: false}
        ]
    },
    {
        question: 'What is the term for the distance between two pitches?',
        answers: [
            { text: 'Interval', correct: true },
            { text: 'Chord', correct: false},
            { text: 'Cadence', correct: false},
            { text: 'Relative', correct: false}
        ]
    },
    {
        question: 'A whole tone up from C is?',
        answers: [
            { text: 'D', correct: true },
            { text: 'C#', correct: false},
            { text: 'Db', correct: false},
            { text: 'E', correct: false}
        ]
    },
    {
        question: 'A whole tone up from D is?',
        answers: [
            { text: 'E', correct: true },
            { text: 'D#', correct: false},
            { text: 'Eb', correct: false},
            { text: 'Fb', correct: false}
        ]
    },
    {
        question: 'A whole tone up from E is?',
        answers: [
            { text: 'F#', correct: true },
            { text: 'F', correct: false},
            { text: 'Gb', correct: false},
            { text: 'G', correct: false}
        ]
    },
    {
        question: 'A whole tone up from F is?',
        answers: [
            { text: 'G', correct: true },
            { text: 'F#', correct: false},
            { text: 'Gb', correct: false},
            { text: 'G#', correct: false}
        ]
    },
    {
        question: 'A whole tone up from G is?',
        answers: [
            { text: 'A', correct: true },
            { text: 'G', correct: false},
            { text: 'A#', correct: false},
            { text: 'G#', correct: false}
        ]
    },
    {
        question: 'A whole tone up from A is?',
        answers: [
            { text: 'B', correct: true },
            { text: 'C', correct: false},
            { text: 'A#', correct: false},
            { text: 'G#', correct: false}
        ]
    },
    {
        question: 'A whole tone up from B is?',
        answers: [
            { text: 'C#', correct: true },
            { text: 'C', correct: false},
            { text: 'Db', correct: false},
            { text: 'G', correct: false}
        ]
    },
    {
        question: 'A semi-tone up from C is?',
        answers: [
            { text: 'C#', correct: true },
            { text: 'D', correct: false},
            { text: 'Eb', correct: false},
            { text: 'B', correct: false}
        ]
    },
    {
        question: 'A semi-tone up from D is?',
        answers: [
            { text: 'Eb', correct: true },
            { text: 'F', correct: false},
            { text: 'C#', correct: false},
            { text: 'E', correct: false}
        ]
    },
    {
        question: 'A semi-tone up from E is?',
        answers: [
            { text: 'F', correct: true },
            { text: 'F#', correct: false},
            { text: 'Eb', correct: false},
            { text: 'G', correct: false}
        ]
    },
    {
        question: 'A semi-tone up from F is?',
        answers: [
            { text: 'F#', correct: true },
            { text: 'G', correct: false},
            { text: 'Ab', correct: false},
            { text: 'G#', correct: false}
        ]
    },
    {
        question: 'A semi-tone up from G is?',
        answers: [
            { text: 'Ab', correct: true },
            { text: 'G', correct: false},
            { text: 'A#', correct: false},
            { text: 'Bb', correct: false}
        ]
    },
    {
        question: 'A semi-tone up from A is?',
        answers: [
            { text: 'Bb', correct: true },
            { text: 'C', correct: false},
            { text: 'G', correct: false},
            { text: 'D', correct: false}
        ]
    },
    {
        question: 'A semi-tone up from B is?',
        answers: [
            { text: 'C', correct: true },
            { text: 'Cb', correct: false},
            { text: 'Db', correct: false},
            { text: 'C#', correct: false}
        ]
    },
    {
        question: 'What is the 4 chord in the key of C major?',
        answers: [
            { text: 'F major', correct: true },
            { text: 'F minor', correct: false},
            { text: 'G major', correct: false},
            { text: 'D minor', correct: false}
        ]
    },
    {
        question: 'What is the 5 chord in the key of C major?',
        answers: [
            { text: 'G major', correct: true },
            { text: 'F major', correct: false},
            { text: 'D major', correct: false},
            { text: 'A minor', correct: false}
        ]
    },
    {
        question: 'What is the 4 chord in the key of F major?',
        answers: [
            { text: 'Bb major', correct: true },
            { text: 'C major', correct: false},
            { text: 'D minor', correct: false},
            { text: 'A minor', correct: false}
        ]
    },
    {
        question: 'What is the 5 chord in the key of F major?',
        answers: [
            { text: 'C major', correct: true },
            { text: 'Bb major', correct: false},
            { text: 'D minor', correct: false},
            { text: 'A minor', correct: false}
        ]
    },
    {
        question: 'What is the 4 chord in the key of G major?',
        answers: [
            { text: 'C major', correct: true },
            { text: 'D major', correct: false},
            { text: 'D minor', correct: false},
            { text: 'E minor', correct: false}
        ]
    },
    {
        question: 'What is the 5 chord in the key of G major?',
        answers: [
            { text: 'D major', correct: true },
            { text: 'C major', correct: false},
            { text: 'A minor', correct: false},
            { text: 'E minor', correct: false}
        ]
    },
    {
        question: 'What is the 4 chord in the key of D major?',
        answers: [
            { text: 'G major', correct: true },
            { text: 'A major', correct: false},
            { text: 'A minor', correct: false},
            { text: 'D minor', correct: false}
        ]
    },
    {
        question: 'What is the 5 chord in the key of D major?',
        answers: [
            { text: 'A major', correct: true },
            { text: 'G major', correct: false},
            { text: 'A minor', correct: false},
            { text: 'E minor', correct: false}
        ]
    },
    {
        question: 'What are the intervals of a major chord?',
        answers: [
            { text: 'Root, 3, 5', correct: true },
            { text: 'Root, b3, 5', correct: false},
            { text: 'Root, 5, octave', correct: false},
            { text: 'Root, 4, 5', correct: false}
        ]
    },
    {
        question: 'What are the intervals of a minor chord?',
        answers: [
            { text: 'Root, b3, 5', correct: true },
            { text: 'Root, 3, 5', correct: false},
            { text: 'Root, 5, octave', correct: false},
            { text: 'Root, 4, 5', correct: false}
        ]
    },
    {
        question: 'What are the intervals of a sus2 chord?',
        answers: [
            { text: 'Root, 2, 5', correct: true },
            { text: 'Root, 2, 4', correct: false},
            { text: 'Root, 2, octave', correct: false},
            { text: 'Root, 2, 3', correct: false}
        ]
    },
    {
        question: 'What are the intervals of a sus4 chord?',
        answers: [
            { text: 'Root, 4, 5', correct: true },
            { text: 'Root, 2, 4', correct: false},
            { text: 'Root, 4, octave', correct: false},
            { text: 'Root, 3, 4', correct: false}
        ]
    },

]

//INTERMEDIATE QUESTIONS
const intermediateQuestions = [
    {
        question: 'What is the relative minor key of A major?',
        answers: [
          { text: 'F# minor', correct: true },
          { text: 'A minor', correct: false},
          { text: 'B minor', correct: false},
          { text: 'C# minor', correct: false}
        ]
      },
      {
        question: 'What is the relative minor key of E major?',
        answers: [
          { text: 'C# minor', correct: true },
          { text: 'E minor', correct: false},
          { text: 'G# minor', correct: false},
          { text: 'G minor', correct: false}
        ]
      },
      {
        question: 'What is the relative minor key of Bb major?',
        answers: [
          { text: 'G minor', correct: true },
          { text: 'F minor', correct: false},
          { text: 'Eb minor', correct: false},
          { text: 'C minor', correct: false}
        ]
      },
      {
        question: 'What is the relative minor key of Eb major?',
        answers: [
          { text: 'C minor', correct: true },
          { text: 'G minor', correct: false},
          { text: 'F minor', correct: false},
          { text: 'A minor', correct: false}
        ]
      },
      {
        question: 'What is the relative major key of F# minor?',
        answers: [
          { text: 'A major', correct: true },
          { text: 'B major', correct: false},
          { text: 'C# major', correct: false},
          { text: 'F# major', correct: false}
        ]
      },
      {
        question: 'What is the relative major key of C# minor?',
        answers: [
          { text: 'E major', correct: true },
          { text: 'C major', correct: false},
          { text: 'A major', correct: false},
          { text: 'F# major', correct: false}
        ]
      },
      {
        question: 'What is the relative major key of G minor?',
        answers: [
          { text: 'Bb major', correct: true },
          { text: 'F major', correct: false},
          { text: 'Eb major', correct: false},
          { text: 'C major', correct: false}
        ]
      },
      {
        question: 'What is the relative major key of C minor?',
        answers: [
          { text: 'Eb major', correct: true },
          { text: 'C major', correct: false},
          { text: 'Bb mjaor', correct: false},
          { text: 'F major', correct: false}
        ]
      },
      {
        question: 'How many sharps are in the key of A major?',
        answers: [
          { text: '3', correct: true },
          { text: '2', correct: false},
          { text: '4', correct: false},
          { text: '1', correct: false}
        ]
      },
      {
        question: 'How many sharps are in the key of E major?',
        answers: [
          { text: '4', correct: true },
          { text: '3', correct: false},
          { text: '2', correct: false},
          { text: '1', correct: false}
        ]
      },
      {
        question: 'How many flats are there in the key of Bb major?',
        answers: [
          { text: '2', correct: true },
          { text: '1', correct: false},
          { text: '3', correct: false},
          { text: '4', correct: false}
        ]
      },
      {
        question: 'How many flats are there in the key of Eb major?',
        answers: [
          { text: '3', correct: true },
          { text: '2', correct: false},
          { text: '1', correct: false},
          { text: '4', correct: false}
        ]
      },
      {
        question: 'How many sharps are in the key of F# minor?',
        answers: [
          { text: '3', correct: true },
          { text: '1', correct: false},
          { text: '2', correct: false},
          { text: '4', correct: false}
        ]
      },
      {
        question: 'How many sharps are in the key of C# minor?',
        answers: [
          { text: '4', correct: true },
          { text: '3', correct: false},
          { text: '2', correct: false},
          { text: '1', correct: false}
        ]
      },
      {
        question: 'How many flats are there in the key of G minor?',
        answers: [
          { text: '2', correct: true },
          { text: '1', correct: false},
          { text: '3', correct: false},
          { text: '4', correct: false}
        ]
      },
      {
        question: 'How many flats are there in the key of C minor?',
        answers: [
          { text: '3', correct: true },
          { text: '2', correct: false},
          { text: '1', correct: false},
          { text: '4', correct: false}
        ]
      },
      {
        question: 'How many semi-quavers make up a quaver?',
        answers: [
          { text: '2', correct: true },
          { text: '4', correct: false},
          { text: '8', correct: false},
          { text: '16', correct: false}
        ]
      },
      {
        question: 'How many semi-quavers make up a crotchet?',
        answers: [
          { text: '4', correct: true },
          { text: '2', correct: false},
          { text: '8', correct: false},
          { text: '16', correct: false}
        ]
      },
      {
        question: 'How many semi-quavers make up a minim?',
        answers: [
          { text: '8', correct: true },
          { text: '2', correct: false},
          { text: '4', correct: false},
          { text: '16', correct: false}
        ]
      },
      {
        question: 'How many semi-quavers make up a semi-breve?',
        answers: [
          { text: '16', correct: true },
          { text: '8', correct: false},
          { text: '4', correct: false},
          { text: '2', correct: false}
        ]
      },
      {
        question: 'How many modes of the major scale are there?',
        answers: [
          { text: '7', correct: true },
          { text: '5', correct: false},
          { text: '2', correct: false},
          { text: '3', correct: false}
        ]
      },
      {
        question: 'What is the 1st mode of the major scale called?',
        answers: [
          { text: 'Ionian', correct: true },
          { text: 'Dorian', correct: false},
          { text: 'Mixolydian', correct: false},
          { text: 'Aolian', correct: false}
        ]
      },
      {
        question: 'What is the 2nd mode of the major scale called?',
        answers: [
          { text: 'Dorian', correct: true },
          { text: 'Ionian', correct: false},
          { text: 'Mixolydian', correct: false},
          { text: 'Aolian', correct: false}
        ]
      },
      {
        question: 'What is the 5th mode of the major scale called?',
        answers: [
          { text: 'Mixolydian', correct: true },
          { text: 'Ionian', correct: false},
          { text: 'Dorian', correct: false},
          { text: 'Aolian', correct: false}
        ]
      },
      {
        question: 'What is the 6th mode of the major scale called?',
        answers: [
          { text: 'Aolian', correct: true },
          { text: 'Ionian', correct: false},
          { text: 'Dorian', correct: false},
          { text: 'Mixolydian', correct: false}
        ]
      },
      {
        question: 'What is a minor 3rd up from C?',
        answers: [
          { text: 'Eb', correct: true },
          { text: 'A', correct: false},
          { text: 'Bb', correct: false},
          { text: 'E', correct: false}
        ]
      },
      {
        question: 'What is a minor 3rd up from F?',
        answers: [
          { text: 'Ab', correct: true },
          { text: 'A', correct: false},
          { text: 'Bb', correct: false},
          { text: 'B', correct: false}
        ]
      },
      {
        question: 'What is a minor 3rd up from G?',
        answers: [
          { text: 'Bb', correct: true },
          { text: 'A', correct: false},
          { text: 'F', correct: false},
          { text: 'Eb', correct: false}
        ]
      },
      {
        question: 'What is a minor 3rd up from D?',
        answers: [
          { text: 'F', correct: true },
          { text: 'A', correct: false},
          { text: 'C', correct: false},
          { text: 'F#', correct: false}
        ]
      },
      {
        question: 'What is a minor 3rd up from A?',
        answers: [
          { text: 'C', correct: true },
          { text: 'Db', correct: false},
          { text: 'E', correct: false},
          { text: 'G', correct: false}
        ]
      },
      {
        question: 'What is a minor 3rd up from E?',
        answers: [
          { text: 'G', correct: true },
          { text: 'B', correct: false},
          { text: 'G#', correct: false},
          { text: 'C', correct: false}
        ]
      },
      {
        question: 'What is a minor 3rd up from Bb?',
        answers: [
          { text: 'Db', correct: true },
          { text: 'D', correct: false},
          { text: 'Eb', correct: false},
          { text: 'G', correct: false}
        ]
      },
      {
        question: 'What is a minor 3rd up from Eb?',
        answers: [
          { text: 'Gb', correct: true },
          { text: 'Bb', correct: false},
          { text: 'F#', correct: false},
          { text: 'Eb', correct: false}
        ]
      },
      {
        question: 'What is a major 3rd up from C?',
        answers: [
          { text: 'E', correct: true },
          { text: 'Eb', correct: false},
          { text: 'G', correct: false},
          { text: 'D', correct: false}
        ]
      },
      {
        question: 'What is a major 3rd up from F?',
        answers: [
          { text: 'A', correct: true },
          { text: 'Bb', correct: false},
          { text: 'D', correct: false},
          { text: 'C', correct: false}
        ]
      },
      {
        question: 'What is a major 3rd up from G?',
        answers: [
          { text: 'B', correct: true },
          { text: 'Bb', correct: false},
          { text: 'D', correct: false},
          { text: 'E', correct: false}
        ]
      },
      {
        question: 'What is a major 3rd up from D?',
        answers: [
          { text: 'F#', correct: true },
          { text: 'Gb', correct: false},
          { text: 'D', correct: false},
          { text: 'E', correct: false}
        ]
      },
      {
        question: 'What is a major 3rd up from A?',
        answers: [
          { text: 'C#', correct: true },
          { text: 'Db', correct: false},
          { text: 'F#', correct: false},
          { text: 'E', correct: false}
        ]
      },
      {
        question: 'What is a major 3rd up from E?',
        answers: [
          { text: 'G#', correct: true },
          { text: 'F#', correct: false},
          { text: 'C#', correct: false},
          { text: 'A', correct: false}
        ]
      },
      {
        question: 'What is a major 3rd up from Bb?',
        answers: [
          { text: 'D', correct: true },
          { text: 'F', correct: false},
          { text: 'Ab', correct: false},
          { text: 'C', correct: false}
        ]
      },
      {
        question: 'What is a major 3rd up from Eb?',
        answers: [
          { text: 'G', correct: true },
          { text: 'Bb', correct: false},
          { text: 'F', correct: false},
          { text: 'C', correct: false}
        ]
      },
      {
        question: 'What is the 4 chord in the key of A major?',
        answers: [
          { text: 'D major', correct: true },
          { text: 'D minor', correct: false},
          { text: 'E major', correct: false},
          { text: 'C# minor', correct: false}
        ]
      },
      {
        question: 'What is the 5 chord in the key of A major?',
        answers: [
          { text: 'E major', correct: true },
          { text: 'D major', correct: false},
          { text: 'F# minor', correct: false},
          { text: 'F major', correct: false}
        ]
      },
      {
        question: 'What is the 4 chord in the key of E major?',
        answers: [
          { text: 'A major', correct: true },
          { text: 'E minor', correct: false},
          { text: 'E major', correct: false},
          { text: 'A minor', correct: false}
        ]
      },
      {
        question: 'What is the 5 chord in the key of E major?',
        answers: [
          { text: 'B major', correct: true },
          { text: 'A major', correct: false},
          { text: 'C# minor', correct: false},
          { text: 'G# minor', correct: false}
        ]
      },
      {
        question: 'What is the 4 chord in the key of Bb major?',
        answers: [
          { text: 'Eb major', correct: true },
          { text: 'F major', correct: false},
          { text: 'C minor', correct: false},
          { text: 'G minor', correct: false}
        ]
      },
      {
        question: 'What is the 5 chord in the key of Bb major?',
        answers: [
          { text: 'F major', correct: true },
          { text: 'F minor', correct: false},
          { text: 'C minor', correct: false},
          { text: 'Eb major', correct: false}
        ]
      },
      {
        question: 'What is the 4 chord in the key of Eb major?',
        answers: [
          { text: 'Ab major', correct: true },
          { text: 'F major', correct: false},
          { text: 'Bb major', correct: false},
          { text: 'A major', correct: false}
        ]
      },
      {
        question: 'What is the 5 chord in the key of Eb major?',
        answers: [
          { text: 'Bb major', correct: true },
          { text: 'Ab major', correct: false},
          { text: 'F major', correct: false},
          { text: 'A major', correct: false}
        ]
      },
      {
        question: 'What are the intervals of a major 7 chord?',
        answers: [
          { text: 'Root, 3, 5, 7', correct: true },
          { text: 'Root, 3, 5, b7', correct: false},
          { text: 'Root, b3, 5, b7', correct: false},
          { text: 'Root, b3, 5, 7', correct: false}
        ]
      },
      {
        question: 'What are the intervals of a minor 7 chord?',
        answers: [
          { text: 'Root, b3, 5, b7', correct: true },
          { text: 'Root, 3, 5, 7', correct: false},
          { text: 'Root, 3, 5, b7', correct: false},
          { text: 'Root, b3, 5, 7', correct: false}
        ]
      },
      {
        question: 'What are the intervals of a dominant 7 chord?',
        answers: [
          { text: 'Root, b3, 5, b7', correct: false },
          { text: 'Root, 3, 5, 7', correct: false},
          { text: 'Root, 3, 5, b7', correct: true},
          { text: 'Root, b3, 5, 7', correct: false}
        ]
      },
      {
        question: 'What are the intervals of a major 6 chord?',
        answers: [
          { text: 'Root, 3, 5, 6', correct: true },
          { text: 'Root, b3, 5, 6', correct: false},
          { text: 'Root, b3, 5, b6', correct: false},
          { text: 'Root, 4, 6, 7', correct: false}
        ]
      },
      {
        question: 'What are the intervals of a minor 6 chord?',
        answers: [
          { text: 'Root, 3, 5, 6', correct: false },
          { text: 'Root, b3, 5, 6', correct: true},
          { text: 'Root, b3, 5, b6', correct: false},
          { text: 'Root, 4, 6, 7', correct: false}
        ]
      },
      {
        question: 'What are the intervals of a diminished 7th chord?',
        answers: [
          { text: 'Root, b3, b5, bb7', correct: true },
          { text: 'Root, b3, b5, b7', correct: false},
          { text: 'Root, b3, 5, bb7', correct: false},
          { text: 'Root, 3, b5, b7', correct: false}
        ]
      },
      {
        question: 'What are the intervals of an augmented chord?',
        answers: [
          { text: 'Root, 3, #5', correct: true },
          { text: 'Root #3, #5', correct: false},
          { text: 'Root, #3, 5', correct: false},
          { text: 'Root, 3, b5', correct: false}
        ]
      }
    ]

//ADVANCED QUESTIONS
const advancedQuestions = [
    {
        question: 'What is the relative minor key of B major?',
        answers: [
          { text: 'G# minor', correct: true },
          { text: 'Ab minor', correct: false},
          { text: 'D minor', correct: false},
          { text: 'Eb minor', correct: false}
        ]
      },
      {
        question: 'What is the relative minor key of F# major?',
        answers: [
          { text: 'D# minor', correct: true },
          { text: 'Eb major', correct: false},
          { text: 'A minor', correct: false},
          { text: 'C minor', correct: false}
        ]
      },
      {
        question: 'What is the relative minor key of Ab major?',
        answers: [
          { text: 'F minor', correct: true },
          { text: 'B minor', correct: false},
          { text: 'Bb minor', correct: false},
          { text: 'C minor', correct: false}
        ]
      },
      {
        question: 'What is the relative minor key of Db major?',
        answers: [
          { text: 'Bb minor', correct: true },
          { text: 'E minor', correct: false},
          { text: 'Ab minor', correct: false},
          { text: 'F minor', correct: false}
        ]
      },
      {
        question: 'What is the relative major key of G# minor?',
        answers: [
          { text: 'B major', correct: true },
          { text: 'F major', correct: false},
          { text: 'C# major', correct: false},
          { text: 'Eb major', correct: false}
        ]
      },
      {
        question: 'What is the relative major key of D# minor?',
        answers: [
          { text: 'F# major', correct: true },
          { text: 'A# major', correct: false},
          { text: 'Gb major', correct: false},
          { text: 'Bb major', correct: false}
        ]
      },
      {
        question: 'What is the relative major key of F minor?',
        answers: [
          { text: 'Ab major', correct: true },
          { text: 'Bb major', correct: false},
          { text: 'D minor', correct: false},
          { text: 'C# minor', correct: false}
        ]
      },
      {
        question: 'What is the relative major key of Bb minor?',
        answers: [
          { text: 'Db major', correct: true },
          { text: 'C# minor', correct: false},
          { text: 'G minor', correct: false},
          { text: 'D minor', correct: false}
        ]
      },
      {
        question: 'How many sharps are in the key of B major?',
        answers: [
          { text: '5', correct: true },
          { text: '6', correct: false},
          { text: '4', correct: false},
          { text: '3', correct: false}
        ]
      },
      {
        question: 'How many sharps are in the key of F# major?',
        answers: [
          { text: '6', correct: true },
          { text: '5', correct: false},
          { text: '4', correct: false},
          { text: '3', correct: false}
        ]
      },
      {
        question: 'How many flat are there in the key of Ab major?',
        answers: [
          { text: '4', correct: true },
          { text: '3', correct: false},
          { text: '5', correct: false},
          { text: '6', correct: false}
        ]
      },
      {
        question: 'How many flat are there in the key of Db major?',
        answers: [
          { text: '5', correct: true },
          { text: '6', correct: false},
          { text: '4', correct: false},
          { text: '3', correct: false}
        ]
      },
      {
        question: 'How many sharps are in the key of G# minor?',
        answers: [
          { text: '5', correct: true },
          { text: '6', correct: false},
          { text: '4', correct: false},
          { text: '3', correct: false}
        ]
      },
      {
        question: 'How many sharps are in the key of D# minor?',
        answers: [
          { text: '4', correct: true },
          { text: '3', correct: false},
          { text: '5', correct: false},
          { text: '6', correct: false}
        ]
      },
      {
        question: 'How many flats are there in the key of F minor?',
        answers: [
          { text: '4', correct: true },
          { text: '3', correct: false},
          { text: '5', correct: false},
          { text: '6', correct: false}
        ]
      },
      {
        question: 'How many flats are there in the key of Bb minor?',
        answers: [
          { text: '5', correct: true },
          { text: '6', correct: false},
          { text: '4', correct: false},
          { text: '3', correct: false}
        ]
      },
      {
        question: 'What is the 4 chord in the key of B major?',
        answers: [
          { text: 'E major', correct: true },
          { text: 'F# major', correct: false},
          { text: 'F# minor', correct: false},
          { text: 'E minor', correct: false}
        ]
      },
      {
        question: 'What is the 5 chord in the key of F# major?',
        answers: [
          { text: 'C# major', correct: true },
          { text: 'Db major', correct: false},
          { text: 'B major', correct: false},
          { text: 'B minor', correct: false}
        ]
      },
      {
        question: 'What is the 4 chord in the key of Ab major?',
        answers: [
          { text: 'Db major', correct: true },
          { text: 'C# major', correct: false},
          { text: 'Eb major', correct: false},
          { text: 'C minor', correct: false}
        ]
      },
      {
        question: 'What is the 5 chord in the key of Db major?',
        answers: [
          { text: 'Ab major', correct: true },
          { text: 'Gb major', correct: false},
          { text: 'G# major', correct: false},
          { text: 'F# major', correct: false}
        ]
      },
      {
        question: 'What is the 4 chord in the key of Bb major?',
        answers: [
          { text: 'Eb major', correct: true },
          { text: 'E major', correct: false},
          { text: 'F major', correct: false},
          { text: 'F minor', correct: false}
        ]
      },
      {
        question: 'What is the 5 chord in the key of Bb major?',
        answers: [
          { text: 'F major', correct: true },
          { text: 'F minor', correct: false},
          { text: 'Eb major', correct: false},
          { text: 'Eb minor', correct: false}
        ]
      },
      {
        question: 'What is the 4 chord in the key of Eb major?',
        answers: [
          { text: 'Ab major', correct: true },
          { text: 'Ab minor', correct: false},
          { text: 'Bb major', correct: false},
          { text: 'Bb minor', correct: false}
        ]
      },
      {
        question: 'What is the 5 chord in the key of Eb major?',
        answers: [
          { text: 'Bb major', correct: true },
          { text: 'Bb minor', correct: false},
          { text: 'Ab major', correct: false},
          { text: 'Ab minor', correct: false}
        ]
      },
      {
        question: 'What is the 3rd mode of the major scale called?',
        answers: [
          { text: 'Phrygian', correct: true },
          { text: 'Lydian', correct: false},
          { text: 'Locrian', correct: false},
          { text: 'Mixolydian', correct: false}
        ]
      },
      {
        question: 'What is the 4th mode of the major scale called?',
        answers: [
          { text: 'Lydian', correct: true },
          { text: 'Phrygian', correct: false},
          { text: 'Locrian', correct: false},
          { text: 'Mixolydian', correct: false}
        ]
      },
      {
        question: 'What is the 7th mode of the major scale called?',
        answers: [
          { text: 'Locrian', correct: true },
          { text: 'Phrygian', correct: false},
          { text: 'Lydian', correct: false},
          { text: 'Mixolydian', correct: false}
        ]
      },
      {
        question: 'What is another name for the interval of a 9?',
        answers: [
          { text: 'Compound 2nd', correct: true },
          { text: 'Compound 3rd', correct: false},
          { text: 'Compound 4th', correct: false},
          { text: 'Compound 6th', correct: false}
        ]
      },
      {
        question: 'What is another name for the interval of a 11?',
        answers: [
          { text: 'Compound 4th', correct: true },
          { text: 'Compound 2nd', correct: false},
          { text: 'Compound 6th', correct: false},
          { text: 'Compound 3rd', correct: false}
        ]
      },
      {
        question: 'What is another name for the interval of a 13?',
        answers: [
          { text: 'Compound 6th', correct: true },
          { text: 'Compound 4th', correct: false},
          { text: 'Compound 3rd', correct: false},
          { text: 'Compound 2nd', correct: false}
        ]
      },
      {
        question: 'What are the intervals of a major 9 chord?',
        answers: [
          { text: 'Root, 3, 5, 7, 9', correct: true },
          { text: 'Root, 3, 5, 9', correct: false},
          { text: 'Root, 3, 7, 9', correct: false},
          { text: 'Root, 3, b7, 9', correct: false}
        ]
      },
      {
        question: 'What are the intervals of a minor 9 chord?',
        answers: [
          { text: 'Root, b3, 5, b7, 9', correct: true },
          { text: 'Root, b3, 5, b9', correct: false},
          { text: 'Root, b3, b7, 9', correct: false},
          { text: 'Root, b3, 5, 9', correct: false}
        ]
      },
      {
        question: 'What are the intervals of a dominant 9 chord?',
        answers: [
          { text: 'Root, 3, 5, b7, 9', correct: true },
          { text: 'Root, 3, 5 ,7, 9', correct: false},
          { text: 'Root, b3, 5, b7, 9', correct: false},
          { text: 'Root, b3, 5, 7, 9', correct: false}
        ]
      },
      {
        question: 'What are the intervals of a dominant 11 chord?',
        answers: [
          { text: 'Root, 3 ,5 b7, 9, 11', correct: true },
          { text: 'Root, b3 ,5 7, 9, 11', correct: false},
          { text: 'Root, 3 ,5, 9, 11', correct: false},
          { text: 'Root, b3, b7, 11', correct: false}
        ]
      },
      {
        question: 'What are the intervals of a dominant 13 chord?',
        answers: [
          { text: 'Root, 3 ,5 b7, 9, 11, 13', correct: true },
          { text: 'Root, b3, b7, 13', correct: false},
          { text: 'Root, 3, 11, 13', correct: false},
          { text: 'Root, 3 ,b7, 9, 13', correct: false}
        ]
      }
    ]