import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import { useAuth } from './userContext'

export default function ProtectedRoutes() {
    const { isLoggedIn } = useAuth();

  return(
    <div>
        { isLoggedIn ? <Outlet/>:<Navigate to="/" /> }
    </div>
  
  )
}
