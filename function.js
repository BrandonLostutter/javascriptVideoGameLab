
      var enemyName = "JavaScript Monster";
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
        userHealth = getDamage(userHealth);
        enemyHealth = getDamage(enemyHealth);
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
    
    // function getDamage(playerHealth){
    //   var playerDamage = playerHealth -= Math.floor((Math.random() * 5) + 1);
    //   return playerDamage
    // }
    
     function getDamage(playerHealth){
        var attack = Math.floor((Math.random() * 5) + 1);
        return playerHealth -= attack;
     }
    
   } else {
          console.log("See Ya!");
      }
 
  }startGame();
  
  
 
    
      // var attack = Math.floor((Math.random() * 5) + 1);
      // return (playerHealth -= attack)