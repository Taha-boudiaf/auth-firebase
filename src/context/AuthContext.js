import React, { createContext, useState } from 'react'
import {auth} from "../firebase"


const AuthContext = createContext()
export const useAuth = ()=>{
const context = useContext(AuthContext)
}
export const AuthProvider = ({children}) => {
    const [currentUser,setCurentUser] = useState()
    const Signup =(email,password) =>{
        return auth.createUserWithEmailandPassword(email,password);
    }

    useEffect(() => {
        const Users = auth.onAuthStateChanged((user)=>{
            setCurentUser(user)
        })
        return Users
    }, [])

   

    const value = {
        currentUser,
        Signup
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default authcontext
