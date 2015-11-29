//CONSTANTS
var BUG_WIDTH = -101;
var CANVAS_WIDTH = 505;
var XRESET_LOC = 200;
var YRESET_LOC = 375;
var BUG1_LOCX = 100;
var BUG2_LOCX = 300;
var BUG3_LOCX = 200;
var BUG4_LOCX = 500;
var BUG5_LOCX = 200;
var BUG1_LOCY = 62;
var BUG2_LOCY = 62;
var BUG3_LOCY = 146;
var BUG4_LOCY = 230;
var BUG5_LOCY = 230;
var BUG1_SPEED = 300;
var BUG2_SPEED = 300;
var BUG3_SPEED = 400;
var BUG4_SPEED = 250;
var BUG5_SPEED = 250;
var SCORE = 0;
var LIVES = 4;
// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.speed =speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x <= CANVAS_WIDTH){
    this.x += 0.5*this.speed * dt;
    }else{
    this.x = BUG_WIDTH;
  }
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y,speed){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-boy.png';
    this.lifeCount = 0;
    this.score = SCORE;
    this.lives = LIVES;
};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    ctx.font = '25pt Courier New';
    ctx.fillStyle = 'orange';
    ctx.fillText('Score' + ' ' + this.score, -2, 30);
    ctx.fillText('Lives' + ' ' + this.lives, 365, 30);
};
//var player = new Player();
Player.prototype.update = function() {
    if(this.y <= 0){
    alert('YOU WON');
    this.reset();
    }
};
Player.prototype.handleInput = function(keyCode) {
switch(keyCode){
        case 'left' : if(this.x > 0){
          this.x -= -BUG_WIDTH;}
          break;
        case 'right': if(this.x < 400){
          this.x += -BUG_WIDTH;}
          break;
        case 'up': if (this.y > 0 ) {
          this.y -= 85;}
          break;
        case 'down': if(this.y < 300){
          this.y += 85;}
          break;
            }
};
Player.prototype.reset = function(){
    this.x = XRESET_LOC;
    this.y = YRESET_LOC;

};
// Now instantiate your objects.
var bug1 = new Enemy(BUG1_LOCX,BUG1_LOCY,BUG1_SPEED);
var bug2 = new Enemy(BUG2_LOCX,BUG2_LOCY,BUG2_SPEED);
var bug3 = new Enemy(BUG3_LOCX,BUG3_LOCY,BUG3_SPEED);
var bug4 = new Enemy(BUG4_LOCX,BUG4_LOCY,BUG4_SPEED);
var bug5 = new Enemy(BUG5_LOCX,BUG5_LOCY,BUG5_SPEED);
// Place all enemy objects in an array called allEnemies
var allEnemies = [bug1, bug2, bug3, bug4, bug5];
// Place the player object in a variable called player
var player = new Player(XRESET_LOC,YRESET_LOC);
var checkCollisions = function(){
    for (var i = 0; i < allEnemies.length; i++) {
        if ((allEnemies[i].x) <= player.x + 30 &&
            (allEnemies[i].x + 30) >= (player.x) &&
            (allEnemies[i].y)<= player.y + 30 &&
            (allEnemies[i].y + 30) >= (player.y)) {
            this.score -= 1;
            this.lives -= 1;
          //alert('YOU LOSE');
          score++;
          player.reset();
        }
    }
};
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
