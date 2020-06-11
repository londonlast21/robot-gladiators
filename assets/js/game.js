// game state
// win - player robot has defeated all enemy robots
// *fight all enemy robots
// * defeat each enemy robot
// lose - player robot's health is zero or less


//console.log(playerInfo.name, playerInfo.attack, playerInfo.health);
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
//
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};


var fight = function(enemy) {
    

    while(enemy.health > 0 && playerInfo.health > 0) {
        //ask user if they'd like to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");

        //if user picks 'skip' confirm and then exit
        if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            //subtract money from playerInfo.money for skipping
            playerInfo.money = playerInfo.money - 10;
            console.log("playerInfo.money", playerInfo.money);
         break;
        }
    }


if (promptFight === "fight" || promptFight === "FIGHT") {
    //generate random damage value based on pl attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    
    enemy.health = Math.max(0, enemy.health - damage);

    console.log(
    playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemyHealth + " health remaining."
    );

    //check enemy's health
    if (enemy.health <= 0) {
    window.alert(enemy.name + " has died!");

    //award player money for winning
    playerInfo.money = playerInfo.money + 20;

    //leave while() loop since enemy is dead
    break;

  } else {
    window.alert(enemy.name + " still has " + enemy.health + " health left.");
  }

    //subtract the value of 'enemyAttack' from the value of 'playerInfo.health' and use that result to update the value in the 'playerInfo.health' variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );

    //check player's health
    if (playerInfo.health <= 0) {
    window.alert(playerInfo.name + " You lost your robot in battle! Game Over!");
    //leave while() loop if player is dead
    break;
    } else {
    window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
  
    
} else {
    window.alert("You need to pick a valid option. Try again!");
}
    }

}


var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function () {
        if (this.money >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
    }
    else {
        window.alert("You don't have enough money!");
    }

}

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

//function to start a new game
var startGame = function () {
    //reset player stats
    playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            //lets user know what round they are in, remember that arrays start at 0
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1) );
        
            //pick new enemy to fight based on the index of the enemyName array
            var pickedEnemyObj = enemyInfo[i];

            //reset enemyHealth before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);

            //pass the pickedEnemyName variables value into the fight function
            fight(pickedEnemyObj);

            if (playerInfo.health > 0 && i < enemyNames.length - 1) {
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + " .");
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
          if (playerInfo.money >= 7) {
             window.alert("Refilling player's health by 20 for $7.");

             //increase health and decrease money
             playerInfo.health = playerInfo.health + 20;
             playerInfo.money = playerInfo.money - 7;
          }
          else {
              window.alert("You don't have enough money!");
          }

             break;

        case "upgrade":
          if (playerInfo.money >= 7) {
            window.alert("Upgrading player's attack by 6 for $7.");

            //increase playerInfo.attack and decrease money
            playerInfo.attack = playerInfo.attack + 6;
            playerInfo.money = playerInfo.money - 7;
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


//start the game when the page loads
startGame();