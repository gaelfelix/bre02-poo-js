import { Pizza } from './pizza.js';

document.addEventListener("DOMContentLoaded", function(){

    let pizzaVeggie = new Pizza("La Veggie", "Tomate", "Fromage","Légumes");
    
    let pizzaMeattie = new Pizza("La Meattie", "Tomate", "Fromage","Viande");
    
    let pizzaFishie = new Pizza("La Fishie", "Tomate", "Fromage","Poisson");

console.log(pizzaVeggie);
console.log(pizzaMeattie);
console.log(pizzaFishie);

});