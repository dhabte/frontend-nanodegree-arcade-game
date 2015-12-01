frontend-nanodegree-arcade-game
===============================

# Overview
Welcome to frugger arcade game!
## Feature of the game
* The game screen is three roads parallel to each other and a river on one side and a grass land on the other.
* Bugs are running along the the 3 roads.
* The player have to move from the grass land to the river without being hit by the bugs.


## How to play the game:
## How to start
Double click index.html from the folder to start the game. A start button, reset button will be added in the future.

## Game tools and rules:
4 keyboard arrow keys are used to move the the player across the road.
* Left key moves the player to the left
* Right key moves the player to the Right
* Up key moves the player up
* down: moves the player down

## How points are allotted:
* For any collision with the bug a point is deducted from the score and 1 life deducted from the number of lives.
* When the player reaches the water a point is added to the score and the player is reset to the grass land.
* When the player reaches the water 10 times the game is won.
* The player have 4 lives; for each collission with the bug 1 life is lost.
* When all the 4 lives are lost game is over.

## How the game is built:

The game is built using html5 and javaScript. index.html, css, engine.js, resouce.js and images are downloadeded or cloned from udacity repository. Editting the app.js to build the game is realy a great experiance. I learned how to use classes, methods, Object-Oriented JavaScript, this and Object prototypes.
### Some of the methods I learned are:
* The render method
* The update method
* The handleInput method,

### Acknowledgments:
* Eloquent JavaScript by Marijn Haverbeke
* Courses provided by Udacity and Hack Reactor
* MDN Game Development, etc
