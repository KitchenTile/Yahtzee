class player{
    constructor(name) {
        this.player1 = name;
        this.score = 0;
        this.diceRollCount = 0;
    }

    rollDice(dice) {
        if (this.diceRollCount <= 3) {
            dice.map(dice => {
                dice.roll();
            })
            this.diceRollCount++;
        };
    }
}