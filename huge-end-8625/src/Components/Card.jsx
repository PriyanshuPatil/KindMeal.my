import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Box,Flex,Spacer,Heading ,Button} from '@chakra-ui/react';
export function Card(props){
    const {Count=0,Price=0,Item="Rice",handleone,handletwo}=props ;
    return (
        <>
        <Box  bg='gray.400' color='green' gap='0px' w='100%' m='auto' p="1% 3%" mt='3px' fontSize={'15px'} borderWidth="1px" borderRadius="lg" overflow="hidden" display={'flex'}>
   
            <Heading m='auto' fontFamily={'Monospace'} color={'purple'} fontSize={{base:'18px',sm:'20px', md:'20px',lg:'25px' }} ml='5px' >{Item}</Heading >
            <Heading m='auto' color={'yellow.900'}  ml='5px' fontSize={{base:'18px',sm:'18px', md:'20px',lg:'25px' }}>{Price}₹</Heading>
            <Box gap='10px'  ml='5px' display={'grid'} gridTemplateColumns={{base:'repeat(1, 1fr)' ,sm:'repeat(3, 1fr)', md:'repeat(3, 1fr)',lg:'repeat(3, 1fr)'}}>
                <Button ml='5px' disabled={Count==0} onClick={()=>{handleone()}} border='3px solid black' fontWeight={'500'} fontSize={{base:'15px',sm:'12px', md:'18px',lg:'25px' }} bg={'yellow'} h='25px' w='25px'>-</Button>
                <Button ml='5px' fontWeight={'500'} fontSize={{base:'15px',sm:'15px', md:'18px',lg:'25px' }} padding={0} bg={'white'} border='3px solid black' color='black' >{Count}</Button>
                <Button ml='5px' disabled={Count==5} onClick={()=>{handletwo()}} border='3px solid black' fontWeight={'500'}  fontSize={{base:'15px',sm:'12px', md:'18px',lg:'25px' }} bg={'yellow'} h='25px' w='25px'>+</Button>
            </Box>
           
        </Box>
        </>
    )
}