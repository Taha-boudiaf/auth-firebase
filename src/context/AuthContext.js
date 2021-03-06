import React, { createContext, useContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail,signOut,onAuthStateChanged,FacebookAuthProvider ,GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from '../firebase'

const AuthContext = createContext()
// export context 
export const useAuth = ()=>{
     return  useContext(AuthContext)
}


export const UserAuthContextProvider = ({children}) => {
    // state to save users 
    const [currentUser,setCurentUser] = useState('')
    // function to create user with email and password 
    const Signup =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // function to signin 
    const Signin =(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    // function to signout 
    const Signout = ()=>{
        return signOut(auth)
    }
    // sign in with google 
    const google = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth,googleProvider)
    }
    // sign in with facebook 
    const facebook = () => {
        const facebookProvider = new FacebookAuthProvider();
        return signInWithPopup(auth,facebookProvider)
    }
    // reset password and send it in email 
    const resetPAssword = (email) => {
        return sendPasswordResetEmail(auth,email)
    }
    // if user signup move data to state <<currentUser>>
    useEffect(() => {
        const Users = onAuthStateChanged(auth, (user)=>{
            const subscribe = setCurentUser(user)
            return () =>{
                subscribe()
            }
        })
        return Users
        
    }, [])
    // props value to pass data to children 
    const value = {
        currentUser,
        Signup,
        Signin,
        Signout,
        google,
        facebook,
        resetPAssword
    }
    // auth provider 
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


