import { Box, Image, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Slider } from "./Slider";
export function KindCard2({property}) {

  return (
    <Box>

    <Box display={"flex"} gap='100px' w='80%' m='3% 10%' bg='gray.200'p='2% 4%' box-shadow='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'>
    <Box bg='gray.200'  maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" >
        <Box>
            <Image  src={property.imageUrl} alt={property.imageAlt} w='650px' h='500px' />
        </Box>
    </Box>
    <Box w='40%' m='auto' fontSize={'20px'} fontWeight='500' textAlign={'left'} >
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
