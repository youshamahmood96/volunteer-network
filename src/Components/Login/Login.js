import React, { useContext, useState } from 'react';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFrameWork } from './LoginManager';
import google from '../../Icon/google.png'
import vnLogo from '../../logos/vnLogo.png'

const Login = () => {
    const [user, setLoggedInUser] = useContext(UserContext)

    localStorage.setItem('user',user)

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    
    initializeLoginFrameWork()

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    

    
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(result => {
                const createdUser = result.user;
                const newUserInfo = { ...user } 
                newUserInfo.name = createdUser.displayName;
                newUserInfo.email = createdUser.email
                setLoggedInUser(newUserInfo) 
                history.replace(from); 
            })
            .catch(function (error) {
                const newUserInfo = { ...user } 
                newUserInfo.error = error.message;
                setLoggedInUser(newUserInfo)
            });
    }


    

    return (
        <div className='container'>
        <Link to='/'><img className='logo center' src={vnLogo} alt="logo"></img></Link>
            <div className="login-form">
            <h2 style={{textAlign: 'center',marginTop:'60px',fontFamily:'Montserrat',fontWeight:'800'}} >Login With</h2>
            <div style={{ marginBottom: '50px' }} onClick={handleGoogleSignIn} className='continue-with-google'>
            <img className="google-logo" src={google} alt="google-logo"></img>
            <p>Continue With Google</p>
            </div>
            <p style={{textAlign:'center',fontFamily:'Montserrat'}} >Dont Have an Account? <Link>Create an Account</Link></p>
            </div>
        </div>
    );
};

export default Login;