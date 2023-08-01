//logic to check if user is signed in or not
    //check which user is logged in

import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';



const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('Signed Out')
        }).catch(error => console.log(error))
    }
    return (
        <div className="showAuth">
            {authUser ? <><p>{`Signed In as ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button></> : <p>Signed Out</p>}
        </div>
    ); 
};



export default AuthDetails