import React, { createContext, useState } from 'react'
import {auth} from "../firebase"


const AuthContext = createContext()
// export context 
export const useAuth = ()=>{
const context = useContext(AuthContext)
}


export const AuthProvider = ({children}) => {
    // state to save users 
    const [currentUser,setCurentUser] = useState()
    // to create user with email and password 
    const Signup =(email,password) =>{
        return auth.createUserWithEmailandPassword(email,password);
    }
    // if user signup move data to state <<currentUser>>
    useEffect(() => {
        const Users = auth.onAuthStateChanged((user)=>{
            setCurentUser(user)
        })
        return Users
    }, [])
    // props value to pass data to children 
    const value = {
        currentUser,
        Signup
    }
    // auth provider 
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default authcontext
