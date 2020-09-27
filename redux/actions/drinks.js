export const OBTENER_INGREDIENTE = "first letter";

export const drinksIngrediente = (name)=> async (dispatch, getState)=>{
	const getDrinks = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`)
		.then(res=> {
			
			return res.json()
		})
		.then(response =>{
			return response.drinks
		})
		.catch(err=> {
			console.log(err);
			return {error: "Hubo un error"};
		});
	dispatch({
		type: OBTENER_INGREDIENTE,
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

export const RESET_ACTION = ()=> async (dispatch, getState)=>{
  dispatch({
		type: "RESET"
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