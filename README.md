# Music Theory Quiz

### [Live Site](https://danmorriss.github.io/music-theory-quiz)

### [Project Repository](https://github.com/DanMorriss/music-theory-quiz)

![Responsive mockup](assets/images/)

## Contents

* [**User Experience (UX)**](<#user-experience-ux>)
    * [Initial Discussion](<#initial-discussion>)
    * [User Stories](<#user-stories>)
        * [Client Goals](#client-goals)
        * [First Time Visitor Goals](<#first-time-visitor-goals>)
        * [Returning Visitor Goals](<#returning-visitor-goals>)
        * [Frequent Visitor Goals](<#frequent-visitor-goals>)
    * [Site Structure](<#site-structure>)
    * [Wireframes](<#wireframes>)
        * [Home Page: Desktop View](<#home-page-desktop-view>)
        * [House band Page: Desktop view](<#house-band-page-desktop-view>)
        * [Contact Page: Desktop View](<#contact-page-desktop-view>)
        * [Mobile View](<#mobile-view>)
* [**Design**](<#design>)
    * [Color Scheme](<#color-scheme>)
    * [Typography](<#typography>)
    * [Imagry](<#imagry>)
* [**Features**](#features)
    * [Existing Features](<#existing-features>)
        * [Navigation Bar](<#navigation-bar>)
        * [Landing Page - Hero Image](<#landing-page---hero-image>)
        * [Join Us Section](<#join-us-section>)
        * [The Next Night Section](<#the-next-night-section>)
        * [Footer](<#footer>)
        * [House Band](<#house-band>)
        * [Contact Form](<#contact-form>)
        * [Contact Form Sucess Page](<#contact-form-sucess-page>)
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

### Initial Discussion

[Back to top](<#contents>)
### User Stories

#### Client Goals

[Back to top](<#contents>)
#### First Time Visitor Goals

[Back to top](<#contents>)
#### Returning Visitor Goals

[Back to top](<#contents>)
#### Frequent Visitor Goals

[Back to top](<#contents>)
### Site Structure

[Back to top](<#contents>)
### Wireframes

[Back to top](<#contents>)
## Design

### Color Scheme

![Color theme](assets/images/)
[Adobe Color Theme](<https://color.adobe.com/Green-Blaze-color-theme-f43afa51-84f4-4c52-9114-15d25488e2dd/>)

[Back to top](<#contents>)
### Typography

[Google Fonts](https://fonts.google.com) was used for the following fonts:
- Playfair Display for the headings and questions.
- Lato for the buttons and explenation text.

[Back to top](<#contents>)
### Imagry

- The images were all taken from stock image library in [Canva](https://www.canva.com)

[Back to top](<#contents>)
## Features
### Existing Features

#### Feature 1

[Back to top](<#contents>)

[Back to top](<#contents>)
### Accesibility

[Back to top](<#contents>)
### Future Features

- Score 60% to unlock next level.
- Add name at end of gae to dispaly on the score board.
- Add a progress bar: https://www.youtube.com/watch?v=4bctmtuZVcM&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=7

[Back to top](<#contents>)
## Technologies Used
### Languages
- HTML - for
- CSS - for
- JavaSript - for

[Back to top](<#contents>)
## Testing

### Code Validation
Testing using the Google Chrome Dev Tools was used throughout the build of the site. Below you can see the results of the W3C HTML and CSS checkers for the finished site.

#### W3C HTML Checker

![W3C HTML Checker, no faults found](assets/images/)

#### W3C CSS Checker

![W3C CSS Checker, no faults found](assets/images/)

#### Lighthouse

![Lighthouse test results](assets/images/)

#### JavaScript

![JS test results](assets/images/)

[Back to top](<#contents>)
### Responsiveness Test

[Back to top](<#contents>)
### Browser Compatibility

[Back to top](<#contents>)
### Peer Testing

[Back to top](<#contents>)
## Bugs

### Solved Bugs

- All the different containers were displaying when I tidied up some of the CSS rules so I moved the .hide rul to the end to fix it.
- False was typed flase in the question list so wasn't functing properly.
- Checking if the selected answer matech the answer from the array wasn't working. I needed to convert both answers to text so they could be matched.
- The submit button was still displaying after an answer has been submitted. After rewriting the else statement inside the checkAnswer fuction a type was fixed and the bug was fixed.
- When the incorrect answer was selected the correct answer was not displaying. To fix this I looped through the possible answers and matched them to the correct answer. If they matched I added the correct class to it.
- I needed to dissable clicking on an answer once one has been submitted. I used .button:active:hover:not([disabled]) to allow me to add disabled to the buttons after an answer has been selected.
- There was a typo in the displayBeginnerQuestion function meaning it wasn't being called properly.
- The same question was showing on each new question. This was because I forgot to re-run the displayBeginnerQuestion function.
- The answer boxes are sometimes displaying with 1 answer per line. Added a min-width property to the css so they will always fit 2 per line unless on a small screen.
- Once you finished the game and played again you could play forever. I needed to reset the score index to 0 and clear the current score.
- The container shape changes when the next button is bisplayed. To fix this, I added a div that I sized to match the button that shows when the next button is hidden and hides when the next button shows. I also made the question height a set size to stop the buttons being pushed down then the question was on two lines.
- A question was ocasionally being repeated so I used splice from the shuffledQuestions to remove a question once it has been displayed.
- When submititng a name the browser refreshed the page so I had to preventDefault on the form so the rest of the function could run.
- Once you run out of questuons the game doesn't end. So I added ran the endGame function if the remaining questions counter gets below 1.
- The selected buttons are displaying when starting a new game. To fix this I looped though the buttons and remover selected, correct and incorrect in the start game function. I also enabled the answer buttons to be clicked in the same loop.
- The game counter doesnt end at 10 once the new difficulties were added. Modified the game to end at 5 wrong answers to make it more interesting for the user.
- The beginner questions were dislaying after the 1st question on the intermediate and advanced games. Inside the displayNextQuestion function it was running displayBeginnerQuestion so I added an if else statement to check the game type and ask another question from the same type.
- The advanced questions were not changing from the first displayed question. This was due to a type inthe gameType variable.

[Back to top](<#contents>)
### Unsolved Bugs

- remover height scroll on a mobile
- Make return key act at submit/next

- The next button was displaying when you start a second game. So I added the hide class in the end game function.
- Make harder levels unlockable.
- Add score multiplier for harder levels. *10 *15 *20.
- The username is not displaying on the game over screen.
- Add congratulations, you answered all the questions.



[Back to top](<#contents>)
## Deployment

### To Deploy the project
GitHub pages was used to deploy the live site as follows:
1. Login to GitHub
2. Go to the repository [DanMorriss/jazz-platform](https://github.com/DanMorriss/music-theory-quiz)
3. Click the `Settings` tab
4. Click the `Pages` tab
5. Under the 'Build and Deployment' section select the `Deploy from a branch` from the dropdown menu
6. Select the `main` and `/root` dropdown menu options
7. Click `save` and after a few minutes the site was live 

![Deployment walkthrough image](assets/images/)

### To Fork the project
To make a copy of the GitHub Repository you can fork a copy to edit it without changing the root file. This can then be used to update the original repository. To fork take the following steps:
1. Login to GitHub
2. Go to the repository [DanMorriss/jazz-platform](https://github.com/DanMorriss/jazz-platform)
3. On the top right-hand side of the page click the `fork` button and save a copy of the original repository to your GitHub account.

### To Clone the project
To clone the project:
1. Click the `code` button  
2. Click the `local` tab
3. Under HTTPS click the clipboard icon to copy the URL
![clone walkthrough image](assets/images/)
4. In your IDE of choice, open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made
6. Type `git clone` and then paste the URL copied from GitHub
7. Press enter and the local clone will be created

[Back to top](<#contents>)
## Credits

### Resources
- [ColorSpace](<https://mycolor.space/>) for the body's background gradient.
- [Font Pair](<https://www.fontpair.co/all>) for the font pairing.

### Content

[Back to top](<#contents>)
### Media

[Back to top](<#contents>)
### Code Used

-  Code from James Q Quick tutorial to sort scores https://www.youtube.com/watch?v=DFhmNLKwwGw&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=9


[Back to top](<#contents>)
## Acknowledgements

- [Precious Ijege](https://github.com/precious-ijege), my Code Institute Mentor.

[Back to top](<#contents>)