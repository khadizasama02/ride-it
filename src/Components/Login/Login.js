import React, { useState } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.app(); // if already initialized, use that one
  }


const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error:'',
        success: false
    })
    const handleSubmit = (e) => {
        console.log(user.email, user.password);
        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                // .then((userCredential) => {
                //     // Signed in 
                //     var user = userCredential.user;
                //     // ...
                // })
                .then(res => {
                    const newUserInfo = {...user};
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    // console.log(res);
                    setUser(newUserInfo);
                })
                .catch((error) => {
                   const newUserInfo = {...user};
                   newUserInfo.error = error.message;
                   newUserInfo.success = false;
                    setUser(newUserInfo);
                    // ..
                });
        }
        e.preventDefault();
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
        <div >
            {/* <h1>this is login</h1>
            <h2>email: {user.email}</h2>
            <h3>password:{user.password}</h3>
            <h3>name:{user.name}</h3> */}
            <div class="card login">
                <div class="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label for="exampleInputname" >Name</label>
                            <input type="text" name="name" onBlur={handleBlur} placeholder="enter your name" id="exampleInputname" class="form-control" />
                        </div>
                        <div className="form-group">
                            {/* <label for="exampleInputEmail1" >Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleBlur} name="email"/> */}
                            <label for="exampleInputEmail1" >Email address</label>
                            <input type="text" name="email" onBlur={handleBlur} placeholder="enter your email" id="exampleInputEmail1" class="form-control" required />

                        </div>
                        <div className="form-group">
                            {/* <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handleBlur} name="password"/> */}
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" name="password" onBlur={handleBlur} placeholder="enter your password" id="exampleInputPassword1" class="form-control" required />
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                            <a href="#" class="forget-password">forget password</a>
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    <p style={{color:"red" , textAlign:"center"}}>{user.error}</p>
                    {user.success && <p style={{color:"green" , textAlign:"center"}}>User Created Succesfully</p>}
                    
                </div>
            </div>


        </div>
    );
};

export default Login;