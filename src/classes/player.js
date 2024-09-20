class Player{
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.diceRollCount = 0;
    }

    rollDice(dice) {
        let diceValues = ["", "","", "", ""];
        if (this.diceRollCount < 3) {
            diceValues = dice.map(dice => {
                return dice.roll();
            })
            this.diceRollCount++;
            console.log(`Rolls left: ${3 - this.diceRollCount}`)
        }

        console.log(diceValues);

        return diceValues;
    }
}

export default Player;