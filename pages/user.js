import {useContext} from 'react';

//Component
import Nav from '../components/global/Navbar';
import Header from '../components/global/header';
import Login from '../components/user/login';
import Dashboard from '../components/user/dashboard';

import UserContext from '../context/user'

import {verify} from '../firebase/client';

export default function Home(){

	const {user} = useContext(UserContext);

	if(user == "Nada"){
		verify();
	}

	return (
		<main>
			<div className="phone">
				<Header page={"home"}/>
				
				{user == "Nada" ? <Login/> : <Dashboard/>}
				
				<div className="navbar">
					<Nav active={"person"}/>
				</div>
			</div>
		</main>
	)
}
