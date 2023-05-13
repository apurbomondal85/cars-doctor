
import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { Spinner } from 'flowbite-react'

function PrivateRouter({children}) {
    const {user, loader} = useContext(AuthContext)
    const location = useLocation();
    if(loader){
        return <Spinner aria-label="Default status example" />
    }

    if (user) {
        return children
    }

  return (<Navigate to="/login" state={{from: location}}></Navigate>)
}

export default PrivateRouter
