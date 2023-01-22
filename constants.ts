export type iRecipes = Record<string, iIngredients>

export type iIngredients = Record<string, iQuantity>

export type iQuantity = { quantity: number; unit: iCookingUnit }

export enum iCookingUnit {
	cup = 'cup',
	oz = 'oz',
	tbsp = 'tbsp',
	tsp = 'tsp',
	gallon = 'gallon',
	lbs = 'lbs',
	g = 'g',
	unit = 'unit',
}

export enum iTimeUnit {
	second = 'second',
	minute = 'minute',
	hour = 'hour',
	day = 'day',
	week = 'week',
	month = 'month',
	year = 'year',
}

export type iIngredient = {
	name: string
	price: number
	url: string
	quantity: iQuantity
	// shelfLife?: Record<number, timeUnit>
	// category?: ingredientCategories
	// caloriesPerUnit?: number
}
