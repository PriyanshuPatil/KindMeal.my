import { useEffect } from "react";
import { useState } from "react";
import { KindsData } from "../Api/Axios";
import { KindCard } from "../Components/KindsCard";
import { Pagination } from "../Components/Pagination";
import { Box, Spinner,Grid,LinkBox } from '@chakra-ui/react'
import {Link, Navigate} from 'react-router-dom'
import {useNavigate} from 'react-router-dom' ;
function Kinds(){
const [meals,setMeals]=useState([]);
const [page,SetPages]=useState(1);
const [limit,setlimit]=useState(12);
const navigate = useNavigate();
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
setloading(false)
},[page,limit])

if(loading){
    return <Spinner/>
}

    return (
        <Box m='auto' w='80%'>
         <Grid templateColumns='repeat(3, 1fr)' gap={10} mt='20px'>
      {meals.map((el)=>{
        return (
    //    
        <Box  onClick={()=>{navigate(`/moments/${el.id}`)}}>
        <KindCard property={el}/>
   </Box>
        )
      })} 
      </Grid>
      <Pagination current={page} onChange={page2} onChange1={page1}/>
        </Box>
    )
}

export default Kinds;

function GetaData(setMeals,page,limit){
    KindsData(page,limit)
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