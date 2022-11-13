import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { Appcontext } from "./Appcontext";
import { Switch } from "@chakra-ui/react";

export const SwitchContext=createContext();

export function SwitchContextProvider({children}) {
const [admin,setadmin]=useState(false);
  const changeState=()=>{
   setadmin(!admin)
   }
 const  value={admin,changeState}

return <SwitchContext.Provider value={value}>
        {children}
 </SwitchContext.Provider>

}

