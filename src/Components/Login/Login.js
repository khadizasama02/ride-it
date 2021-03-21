import React, { useContext, useState } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App'
import { useHistory, useLocation } from 'react-router';



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.app(); // if already initialized, use that one
}


const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" }};
    var provider = new firebase.auth.GoogleAuthProvider();
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,

        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
    })
    const handleSignIn = () =>
    {
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result)
          var credential = result.credential;
          var token = credential.accessToken;
          var user = result.user;
          const {displayName ,email} = result.user;
          const signedInUser ={displayName, email }
          setLoggedInUser(signedInUser);
          history.replace(from);
          
        }).catch((error) => {
          
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          // ...
        });
    }
    const handleSubmit = (e) => {
        console.log(user.email, user.password);
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                // .then((userCredential) => {
                //     // Signed in 
                //     var user = userCredential.user;
                //     // ...
                // })
                .then(res => {
                    
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    // console.log(res);
                    setUser(newUserInfo);
                    
                    updateUserName(user.name);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    // ..
                });
        }


        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                // .then((userCredential) => {
                //     // Signed in
                //     var user = userCredential.user;
                //     // ...
                // })
                .then(res => {
                    const newUserInfo = { ...res.user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    // console.log(res);
                   
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    
                    // console.log('sign in user info',res.user);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();


    }
    const updateUserName = name => {
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
          
        }).then(function () {
           console.log('user name updated');
        }).catch(function (error) {
            console.log(error);
        });
    }
    const handleBlur = (e) => {
        let isFieldValid = true;
        // console.log(e.target.name);
        // console.log(e.target.value);
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
            //   console.log(isFormValid);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = (isPasswordValid && passwordHasNumber);
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    return (
        <div class="app" >
            {/* <h1>this is login</h1>
            <h2>email: {user.email}</h2>
            <h3>password:{user.password}</h3>
            <h3>name:{user.name}</h3> */}

            <div class="card login">
                <div class="card-body" style={{background:"#575fcf"}}>
                    <div class="form-check" style={{ textAlign: "center", }}>
                        <input type="checkbox" class="form-check-input" id="" onChange={() => setNewUser(!newUser)} name="newUser" />
                        <label class="form-check-label" for="newUser">I am a new user.Sign me up</label>

                    </div>

                    <form onSubmit={handleSubmit}>
                        {newUser &&
                            <div className="form-group">
                                <label for="exampleInputname" >Name</label>
                                <input type="text" name="name" onBlur={handleBlur} placeholder="enter your name" id="exampleInputname" class="form-control" />
                            </div>}
                        <div className="form-group">

                            <label for="exampleInputEmail1" >Email address</label>
                            <input type="text" name="email" onBlur={handleBlur} placeholder="enter your email" id="exampleInputEmail1" class="form-control" required />

                        </div>
                        <div className="form-group">

                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" name="password" onBlur={handleBlur} placeholder="enter your password" id="exampleInputPassword1" class="form-control" required />
                        </div>
                        {newUser &&
                            <div className="form-group">

                                <label for="exampleInputPassword4">Confirm Password</label>
                                <input type="password" name="password" onBlur={handleBlur} placeholder="confirm your password" id="exampleInputPassword4" class="form-control" required />
                            </div>
                        }

                        {newUser ?
                            <div class="form-check">

                                <h6>
                                    Dont have an account?<a href="#">Create Account</a>
                                </h6>

                            </div>
                            :
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                                <a href="#" class="forget-password">forget password</a>
                            </div>}

                        <button type="submit" class="btn btn-success btn-style" >{newUser ? 'Create Account' : 'Log In'}</button>

                    </form>
                    <p style={{ color: "red", textAlign: "center" }}>{user.error}</p>
                    {user.success && <p style={{ color: "green", textAlign: "center" }}>User {newUser ? 'Created' : 'Logged in'} Succesfully</p>}

                </div>
               
            </div>
            <div style={{textAlign:"center",marginTop: "10px"}}>
                    <h3>OR</h3>
                    <button onClick={handleSignIn} class="btn btn-danger btn-google-style">Sign in with Google</button>
                </div>

        </div>
    );
};

export default Login;