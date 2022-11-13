import { useEffect } from "react";
import { useState } from "react";
import { DealsData } from "../Api/Axios";
import { DealsCard } from "../Components/DealsCard";
import { Pagination } from "../Components/Pagination";
import { useNavigate } from "react-router-dom";
import { Spinner ,Box} from '@chakra-ui/react'
function Deals(){
 const navigate = useNavigate();
const [meals,setMeals]=useState([]);
const [page,SetPages]=useState(3);
const [limit,setlimit]=useState(10);
const [loading,setloading]=useState(false);
const page1=()=>{
SetPages(page+1)
}
const page2=()=>{
    SetPages(page-1)
    }
useEffect(()=>{
    setloading(true);
GetaData(setMeals,page,limit);
setloading(false) ;
},[page,limit])

if(loading){
    return <Spinner/>
}

    return (
        <Box m='auto' w='80%'>
        
      {meals.map((el)=>{
        return (
        <>
        <Box  onClick={()=>{navigate(`/meals/${el.id}`)}} >
        <DealsCard property={el}/>
        </Box>
        </>
        )
      })}
      <Pagination current={page} onChange={page2} onChange1={page1}/>
        </Box>
    )
}

export default Deals ;

function GetaData(setMeals,page,limit){
    DealsData(page,limit)
    .then(
        res=>{
           let data =  res.data;
           setMeals(data)
           console.log(data)
        }
    )
    .catch(
        err => console.log(err)
    )
}