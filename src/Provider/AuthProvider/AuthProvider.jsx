import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { flushSync } from 'react-dom';

export const authProviderContex=createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setuser] = useState(null)
    const [loading,setLoading]=useState(true)

    const signupUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }
    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout=()=>{
        setLoading(true)
        return signOut(auth)
    }
    const updateName=(name)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName:name
        })

    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setLoading(false)
            setuser(currentUser)
        })

        return () =>{
            return unsubscribe()
        }
    },[])


    
    const authInfo={
        user,
        signupUser,
        loginUser,
        logout,
        updateName,
        loading
    }
    return (
        <authProviderContex.Provider value={authInfo}>
            {children}
        </authProviderContex.Provider>
    );
};

export default AuthProvider;