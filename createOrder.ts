// given recipes, calculate amount of ingredients required

import { iIngredients, iRecipes } from "./constants";
import { recipes } from "./recipes";

const reduceIngredients = function reduceIngredients(recipes: iRecipes): iIngredients {
    const ingredientsToOrder: iIngredients = {}
    Object.keys(recipes).forEach(r => {
        Object.keys(recipes[r]).forEach(i => {
            if (ingredientsToOrder.hasOwnProperty(i)) {
                ingredientsToOrder[i].quantity += recipes[r][i].quantity;
            }
            else {
                ingredientsToOrder[i] = {
                    quantity: recipes[r][i].quantity,
                    unit: recipes[r][i].unit,
                }
            }
        })
    })
    return ingredientsToOrder;
}

console.log(reduceIngredients(recipes))