import * as firebase from 'firebase'
import UserContext from '../context/user'
import {useContext} from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyAsdfKI20t4papKHji8eKHT3An4cRj6CKY",
  authDomain: "recipe-drinks.firebaseapp.com",
  databaseURL: "https://recipe-drinks.firebaseio.com",
  projectId: "recipe-drinks",
  storageBucket: "recipe-drinks.appspot.com",
  messagingSenderId: "1069184955688",
  appId: "1:1069184955688:web:7d7aa79cbeb3b2abb48c1d",
  measurementId: "G-Q0S92EXH1M"
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

//Login y sing up

export const loginWithGoogle = ()=>{
	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider).then(res=>{

		db.collection("users").doc(res.user.email).get().then(doc=>{
			if (!doc.exists) {
		        // doc.data() will be undefined in this case
		        CreateColection(res.user.email);
		        console.log("No such document!");
		    }
		}).catch(err=>{
			console.log("No hay nada", err);
		})
	})
	.catch(err=>{console.log(err); return {error: err}})
}
export const loginWithFacebook = ()=>{
	var provider = new firebase.auth.FacebookAuthProvider();
	firebase.auth().signInWithPopup(provider).then(res=>{

		db.collection("users").doc(res.user.email).get().then(doc=>{
			if (!doc.exists) {
		        // doc.data() will be undefined in this case
		        CreateColection(res.user.email);
		        console.log("No such document!");
		    }
		}).catch(err=>{
			console.log("No hay nada", err);
		})
	})
	.catch(err=>{console.log(err); return {error: err}})
}

export const logout = async()=>{
	await firebase.auth().signOut();
}

//No tocar, esto es para verificar si el usuario esta autenticado
export const verify = ()=>{

	const {setUser, setImg} = useContext(UserContext);

	firebase.auth().onAuthStateChanged(userCredentials=>{
		if(userCredentials) {
			setImg(userCredentials.photoURL);
			setUser(userCredentials.email);
		}else{
			setUser("Nada")
			setImg("Nada")
		}
	});
}


//Firestore


export const CreateColection = (email)=>{
	db.collection("users").doc(email).set({
	    liked:[],
	    saved: []
	})
}

//Actualizaciones del usuario
export const UpdateLiked = (email, name, img,id, bool, type)=>{
	const up = db.collection("users").doc(email);
	const drink = {
		id: id,
		name: name,
		poster: img,
		type: `${type}`
	}

	if(bool){
		up.update({
			liked: firebase.firestore.FieldValue.arrayRemove(drink)
		});
	}else{
		up.update({
			liked: firebase.firestore.FieldValue.arrayUnion(drink)
		});
	}
}
export const UpdateSaved = (email, name, img,id, bool, type)=>{
	const up = db.collection("users").doc(email);
	const drink = {
		id: id,
		name: name,
		poster: img,
		type: `${type}`
	}

	if(bool){
		up.update({
			saved: firebase.firestore.FieldValue.arrayRemove(drink)
		});
	}else{
		up.update({
			saved: firebase.firestore.FieldValue.arrayUnion(drink)
		});
	}
}


//Obtener Datos fav,reading,saved

export const GetData = async (user)=>{
	
	if(user !="Nada"){

		return await db.collection("users").doc(user)
		.get().then(doc=>{
			return doc.data();
		})
	}
	else return {error:"Nada"};
}