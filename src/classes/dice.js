class dice{
    constructor() {
        this.value = this.roll();
    }

    roll() {
        return Math.floor(Math.random() * 6) + 1;
    }
}