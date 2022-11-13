import { Box, Image, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export function KindCard({property}) {

  return (
    <Box bg='gray.200'  maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" >
        <Box>
            <Image  src={property.imageUrl} alt={property.imageAlt} w='450px' h='320px' />
        </Box>
      

      <Box p="6" m='auto'>
       <Box
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
          fontSize='27px'
          mt='10px' 
          textAlign='left'
        >
          {property.title}
        </Box> 
         </Box>
    </Box>
  );
}
