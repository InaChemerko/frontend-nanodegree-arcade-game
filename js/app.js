// Enemies our player must avoid


//assign variables
let allEnemies = []; //assign array for enemies
const spaceOfCollision = 50; //assign variable for checking collision
let amountOfCollisions = 0; //assign variable for counting collision
//assign variables for displaying modal, when the player won
const modal = document.getElementsByClassName('modal');
const playAgain = document.getElementById('playAgain');
let modalHeading = document.getElementById('modal-heading');

//define Enemy class
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

 //Check for collision, required method for game
 /* conditon of collision from https://ru.stackoverflow.com/questions/472220/%D0%9A%D0%BE%D0%BB%D0%BB%D0%B8%D0%B7%D0%B8%D0%B8-%D0%B2-%D0%B8%D0%B3%D1%80%D0%B0%D1%85-%D0%9A%D0%B0%D0%BA-%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C-%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D1%83-%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D0%BE%D0%B9-%D0%BE%D0%B4%D0%B8%D0%BD-%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82-%D1%81%D1%82%D0%BE%D0%BB%D0%BA%D0%BD%D1%83%D0%BB%D1%81%D1%8F-%D1%81-%D0%B4%D1%80%D1%83%D0%B3
    if (a.position.x <= b.position.x + b.width &&
    a.position.x + a.width >= b.position.x &&
    a.position.y <= b.position.y + b.height &&
    a.height + a.position.y >= b.position.y) {
    console.log('Collision!');
} */
//the player has 5 attempt to reach water
 checkCollisions(){ 
    if (amountOfCollisions<5) {
if (this.x <= player.x + spaceOfCollision && this.x + spaceOfCollision >= player.x && this.y <= player.y + spaceOfCollision && spaceOfCollision + this.y >= player.y){
    player.update();
    amountOfCollisions++;
    
}
}
if (amountOfCollisions === 5){
    modalHeading.innerText = 'Game over'; //change header in modal
    modal[0].style.backgroundColor = '#70db70'; //change background color in modal
    player.message();
    amountOfCollisions =0;
    
}
}

//Reassign parameters for enemy, when the player wants to play again
restart(x, y, speed){
this.x = x;
this.y = y;
this.speed = speed;
 
 }


// Draw the enemy on the screen, required method for game
    render(){
ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

}


//define Player class
class Player {
    //assign variables x,y, sprite for player
    constructor (x,y) {
        this.x = x;
        this.y = y;
        //The image/sprite for our player
        //this.sprite = 'images/char-horn-girl.png';
        this.sprite = 'images/char-boy.png';
        
    }

    //Update the coordinates of the player when there was a collision
    update() {
        this.x = 200;
        this.y = 410;

    }

   // Draw the player on the screen, required method for game
    render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    } 

    //Message when the player won or not
    message(){
        modal[0].style.display ='block';
        for(let enemy of allEnemies) {
            enemy.speed = 0;
        }

    }

    //Move the player on screen, required method for game
    handleInput(event){
    
        let difference = 90; //the difference of coordinates when the key is pressed
        
        if ((event === 'left') && ((this.x - difference) >0 ) ) {
            this.x-=difference;
            
        }

        if ((event === 'right') && ((this.x + difference) < 400)) {
            this.x+=difference;
            }

        if ((event === 'up') && ((this.y - difference) > 0 )) {
            this.y-=difference;
            }

        if ((event === 'down') && ((this.y + difference) < 420 )) {
            this.y+=difference;
            }

        if (this.y <=50 ){
            modalHeading.innerText = 'Congratulations!'; //change header in modal
            modal[0].style.backgroundColor = '#80bbff'; //change background color in modal
            player.message();
        }
    }   

    
}

//assign instances of Enemy
let enemyFirst = new Enemy(0,65,70);
let enemySecond = new Enemy(0,150,100);
let enemyThird = new Enemy(0,230,80);
allEnemies.push(enemyFirst);
allEnemies.push(enemySecond);
allEnemies.push(enemyThird);

//assign instance of Player
let player = new Player(200,410);

//add event listener for button "Play again"
playAgain.addEventListener('click', function (){
    modal[0].style.display ='none';
    modalHeading.innerText = '';
    player.update();
    enemyFirst.restart(0,65,70);
    enemySecond.restart(0,150,100);
    enemyThird.restart(0,230,80);
    amountOfCollisions =0;
});


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
