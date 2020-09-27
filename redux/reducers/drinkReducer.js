import {OBTENER_INGREDIENTE, OBTENER_POR_FILTRO} from '../actions/drinks';

export const initialState = {
	array: []
}



export default function FirstLetterReducer(state = initialState, {type, payload}){
	switch(type){
		case OBTENER_INGREDIENTE:
			return {...state, array: payload}
		case OBTENER_POR_FILTRO:
			return {...state, array: payload}
		case "RESET":
			return initialState
		default:
			return state
	}
}