import {useState, useContext, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useRouter} from 'next/router';

import {UpdateLiked, UpdateSaved, GetData, verify} from '../../firebase/client'
import {getDrinkId} from '../../redux/actions/drinkId';
import UserContext from '../../context/user'


//icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

import IconButton from '@material-ui/core/IconButton';


export default function button(){
	const [liked, setLiked] = useState(false);
	const [saved, setSaved] = useState(false);

	const {user} = useContext(UserContext);
	const drink = useSelector(store=> store.DrinkIdReducer.drinks)

	useEffect(()=>{
		let mounted = true
		if(user !== "Nada" && mounted){
		
			GetData(user).then(res=>{

				let i=0;
				if(res.liked.length != 0 ){	

					do{
						if(res.liked[i].id == drink[0].idDrink) {
							setLiked(true)
						}
						i++;
					}while(res.liked[i-1].id != drink[0].idDrink && i<res.liked.length);
				}
				i=0;
				if(res.saved.length != 0 ){	
					do{
						if(res.saved[i].id == drink[0].idDrink) {
							setSaved(true)
						}
						i++;
					}while(res.saved[i-1].id != drink[0].idDrink && i<res.saved.length)
				}
			})
		}
		return function cleanup() {
            mounted = false
        }
	}, [user])


	const handleClickSaved = ()=>{
		 setSaved(!saved)
		 UpdateSaved(user, drink[0].strDrink, drink[0].strDrinkThumb, drink[0].idDrink, saved, drink[0].strAlcoholic);
	}
	const handleClickLiked = ()=>{
		 setLiked(!liked)
		 UpdateLiked(user, drink[0].strDrink, drink[0].strDrinkThumb, drink[0].idDrink, liked, drink[0].strAlcoholic);
	}

	return(
		<div className="botones">
			<IconButton style={{margin: "0 20px", marginTop: 20,padding: 7, background: "linear-gradient(90deg, #DA22FF 0%, #9733EE 100%)", color: "#2A0E58"}} onClick={handleClickLiked}
			>
				{liked ? <FavoriteIcon style={{fontSize: 40}}/> : <FavoriteBorderIcon style={{fontSize: 40}}/> }
			</IconButton>
			<IconButton style={{margin: "0 20px", marginTop: 20,padding: 7, background: "linear-gradient(90deg, #DA22FF 0%, #9733EE 100%)", color: "#2A0E58"}} onClick={handleClickSaved}
			>
				{saved ? <BookmarkIcon style={{fontSize: 40}}/> : <BookmarkBorderIcon style={{fontSize: 40}}/> }
			</IconButton>
			<style jsx>{`
				.botones{
					display: flex;
					justify-content: center;
					align-items: center;
				}
			`}</style>
		</div>
	)
}