// given recipes, calculate amount of ingredients required

import { iIngredients, iRecipes } from "./constants";
import { recipes } from "./recipes";

const reduceIngredients = function reduceIngredients(recipes: iRecipes): iIngredients {
    const ingredientsToOrder: iIngredients = {}
    Object.keys(recipes).forEach(r => {
        Object.keys(recipes[r]).forEach(i => {
            if (ingredientsToOrder.hasOwnProperty(i)) {
                ingredientsToOrder[i].quantity += recipes[r][i].quantity;
                // TODO: check for same unit
            }
            else {
                ingredientsToOrder[i] =recipes[r][i]; 
            }
        })
    })
    return ingredientsToOrder;
}

export default reduceIngredients;