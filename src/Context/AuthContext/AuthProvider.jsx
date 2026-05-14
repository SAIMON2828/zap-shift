// import React from 'react';

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../../Firebase/firebase.init";
import { useEffect, useState } from "react";


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const registerUser = (email, password) =>{
          setLoading(true)
          return createUserWithEmailAndPassword (auth, email, password )
    }
    const singInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    
    const signInGooggle = () =>{
          setLoading(true)
          return signInWithPopup(auth, googleProvider)
        }

    // observe user state

    useEffect( () =>{
          const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
             setUser(currentUser);
             setLoading(false);
          })
          return () =>{
            unSubscribe();
          }

    }, [])
 
   

    const authInfo = {
          registerUser,
          singInUser,
          signOutUser,
          signInGooggle,
          user,
          loading
    }
    return (
        <AuthContext value={authInfo}>
            {
                children
            }
        </AuthContext>
    );
};

export default AuthProvider;