export const OBTENER_FIRST_LETTER = "first letter";

export const drinksFirstLetter = ()=> async (dispatch, getState)=>{
	const getDrinks = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
		.then(res=> res.json())
		.then(response =>{
			return response.drinks;
		})
	dispatch({
		type: OBTENER_FIRST_LETTER,
		payload: getDrinks 
	})
}


export const OBTENER_POR_FILTRO = 'obtener por filtros'

export const drinksFilter = (type, search)=> async (dispatch, getState)=>{
	const getDrinks = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${type}=${search}`)
		.then(res=> res.json())
		.then(response =>{
			return response.drinks;
		})
	dispatch({
		type: OBTENER_POR_FILTRO,
		payload: getDrinks
	})
}
//ingredient
// https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka

//Alcoholic
//https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic

//Category
//https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink

// Glass
//https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass