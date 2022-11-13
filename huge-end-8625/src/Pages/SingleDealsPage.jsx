import {Box,Image} from '@chakra-ui/react'
import {useParams} from 'react-router-dom' ;
import {KindsDataOne} from '../Api/Axios' ;
import {Spinner,Grid,LinkBox } from '@chakra-ui/react' ;
import { KindCard2 } from '../Components/KindCard2';
import { useEffect } from "react";
import { useState } from "react";
function SingleDealsPage(){
    const { sweet } = useParams();
    const [meals,setMeals]=useState([]);
    const [loading,setloading]=useState(false);
    useEffect(()=>{
        setloading(true);
    GetaData(setMeals,sweet);
    setloading(false)
    },[])

    if(loading){
        return <Spinner/>
    }

    return (
        <Box  align='center'>
      <KindCard2 property={meals}/>
    </Box>
    )

}
export default SingleDealsPage ;





function GetaData(setMeals,sweet){   

    KindsDataOne(sweet)
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