import { useContext } from "react";
import { useNavigate ,Navigate} from "react-router-dom";
import { Appcontext } from "../Context/Appcontext";
export function PrivateRoute({children}){
const navigate = useNavigate();
const {isAuth}=useContext(Appcontext);
console.log(isAuth.auth)

if(!isAuth.auth){

// alert("Plz Login First");
// navigate ;
return <Navigate to="/"></Navigate>;  
}

;

return (
    <>
    {children}
    </>
) ;


}

