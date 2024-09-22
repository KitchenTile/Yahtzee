class Dice{
    constructor() {
        // this.value = this.roll();
        this.selected = false;
        this.selectedValue = 0; 
    }

    roll() {
        const roll = Math.floor(Math.random() * 6) + 1;
        // console.log(roll);
        return roll;
    }
}

export default Dice;