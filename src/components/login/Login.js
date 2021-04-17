//import React,  { useContext }  from 'react';
import React from 'react';
 import  firebase from "firebase/app";
 import "firebase/auth";
 import backImg from '../../images/loginpage.jpg'
 import './login.css'

//import firebaseConfig from './firebaseConfig'
 //import { useHistory, useLocation } from 'react-router-dom';
//import LoginBg from '../../images/Group 140.png';
//import { UserContext } from '../../App';

const Login = () => {

 /* const [loggedInUser, setLoggedInUser] = useContext(UserContext)
   //
   const history = useHistory();
   const location = useLocation();
   const { from } = location.state || { from: { pathname: "/" } };

 if (firebase.apps.length === 0) {
     firebase.initializeApp(firebaseConfig);
   } */
   
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

  return (
    <div className="login-page container-fluid login-back" >
      <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
        <div className="col-md-5  shadow p-5 bg-light">
      <form>
           <div className="form-group">
            <label htmlFor="">User Name here</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-danger">Forgot your password?</label>
          </div>
          <button type='submit'>Submit</button>
          </form>
          <div className="from-group mt-5">
            <button className="btn btn-brand"  >Google Sign in</button>
            <button className="btn btn-brand"  >FaceBook Sign in</button>
            <button className="btn btn-brand"  >Twitter Sign in</button>
            <button className="btn btn-brand"  >Gtihub Sign in</button>
          </div>
        </div> 
       
      </div>
    </div>
  );
};

export default Login;

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