import { Box, Center, Image, Flex, Badge, Text,Spacer } from "@chakra-ui/react";
function Navbar(){

    return (
        <>
        <Box h={{base:"5rem",lg:'5rem' ,sm:"5rem", md:"1rem"}} w={{base:"80%",sm:"100%", md:"90%"}} m={'auto'} border={"1px solid green"}>
         <Flex>
          <Image h={'100%'} w={'40%'} src="https://www.kindmeal.my/images/logo-kindmeal.png"></Image>  
         </Flex>
        </Box>
        </>
    )

}

export default Navbar;