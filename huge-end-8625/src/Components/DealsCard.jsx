import { Box, Image, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
export function DealsCard({property}) {
  return (
    <Box bg='gray.200' w='90%' m='auto' fontSize={'19px'} mt='3%' borderWidth="1px" borderRadius="lg" overflow="hidden" display={"grid"} gap={"20px"} gridTemplateColumns={{base:'repeat(1, 1fr)',sm:'repeat(1, 1fr)', md:'repeat(2, 1fr)',lg:'repeat(2, 1fr)' }} >
        <Box>
            <Image  src={property.imageUrl} alt={property.imageAlt} w="100%" h={{base:'200px',sm:'250px', md:'280px',lg:'320px' }} />
        </Box>
      

      <Box p="6" m='auto'>
       <Box
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
          fontSize={{base:'=22px',sm:'22px', md:'25px',lg:'27px' }}
          mt='10px' 
          textAlign='center'
        >
          {property.title}
        </Box> 
        
        <Box display="flex" alignItems="baseline" mt='10px' >
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
         
        </Box>
         
      </Box>
    </Box>
  );
}
