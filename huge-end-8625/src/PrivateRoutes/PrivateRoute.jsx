import { useContext } from "react";
import { useNavigate ,Navigate} from "react-router-dom";
import { Appcontext } from "../Context/Appcontext";
import { useToast } from "@chakra-ui/react";
export function PrivateRoute({children}){
const navigate = useNavigate();
const toast = useToast();
const {isAuth}=useContext(Appcontext);

if(!isAuth.auth){
    toast({
        title: "Please Login First.",
        description: "First login then you will get access permission.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
return <Navigate to="/"></Navigate>;  
}

;

return (
    <>
    {children}
    </>
) ;


}

