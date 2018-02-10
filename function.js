
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
