import { Card } from "./Card"
import { Box,Heading } from "@chakra-ui/react"
import { useState } from "react"
import { useEffect } from "react";
import { BookingConfirm } from "./BookingConfirm";
import { Appcontext } from "../Context/Appcontext";
import { useContext } from "react";
export function Menu(){
  const {isAuth}=useContext(Appcontext) ;
    const [rice1,setrice1]=useState(0);
    const [rice2,setrice2]=useState(0);
    const [rice3,setrice3]=useState(0);
    const [rice4,setrice4]=useState(0);
    const [rice5,setrice5]=useState(0);
    const [rice6,setrice6]=useState(0);
  const [total,setTotal]=useState(0) ;
  useEffect(()=>{
    setTotal(rice1*10+rice2*189+rice3*245+rice4*220+rice5*90+rice6*70)
  },[rice1,rice2,rice3,rice4,rice5,rice6])
const inc1=()=>{
setrice1(rice1-1) ;
}
const dec1=()=>{
setrice1(rice1+1) ;
}
const inc2=()=>{
 setrice2(rice2-1) ;
    }
    const dec2=()=>{
    setrice2(rice2+1) ;
    }    
    const inc3=()=>{
        setrice3(rice3-1) ;
           }
           const dec3=()=>{
           setrice3(rice3+1) ;
           }   
           const inc4=()=>{
            setrice4(rice4-1) ;
               }
               const dec4=()=>{
               setrice4(rice4+1) ;
               }   
               const inc5=()=>{
                setrice5(rice5-1) ;
                   }
                   const dec5=()=>{
                   setrice5(rice5+1) ;
                   }  
                   const inc6=()=>{
                    setrice6(rice6-1) ;
                       }
                       const dec6=()=>{
                       setrice6(rice6+1) ;
                       }  

    return (
        <>
          <HotalMenuList/>
        <Card Count={rice1} Price={10} Item={"Tanduri Roti"} handleone={inc1} handletwo={dec1} />
        <Card Count={rice2} Price={189} Item={"Kaju Curry "} handleone={inc2} handletwo={dec2} />
        <Card Count={rice3} Price={245} Item={"Paneer Tikka"} handleone={inc3} handletwo={dec3} />
        <Card Count={rice4} Price={220} Item={"Chana Masala"} handleone={inc4} handletwo={dec4} />
        <Card Count={rice5} Price={90} Item={"Gulab Jamun"} handleone={inc5} handletwo={dec5} />
        <Card Count={rice6} Price={70} Item={"Shahi Pulao"} handleone={inc6} handletwo={dec6} />
        <Total total={total}/>
        <BookingConfirm 
        
        data1={
          {"item":"Tanduri Roti","quantity": rice1,"status":false,price:"10","username":isAuth.username,"total":total  }
        }
        data2={
          {"item":"Kaju Curry","quantity": rice2,"status":false,price:"189" ,"username":isAuth.username ,"total":total }
        }
        data3={
          {"item":"Paneer Tikka","quantity": rice3,"status":false,price:"245"  ,"username":isAuth.username,"total":total }
        }
        data4={
          {"item":"Chana Masala","quantity": rice4,"status":false,price:"220" ,"username":isAuth.username ,"total":total }
        }
        data5={
          {"item":"Gulab Jamun","quantity": rice5,"status":false,price:"90" ,"username":isAuth.username,"total":total  }
        }
        data6={
          {"item":"Shahi Pulao","quantity": rice6,"status":false,price:"70" ,"username":isAuth.username }
        } />
        </>
    )
}


function HotalMenuList(){
    return (
  <Box  fontFamily={'Monospace'}  bg='gray.400' color='green' gap='0px' w='100%' m='auto' mt='5px' mb='5px' p="1% 3%"  fontSize={'15px'} borderWidth="1px" borderRadius="lg" overflow="hidden" display={'flex'}>
   
    <Heading marginLeft={{base:'38%',sm:'40%', md:'43%',lg:'45%' }} color={'black'} fontSize={{base:'18px',sm:'25px', md:'28px',lg:'32px' }} alignItems={"center"} textAlign={'center'} fontFamily={'Monospace'}>Hotal Menu</Heading >
  </Box>)
}

function Total(props){
    const {total}=props ;
    return (<Box  fontFamily={'Monospace'}  bg='gray.400' color='green' gap='0px' w='100%' m='auto' mt='5px' mb='5px' p="1% 3%"  fontSize={'15px'} borderWidth="1px" borderRadius="lg" overflow="hidden" display={'flex'}>
   
    <Heading marginLeft={{base:'40%',sm:'40%', md:'43%',lg:'45%' }} color={'black'} fontSize={{base:'px',sm:'25px', md:'28px',lg:'32px' }} textAlign={'center'} fontFamily={'Serif'}>Total:- ₹{total}</Heading >
  </Box>)
}


