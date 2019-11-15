/*
 * John McCarthy
 * Javascript Game Lab 2
 */

"use strict";

/**
 * Returns a random number 1-10 inclusively
 */
const randomDamage = _ => { return Math.floor(Math.random() * 10 + 1); }

/**
 * Randomly chooses one of two given options
 * 
 * @param {*} opt1 First of two options to randomly choose
 * @param {*} opt2 Second of two options to randomly choose
 */
const chooseOption = (opt1, opt2) => {
    let randNum = Math.round(Math.random());
    return (randNum === 0 ? opt1 : opt2);
}

/**
 * Decreases the given health by a random amount
 * @see randomDamage
 * 
 * @param {Number} health Player's remaining health
 */
const attackPlayer = function(health) {
    return health -= randomDamage();
}

/**
 * Logs the given player and their remaining health
 * 
 * @param {String} player The name of the player
 * @param {Number} health Player's remaining health
 */
const logHealth = (player, health) => console.log(`${player} health: ${health}`);

/**
 * Logs the winner and loser
 * 
 * @param {String} winner The player whose healths is still > 0
 * @param {String} loser The player whose health is < 0
 */
const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);

/**
 * Tests to see if the given number is > 0
 * 
 * @param {Number} health Number to test to see if it's above 0
 */
const isDead = (health) => { return (health <= 0); }

/**
 * Runs simulated attacks until one player's health reaches 0
 * 
 * @param {String} player1 Name of the first player
 * @param {String} player2 Name of the second player
 * @param {Number} player1Health Health of first player
 * @param {Number} player2Health Health of second player
 */
function fight(player1, player2, player1Health, player2Health) {
    while (true) {
        let attacker = chooseOption(player1, player2);
        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if (isDead(player2Health)) {
                logDeath(player1, player2);
                break;
            }
        } else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            if (isDead(player1Health)) {
                logDeath(player2, player1);
                break;
            }
        }
    }
}