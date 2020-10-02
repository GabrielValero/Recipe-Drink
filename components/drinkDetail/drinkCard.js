

import Button from './button';

export default function DrinkCard({drink}){
	return(
		<div>
			<div className="head">
				<div className="img">
					<div>
						<img src={drink.strDrinkThumb} alt={drink.strDrink} width="60%" />
					</div>
				</div>
				<h1>{drink.strDrink}</h1>
				<h4>{drink.strAlcoholic}</h4>
			</div>
			<Button/>
			<div>
				<h2>Instrucciones</h2>
				<p>{drink.strInstructions}</p>
			</div>
			<style jsx>{`
				.head{
					display: flex;
					align-items: center;
					flex-direction: column;
					
				}
				.head h1{
					text-align: center;
					font-size: 25px;
					color: #D8D8D8;
					margin: 0 20px;
					margin-top: 10px;
					margin-bottom: 0;
				}
				.head h4{
					margin: 0;
					font-size: medium;
					color: #797979;
				}
				p{
					margin: 0 30px;
					margin-bottom: 150px;
					color: #E3E3E3;
				}
				h2{
					color: white;
					text-align: center;
				}
				.img{
					text-align: center;
					position: relative;
					z-index: 2;
				}
				.img:after{
					content: '';
					position: absolute;
					width: 100%;
					height: 100%;
					top: -50%;
					left: 0;
					z-index: -1;
					border-radius: 0 0 60px 0;
					background: linear-gradient(90deg, #DA22FF 0%, #9733EE 100%);
				}
				.img>div{
					position: relative;
				}
				.img>div:after{
					content: '';
					position: absolute;
					width: 50%;
					height: 50%;
					left: 0;
					bottom: 10px;
					z-index: -2;
					background: linear-gradient(90deg, #DA22FF 0%, #9733EE 150%);
				}
				.img>div:before{
					content: '';
					position: absolute;
					width: 100%;
					height: 50%;
					left: 0;
					bottom: 0;
					z-index: -1;
					border-radius: 60px 0 0 0;
					background: #2A0E58;
				}
				img{
					border-radius: 30px;
				}
			`}</style>
		</div>
	)
}