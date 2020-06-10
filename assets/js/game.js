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
//subtract the value of 'playerAttack' from the value of 'enemyHealth'
    enemyHealth = enemyHealth - playerAttack;
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
    playerHealth = playerHealth - enemyAttack;
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
            enemyHealth = 50;

            //pass the pickedEnemyName variables value into the fight function
            fight(pickedEnemyName);
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
 
//start the game when the page loads
startGame();