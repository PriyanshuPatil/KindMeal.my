import { useState } from "react";
import { createContext } from "react";
export const Appcontext=createContext();
function AuthContextProvider({children}) {
   const [isAuth,setAuth]=useState({auth:"false",token:null,category:false});
  

   const changeState=(token,category)=>{
    setAuth({...isAuth,"auth":isAuth,"token":token,'category':category});
 
   }

   
   const logout=()=>{
    setAuth({...isAuth,"auth":!isAuth,"token":"null"});
   
   }

   const  value={isAuth,changeState,logout}

    return <Appcontext.Provider value={value}>
        {children}
    </Appcontext.Provider>

}

export default AuthContextProvider;