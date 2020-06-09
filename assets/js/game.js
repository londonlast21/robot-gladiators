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
    window.alert(playerName + " has died!");
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

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}

//fight();
