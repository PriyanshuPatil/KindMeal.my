import { Box,Flex,Spacer,Heading ,Button} from '@chakra-ui/react';

export function AdminCard({data,ondelite,onupdate}){

   const {quantity,status,price,username,_id} =data
    return (
        <>
        <Box display={"grid"}  gridTemplateColumns={{base:'repeat(1, 1fr)',sm:'repeat(1, 1fr)', md:'repeat(6, 1fr)',lg:'repeat(6, 1fr)' }}  bg='gray.400' color='green' textAlign={"center"} gap='10px' w='80%' m='auto' p="1% 3%" mt='3px' fontSize={'15px'} borderWidth="1px" borderRadius="lg" overflow="hidden">
   
            <Heading m='auto' fontFamily={'Monospace'} color={'purple'} fontSize={{base:'18px',sm:'18px', md:'18px',lg:'22px' }} ml='5px' >{_id.slice(-4)}</Heading >
            <Heading m='auto' color={'yellow.900'}  ml='5px' fontSize={{base:'18px',sm:'18px', md:'18px',lg:'22px' }} >Qty:- {quantity}</Heading>
              <Heading m='auto' color={'yellow.900'}  ml='5px' fontSize={{base:'18px',sm:'18px', md:'18px',lg:'22px' }} >₹ {price}</Heading>
              <Heading m='auto' color={'yellow.900'}  ml='5px' fontSize={{base:'18px',sm:'18px', md:'18px',lg:'22px' }} >{username}</Heading>
              <Heading m='auto' color={'yellow.900'}  ml='5px' fontSize={{base:'18px',sm:'18px', md:'18px',lg:'22px' }} >{status?"Done":"Panding.."}</Heading>
            <Box gap='10px'  ml='5px'>
               <Button ml='5px'   border='3px solid black'onClick={()=>{onupdate(_id,{...[data],status:!status})}}  _hover={{color:"black"}} fontWeight={'500'} fontSize='17px' bg={'green'} color='white'>Confirm</Button>
                <Button ml='5px'  border='3px solid black' onClick={()=>{ondelite(_id)}} fontWeight={'500'}  fontSize='17px' bg={'yellow'} >Cancel</Button>
              
            </Box>
           
        </Box>
        </>
    )
}

export function OrderList(){

   
     return (
         <>
         <Box  bg='gray.800' color='black' gap='0px' w='80%' m='auto' p="1% 3%" mt='3px'  fontSize={'15px'} borderWidth="1px" borderRadius="lg" overflow="hidden" display={'flex'}>
    
             <Heading m='auto' fontFamily={'Monospace'}  color={'white'} fontSize={'20px'} textAlign={"center"} >Order List :-</Heading >
            
         </Box>
         </>
     )
 }