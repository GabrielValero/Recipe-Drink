import {useState, useRef} from 'react';
import {useDispatch} from 'react-redux'
import {drinksIngrediente} from '../../redux/actions/drinks';
import {IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export default function Search(){
	const [text, setText] = useState('');
	const myRef = useRef();
	const dispatch = useDispatch();

	const setDrinks= ()=>{
		dispatch(drinksIngrediente(myRef.current.value))
	}

	const handleOnSubmit = (e)=>{
		e.preventDefault();
	 	myRef.current.value.length>0 && setDrinks();
	 	
	}
	return(
		<form action="/" onSubmit={handleOnSubmit}>
			<input className="search" ref={myRef} type="text" placeholder="Look by ingredient"/>
			<div className="button">
				<IconButton type="submit">
					<div className="icon">
						<SearchIcon/>
					</div>
				</IconButton>
			</div>
			<style jsx>{`
				form{
					width: 78%;
					margin-left: 10px; 
					display: flex;
					justify-content: center;
					align-items: center;
					position: relative;
				}
				.button{
					width:40px;
					height: 40px;
					padding: 5px;
					position: absolute;
					right: 0;
					background: #170736;
					border-radius: 9px;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.icon{
					width: 35px;
					height: 35px;
					border-radius: 9px;
					background: #F32F7B;
					display: flex;
					justify-content: center;
					align-items: center;
					color: white;
				}
				.search{
					width: 100%;
					height: 40px;
					padding: 5px 20px;
					color: #A8A8A8;
					border: none;
					font-weight: bold;
					background: #170736;
					border-radius: 9px;
					outline: none;
				}

			`}</style>
		</form>
	)
}