<<<<<<< HEAD

class Computer {
  constructor(name, health){
    this.name = name;
    this.health = health;
  }
  generateAttackDamage(){
    getRandomInt(5, 1);
  }
}

class Character extends Computer {
  constructor(name, health, healsRemaining, wins){
    super(name, health);
    this.name = name;
    this.health = health;
    this.healsRemaining = healsRemaining;
    this.wins = 0;
  }
  generateAttackDamage(){
    getRandomInt(3, 1);
  }
}  

var startButton = document.getElementById('startButton');
var attackButton = document.getElementById('attackButton');
var healButton = document.getElementById('healButton');
var quitButton = document.getElementById('quitButton');

startButton.addEventListener('click', function(){
  this.setAttribute('class', 'hidden');
  attackButton.setAttribute('class', '');
  healButton.setAttribute('class', '');
  quitButton.setAttribute('class', '');
});


attackButton.addEventListener('click', function(){
  user.health -= grant.generateAttackDamage();
  grant.health -= user.generateAttackDamage();
});

healButton.addEventListener('click', function(){
  var heal = Math.floor((Math.random() * 10) + 1);
  user.health += heal;
  this.healsRemaining--;
  console.log(this.healsRemaining);
});


function playGame(){
 
          
      
}

btn.addEventListener('click', function(){
  playGame();
});
=======
var enemyName = "JavaScript Asshole Monster";
    var userHealth = 40;
    var enemyHealth = 10;
    var wins = 0;
  
  function startGame(){
      var r = confirm("Would You Like to Play?");
    if (r === true) {
        var userName = prompt("What is Your Username?");
        startCombat();
   
  
  function startCombat(){
    while (userHealth > 0 && wins < 3){
      console.log(userName + ' has ' + userHealth + ' health left.');
      console.log(enemyName + ' has ' + enemyHealth + ' health left.');
      getDamage(userHealth);
      getDamage(enemyHealth);
      enemyHealth -= Math.floor((Math.random() * 2) + 1);
      if(userHealth <= 0){
        console.log("GAME OVER");
        break;
      } else if(enemyHealth <= 0){
        wins++; 
        enemyHealth = 10; 
        console.log("WIN!", wins);
      } else if(wins === 3){
         console.log('You have defeated ' + enemyName + '!');
         break;
      }
    }
  }
  
  function getDamage(playerHealth){
    var playerDamage = playerHealth -= Math.floor((Math.random() * 5) + 1);
    return playerDamage;
  }
  
 } else {
        console.log("See Ya!");
    }
  }startGame();
>>>>>>> 6adbb0d1bfe2b29a0d15e58369aa9fbbb50e0bad
