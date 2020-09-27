//Component
import {drinksIngrediente, RESET_ACTION} from '../redux/actions/drinks';
import TypeDrinks from '../components/main/typeDrinks';
import Nav from '../components/global/Navbar';
import Header from '../components/global/header';
import Card from '../components/global/card';
import {useDispatch, useSelector} from 'react-redux'

import {useState, useEffect} from 'react';

export default function Home(){

	const dispatch = useDispatch();

	const getdrinks = useSelector(store=> store.FirstLetterReducer.array);

	const [drinks, setDrinks] = useState([]);
	const [error, setError] = useState('No error');

	useEffect(()=>{
		dispatch(RESET_ACTION());
	}, [])

	useEffect(()=>{
		let mounted = true;

		if(getdrinks.error) setError("Hubo un error");
		else if(mounted) {
			setDrinks(getdrinks);
			setError("No error")
		}
		return ()=>{
			mounted = false;
		}
	}, [getdrinks])

	return (
		<main>
			<div className="phone">
				<Header page={"search"}/>
				
				<div className="badges">
					<span onClick={()=>{dispatch(drinksIngrediente("Vodka"))}}>Vodka</span>
					<span onClick={()=>{dispatch(drinksIngrediente("whisky"))}}>Whisky</span>
					<span onClick={()=>{dispatch(drinksIngrediente("Applejack"))}}>Applejack</span>
					<span onClick={()=>{dispatch(drinksIngrediente("Gin"))}}>Gin</span>
					<span onClick={()=>{dispatch(drinksIngrediente("Dark_rum"))}}>Dark rum</span>
					<span onClick={()=>{dispatch(drinksIngrediente("Sweet_Vermouth"))}}>Sweet Vermouth</span>
					<span onClick={()=>{dispatch(drinksIngrediente("Scotch"))}}>Scotch</span>
				</div>

				<section>
					{error != "No error" ? <h2>Ingrese un ingrediente válido</h2> : drinks.map(drink=>(
						<Card drink={drink} key={drink.idDrink}/>
					))}
				</section>
				<div className="images">
					<img src="/Images/animalitoDrinks.svg" alt="Svg imagen" width="40%"/>
					<h2>No Hay Mas Bebidas</h2>
				</div>
				<div className="navbar">
					<Nav active={"search"}/>
				</div>
			</div>

			<style jsx>{`
				.navbar{
					position: fixed;
					bottom: 0;
				}
				.badges{
					margin: 5px 20px;
					display: flex;
					
					align-items: center;
					flex-wrap: wrap;
				}
				span{
					margin: 5px;
					padding: 5px 20px;
					border-radius: 10px;
					background: #200A4A;
					color: #E4E4E4;
					font-weight: bold;
					font-size: 13px;
					cursor: pointer;
				}
				section{
					margin: 20px;
				}
				.images{
					margin-top: 50px;
					margin-bottom: 100px;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
				}
				h2{
					color: #D7D7D7;
				}
				@media(max-width: 500px){
					main{
						min-height: 100vh;
					}
					main>div{
						position: relative;
						background: #2A0E58;
						width: 100%;
						min-height: 100vh;
					}
				}

				@media(min-width: 500px){
					main{
						display: flex;
						justify-content: center;
						align-items: center;
						height: 100vh;
						position: relative;
						
					}
					.phone{
						border-radius: 10px;
						display: block;
						position: relative;
						width: 400px;
						max-height: 90vh;
						min-height: 550px;
						overflow-Y: auto;
						overflow-X: hidden;
						background: #2A0E58;
					}
					.phone::-webkit-scrollbar{
						background: rgba(85,85,85,0.1);
						border-radius: 10px;
						width: 10px;
					}
					.phone::-webkit-scrollbar-thumb{
					  	background: #4B1A9C;
					  	border-radius: 10px;
					}
				}
			`}</style>
			<style jsx global>{`
				body{
					height: 100vh;
					padding: 0;
					margin: 0;
				}

			`}</style>
		</main>
	)
}