import { Warrior } from './warrior.js';
import { Mage } from './mage.js';

document.addEventListener("DOMContentLoaded", function(){

    let warrior = new Warrior("Mélenchong", 60, 10);
    let mage = new Mage("Macrong", 50, 50);
    
    console.log(warrior);
    console.log(mage);

});