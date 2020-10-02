import {useContext, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useRouter} from 'next/router';

import {UpdateLiked, UpdateSaved, GetData, verify} from '../firebase/client'
import {getDrinkId} from '../redux/actions/drinkId';
import {RESET_ACTION} from '../redux/actions/drinks';
import UserContext from '../context/user'

//Components
import Nav from '../components/global/Navbar';
import Header from '../components/global/header';
import DrinkCard from '../components/drinkDetail/drinkCard';

export default function DrinkDetails(){
	const router = useRouter();
	const {id} = router.query;

	const dispatch = useDispatch();
	const drink = useSelector(store=> store.DrinkIdReducer.drinks)
	
	const {user} = useContext(UserContext);

	if(user == "Nada") verify();

	useEffect(()=>{
		if(id !== undefined) dispatch(getDrinkId(id));
		return function cleanup(){
			dispatch(RESET_ACTION());
		}
	},[id])
	return(
		
		<main>
			<div className="phone">
				<Header page={"detail"}/>
				{drink.length > 0 && <DrinkCard drink={drink[0]}/>}
				<div className="navbar">
					<Nav active={"detail"}/>
				</div>
			</div>
			
		</main>
	)

}