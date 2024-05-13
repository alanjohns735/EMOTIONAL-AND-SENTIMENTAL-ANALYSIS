/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { createContext, useState, useEffect, useContext } from 'react';
export const UserContext = createContext({})
export const useAuth = () => useContext(UserContext);
export function UserContextProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser ] = useState(null);
    useEffect(() => {
        if(!user) {
            axios.get('/').then(({data}) => {
                setUser(data)
            })
        }
    }, [])
        return (
            <UserContext.Provider value = {{user, setUser,isLoggedIn, setIsLoggedIn }}>
                {children}
            </UserContext.Provider>
        )
}