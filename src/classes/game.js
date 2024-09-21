import Dice from "./dice";

class Game {
    constructor(player1, player2) {
        this.players = [player1, player2];
        this.dice = [new Dice(), new Dice(), new Dice(), new Dice(), new Dice()];
        this.playersTurn = 0;
    }

    startTurn() {
        return this.players[this.playersTurn].rollDice(this.dice);
    };

    endTurn() {
        this.players[this.playersTurn].diceRollCount = 0;
        console.log("dice roll reset");
        if (this.playersTurn === 0) {
            this.playersTurn++;
            console.log("current player: " + this.players[this.playersTurn].name);
            console.log(this.playersTurn);

        } else {
            this.playersTurn--;
            console.log("current player: " + this.players[this.playersTurn].name);
            console.log(this.playersTurn);
        }
    }
}

export default Game;