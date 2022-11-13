import { Box, Switch } from "@chakra-ui/react"
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react"
import { SwitchContext } from "../Context/Switchcontext"
export function Switching(){

    return (
        <Box w='15%' ml='70%' mt='1%'  p='5px 5px' background={'gray.200'} color='blue' borderRadius={'20px'} border='2px solid green' box-shadow='rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'>
            user
        
                <Switch m='10px 10px' size='lg' ></Switch>
   
     Admin
        </Box>
    )
}