//button variables
const playButton = document.getElementById('play-button');
const backButtonDifficulty = document.getElementById('back-button-difficulty');
const rulesButton = document.getElementById('rules-button');
const backButtonRules = document.getElementById('back-button-rules');
const scoresButton = document.getElementById('scores-button');
const backButtonScores = document.getElementById('back-button-scores');
const backButtonGame = document.getElementById('back-button-game');
const beginnerButton = document.getElementById('beginner');
const answerButtons = document.getElementsByClassName('answer-buttons')[0];

const answerButton1 = document.getElementById('answer1');
const answerButton2 = document.getElementById('answer2');
const answerButton3 = document.getElementById('answer3');
const answerButton4 = document.getElementById('answer4');
const answerButton = document.getElementsByClassName('question-btn');
const submitButton = document.getElementById('submit-btn');
const nextButton = document.getElementById('next-btn');
const question = document.getElementById('question');

//containers
const homeContainer = document.getElementById('home-container');
const rulesContainer = document.getElementById('rules-container');
const scoresContainer = document.getElementById('scores-container');
const difficultyContainer = document.getElementById('difficulty-container');
const gameContainer = document.getElementById('game-container');

//Open the rules container from the home screen
rulesButton.addEventListener('click', () => {
    homeContainer.classList.add('hide');
    rulesContainer.classList.remove('hide');
})

//Close the rules container
backButtonRules.addEventListener('click', () => {
    rulesContainer.classList.add('hide');
    homeContainer.classList.remove('hide');
})

//Open the high scores container from the home screen
scoresButton.addEventListener('click', () => {
    homeContainer.classList.add('hide');
    scoresContainer.classList.remove('hide');
})

//Close the high scores container
backButtonScores.addEventListener('click', () => {
    scoresContainer.classList.add('hide');
    homeContainer.classList.remove('hide');
})

// Open difficulty container
playButton.addEventListener('click', () => {
    homeContainer.classList.add('hide');
    difficultyContainer.classList.remove('hide');
})

//Close difficulty container
backButtonDifficulty.addEventListener('click', () => {
    difficultyContainer.classList.add('hide');
    homeContainer.classList.remove('hide');
})

// Shuffle questions: Fisher-Yates shuffle algorithm.
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

let shuffledQuestions, shuffledAnswers;

// Display beginner questions
function displayBeginnerQuestion() {
    shuffledQuestions = shuffleQuestions(beginnerQuestions);
    //display a shuffled question
    question.innerText = shuffledQuestions[0].question;
    //display the shuffled answers
    shuffledAnswers = shuffleQuestions(shuffledQuestions[0].answers);
    for (let i = 0; i < 4; i++) {
        answerButton[i].innerText = shuffledAnswers[i].text;
    }
}

beginnerButton.addEventListener('click', () => {
    difficultyContainer.classList.add('hide');
    gameContainer.classList.remove('hide');
    displayBeginnerQuestion();
})

//select an answer
answerButton1.addEventListener('click', () => {
    if (answerButton2.classList.contains('selected')) {
        answerButton2.classList.remove('selected');
        answerButton1.classList.add('selected');
    } else if (answerButton3.classList.contains('selected')) {
        answerButton3.classList.remove('selected');
        answerButton1.classList.add('selected');
    } else if (answerButton4.classList.contains('selected')) {
        answerButton4.classList.remove('selected');
        answerButton1.classList.add('selected');
    } else {
        answerButton1.classList.add('selected');
    }
});
answerButton2.addEventListener('click', () => {
    if (answerButton1.classList.contains('selected')) {
        answerButton1.classList.remove('selected');
        answerButton2.classList.add('selected');
    } else if (answerButton3.classList.contains('selected')) {
        answerButton3.classList.remove('selected');
        answerButton2.classList.add('selected');
    } else if (answerButton4.classList.contains('selected')) {
        answerButton4.classList.remove('selected');
        answerButton2.classList.add('selected');
    } else {
        answerButton2.classList.add('selected');
    }
});
answerButton3.addEventListener('click', () => {
    if (answerButton1.classList.contains('selected')) {
        answerButton1.classList.remove('selected');
        answerButton3.classList.add('selected');
    } else if (answerButton2.classList.contains('selected')) {
        answerButton2.classList.remove('selected');
        answerButton3.classList.add('selected');
    } else if (answerButton4.classList.contains('selected')) {
        answerButton4.classList.remove('selected');
        answerButton3.classList.add('selected');
    } else {
        answerButton3.classList.add('selected');
    }
});
answerButton4.addEventListener('click', () => {
    if (answerButton1.classList.contains('selected')) {
        answerButton1.classList.remove('selected');
        answerButton4.classList.add('selected');
    } else if (answerButton2.classList.contains('selected')) {
        answerButton2.classList.remove('selected');
        answerButton4.classList.add('selected');
    } else if (answerButton3.classList.contains('selected')) {
        answerButton3.classList.remove('selected');
        answerButton4.classList.add('selected');
    } else {
        answerButton4.classList.add('selected');
    }
});

//Add to the correct score
function addToCorrectScore() {
    let oldCorrectScore = parseInt(document.getElementById('correct-score').innerText);
    document.getElementById('correct-score').innerText = ++oldCorrectScore;
}

//Add to the incorrect score
function addToIncorrectScore() {
    console.log('add to incorrect score');
    let oldIncorrectScore = parseInt(document.getElementById('incorrect-score').innerText);
    document.getElementById('incorrect-score').innerText = ++oldIncorrectScore;
}

//Check the answer
function checkAnswer() {
    const selectedAnswer = document.querySelector('.selected');
    const correctAnswer = shuffledAnswers.find(answer => answer.correct);
    if (selectedAnswer.textContent === correctAnswer.text) {
        selectedAnswer.classList.add('correct');
        addToCorrectScore();
        submitButton.classList.add('hide');
        nextButton.classList.remove('hide');
    } else {
        selectedAnswer.classList.add('incorrect');
        addToIncorrectScore();
        submitButton.classList.add('hide');
        nextButton.classList.remove('hide');
        //add correct answer
        for (let i = 0; i < 4; i++) {
            if (answerButton[i].innerText === correctAnswer.text) {
                answerButton[i].classList.add('correct');
            }
        }
    }
    //dissable selection of another answer
    answerButton1.disabled = true;
    answerButton2.disabled = true;
    answerButton3.disabled = true;
    answerButton4.disabled = true;
}

submitButton.addEventListener('click', () => {
    checkAnswer();
})

function displayNextQuestion() {
    console.log('display next question');
    //enable clicking of the buttons
    answerButton1.disabled = false;
    answerButton2.disabled = false;
    answerButton3.disabled = false;
    answerButton4.disabled = false;
    //try rewiting the html inside the answer-buttons div
    
    const previousAnswer = document.getElementsByClassName('selected')[0];
    previousAnswer.classList.remove("correct", "selected");
    
    //hide next button
    //display submit button
    displayBeginnerQuestion();
}

nextButton.addEventListener('click', () => {
    displayNextQuestion(); //not working
})

//Close the game container
backButtonGame.addEventListener('click', () => {
    gameContainer.classList.add('hide');
    homeContainer.classList.remove('hide');
})

// Beginner questions
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
        question: 'What are the intervals of a major chord??',
        answers: [
            { text: 'Root, 3rd, 5th', correct: true },
            { text: 'Root, flat 3rd, 5th', correct: false},
            { text: 'Root, 5th, octave', correct: false},
            { text: 'Root, 4th 5th', correct: false}
        ]
    },
    {
        question: 'What are the intervals of a minor chord??',
        answers: [
            { text: 'Root, flat 3rd, 5th', correct: true },
            { text: 'Root, 3rd, 5th', correct: false},
            { text: 'Root, 5th, octave', correct: false},
            { text: 'Root, 4th 5th', correct: false}
        ]
    },
    {
        question: 'What are the intervals of a sus2 chord??',
        answers: [
            { text: 'Root, 2nd, 5th', correct: true },
            { text: 'Root, 2nd, 4th', correct: false},
            { text: 'Root, 2nd, octave', correct: false},
            { text: 'Root, 2nd, 3rd', correct: false}
        ]
    },
    {
        question: 'What are the intervals of a sus4 chord??',
        answers: [
            { text: 'Root, 4th, 5th', correct: true },
            { text: 'Root, 2nd, 4th', correct: false},
            { text: 'Root, 4th, octave', correct: false},
            { text: 'Root, 3rd, 4th', correct: false}
        ]
    },

]