import { useContext, useEffect } from "react";
import { useState } from "react";
import { KindsData } from "../Api/Axios";
import { KindCard } from "../Components/KindsCard";
import { Pagination } from "../Components/Pagination";
import { Box, Spinner,Grid,LinkBox } from '@chakra-ui/react'
import {Link, Navigate} from 'react-router-dom'
import {useNavigate} from 'react-router-dom' ;
import { Appcontext } from "../Context/Appcontext";
function Kinds(){
const [meals,setMeals]=useState([]);
const [page,SetPages]=useState(1);
const [limit,setlimit]=useState(12);
const navigate = useNavigate();
const {token}=useContext(Appcontext)
const [loading,setloading]=useState(false);
const page1=()=>{
SetPages(page+1)
}
const page2=()=>{
    SetPages(page-1)
    }
useEffect(()=>{
    setloading(true);
GetaData(setMeals,page,limit,token);
setloading(false)
},[page,limit])

if(loading){
    return <Spinner/>
}

    return (
        <Box m='auto' w='80%'>
         <Grid  templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(1, 1fr)', md:'repeat(2, 1fr)',lg:'repeat(3, 1fr)' }} gap={10} mt='20px'>
      {meals.map((el)=>{
        return (
    //    
        <Box  onClick={()=>{navigate(`/moments/${el._id}`)}}>
        <KindCard property={el}/>
   </Box>
        )
      })} 
      </Grid>
      {/* <Pagination current={page} onChange={page2} onChange1={page1}/> */}
        </Box>
    )
}

export default Kinds;

function GetaData(setMeals,page,limit,token){
    KindsData(page,limit,token)
    .then(
        res=>{
           let data =  res.data;
        //    let final_data=[];
       
        //      for(let i=page*10-10 ;i<page*10 && i<data.length ;i++){
        //     final_data.push(data[i])
        //     }
        
          setMeals(data)
        }
    )
    .catch(
        err => console.log(err)
    )
}