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
        
        {/* <Box display="flex" alignItems="baseline" mt='10px' >
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {property.off}% OFF
          </Badge>
          
          <Badge ml='10px' fontSize="11px" color='green.800' >
            {property.location}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            open 
          </Box>
        </Box>

        
        
        <Box display="flex"  alignItems="center" ml='20px' mt='10px' >
          {new Array(5).fill("").map((_, i) => (
            <StarIcon
              key={i}
              color={i < property.rating ? "teal.500" : "gray.300"}
            />
          ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.rating} rating
          </Box>
         
        </Box> */}
         
      </Box>
    </Box>
  );
}
