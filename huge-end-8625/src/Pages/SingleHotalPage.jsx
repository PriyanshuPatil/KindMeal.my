import {Box,Image} from '@chakra-ui/react'
import {useParams} from 'react-router-dom' ;
import {DealsDataOne} from '../Api/Axios' ;
import {Spinner,Grid,LinkBox } from '@chakra-ui/react' ;
import { HotalCard } from '../Components/HotalCard';
import { useEffect } from "react";
import { useState } from "react";
import { Menu } from '../Components/Menu';

function SingleHotalPage(){
    const { hotal } = useParams();
    const [meals,setMeals]=useState([]);
    const [loading,setloading]=useState(false);
    useEffect(()=>{
        setloading(true);
    GetaData(setMeals,hotal);
    setloading(false)
    },[])

    if(loading){
        return <Spinner/>
    }

    return (
        <Box bg='black' p='50px' pb="500px">
            <Box  align='center'  w='80%' m='auto' >
      <HotalCard property={meals}/>
     
      <Menu/> 
    
    </Box> 
        </Box>
       
    )
}

export default SingleHotalPage ;


function GetaData(setMeals,hotal){    console.log(hotal);

    DealsDataOne(hotal)
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