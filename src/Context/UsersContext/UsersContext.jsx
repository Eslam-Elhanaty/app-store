import { createContext, useEffect, useState } from "react";

export let userContext = createContext()

export default function UserContextProvider(props){

const [usertoken, setUserToken] = useState(null)

    // const localToken = localStorage.getItem("usertoken")

    // useEffect(() => {
    
    //     if (localToken !== null) {

    //         setUserToken(localToken);
    //     }
    // }, [])



    return <userContext.Provider value={{usertoken , setUserToken}}>

     {props.children}

    </userContext.Provider>
    
}