import { Box,Flex,Spacer,Heading ,Button} from '@chakra-ui/react';

export function AdminCard({data,ondelite,onupdate}){

   const {item,quantity,status,price,username,id} =data
    return (
        <>
        <Box  bg='gray.400' color='green' gap='0px' w='80%' m='auto' p="1% 3%" mt='3px' fontSize={'15px'} borderWidth="1px" borderRadius="lg" overflow="hidden" display={'flex'}>
   
            <Heading m='auto' fontFamily={'Monospace'} color={'purple'} fontSize={'20px'} ml='5px' >{item}</Heading >
            <Heading m='auto' color={'yellow.900'}  ml='5px' fontSize={'16'}>Quantity :- {quantity}</Heading>
              <Heading m='auto' color={'yellow.900'}  ml='5px' fontSize={'20'}>₹ {price}</Heading>
              <Heading m='auto' color={'yellow.900'}  ml='5px' fontSize={'16'}>{username}</Heading>
              <Heading m='auto' color={'yellow.900'}  ml='5px' fontSize={'16'}>{status?"Done":"Panding.."}</Heading>
            <Box gap='10px'  ml='5px'>
               <Button ml='5px'   border='3px solid black'onClick={()=>{onupdate(id,{...[data],status:!status})}}  _hover={{color:"black"}} fontWeight={'500'} fontSize='17px' bg={'green'} color='white'>Confirm</Button>
                <Button ml='5px'  border='3px solid black' onClick={()=>{ondelite(id)}} fontWeight={'500'}  fontSize='17px' bg={'yellow'} >Cancel</Button>
              
            </Box>
           
        </Box>
        </>
    )
}

export function OrderList(){

   
     return (
         <>
         <Box  bg='gray.800' color='black' gap='0px' w='80%' m='auto' p="1% 3%" mt='3px'  fontSize={'15px'} borderWidth="1px" borderRadius="lg" overflow="hidden" display={'flex'}>
    
             <Heading m='auto' fontFamily={'Monospace'}  color={'white'} fontSize={'20px'} ml='48%' >Order List :-</Heading >
            
         </Box>
         </>
     )
 }