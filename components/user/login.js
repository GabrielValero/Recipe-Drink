import {useEffect, useState, useContext} from 'react';

import Button from '@material-ui/core/Button';

import {useDispatch, useSelector} from 'react-redux'

//client
import UserContext from '../../context/user'

import {loginWithGoogle, loginWithFacebook} from '../../firebase/client';

export default function login(){
	return (
		<div className="container">
			<div className="text">
				<h2>A good conversation always opens with a corkscrew</h2>
				<h1>Join Us</h1>
			</div>
			<div className="buttons">
				<Button variant="contained" style={{background: "#FFFFFF", width: "80%", margin:10}} size="large" onClick={loginWithGoogle} startIcon={
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
						width="20" height="20"
						viewBox="0 0 24 24"
						style={{fill:"#000000"}}>
						<path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"></path>
					</svg>
				}>
					Log In with Google
				</Button>
				<Button variant="contained" style={{width: "80%", margin:10}} color="primary" size="large" onClick={loginWithFacebook} startIcon={
					<img src="/Images/facebookicon.svg" alt="facebook icon"/>
				}>
					Log In with Facebook
				</Button>
			</div>
			<style jsx>{`
				.container{
					margin-top: 100px;
				}
				.text{
					text-align: center;
					color: #E8E8E8;
				}
				h2{
					font-weight: lighter;
				}
				.buttons{
					width: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
				}
			`}</style>
		</div>
	)
}