//Component

import TypeDrinks from '../components/main/typeDrinks';
import Nav from '../components/global/Navbar';
import Header from '../components/global/header';



export default function Home(){

	
	return (
		<main>
			<div className="phone">
				<Header page={"home"}/>
				
				<TypeDrinks/>
				<div className="navbar">
					<Nav active={"home"}/>
				</div>
			</div>

			
		</main>
	)
}