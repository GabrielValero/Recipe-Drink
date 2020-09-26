import {OBTENER_FIRST_LETTER, OBTENER_POR_FILTRO} from '../actions/drinks';

export const initialState = {
	array: []
}

export default function FirstLetterReducer(state = initialState, {type, payload}){
	switch(type){
		case OBTENER_FIRST_LETTER:
			return {...state, array: payload}
		case OBTENER_POR_FILTRO:
			return {...state, array: payload}
		default:
			return state
	}
}