import React, { createContext, useState } from "react";
import { getAuthToken } from "../utils/common";
import { useContext } from "react";


//create a new context for user information 
const UserContext = createContext();

//provider components to wrap around the part of the app that need access to user context
export const UserProvider =({children})=>{
    //Initilize the userInfo state with the authenticated user auth
    const [userInfo, setUserInfo] = useState(getAuthToken())

    return(
        //provide the userInfo and setUserInfo to the Context consumer
        <UserContext.Provider value={{userInfo, setUserInfo}}>
        {children}
         </UserContext.Provider>
    );
};

export const useUser = ()=> useContext(UserContext)


 