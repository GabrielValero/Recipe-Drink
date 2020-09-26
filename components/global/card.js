import Link from 'next/link';

export default function Card({drink, type}){
	

	return (
		<div className="card">
			<img src={drink.strDrinkThumb} alt={drink.strDrink} height="100%"/>
			<div className="text">
				<h3>{drink.strDrink}</h3>
				<small>{type}</small>
			</div>
			<style jsx>{`
				.card{
					width: 90%;
					margin: 15px 0;
					height: 80px;
					display: flex;
					justify-content: flex-start;
					align-items: center;
				}
				.text{
					width: 100%;
					height: 100%;
					transform: translateY(10px);
					margin-left: 20px;
					border-bottom: 2px solid #4B1A9C;
				}
				h3{
					margin: 0;
					color: #E8E8E8;
				}
				small{
					color: #ABABAB;
					letter-spacing: 2px;
				}
				img{
					border-radius: 50px;
					border: 2px solid #AC6787;
					filter: drop-shadow(0px 0px 20px rgba(214, 207, 56, 0.5));
				}
			`}</style>
		</div>
	)
}