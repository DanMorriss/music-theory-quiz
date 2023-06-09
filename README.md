# Music Theory Quiz

Test and enhance your music theory knowledge with this engaging three-level quiz. Whether you're a beginner or an experienced musician, this quiz is designed to challenge and improve your understanding of music theory.

Unlock a total of 150 questions spread across three difficulty levels, allowing you to gradually progress and expand your musical expertise.

Keep track of your scores on the built-in scoreboard, compare your performance with previous attempts, and strive to improve your results over time. This feature serves as a valuable tool for monitoring your progress and motivating you to achieve higher scores.

### [Live Site](https://danmorriss.github.io/music-theory-quiz)

![Responsive mockup](assets/images/responsive-mockup.png)

## Contents

* [**User Experience (UX)**](<#user-experience-ux>)
    * [User Stories](<#user-stories>)
        * [First Time Visitor Goals](<#first-time-visitor-goals>)
        * [Returning Visitor Goals](<#returning-visitor-goals>)
        * [Frequent Visitor Goals](<#frequent-visitor-goals>)
    * [Wireframes](<#wireframes>)
        * [Home](<#home>)
        * [Game Screen](<#game-screen>)
        * [Difficulty](<#difficulty>)
        * [High Scores](<#high-scores>)
* [**Design**](<#design>)
    * [Color Scheme](<#color-scheme>)
    * [Typography](<#typography>)
* [**Features**](#features)
    * [Existing Features](<#existing-features>)
        * [Homepage](<#homepage>)
        * [The Rules](<#the-rules>)
        * [Enter a Username](<#enter-a-username>)
        * [Choose a Difficulty](<#choose-a-difficlty>)
        * [Answer the Questions](<#answer-the-questions>)
        * [High Scores](<#high-scores>)
        * [Sound](<#sound>)
        * [Close the game](<#close-the-game>)
    * [Accesibility](<#accesibility>)
    * [Future Features](<#future-features>)
* [**Technologies Used**](<#technologies-used>)
    * [Languages](<#languages>)
* [**Testing**](<#testing>)
    * [Code Validation](<>)
        * [W3C HTML Checker](<#w3c-html-checker>)
        * [W3C CSS Checker](<#w3c-css-checker>)
        * [Lighthouse](<#lighthouse>)
    * [Responsiveness Test](<#responsiveness-test>)
    * [Browser Compatibility](<#browser-compatibility>)
    * [Peer Testing](<#peer-testing>)
* [**Bugs**](<#bugs>)
    * [Solved Bugs](<#solved-bugs>)
    * [Unsolved Bugs](<#unsolved-bugs>)
* [**Deployment**](<#deployment>)
* [**Credits**](<#credits>)
    * [Resources](<#resources>)
    * [Content](<#content>)
    * [Media](<#media>)
* [**Acknowledgements**](<#acknowledgements>)

## User Experience (UX)

### User Stories

#### First Time Visitor Goals

A fist time visitor will want to:
- test their music theory knowledge.
- be able to easily navigate the game.
- understand how to play the game.
- turn the sound on and off.
have the game beresponsive across different devices.
- be enticed back to play again.

[Back to top](<#contents>)
#### Returning Visitor Goals

A returning visitor will want to:
- porgress throught the difficulty levels.

[Back to top](<#contents>)
#### Frequent Visitor Goals

A frequent visitor will want to:
- compare their scores from previous attempts.
- try to beat their high score.

[Back to top](<#contents>)
### Wireframes

#### Home
![Home Wireframe](assets/images/home-wire.png)

#### Game Screen
![Game Screen Wireframe](assets/images/game-wire.png)

#### Difficulty
![Difficulty Wireframe](assets/images/difficulty-wire.png)

#### High Scores
![Highscores Wireframe](assets/images/highscores-wire.png)

[Back to top](<#contents>)
## Design

### Color Scheme

![Color theme](assets/images/color-theme.png)
[Adobe Color Theme](<https://color.adobe.com/Green-Blaze-color-theme-f43afa51-84f4-4c52-9114-15d25488e2dd/>)

[Back to top](<#contents>)
### Typography

[Google Fonts](https://fonts.google.com) was used for the following fonts:
![Typography](assets/images/typography.png)
- Playfair Display for the headings and questions.
- Lato for the buttons and explenation text.

[Back to top](<#contents>)
## Features
### Existing Features

#### Homepage
From the homepage you have three main options, each acessible via a button on the middle of the screen:
- Play the Game
- Lean the rules
- See the highscores

![Homepage](assets/images/game-pages/home.png)

[Back to top](<#contents>)
#### The Rules

- If you click the rules button you are taken to a page explaining the rules.
- To close this page there is an 'x' in the top right that takes you back to the home screen.

![Rules](assets/images/game-pages/rules.png)

[Back to top](<#contents>)
#### Enter a Username

- If you click the 'Play' button from the homescreen you are asked to enter your username.
- You cannot enter a blank username or whitespace. A warning popup with display "Please enter your name" if you try to click submit without entering your a name.
- To close this page there is an 'x' in the top right that takes you back to the home screen.

![Enter a username](assets/images/game-pages/username.png)

[Back to top](<#contents>)
#### Choose a Difficlty

After entering your username there are three difficulty levels to choose from.
- Beginner
- Intermediate
- Advanced

Each one must be unlocked by answeing 10 questions corretly from the previous difficulty.

![Choose a difficulty, beginner](assets/images/game-pages/difficulty-beginner.png)
![Choose a difficulty, intermediate](assets/images/game-pages/difficulty-intermediate.png)
![Choose a difficulty, advanced](assets/images/game-pages/difficulty-all.png)

[Back to top](<#contents>)
#### Answer the Questions

- There are about 60 questions inside each difficulty that are randomly displayed.
- The answers are also shuffled so the correct answer is not always displayed in the same position.

![Displaying a question](assets/images/game-pages/game.png)

If you select an answer that is correct the button goes green and a 'next' button display underneath the answers that takes you to another shuffled question.

![Answered correctly!](assets/images/game-pages/game-correct.png)

If you select an incorrect answer the button you selected turns red, the correct answer goes green and the 'next button is displayed.

![Answer incorrectly.](assets/images/game-pages/game-incorrect.png)

If you answer 10 questions correctly a congraatulations pop-up appears giving you the options to: 
- Go to the next level 
- Continue on with the next question on this level.

![Congratulations page](assets/images/game-pages/congratulations.png)

If you answer 5 question incorrectly:
- Your score is added to the highscores page 
- A game over page is displayed with the options to:
    - Go home 
    - Play again 
    - View the high scores

![Game over page](assets/images/game-pages/game-over-fail.png)

[Back to top](<#contents>)
#### High Scores

The high scores page displays all the completed game scores in ranked order with the:
- username
- score

![Highscores page](assets/images/game-pages/highscores.png)

[Back to top](<#contents>)
#### Sound

The game has sounds for:
- buttons clicked
- correct answer selected
- incorrect answer selected

As not all user will want the game sounds to be on, there is a slider toggle button on the top right of the screen that will turn the sounds off and back on.
- The green indicated the sound is on.

![Sound on/off toggle](assets/images/game-pages/sound.png)

[Back to top](<#contents>)
#### Close the Game

If the close 'x' button is clicked during a game, a warning will pop up asking if you want to exit the game as your score will not be saved.

![Close the game warning](assets/images/game-pages/close-game.png)

[Back to top](<#contents>)
### Accesibility

While designing and coding the game accesublity and ease of use was paramount in the desicion making of both the aestetic design and userbility.
- The foreground and background colors have a suitable contrast to make everything easy to read.
- Semantic HTMl is used
- The buttons all have hover effects so a user will know when they can click something
- Button selections display differently and make a sound

[Back to top](<#contents>)
### Future Features

- Add congratulations, you answered all the questions.
- Add a database to score all users highscores outside of local storage.
- Share your score on social media option with congratulations page.

[Back to top](<#contents>)
## Technologies Used
### Languages
- HTML - for the page content.
- CSS - for the styling.
- JavaSript - for the functionality of the game and storing the game questions.

[Back to top](<#contents>)
## Testing

### Code Validation
Testing using the Google Chrome Dev Tools was used throughout the build of the game. Below you can see the results of the W3C HTML, CSS & JavaScript checkers for the finished site.

#### W3C HTML Checker

![W3C HTML Checker, no faults found](assets/images/html-validation.png)

#### W3C CSS Checker

![W3C CSS Checker, no faults found](assets/images/css-validation.png)

#### Lighthouse

![Lighthouse test results](assets/images/lighthouse-validation.png)

#### JSHint JavaScript Validatior

[JSHint JavaScript validator](<https://jshint.com/>)
![JS test results](assets/images/jshint-validation.png)

[Back to top](<#contents>)
### Responsiveness Test

[Google Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) was used to test how rhe game plays and looks across the following device screen sizes. This process wa carried out throught the production of the game and improvements via media querys and general CSS are documented in the [Bugs](<#bugs>) section.
- iPhone SE
- iPhone XR
- iPhone 12 Pro
- Pixel 5
- Samsung Galaxy S8+
- Samsung Galaxy S20 Ultra
- iPad Air
- iPad Mini
- Surface Pro 7
- Surfave Duo

The following realworld devices were used to test the game for functnality and responsiveness througout development of the game.
- iPhone 13
- MacBook Pro 16-inch

[Back to top](<#contents>)
### Browser Compatibility

 The following webbrowsers were used to test the game for functunality. Any bugs found have been fixed and documented in the [Bugs](<#bugs>) section.
- Google Chrome
- Safari
- Firefox

[Back to top](<#contents>)
### Peer Testing

As well as testing myself the site was tested by the following external users across a range of devices including smart-phones, tablets, and laptop computers.

- Kent Yates
- Selina Sheerin
- Claire Burford
- Georgina from peer-code-review via the Code Institute Slack Channel
- Jennie from peer-code-review via the Code Institute Slack Channel

[Back to top](<#contents>)
## Bugs

### Solved Bugs

- All the different containers were displaying when I tidied up some of the CSS rules so I moved the .hide rul to the end to fix it.
- False was typed 'flase' in the question list so wasn't functing properly.
- Checking if the selected answer match the answer from the array wasn't working. I needed to convert both answers to text so they could be matched.
- The submit button was still displaying after an answer has been submitted. After rewriting the else statement inside the checkAnswer fuction a typo was corrected and the bug was fixed.
- When the incorrect answer was selected the correct answer was not displaying. To fix this I looped through the possible answers and matched them to the correct answer. If they matched I added the correct class to it.
- I needed to dissable clicking on an answer once one has been submitted. I used .button:active:hover:not([disabled]) to allow me to add disabled to the buttons after an answer has been selected.
- There was a typo in the displayBeginnerQuestion function meaning it wasn't being called properly.
- The same question was showing on each new question. This was because I forgot to re-run the displayBeginnerQuestion function.
- The answer boxes were sometimes displaying with 1 answer per line. I added a min-width property to the CSS so they will always fit 2 per line unless on a small screen.
- Once you finished the game and played again you could play forever. I needed to reset the score index to 0 and clear the current score.
- The container shape changes when the next button is bisplayed. To fix this, I added an empty div that I sized to match the button that shows when the next button is hidden and hides when the next button shows. I also made the question height a set size to stop the buttons being pushed down then the question was on two lines.
- A question was ocasionally being repeated so I used splice from the shuffledQuestions to remove a question once it has been displayed.
- When submititng a name the browser refreshed the page so I had to preventDefault on the form so the rest of the function could run.
- Once you run out of questuons the game doesn't end. So I added the endGame function to run if the remaining questions counter gets below 1.
- The selected buttons were displaying when starting a new game. To fix this I looped though the buttons and remover selected, correct and incorrect in the start game function. I also enabled the answer buttons to be clicked in the same loop.
- The game counter doesnt end at 10 once the new difficulties were added. Modified the game to end at 5 wrong answers to make it more interesting for the user.
- The beginner questions were dislaying after the 1st question on the intermediate and advanced games. Inside the displayNextQuestion function it was running displayBeginnerQuestion so I added an if else statement to check the game type and ask another question from the same type.
- The advanced questions were not changing from the first displayed question. This was due to a typo in the gameType variable.
- On an iPhone, the body was scrollable due to the built in browser buttons along the bottom. I set overflow to hidden in the @mediaquery to fix this.
- When you closed the game early, your previous question scores still displayed so I cleared them when the close container button is pressed.
- You could unlock the advanced game by completing 20 questions in total, so I included an extra clause to make sure that the intermeidate game is being played.
- The home button was not working from the game over screen, so I added an event listener with function to go home.
- When you clicked the 'x' on the game screen the score was not saved to the highscores board. I added a warning popup message explaining this to the user.
- You could enter a blank username so I added the validateName function to display an alert if you did not enter a valid username.
- The next button was displaying when you start a second game. So I added the hide class to the button once the game difficulty was selected.
- The rules were not displaying properly on an iPhone so i changed the display to inline-block insde the smaller screen media-query.
- The Validate name function was supplying a popup correctly, but then progressing onto the next page anyway. To fit this I nested the validation iside an if else statemnt with the submit name function.

[Back to top](<#contents>)
### Unsolved Bugs

No known bugs.

[Back to top](<#contents>)
## Deployment

### To Deploy the project
GitHub pages was used to deploy the live site as follows:
1. Login to GitHub
2. Go to the repository [DanMorriss/music-thoery-quiz](https://github.com/DanMorriss/music-theory-quiz)
3. Click the `Settings` tab
4. Click the `Pages` tab
5. Under the 'Build and Deployment' section select the `Deploy from a branch` from the dropdown menu
6. Select the `main` and `/root` dropdown menu options
7. Click `save` and after a few minutes the site was live 
![Deployment walkthrough image](assets/images/deployment.png)

### To Fork the project
To make a copy of the GitHub Repository you can fork a copy to edit it without changing the root file. This can then be used to update the original repository. To fork take the following steps:
1. Login to GitHub
2. Go to the repository [DanMorriss/jazz-platform](https://github.com/DanMorriss/music-theory-quiz)
3. On the top right-hand side of the page click the `fork` button and save a copy of the original repository to your GitHub account.

### To Clone the project
To clone the project:
1. Click the `code` button  
2. Click the `local` tab
3. Under HTTPS click the clipboard icon to copy the URL
4. In your IDE of choice, open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made
6. Type `git clone` and then paste the URL copied from GitHub
7. Press enter and the local clone will be created
![Clone walkthrough image](assets/images/clone.png)

[Back to top](<#contents>)
## Credits

### Resources
- [ColorSpace](<https://mycolor.space/>) for the body's background gradient.
- [Font Pair](<https://www.fontpair.co/all>) for the font pairing.
- [Balsamiq](<https://balsamiq.com/>) for the wireframes.
- [Github](<https://github.com/>) to store the code.
- [VS Code](<https://code.visualstudio.com/>) to write the code.
- [Google Fonts](<https://fonts.google.com/>) for the fonts.
- [Font Awesome](<https://fontawesome.com/>) for the close icon.
- [Google Developer Tools](<https://developer.chrome.com/docs/devtools/>) for debugging and testing.
- [Am I Responsive?](<https://ui.dev/amiresponsive>) for the dislay image across devices.
- [W3C HTML Validator](<https://validator.w3.org/>) to validate the HTML.
- [W3C Jigsaw CSS Validator](<https://jigsaw.w3.org/css-validator/>) to validate the CSS.
- [Stack Overflow](<https://stackoverflow.com/>) for general troubleshooting.
- [W3 Schools](<https://www.w3schools.com/>) for general troubleshooting.
- [MDN Web Docs](<https://developer.mozilla.org/en-US/>) for general troubleshooting.

### Content

- All the questions and content in the game was writen by Daniel Morriss.

[Back to top](<#contents>)
### Media

- All the game sounds came from [UppBeat](<https://uppbeat.io/>)

[Back to top](<#contents>)
### Code Used

-  Code from James Q Quick tutorial [Save High Scores in Local Storage](<https://www.youtube.com/watch?v=DFhmNLKwwGw&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=9>) to help use local storage and sorting the scores.

- I used this [Form validation](<https://stackoverflow.com/questions/27543671/javascript-form-validation-not-empty-or-no-whitespaces >) article from Stack Overflow to help me deal with whitespace being entered as a name.

- I used this [Stack Slider Switch Tutorial](<https://www.youtube.com/watch?v=uCjDIMADK0w>) for help with the CSS in building a slider switch.

[Back to top](<#contents>)
## Acknowledgements

- [Precious Ijege](<https://github.com/precious-ijege>), my Code Institute Mentor.
- [Kent Yates](<https://github.com/Jelly-man>), for taking the time to play the game and give feeback.
- Selina Sheerin, for taking the time to play the game and give feeback.
- Claire Burford, for taking the time to play the game and give feeback.
- Georgina, for respondong to my peer-code-review on Slack.
- Jennie, for respondong to my peer-code-review on Slack.

[Back to top](<#contents>)