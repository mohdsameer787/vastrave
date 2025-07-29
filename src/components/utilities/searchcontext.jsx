import React from "react";
import {useState } from "react";
import Searchcontext from "./contextprovider";
 


 const Searchprovider=({children})=>{
    const [searchiteam,setSearchiteam]=useState("")
     const [cart,setCart]=useState([])
     const [userlist,setUserlist]=useState([])
     const[currentuser,setCurrentUser]=useState(null)
  
    return(
        <Searchcontext.Provider value={{searchiteam,setSearchiteam,cart,setCart,userlist,setUserlist,currentuser,setCurrentUser}}>
        {children}
        </Searchcontext.Provider>
    )
}

export default Searchprovider
