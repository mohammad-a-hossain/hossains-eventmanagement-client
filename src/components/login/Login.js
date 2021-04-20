//import React,  { useContext }  from 'react';
import React from 'react';
 import  firebase from "firebase/app";
 import "firebase/auth";
 import './login.css'
 import firebaseConfig from './firebaseConfig'
 import { useState } from "react";
 //import { useHistory, useLocation } from 'react-router-dom';
//import LoginBg from '../../images/Group 140.png';
//import { UserContext } from '../../App';

const Login = () => {
   if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  } 
  

 
    const [user,setUser] =useState({
      isSignIn :false,
      name:"",
      email:"",
      password:"",
      error:"",
      success:false
    })
    const [newUser, setNewUser] = useState(false)
  
const handleChange=(e)=>{
  let isFieldValid = true;
  if(e.target.name === 'email'){
       isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
       console.log(isFieldValid)
    
  }
   if(e.target.name === 'name'){
      isFieldValid = /^[a-zA-Z]/.test(e.target.value)
      console.log(isFieldValid)
 } 
  if(e.target.name==='password'){
    const isPassValid=e.target.value.length >6
        const passWordNumber=/\d{1}/.test(e.target.value)
        isFieldValid=isPassValid && passWordNumber;
  }
  if(isFieldValid){
    const newUserInfo ={...user};
    newUserInfo[e.target.name] = e.target.value
    console.log( newUserInfo)
    setUser(newUserInfo)
  }
}
const handleSubmit=(e)=>{
  if(user.email && user.password){
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(res =>{
      const newUserInfo ={...user}

      newUserInfo.error='';
      newUserInfo.success='user created success';
      setUser(newUserInfo)
      //console.log(res)
    })
    .catch(error => {
     const newUserInfo={...user}
     newUserInfo.error ='user failed'
    
     setUser(newUserInfo)
    })
  }
   
    e.preventDefault()
}

 /* const [loggedInUser, setLoggedInUser] = useContext(UserContext)
 
   //
   const history = useHistory();
   const location = useLocation();
   const { from } = location.state || { from: { pathname: "/" } };
*/
 var provider = new firebase.auth.GoogleAuthProvider();
   const GoogleSignIn =() =>{
   
        firebase.auth()
          .signInWithPopup(provider)
          .then((result) => {
          
            const { displayName, email,photoURL } = result.user;
            const signInUser={
              isSignIn:true,
              name:displayName,
              email:email,
              photo:photoURL
            }
            setUser(signInUser)
           // console.log(displayName, email, photoURL)
         })
          .catch((error) => {
            var errorMessage = error.message;
           console.log(errorMessage)
      }); 
     
    
  

   }

  return (
    <div className="login-page container-fluid login-back" >
      <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
        <div className="col-md-5  shadow p-5 bg-light">

        <p style={{color:'red'}}>{newUser.error}</p>
       {user.success && <p style={{color:'green'}}>user created success </p>}

      <form onSubmit={handleSubmit}>
      <div className="form-group">
            <label htmlFor="">User Name here</label>
            <input type="text"  id="name"  onBlur={handleChange} name='name' className="form-control" required/>
          </div>
           <div className="form-group">
            <label htmlFor="">User email </label>
            <input type="email"  id="email"  onBlur={handleChange} name='email' className="form-control" required/>
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password"  id="password" onBlur={handleChange} name='password' className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-danger">Forgot your password?</label>
          </div>
          <button type='submit'>Submit</button>
          </form>
          <div className="from-group mt-5">
            <button className="btn btn-brand" onClick={GoogleSignIn} >Google Sign in</button>
            <button className="btn btn-brand"  >FaceBook Sign in</button>
            <button className="btn btn-brand"  >Twitter Sign in</button>
            <button className="btn btn-brand"  >Gtihub Sign in</button>
          </div>
          {user.isSignIn &&<p>name:{user.name}</p>}
        </div> 
       
      </div>
    </div>
  );
};

export default Login;
  /*  const handleGoogleSignIn = () => {
     var provider = new firebase.auth.GoogleAuthProvider();
     firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
       setLoggedInUser(signedInUser);
       history.replace(from)
      //storeAuthToken();
      console.log(loggedInUser)
    }).catch(function (error) {
       const errorMessage = error.message;
       console.log(errorMessage);
     });
   } */

//   const storeAuthToken = () => {
//     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
//       .then(function (idToken) {
//         sessionStorage.setItem('token', idToken);
//         history.replace(from);
//       }).catch(function (error) {
//         // Handle error
//       });
//   }


/* 

const setGoogleSignIn=()=>{
   googleSignIn()
   .then(res =>{
       console.log(res)
     setUser(res)
     setUserLoggedIn(res)
     history.replace(from)
   })
}
*/