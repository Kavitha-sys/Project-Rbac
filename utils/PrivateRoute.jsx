import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";


function PrivateRoute({children, allowedRoles}){
    const {userInfo} = useUser()
  //check if the user has the required role
  const userHasRequireRole = userInfo && Array.isArray(allowedRoles) && allowedRoles.includes(
    userInfo.role.toUpperCase()
  )
 
  //if no user is authenticated, navigate to login page
  if(!userInfo){
    return <Navigate to='/' />
  }

  //if user is authenticated but does not have the required role, navigate to dashboard
    if(userInfo && !userHasRequireRole){
     return <Navigate to='/dashboard' />

}
 return children

}
export default PrivateRoute