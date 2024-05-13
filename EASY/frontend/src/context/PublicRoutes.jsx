import React from 'react'
import { Outlet,useNavigate } from 'react-router-dom'
import { useAuth } from './userContext'

export default function PublicRoutes(props) {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
  return(
    <div>
        { isLoggedIn ? navigate('/') : <Outlet/> }
    </div>
  
  )
}