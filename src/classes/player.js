class Player{
    constructor(name) {
        this.name = name;
        this.diceRollCount = 0;
        this.scores = [
            {key: "Aces: ", value: 0},
            {key: "Twos: ",value: 0},
            {key: "Threes: ", value: 0},
            {key: "Fours: ", value: 0},
            {key: "Fives: ", value: 0},
            {key: "Sixes: ", value: 0},
            {key: "Yahtzee: ", value: 0},
            {key: "Full House: ", value: 0},
            {key: "Three Of A Kind: ", value: 0},
            {key: "Four Of A Kind: ", value: 0},
            {key: "Straight: ", value: 0},
        ]
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