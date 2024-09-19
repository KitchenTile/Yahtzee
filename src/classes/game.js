import Dice from "./dice";

class Game {
    constructor(player1, player2) {
        this.players = [player1, player2];
        this.dice = [new Dice(), new Dice(), new Dice(), new Dice(), new Dice()];
        this.playersTurn = 0;
    }

    startTurn() {
        const currenetPlayer = this.players[this.playersTurn];
        return currenetPlayer.rollDice(this.dice);
    };

    endTurn() {
        if (this.playersTurn === 0) {
            this.playersTurn++;
        } else {
            this.playersTurn = 0;
        }
    }
}

export default Game;