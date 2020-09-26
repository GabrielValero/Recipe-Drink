import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';

export default function Nav({active}){
	return(
		<div className="container">
			<div className="bar">
				<div className="icon search"><SearchIcon fontSize="large" style={{color: "#DDDDDD"}}/></div>
				<div className="icon home"><HomeIcon fontSize="large" style={{color: "#DDDDDD"}}/></div>
				<div className="icon person"><PersonIcon fontSize="large" style={{color: "#DDDDDD"}}/></div>
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
					box-shadow: 0px 0px 50px #F64174;
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
					border-radius: 20px 20px 0 0;
					background: #2A0E58;
				}
				@media(min-width: 500px){
					.container{
						display: none;
					}
				}
			`}</style>
		</div>
	)
}