import { iCookingUnit } from './constants.ts'

const jsonResponse = await fetch(
	'https://www.themealdb.com/api/json/v1/1/random.php'
)
const meal = await jsonResponse.json()

const { strMeal: name, ...otherData } = meal.meals[0]

console.log(`'${name}': {`)
for (const [key, val] of Object.entries(otherData)) {
	if (key.startsWith('strIngredient') && val) {
		const ingredient = val
		const measurementKey = `strMeasure${key.slice(-1)}`
		const quantity = otherData[measurementKey as keyof typeof otherData]
		const quantityNumber = Number(quantity?.match(/\d+/g))
		let unit = quantity?.match(/[a-zA-Z]+/g)?.join(' ') || 'unit'

		unit = unit === 'tbs' ? 'tbsp' : unit

		const match = unit in iCookingUnit

		const finalUnit = match ? unit : 'unit'

		console.log(
			`\t'${ingredient}': {quantity:${quantityNumber}, unit: iCookingUnit.${finalUnit}}, ${
				!match ? `// ${unit}` : ''
			}`
		)
	}
}
console.log('}')
