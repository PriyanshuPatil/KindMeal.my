import { useEffect } from "react";
import { useState } from "react";
import { KindsData } from "../Api/Axios";
import { KindCard } from "../Components/KindsCard";
import { Pagination } from "../Components/Pagination";
import { Box, Spinner,Grid,LinkBox } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import {Link, Navigate} from 'react-router-dom'

function Kinds(){
const navigate = useNavigate();
const [meals,setMeals]=useState([]);
const [page,SetPages]=useState(1);
const [limit,setlimit]=useState(12);

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
        <>
         <Grid templateColumns='repeat(3, 1fr)' gap={10} mt='20px'>
      {meals.map((el)=>{
        return (
    //    navigate(`/Kinds/${el.id}`)
        <Box  onClick={()=>{console.log("hello hy")}}>
        <KindCard property={el}/>
   </Box>
        )
      })} 
      </Grid>
      <Pagination current={page} onChange={page2} onChange1={page1}/>
        </>
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