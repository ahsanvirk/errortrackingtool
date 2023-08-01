import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import AuthDetails from "./components/AuthDetails";
import { auth } from "./firebase";




export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error);
        });
        //console.log(email);
    }

    

    return(
        <div className="auth-form-container"> {/* wrap everything into this fragment bc you can only return one child in return() statement  */}
            <h2>Login</h2>
            <form className="login-form" onSubmit={login}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="password" id="password" name="password" />
                <button className="logReg-btn" type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('Register')}>Don't have an account? Register here.</button>
            <p><div className="showAuth"></div></p>
        </div>
        
    )
}