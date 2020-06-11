// game state
// win - player robot has defeated all enemy robots
// *fight all enemy robots
// * defeat each enemy robot
// lose - player robot's health is zero or less


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//console.log(playerName, playerAttack, playerHealth);
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;



var fight = function(enemyName) {
    while(enemyHealth > 0 && playerHealth > 0) {
        //ask user if they'd like to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");

        //if user picks 'skip' confirm and then exit
        if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
         break;
        }
    }


if (promptFight === "fight" || promptFight === "FIGHT") {
    //generate random damage value based on pl attack power
    var damage = randomNumber(playerAttack - 3, playerAttack);
    
    enemyHealth = Math.max(0, enemyHealth - damage);

    console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    //check enemy's health
    if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");

    //award player money for winning
    playerMoney = playerMoney + 20;

    //leave while() loop since enemy is dead
    break;

  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

    //subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
    var damage = randomNumber(enemyAttack - 3, enemyAttack);

    playerHealth = Math.max(0, playerHealth - damage);
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    //check player's health
    if (playerHealth <= 0) {
    window.alert(playerName + " You lost your robot in battle! Game Over!");
    //leave while() loop if player is dead
    break;
    } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  
    
} else {
    window.alert("You need to pick a valid option. Try again!");
}
    }

}


//function to start a new game
var startGame = function () {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            //lets user know what round they are in, remember that arrays start at 0
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1) );
        
            //pick new enemy to fight based on the index of the enemyName array
            var pickedEnemyName = enemyNames[i];

            //reset enemyHealth before starting new fight
            enemyHealth = randomNumber(40, 60);

            //pass the pickedEnemyName variables value into the fight function
            fight(pickedEnemyName);

            if (playerHealth > 0 && i < enemyNames.length - 1) {
                //ask if user wants to shop
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                
                //if yes
                if (storeConfirm) {
                    shop();
                }
            }
        }
    }
    //after loop ends, player is either out of health or enemies so run endgame
    endGame();
    //play again
    startGame();
};
//function to end the entire game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + " .");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}
 var shop = function() {
     //ask the player what they'd like to do
     var shopOptionPrompt = window.prompt(
     "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
     );
     //use switch to carry out prompt
     switch (shopOptionPrompt) {
        case "refill":
          if (playerMoney >= 7) {
             window.alert("Refilling player's health by 20 for $7.");

             //increase health and decrease money
             playerHealth = playerHealth + 20;
             playerMoney = playerMoney - 7;
          }
          else {
              window.alert("You don't have enough money!");
          }

             break;

        case "upgrade":
          if (playerMoney >= 7) {
            window.alert("Upgrading player's attack by 6 for $7.");

            //increase playerAttack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
          }
          else {
              window.alert("You don't have enough")
          }
            break;
        case "leave":
            window.alert("Leaving the store.");

            //do nothing, so function ends
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            //call shop() again to force player to pick valid option
            shop();
            break;
        
        
    
     }
        
 }
//function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};


//start the game when the page loads
startGame();