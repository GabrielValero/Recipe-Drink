import {useContext, useState, useEffect} from 'react';

import UserContext from '../../context/user'
import {logout, verify, GetData} from '../../firebase/client'


import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Button from '@material-ui/core/Button';

//components
import Card from './CardDash';

export default function Dashboard(){
	const {user,imgUser} = useContext(UserContext);

	const [type, setType] = useState('liked')
	const [liked, setLiked] = useState([])
	const [saved, setSaved] = useState([])

	useEffect(()=>{
		let mounted = true
		if(user !== "Nada" && mounted){
			GetData(user).then(res=>{
				console.log(res)
				setLiked(res.liked);
				setSaved(res.saved);
			})
		}
		return function cleanup() {
            mounted = false
        }
	}, [user])

	const handleOnClick = (filter)=>{
		setType(filter);
	}

	return (
		<div>
			<div className="user">
				<div className="img">
					<img src={imgUser} alt="Img User" height="100%"/>
				</div>
				<div className="info-user">
					<h3>{user.slice(0, user.indexOf("@"))}</h3>
					<small>Posible alcoholico/a</small>
				</div>
			</div>
			<Button variant="contained" color="secondary" style={{marginLeft: 20}} onClick={logout} >
				<PowerSettingsNewIcon/>	
			</Button>
			<div>
				<div className="types">
					<div>
						<p className="option liked" onClick={()=>handleOnClick("liked")}>Gustado</p>
						<p className="option saved" onClick={()=>handleOnClick("saved")}>Guardado</p>
					</div>
				</div>
			</div>
			<section>
				{type == "liked" ? liked.map(drink => <Card drink={drink}/>) : saved.map(drink => <Card drink={drink}/>)}
			</section>
			<style jsx>{`
				section{
					margin: 15px 25px;
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
					width: 50%;
					height: 100%;
					border-radius: 10px;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #8F8F8F;
					font-size: 17px;
					font-weight: bold;
					letter-spacing: 1px;
					font-align: justify;
					cursor: pointer;
					position: relative;
					z-index: 30;
				}
				.${type}{
					background: linear-gradient(90deg, #DA22FF 0%, #9733EE 100%);
					color: white;
				}

				.user{
					height: 90px;
					margin: 10px 20px;
					padding:  20px 0;
					display: flex;
					justify-content: flex-start;
					align-items: center
				}
				.img{
					height: 100%;
					padding-right: 10px;
					border-right: 2px solid #4B1A9C;
				}
				.user img{
					border-radius: 10px;
				}
				.info-user{
					height: 100%;
					margin: 0 20px;
				}
				.info-user h3{
					margin: 0;
					margin-bottom: 10px;
					color: #E8E8E8;
				}
				small{
					color: #ABABAB;
				}
			`}</style>
		</div>	
	)
}