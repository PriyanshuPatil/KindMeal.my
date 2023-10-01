import { Box, Image, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Slider } from "./Slider";
export function KindCard2({property}) {

  return (
    <Box>
    <Box display={"grid"} gap={"20px"} gridTemplateColumns={{base:'repeat(1, 1fr)',sm:'repeat(1, 1fr)', md:'repeat(2, 1fr)',lg:'repeat(2, 1fr)' }}  w='80%' m='3% 10%' bg='gray.200'p='2% 4%' box-shadow='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'>
    <Box bg='gray.200'  maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" >
        <Box>
            <Image  src={property.imageUrl} alt={property.imageAlt} w={{base:'400px',sm:'500px', md:'600px',lg:'500px' }} h={{base:'300px',sm:'350px', md:'400px',lg:'420px' }} />
        </Box>
    </Box>
    <Box w={{base:'90%',sm:'80%', md:'60%',lg:'60%' }} m='auto' fontSize={{base:'14pxpx',sm:'16px', md:'18px',lg:'20px' }} fontWeight='500' textAlign={'left'} >
<Box
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
          fontSize='27px'
          mt='10px' 
          textAlign='left'
          color='blue'
          mb='30px'
        >
          {property.title}
        </Box> 
    {property.about}
    </Box>
    </Box>
        <Slider  />
 </Box>
  );
}
