//button variables
const playButton = document.getElementById('play-button');
const backButtonDifficulty = document.getElementById('back-button-difficulty');
const rulesButton = document.getElementById('rules-button');
const backButtonRules = document.getElementById('back-button-rules');
const scoresButton = document.getElementById('scores-button');
const backButtonScores = document.getElementById('back-button-scores');
const backButtonGame = document.getElementById('back-button-game');
const beginnerButton = document.getElementById('beginner');
const answerButton1 = document.getElementById('answer1');
const answerButton2 = document.getElementById('answer2');
const answerButton3 = document.getElementById('answer3');
const answerButton4 = document.getElementById('answer4');


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

//open the game container and display beginner questions
beginnerButton.addEventListener('click', () => {
    difficultyContainer.classList.add('hide');
    gameContainer.classList.remove('hide');
    dispalyBeginnerQuestion();
})

//Close the game container
backButtonGame.addEventListener('click', () => {
    gameContainer.classList.add('hide');
    homeContainer.classList.remove('hide');
})

// Display beginner questions
function dispalyBeginnerQuestion() {
    console.log(dispalyBeginnerQuestion);

}

// Beginner questions
const beginnerQuestins = [
    {
        question: 'What is the relative minor key of C major?',
        answers: [
          { text: 'A minor', correct: true },
          { text: 'C minor', correct: false },
          { text: 'G minor', correct: false },
          { text: 'E minor', correct: false }
        ]
      },
    {
        question: 'What is the relative minor key of F major?',
        answers: [
            { text: 'D minor', correct: true },
            { text: 'F minor', correct: flase},
            { text: 'G minor', correct: flase},
            { text: 'A minor', correct: flase}
        ]
    },
    {
        question: 'What is the relative minor key of D major?',
        answers: [
            { text: 'B minor', correct: true },
            { text: 'F minor', correct: flase},
            { text: 'D minor', correct: flase},
            { text: 'A minor', correct: flase}
        ]
    },
    {
        question: 'What is the relative major key of A minor?',
        answers: [
            { text: 'C major', correct: true },
            { text: 'G major', correct: flase},
            { text: 'D major', correct: flase},
            { text: 'A major', correct: flase}
        ]
    },
    {
        question: 'What is the relative major key of D minor?',
        answers: [
            { text: 'F major', correct: true },
            { text: 'D major', correct: flase},
            { text: 'G major', correct: flase},
            { text: 'C major', correct: flase}
        ]
    },
    {
        question: 'What is the relative major key of E minor?',
        answers: [
            { text: 'G major', correct: true },
            { text: 'D major', correct: flase},
            { text: 'E major', correct: flase},
            { text: 'C major', correct: flase}
        ]
    },
    {
        question: 'What is the relative major key of B minor?',
        answers: [
            { text: 'D major', correct: true },
            { text: 'G major', correct: flase},
            { text: 'B major', correct: flase},
            { text: 'C major', correct: flase}
        ]
    },
    {
        question: 'How many sharps are in the key of C major?',
        answers: [
            { text: '0', correct: true },
            { text: '1', correct: flase},
            { text: '2', correct: flase},
            { text: '3', correct: flase}
        ]
    },
    {
        question: 'How many flats are in the key of F major?',
        answers: [
            { text: '0', correct: true },
            { text: '1', correct: flase},
            { text: '2', correct: flase},
            { text: '3', correct: flase}
        ]
    },
    {
        question: 'How many sharps are in the key of G major?',
        answers: [
            { text: '0', correct: true },
            { text: '1', correct: flase},
            { text: '2', correct: flase},
            { text: '3', correct: flase}
        ]
    },
    {
        question: 'How many sharps are in the key of D major?',
        answers: [
            { text: '0', correct: true },
            { text: '1', correct: flase},
            { text: '2', correct: flase},
            { text: '3', correct: flase}
        ]
    },
    {
        question: 'How many sharps are in the key of A minor?',
        answers: [
            { text: '0', correct: true },
            { text: '1', correct: flase},
            { text: '2', correct: flase},
            { text: '3', correct: flase}
        ]
    },
    {
        question: 'How many flats are in the key of D minor?',
        answers: [
            { text: '0', correct: true },
            { text: '1', correct: flase},
            { text: '2', correct: flase},
            { text: '3', correct: flase}
        ]
    },
    {
        question: 'How many sharps are in the key of E minor?',
        answers: [
            { text: '0', correct: true },
            { text: '1', correct: flase},
            { text: '2', correct: flase},
            { text: '3', correct: flase}
        ]
    },
    {
        question: 'How many sharps are in the key of B minor?',
        answers: [
            { text: '0', correct: true },
            { text: '1', correct: flase},
            { text: '2', correct: flase},
            { text: '3', correct: flase}
        ]
    },
    {
        question: 'How many beats are in a 4/4 time signature?',
        answers: [
            { text: '4', correct: true },
            { text: '1', correct: flase},
            { text: '2', correct: flase},
            { text: '8', correct: flase}
        ]
    },
    {
        question: 'How many beats are in a 3/4 time signature?',
        answers: [
            { text: '3', correct: true },
            { text: '4', correct: flase},
            { text: '2', correct: flase},
            { text: '6', correct: flase}
        ]
    },
    {
        question: 'How many crotchets can you fit in a bar of 4/4?',
        answers: [
            { text: '4', correct: true },
            { text: '1', correct: flase},
            { text: '2', correct: flase},
            { text: '8', correct: flase}
        ]
    },
    {
        question: 'How many crotchets can you fit in a bar of 3/4?',
        answers: [
            { text: '3', correct: true },
            { text: '4', correct: flase},
            { text: '2', correct: flase},
            { text: '6', correct: flase}
        ]
    },
    {
        question: 'How many quavers can you fit in a bar of 4/4?',
        answers: [
            { text: '8', correct: true },
            { text: '4', correct: flase},
            { text: '2', correct: flase},
            { text: '16', correct: flase}
        ]
    },
    {
        question: 'How many quavers can you fit in a bar of 3/4?',
        answers: [
            { text: '6', correct: true },
            { text: '4', correct: flase},
            { text: '8', correct: flase},
            { text: '12', correct: flase}
        ]
    },
    {
        question: 'How many quavers can you fit in a bar of 6/8?',
        answers: [
            { text: '6', correct: true },
            { text: '4', correct: flase},
            { text: '8', correct: flase},
            { text: '12', correct: flase}
        ]
    },
    {
        question: 'How many quavers can you fit in a bar of 12/8?',
        answers: [
            { text: '12', correct: true },
            { text: '4', correct: flase},
            { text: '8', correct: flase},
            { text: '16', correct: flase}
        ]
    },
    {
        question: 'How many quavers make up a crotchet?',
        answers: [
            { text: '2', correct: true },
            { text: '1', correct: flase},
            { text: '4', correct: flase},
            { text: '8', correct: flase}
        ]
    },
    {
        question: 'How many quavers make up a minim?',
        answers: [
            { text: '4', correct: true },
            { text: '1', correct: flase},
            { text: '8', correct: flase},
            { text: '12', correct: flase}
        ]
    },
    {
        question: 'How many quavers make up a semi-breve?',
        answers: [
            { text: '8', correct: true },
            { text: '1', correct: flase},
            { text: '4', correct: flase},
            { text: '12', correct: flase}
        ]
    },
    {
        question: 'How many crotchets make up a minim?',
        answers: [
            { text: '2', correct: true },
            { text: '1', correct: flase},
            { text: '4', correct: flase},
            { text: '8', correct: flase}
        ]
    },
    {
        question: 'How many crotchets make up a semi-breve?',
        answers: [
            { text: '4', correct: true },
            { text: '1', correct: flase},
            { text: '2', correct: flase},
            { text: '8', correct: flase}
        ]
    },
    {
        question: 'How many minims make up a semi-breve?',
        answers: [
            { text: '2', correct: true },
            { text: '1', correct: flase},
            { text: '4', correct: flase},
            { text: '8', correct: flase}
        ]
    },
    {
        question: 'What is the term for the distance between two pitches?',
        answers: [
            { text: 'Interval', correct: true },
            { text: 'Chord', correct: flase},
            { text: 'Cadence', correct: flase},
            { text: 'Relative', correct: flase}
        ]
    },
    {
        question: 'A whole tone up from C is?',
        answers: [
            { text: 'D', correct: true },
            { text: 'C#', correct: flase},
            { text: 'Db', correct: flase},
            { text: 'E', correct: flase}
        ]
    },
    {
        question: 'A whole tone up from D is?',
        answers: [
            { text: 'E', correct: true },
            { text: 'D#', correct: flase},
            { text: 'Eb', correct: flase},
            { text: 'Fb', correct: flase}
        ]
    },
    {
        question: 'A whole tone up from E is?',
        answers: [
            { text: 'F#', correct: true },
            { text: 'F', correct: flase},
            { text: 'Gb', correct: flase},
            { text: 'G', correct: flase}
        ]
    },
    {
        question: 'A whole tone up from F is?',
        answers: [
            { text: 'G', correct: true },
            { text: 'F#', correct: flase},
            { text: 'Gb', correct: flase},
            { text: 'G#', correct: flase}
        ]
    },
    {
        question: 'A whole tone up from G is?',
        answers: [
            { text: 'A', correct: true },
            { text: 'G', correct: flase},
            { text: 'A#', correct: flase},
            { text: 'G#', correct: flase}
        ]
    },
    {
        question: 'A whole tone up from A is?',
        answers: [
            { text: 'B', correct: true },
            { text: 'C', correct: flase},
            { text: 'A#', correct: flase},
            { text: 'G#', correct: flase}
        ]
    },
    {
        question: 'A whole tone up from B is?',
        answers: [
            { text: 'C#', correct: true },
            { text: 'C', correct: flase},
            { text: 'Db', correct: flase},
            { text: 'G', correct: flase}
        ]
    },
    {
        question: 'A semi-tone up from C is?',
        answers: [
            { text: 'C#', correct: true },
            { text: 'D', correct: flase},
            { text: 'Db', correct: flase},
            { text: 'B', correct: flase}
        ]
    },
    {
        question: 'A semi-tone up from D is?',
        answers: [
            { text: 'Eb', correct: true },
            { text: 'F', correct: flase},
            { text: 'C#', correct: flase},
            { text: 'E', correct: flase}
        ]
    },
    {
        question: 'A semi-tone up from E is?',
        answers: [
            { text: 'F', correct: true },
            { text: 'F#', correct: flase},
            { text: 'Gb', correct: flase},
            { text: 'G', correct: flase}
        ]
    },
    {
        question: 'A semi-tone up from F is?',
        answers: [
            { text: 'F#', correct: true },
            { text: 'G', correct: flase},
            { text: 'Gb', correct: flase},
            { text: 'G#', correct: flase}
        ]
    },
    {
        question: 'A semi-tone up from G is?',
        answers: [
            { text: 'Ab', correct: true },
            { text: 'G', correct: flase},
            { text: 'A#', correct: flase},
            { text: 'G#', correct: flase}
        ]
    },
    {
        question: 'A semi-tone up from A is?',
        answers: [
            { text: 'Bb', correct: true },
            { text: 'C', correct: flase},
            { text: 'G', correct: flase},
            { text: 'D', correct: flase}
        ]
    },
    {
        question: 'A semi-tone up from B is?',
        answers: [
            { text: 'C', correct: true },
            { text: 'Cb', correct: flase},
            { text: 'Db', correct: flase},
            { text: 'B#', correct: flase}
        ]
    },
    {
        question: 'What is the 4 chord in the key of C major?',
        answers: [
            { text: 'F major', correct: true },
            { text: 'F minor', correct: flase},
            { text: 'G major', correct: flase},
            { text: 'D minor', correct: flase}
        ]
    },
    {
        question: 'What is the 5 chord in the key of C major?',
        answers: [
            { text: 'G major', correct: true },
            { text: 'F major', correct: flase},
            { text: 'D major', correct: flase},
            { text: 'A minor', correct: flase}
        ]
    },
    {
        question: 'What is the 4 chord in the key of F major?',
        answers: [
            { text: 'Bb major', correct: true },
            { text: 'C major', correct: flase},
            { text: 'D minor', correct: flase},
            { text: 'A minor', correct: flase}
        ]
    },
    {
        question: 'What is the 5 chord in the key of F major?',
        answers: [
            { text: 'C major', correct: true },
            { text: 'Bb major', correct: flase},
            { text: 'D minor', correct: flase},
            { text: 'A minor', correct: flase}
        ]
    },
    {
        question: 'What is the 4 chord in the key of G major?',
        answers: [
            { text: 'C major', correct: true },
            { text: 'D major', correct: flase},
            { text: 'D minor', correct: flase},
            { text: 'E minor', correct: flase}
        ]
    },
    {
        question: 'What is the 5 chord in the key of G major?',
        answers: [
            { text: 'D major', correct: true },
            { text: 'C major', correct: flase},
            { text: 'A minor', correct: flase},
            { text: 'E minor', correct: flase}
        ]
    },
    {
        question: 'What is the 4 chord in the key of D major?',
        answers: [
            { text: 'G major', correct: true },
            { text: 'A major', correct: flase},
            { text: 'A minor', correct: flase},
            { text: 'D minor', correct: flase}
        ]
    },
    {
        question: 'What is the 5 chord in the key of D major?',
        answers: [
            { text: 'A major', correct: true },
            { text: 'G major', correct: flase},
            { text: 'A minor', correct: flase},
            { text: 'E minor', correct: flase}
        ]
    },
    {
        question: 'What are the intervals of a major chord??',
        answers: [
            { text: 'Root, 3rd, 5th', correct: true },
            { text: 'Root, flat 3rd, 5th', correct: flase},
            { text: 'Root, 5th, octave', correct: flase},
            { text: 'Root, 4th 5th', correct: flase}
        ]
    },
    {
        question: 'What are the intervals of a minor chord??',
        answers: [
            { text: 'Root, flat 3rd, 5th', correct: true },
            { text: 'Root, 3rd, 5th', correct: flase},
            { text: 'Root, 5th, octave', correct: flase},
            { text: 'Root, 4th 5th', correct: flase}
        ]
    },
    {
        question: 'What are the intervals of a sus2 chord??',
        answers: [
            { text: 'Root, 2nd, 5th', correct: true },
            { text: 'Root, 2nd, 4th', correct: flase},
            { text: 'Root, 2nd, octave', correct: flase},
            { text: 'Root, 2nd, 3rd', correct: flase}
        ]
    },
    {
        question: 'What are the intervals of a sus4 chord??',
        answers: [
            { text: 'Root, 4th, 5th', correct: true },
            { text: 'Root, 2nd, 4th', correct: flase},
            { text: 'Root, 4th, octave', correct: flase},
            { text: 'Root, 3rd, 4th', correct: flase}
        ]
    },

]