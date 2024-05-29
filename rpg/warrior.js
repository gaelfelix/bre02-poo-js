import { Character } from './character.js';

class Warrior extends Character {
    
    strenght;
    
    constructor(name, healthPoints, strenght) {
        super(name, healthPoints);
        this.strenght = strenght;
    }
    
    get strenght () {
        return this.strenght;
    }

    set strenght (strenght) {
        this.strenght = strenght;
    }
    
}

export { Warrior };