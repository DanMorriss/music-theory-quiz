//button variables
const playButton = document.getElementById('play-button');
const rulesButton = document.getElementById('rules-button');
const backButton = document.getElementById('back-button');

//containers
const homeContainer = document.getElementById('home-container');
const rulesContainer = document.getElementById('rules-container');

//Open the rules container from the home screen
rulesButton.addEventListener('click', () => {
    homeContainer.classList.add('hide');
    rulesContainer.classList.remove('hide');
})

//Close the rules container
backButton.addEventListener('click', () => {
    rulesContainer.classList.add('hide');
    homeContainer.classList.remove('hide');
})