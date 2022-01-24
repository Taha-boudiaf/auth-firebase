import React, { createContext, useContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from '../firebase'

const AuthContext = createContext()
// export context 
export const useAuth = ()=>{
     return  useContext(AuthContext)
}


export const UserAuthContextProvider = ({children}) => {
    // state to save users 
    const [currentUser,setCurentUser] = useState('')
    console.log(currentUser);
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
    const google =()=> {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth,googleProvider)
    }
    // if user signup move data to state <<currentUser>>
    useEffect(() => {
        const Users = onAuthStateChanged(auth, (user)=>{
            const subscribe = setCurentUser(user)
            console.log(user);
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
        google
    }
    // auth provider 
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


