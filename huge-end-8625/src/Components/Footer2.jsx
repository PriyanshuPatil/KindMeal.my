import { Box, Container, Link, SimpleGrid, Stack,  Text, useColorModeValue, } from '@chakra-ui/react';

const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'sm'} mb={2}>
        {children}
      </Text>
    );
  };
  
  const List = ({ children,href }) => {
    return (
      <Link href={href}  fontSize={'12px'}  m="0rem">
        {children}
      </Link>
    );
  };

  export default function Footer2() {
    return (
      <Box
        bg='green.400'
        color='white' >
        <Container as={Stack}  maxW={'maxContent'} alignItems={"center"} py={10} textAlign='left'>
          <SimpleGrid w={"70%"} m={"auto"} columns={{ base: 2, sm: 3, md: 5 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>General</ListHeader>
              <List href={'#'}>Home</List>
              <List href={'#'}>Sign Up</List>
              <List href={'#'}>Businesses / Restaurateurs</List>
              <List href={'#'}>Advertising</List>
              <List href={'#'}>Jobs & Careers</List>
              <List href={'#'}>Contact Us</List>
            </Stack>
            <Stack align={'flex-start'} maxW={'maxContent'}>
              <ListHeader>Features</ListHeader>
              <List href={'#'}>Meat-Free Deals</List>
              <List href={'#'}>Tasty Menus</List>
              <List href={'#'}>Kind Moments</List>
              <List href={'#'}>Meat-Free Recipes</List>
              <List href={'#'}>Member Recommendations</List>
              <List href={'#'}>Featured Restaurants</List>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Social Media</ListHeader>
              <List href={'#'}>KindMeal Widget</List>
              <List href={'#'}>Facebook</List>
              <List href={'#'}>Twitter</List>
              <List href={'#'}>Instagram</List>
            </Stack>
            <Stack align={'flex-start'} maxW={'maxContent'}>
              <ListHeader>Mobile</ListHeader>
              <List href={'#'}>iPhone & iPod App</List>
              <List href={'#'}>Android App</List>
              <Stack align={'flex-start'}>
              <List href={'#'}>Gadhimai: Ending Mass Slaughter</List>
              <List href={'#'}>Uber CHIRP</List>
            </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box pb={10} >
          
          <Text pt={2} fontSize={{ base: 10, sm: 3, md: 10 }} textAlign={'center'} w={"80%"} m={"auto"}>
              Copyright © KindMeal.my, 2014 - 2022. All rights reserved.
          </Text>
          <Text pt={2} w={"80%"} margin={"auto"} fontSize="10px" textAlign={'center'}>
          This website promotes compassionate, meat-free dining experience. Some food may contain eggs, dairy products or alcohol, please view individual listings for details.
          </Text>
        </Box>
      </Box>
    );
  }