class Player{
    constructor(name) {
        this.player = name;
        this.score = 0;
        this.diceRollCount = 0;
    }

    rollDice(dice) {
        let diceValues = [];
        if (this.diceRollCount <= 2) {
            diceValues = dice.map(dice => {
                return dice.roll();
            })
            this.diceRollCount++;
            console.log(this.diceRollCount)
        } else {
            console.log("Turn Finished")
        }

        console.log(diceValues);

        return diceValues;
    }
}

export default Player;