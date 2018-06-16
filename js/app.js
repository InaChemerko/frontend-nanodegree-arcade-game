// Enemies our player must avoid
//define Enemy class
//array for enemies
let allEnemies = [];

class Enemy {
    //assign variables x,y speed, sprite for enemy
    constructor (x,y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        //The image/sprite for our enemies
        this.sprite = 'images/enemy-bug.png';
    }

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
    update(dt) {
    // update x coordinate and speed when enemy goes out of canvas    
    if (this.x > 505) {
            this.x = 0;
            let max = 140;
            let min = 70;
            this.speed = Math.floor(Math.random() * (max - min + 1)) + min;
        }
    this.x += this.speed*dt;
}

// Draw the enemy on the screen, required method for game
    render(){
ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
// Check for collision enemy and player, required method for game
    checkCollisions(){
    if (this.x === Player.x){
console.log("collision");
    }
    }

}

class Player {
    //assign variables x,y, sprite for player
    constructor (x,y) {
        this.x = x;
        this.y = y;
        //The image/sprite for our player
        //this.sprite = 'images/char-horn-girl.png';
        this.sprite = 'images/char-boy.png';
        
    }

    update() {
        //this.x = 200;
        //this.y = 410;

    }

   // Draw the player on the screen, required method for game
    render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    } 

    //Move the player on screen, required method for game
    handleInput(event){
        //check for collision enemy and player
        //if ()


        let difference = 90; //the difference of coordinates when the key is pressed
        if ((event === 'left') && ((this.x - difference) >0 ) ) {
            //console.log("left", this.x);
            this.x-=difference;
            //console.log(this.x);
        }

        if ((event === 'right') && ((this.x + difference) < 400)) {
            //console.log("right", this.x);
            this.x+=difference;
            //console.log(this.x);
        }

        if ((event === 'up') && ((this.y - difference) > 0 )) {
            //console.log("up", this.y);
            this.y-=difference;
            //console.log(this.y);
        }

        if ((event === 'down') && ((this.y + difference) < 420 )) {
            //console.log("down", this.y);
            this.y+=difference;
            //console.log(this.y);
        }

//check for collision enemy and player
        //if (this.x === Enemy.x)

    }

    
}

//assign instances of Enemy
let enemyFirst = new Enemy(0,65,70);
let enemySecond = new Enemy(0,150,100);
let enemyThird = new Enemy(0,230,80);
allEnemies.push(enemyFirst);
allEnemies.push(enemySecond);
allEnemies.push(enemyThird);

//assign instances of Enemy
let player = new Player(200,410);
/*var Enemy = function(x, y, movement) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    // variables for movement
    this.x = x;
    this.y = y;
    this.movement = movement;


}; */

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
/*Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.movement*dt;
}; */

// Draw the enemy on the screen, required method for game
/*Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};*/

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



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
