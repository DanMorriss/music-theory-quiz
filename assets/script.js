//button variables
const playButton = document.getElementById('play-button');
const backButtonDifficulty = document.getElementById('back-button-difficulty');
const rulesButton = document.getElementById('rules-button');
const backButtonRules = document.getElementById('back-button-rules');
const scoresButton = document.getElementById('scores-button');
const backButtonScores = document.getElementById('back-button-scores');
const beginnerButton = document.getElementById('beginner');


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

