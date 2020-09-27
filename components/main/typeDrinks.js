import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {drinksFilter, RESET_ACTION} from '../../redux/actions/drinks';
import Card from '../global/card';

export default function TypeDrink(){
	const [drinks, setDrinks] = useState([])
	const [type, setType] = useState('Optional_alcohol')

	const dispatch = useDispatch();
	const getDrinks = useSelector(store => store.FirstLetterReducer.array)
	
	const handleOnClick = (filter)=>{
		setType(filter); 
		dispatch(drinksFilter("a",filter));
	}
	if(drinks.length == 0){
		dispatch(drinksFilter("a","Optional_alcohol"));
	}
	useEffect(()=>{
		let mounted = true;
		mounted && setDrinks(getDrinks);

		return ()=>{
			mounted = false;
		}
	}, [getDrinks])
	return(
		<div className="container">
			<div className="types">
				<div>
					<p className="option Alcoholic" onClick={()=>handleOnClick("Alcoholic")}>Alcoholica</p>
					<p className="option Optional_alcohol" onClick={()=>handleOnClick("Optional_alcohol")}>Opcional</p>
					<p className="option Non_alcoholic" onClick={()=>handleOnClick("Non_alcoholic")}>No Alcohol</p>
				</div>
			</div>
			<div className="drinks">
				{drinks.map(drink=>(
					<Card drink={drink} key={drink.idDrink}/>
				))}
			</div>
			<style jsx>{`
				.drinks{
					width: 100%;
					display: flex;
					margin-top: 30px;
					align-items: center;
					flex-direction: column;
				}
				.types{
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.types>div{
					width: 80%;
					height: 50px;
					margin-top: 30px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					background: #200A4A;
					border-radius: 10px;
				}
				.option{
					width: 33%;
					height: 100%;
					border-radius: 10px;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #8F8F8F;
					font-size: 14px;
					font-weight: bold;
					font-align: justify;
					cursor: pointer;
					position: relative;
					z-index: 30;
				}
				.${type}{
					background: linear-gradient(90deg, #DA22FF 0%, #9733EE 100%);
					color: white;
				}
				
			`}</style>
		</div>
	)
}