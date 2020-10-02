import {GET_ID} from '../actions/drinkId';

export const initialState = {
	drinks: []
}

export default function DrinkIdReducer(state = initialState, {type, payload}){
	switch(type){
		case GET_ID:
			return {...state, drinks: payload}
		case "RESET":
			return initialState
		default:
			return state
	}
}