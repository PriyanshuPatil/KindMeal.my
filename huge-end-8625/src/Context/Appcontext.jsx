import { useState } from "react";
import { createContext } from "react";
export const Appcontext=createContext();
function AuthContextProvider({children}) {
   const [isAuth,setAuth]=useState({"auth":false, "username": null, "password": null ,"token":""});
  

   const changeState=(obj)=>{
    setAuth({...isAuth,"auth":true,"username": obj.username, "password": obj.password,"token":obj.token});
   console.log(isAuth)
   }

   
   const logout=()=>{
    setAuth({...isAuth,"auth":false, "username": null, "password": null ,"token":""});
   
   }

   const  value={isAuth,changeState,logout}

    return <Appcontext.Provider value={value}>
        {children}
    </Appcontext.Provider>

}

export default AuthContextProvider;