import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    
    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error);
        });
        //console.log(email);
    }

    return(
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={register}>
                <label htmlFor="name">Full Name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} type="name" id="name" placeholder="Full Name" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="password" id="password" name="password" />
                <button className="logReg-btn" type="submit">Create Account</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('Login')}>Already have an account? Login here.</button>
        </div>
        
    )
}