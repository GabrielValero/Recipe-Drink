import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';

import Link from 'next/link';

export default function Nav({active}){
	return(
		<div className="container">
			<div className="bar">
				<Link href="/search"><div className="icon search"><SearchIcon fontSize="large" style={{color: "#DDDDDD"}}/></div></Link>
				<Link href="/"><div className="icon home"><HomeIcon fontSize="large" style={{color: "#DDDDDD"}}/></div></Link>
				<Link href="/user"><div className="icon person"><PersonIcon fontSize="large" style={{color: "#DDDDDD"}}/></div></Link>
			</div>
			<style jsx>{`
				.bar{
					width: 80%;
					height: 60px;
					display: flex;
					justify-content: space-around;
					align-items: center;
					border-radius: 10px;
					background: linear-gradient(90deg, #EC008C 0%, #FC6767 100%);
					box-shadow: 0px 0px 20px #F64174;
				}
				.icon{
					padding: 10px;
				}
				.${active}{
					background: #F84A71;
					border-radius: 15px;
					transform: translateY(-35%);
					box-shadow: 0px 20px 20px #EF1684;
				}
				.container{
					width: 100%;
					padding: 30px 0;
					display: flex;
					justify-content: center;
					align-items: center;
					position: fixed;
					box-sizing: border-box;
					bottom: 0;
					z-index: 1000;
					border-radius: 20px 20px 0 0;
					background: #2A0E58;
				}
				@media(min-width: 500px){
					.container{
						display: none;
					}
				}
			`}</style>
			<style jsx global>{`
				body{
					font-family: 'Roboto', sans-serif;
					height: 100vh;
					padding: 0;
					margin: 0;
					
				}
				.navbar{
					position: fixed;
					bottom: 0;
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
				@media(max-width: 500px){
					html{
						background: #2A0E58;
					}
					main{
						min-height: 100vh;
						background: #2A0E58;
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
						background: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
						
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
					
				}
			`}</style>
		</div>
	)
}