"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Recipe = /** @class */ (function () {
    function Recipe(name,calories,ingredients,time) {
       this.name = name;
       this.calories = calories;
       this.ingredients = ingredients;
       this.time = time;
        
    }
    Recipe.prototype.toForm = function () {
        return "name=" + this.name + "&calories=" + this.calories + "&ingredients=" + this.ingredients + "&time=" + this.time;
    };
    return Recipe;
}());
exports.Recipe = Recipe;
