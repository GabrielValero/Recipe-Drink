//Component

import TypeDrinks from '../components/main/typeDrinks';
import Nav from '../components/global/Navbar';
import Header from '../components/global/header';



export default function Home(){

	
	return (
		<main>
			<div className="phone">
				<Header/>
				
				<TypeDrinks/>
				<div className="navbar">
					<Nav active={"home"}/>
				</div>
			</div>

			<style jsx>{`
				.navbar{
					position: fixed;
					bottom: 0;
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
						min-height: 500px;
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