import { Pizza } from './pizza.js';

document.addEventListener("DOMContentLoaded", function(){

    let pizzaVeggie = new Pizza("La Veggie", "Tomate", "Fromage","Légumes");
    
    let pizzaMeattie = new Pizza("La Meattie", "Tomate", "Fromage","Viande");
    
    let pizzaFishie = new Pizza("La Fishie", "Tomate", "Fromage","Poisson");

console.log(pizzaVeggie.name, pizzaVeggie.ingredient1, pizzaVeggie.ingredient2, pizzaVeggie.ingredient3);
console.log(pizzaMeattie.name, pizzaMeattie.ingredient1, pizzaMeattie.ingredient2, pizzaMeattie.ingredient3);
console.log(pizzaFishie.name, pizzaFishie.ingredient1, pizzaFishie.ingredient2, pizzaFishie.ingredient3);

});