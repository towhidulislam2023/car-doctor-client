import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const authProviderContex = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider()
    const [user, setuser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signupUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updateName = (name) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name
        })

    }
    const GoogleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            if (currentUser && currentUser.email) {
                const loggedUser = {
                    email: currentUser?.email
                }
                console.log(loggedUser);
                fetch("https://car-doctor-server-jade.vercel.app/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        localStorage.setItem("access-token", data.token)
                        setLoading(false)
                        setuser(currentUser)
                    })

            }
            else {
                localStorage.removeItem("access-token")
                setLoading(false)
                setuser(currentUser)
            }


        })

        return () => {
            return unsubscribe()
        }
    }, [])



    const authInfo = {
        user,
        signupUser,
        loginUser,
        logout,
        updateName,
        loading,
        GoogleLogin
    }
    return (
        <authProviderContex.Provider value={authInfo}>
            {children}
        </authProviderContex.Provider>
    );
};

export default AuthProvider;