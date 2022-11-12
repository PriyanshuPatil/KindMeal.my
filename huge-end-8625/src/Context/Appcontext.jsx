import { useState } from "react";
import { createContext } from "react";
export const Appcontext=createContext();
function AuthContextProvider({children}) {
   const [isAuth,setAuth]=useState({"auth":false, "user": null, "password": null ,"category":false});
  

   const changeState=(obj)=>{
    setAuth({...isAuth,"auth":true,"user": obj.user, "password": obj.password,'category':obj.category});
   console.log(isAuth)
   }

   
   const logout=()=>{
    setAuth({...isAuth,"auth":false, "user": null, "password": null ,"category":false});
   
   }

   const  value={isAuth,changeState,logout}

    return <Appcontext.Provider value={value}>
        {children}
    </Appcontext.Provider>

}

export default AuthContextProvider;