import {IconButton} from '@material-ui/core';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import {useState} from 'react';
import {useRouter} from 'next/router';

//components
import Drawer from './Drawer';
import Search from '../searchPage/Search';



export default function Header({page}){

	const [open, setOpen] = useState(false);
	const router = useRouter();

	const close = ()=>{
		setOpen(!open)
	}

	return(
		<>
			<nav>
				{page == "home" && <img src="/Images/Logo.png" alt="Logo" width="60%"/>}
				{page == "search" && <Search/>}
				{page == "detail" && (
					<IconButton  aria-label="ArrowBackIcon" fontSize="large"
					style={{borderRadius: 5, background: "linear-gradient(90deg, #EC008C 0%, #FC6767 100%)", color: "#E0E0E0", padding: 10, marginLeft:10}}
					onClick={()=>router.back()}>
					  <ArrowBackIcon/>
					</IconButton>
				)}
					
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
					padding: 10px;
					box-sizing: border-box;
					display: flex;
					justify-content: space-between;
					align-items: center;
					background: transparent;
					position: relative;
					z-index: 1000;
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
					border-radius: 5px;
					color: #FFFFFF;
				}
				.menu div{
					width: 90%;
					padding: 1px;
					border-radius: 10px;
					background: #E0E0E0;
				}
			`}</style>
		</>
	)
}