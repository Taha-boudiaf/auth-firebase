import React, { createContext, useState } from 'react'
import {auth} from "../firebase"


const AuthContext = createContext()
export const useAuth = ()=>{
const context = useContext(AuthContext)
}
export const AuthProvider = ({children}) => {
    const [currentUser,setCurentUser] = useState()
    const login =(email,password) =>{

    }
    const value = {
        currentUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default authcontext
