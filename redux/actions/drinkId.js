export const GET_ID = "get drink by id"

export const getDrinkId = (id)=> async (dispatch)=>{
	const getDrinks = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
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
		type: GET_ID,
		payload: getDrinks
	})
}