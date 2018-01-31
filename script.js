
var answer = prompt("Do You Want to Play?");{
       if(answer.toLowerCase() === "yes"){
        var userName = prompt("What is Your Username?");
       }
    }   
    var enemyName = "JavaScript Asshole Monster";
    var userHealth = 40;
    var enemyHealth = 10;
    var wins = 0;

    
    while (userHealth > 0 && wins < 3){
      console.log(userName + ' has ' + userHealth + ' health left.');
      console.log(enemyName + ' has ' + enemyHealth + ' health left.');
      userHealth -= Math.floor((Math.random() * 2) + 1);
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
   