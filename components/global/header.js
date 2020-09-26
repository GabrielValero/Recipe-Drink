import {IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import {useState} from 'react';

//components
import Drawer from './Drawer';

export default function Header(){

	const [open, setOpen] = useState(false);

	const close = ()=>{
		setOpen(!open)
	}

	return(
		<>
			<nav>
				<img src="/Images/Logo.png" alt="Logo" width="60%"/>
					
				<div>
					<IconButton  aria-label="menu" fontSize="large" onClick={()=>{setOpen(true)}}>
					  <div className="menu">
					  	<div></div>
					  	<div></div>
					  	<div></div>
					  </div>
					</IconButton>
				</div>
			</nav>
			<Drawer open={open} onClose={close}/>
			<style jsx>{`
				nav{
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					background: #2A0E58;
				}
				nav img{
					margin-left: 20px;
				}
				.menu{
					width: 30px;
					height: 30px;
					padding: 7px;
					display: flex;
					justify-content: space-around;
					align-items: center;
					flex-direction: column;
					box-shadow: 0px 20px <4></4>0px rgba(240, 24, 131, 0.25);
					background: linear-gradient(90deg, #EC008C 0%, #FC6767 100%);
					border-radius: 10px;
					color: #FFFFFF;
				}
				.menu div{
					width: 90%;
					padding: 1px;
					border-radius: 10px;
					background: #E0E0E0;
				}
				@media(max-width: 500px){
					nav>div{
						display: none;
					}
				}
			`}</style>
		</>
	)
}