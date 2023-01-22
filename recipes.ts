import { iCookingUnit, iRecipes } from './constants.ts'

export const recipes: iRecipes = {
	// me
	spaghetti: {
		'spaghetti noodles': { quantity: 16, unit: iCookingUnit.oz },
		'pasta sauce': { quantity: 24, unit: iCookingUnit.oz },
		'Hillshire Farm Smoked Sausage': { quantity: 14, unit: iCookingUnit.oz },
	},
	// https://www.themealdb.com/api/json/v1/1/random.php
	'Salmon Avocado Salad': {
		Salmon: { quantity: 400, unit: iCookingUnit.g },
		Avocado: { quantity: 3, unit: iCookingUnit.unit },
		Cucumber: { quantity: 1, unit: iCookingUnit.unit },
		Spinach: { quantity: 400, unit: iCookingUnit.g },
		Mint: { quantity: 4, unit: iCookingUnit.tbsp },
		Lime: { quantity: 1, unit: iCookingUnit.unit }, // zest and juice of
		Honey: { quantity: 2, unit: iCookingUnit.tsp },
		'Olive Oil': { quantity: 3, unit: iCookingUnit.tbsp },
	},
	'Brie wrapped in prosciutto & brioche': {
		'Plain Flour': { quantity: 375, unit: iCookingUnit.g },
		'Caster Sugar': { quantity: 50, unit: iCookingUnit.g },
		Yeast: { quantity: 7, unit: iCookingUnit.g },
		Milk: { quantity: 75, unit: iCookingUnit.g },
		Eggs: { quantity: 3, unit: iCookingUnit.unit }, // Large
		Butter: { quantity: 180, unit: iCookingUnit.g },
		Brie: { quantity: 250, unit: iCookingUnit.g },
		Prosciutto: { quantity: 8, unit: iCookingUnit.unit }, // slices
	},
	'Chickpea Fajitas': {
		Chickpeas: { quantity: 400, unit: iCookingUnit.g },
		'Olive Oil': { quantity: 1, unit: iCookingUnit.unit }, // tblsp
		Paprika: { quantity: 0, unit: iCookingUnit.unit }, // pinch
		Tomatoes: { quantity: 2, unit: iCookingUnit.unit }, // small cut chunks
		'Red Onions': { quantity: 1, unit: iCookingUnit.unit }, // finely sliced
		'Red Wine Vinegar': { quantity: 2, unit: iCookingUnit.tsp },
		Avocado: { quantity: 1, unit: iCookingUnit.unit },
		Lime: { quantity: 1, unit: iCookingUnit.unit }, // Juice of
		'Sour Cream': { quantity: NaN, unit: iCookingUnit.unit },
		'Harissa Spice': { quantity: 400, unit: iCookingUnit.g },
		'Corn Tortillas': { quantity: 1, unit: iCookingUnit.unit }, // tblsp
		Coriander: { quantity: 0, unit: iCookingUnit.unit }, // pinch
	},
	Wontons: {
		Pork: { quantity: 1, unit: iCookingUnit.unit }, // lb
		'Garlic Clove': { quantity: 3, unit: iCookingUnit.unit }, // chopped
		Ginger: { quantity: 1, unit: iCookingUnit.tsp },
		'Soy Sauce': { quantity: 1, unit: iCookingUnit.tbsp },
		'Sesame Seed Oil': { quantity: 1, unit: iCookingUnit.tsp },
		Carrots: { quantity: 3, unit: iCookingUnit.unit }, // finely chopped
		Celery: { quantity: 3, unit: iCookingUnit.unit }, // finely chopped
		'Spring Onions': { quantity: 6, unit: iCookingUnit.unit }, // chopped
		'Wonton Skin': { quantity: 1, unit: iCookingUnit.unit }, // Packet
		Oil: { quantity: NaN, unit: iCookingUnit.unit },
		Water: { quantity: 1, unit: iCookingUnit.unit }, // lb
	},
	'Boulangère Potatoes': {
		Onions: { quantity: 2, unit: iCookingUnit.unit }, // finely chopped
		Thyme: { quantity: 0, unit: iCookingUnit.unit }, // sprigs of fresh
		'Olive Oil': { quantity: 2, unit: iCookingUnit.tbsp },
		Potatoes: { quantity: NaN, unit: iCookingUnit.unit }, // kg
		'Vegetable Stock': { quantity: 425, unit: iCookingUnit.g },
	},
	'Three-cheese souffles': {
		Butter: { quantity: 50, unit: iCookingUnit.g },
		Parmesan: { quantity: 25, unit: iCookingUnit.g },
		Milk: { quantity: 300, unit: iCookingUnit.unit }, // ml
		'Bay Leaves': { quantity: 2, unit: iCookingUnit.unit },
		'Plain Flour': { quantity: 5, unit: iCookingUnit.tbsp },
		'English Mustard': { quantity: 0, unit: iCookingUnit.tsp },
		'Cayenne Pepper': { quantity: 0, unit: iCookingUnit.unit }, // Pod of
		Gruyère: { quantity: 140, unit: iCookingUnit.g },
		Eggs: { quantity: 3, unit: iCookingUnit.unit },
		'Goats Cheese': { quantity: NaN, unit: iCookingUnit.unit },
		'Double Cream': { quantity: 50, unit: iCookingUnit.g },
		Spinach: { quantity: 25, unit: iCookingUnit.g },
	},
	'Hot and Sour Soup': {
		Mushrooms: { quantity: NaN, unit: iCookingUnit.cup },
		'Wood Ear Mushrooms': { quantity: NaN, unit: iCookingUnit.cup },
		Tofu: { quantity: NaN, unit: iCookingUnit.unit }, // Cup
		Pork: { quantity: NaN, unit: iCookingUnit.cup },
		'Chicken Stock': { quantity: NaN, unit: iCookingUnit.unit }, // cups
		Salt: { quantity: NaN, unit: iCookingUnit.tsp },
		Sugar: { quantity: NaN, unit: iCookingUnit.tsp },
		'Sesame Seed Oil': { quantity: 1, unit: iCookingUnit.tsp },
		Pepper: { quantity: NaN, unit: iCookingUnit.tsp },
		Hotsauce: { quantity: NaN, unit: iCookingUnit.unit },
		Vinegar: { quantity: NaN, unit: iCookingUnit.cup },
		'Soy Sauce': { quantity: NaN, unit: iCookingUnit.cup },
		Cornstarch: { quantity: NaN, unit: iCookingUnit.unit }, // Cup
		Water: { quantity: NaN, unit: iCookingUnit.cup },
		'Spring Onions': { quantity: NaN, unit: iCookingUnit.unit }, // cups
	},
	'Stuffed Lamb Tomatoes': {
		Tomatoes: { quantity: 4, unit: iCookingUnit.unit }, // large
		Sugar: { quantity: 0, unit: iCookingUnit.unit }, // Pinch
		'Olive Oil': { quantity: 4, unit: iCookingUnit.tbsp },
		Onion: { quantity: 1, unit: iCookingUnit.unit }, // chopped
		'Garlic Clove': { quantity: 2, unit: iCookingUnit.unit }, // finely chopped
		Lamb: { quantity: 200, unit: iCookingUnit.g },
		Cinnamon: { quantity: 1, unit: iCookingUnit.tbsp },
		'Tomato Puree': { quantity: 2, unit: iCookingUnit.unit }, // tbs chopped
		Rice: { quantity: 50, unit: iCookingUnit.g },
		'Chicken Stock': { quantity: NaN, unit: iCookingUnit.unit },
		Dill: { quantity: 4, unit: iCookingUnit.unit }, // large
		'Chopped Parsley': { quantity: 0, unit: iCookingUnit.unit }, // Pinch
		Mint: { quantity: 4, unit: iCookingUnit.tbsp },
	},
}
