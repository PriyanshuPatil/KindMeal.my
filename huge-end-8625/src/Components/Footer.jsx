import {  Box, Container, SimpleGrid, Stack, Text} from '@chakra-ui/react';
function Footer() {
    return (
      <Box bg='green.400'color={'white'} textAlign='left'>
        <Container as={Stack} maxW={'maxContent'} px={40} py={10}>

          <SimpleGrid columns={{ base: 1, sm: 3, md: 5 }} spacing={8}>
            <Stack align={'flex-start'} >
              <Text fontWeight={'500'} fontSize={'sm'} mb={2}>General</Text>
              <Box fontSize={'11px'}  m="0rem" >Home</Box>
              <Box fontSize={'11px'}  m="0rem" >Sign Up</Box>
              <Box fontSize={'11px'}  m="0rem" >Businesses / Restaurateurs</Box>
              <Box fontSize={'11px'}  m="0rem" >Advertising</Box>
              <Box fontSize={'11px'}  m="0rem" >About KindMeal.my</Box>
              <Box fontSize={'11px'}  m="0rem" >Help & FAQ</Box>
              <Box fontSize={'11px'}  m="0rem" >Terms & Conditions</Box>
              <Box fontSize={'11px'}  m="0rem" >Inspiring Partners</Box>
              <Box fontSize={'11px'}  m="0rem" >Lifestyle Ambassadors</Box>
              <Box fontSize={'11px'}  m="0rem" >Jobs & Careers</Box>
              <Box fontSize={'11px'}  m="0rem" >Contact Us</Box>
            </Stack>



            <Stack align={'flex-start'} maxW={'maxContent'}>
              <Text fontWeight={'500'} fontSize={'sm'} mb={2}>Features</Text>
              <Box fontSize={'11px'}  m="0rem" >Meat-Free Deals</Box>
              <Box fontSize={'11px'}  m="0rem" >Tasty Menus</Box>
              <Box fontSize={'11px'}  m="0rem" >Kind Moments</Box>
              <Box fontSize={'11px'}  m="0rem" >Meat-Free Recipes</Box>
              <Box fontSize={'11px'}  m="0rem" >Member Recommendations</Box>
              <Box fontSize={'11px'}  m="0rem" >Featured Restaurants</Box>
              <Box fontSize={'11px'}  m="0rem" >Vegetarian & Vegan Directory</Box>
              <Box fontSize={'11px'}  m="0rem" >Food Map</Box>
              <Box fontSize={'11px'}  m="0rem" >Become A Superhero</Box>
              <Box fontSize={'11px'}  m="0rem" >Vegan News & Vegetarian Articles</Box>
              <Box fontSize={'11px'}  m="0rem" >Latest Comments</Box>
            </Stack>



            <Stack align={'flex-start'}>
              <Text fontWeight={'500'} fontSize={'sm'} mb={2}>Social Media</Text>
              <Box fontSize={'11px'}  m="0rem" >KindMeal Widget</Box>
              <Box fontSize={'11px'}  m="0rem" >Facebook</Box>
              <Box fontSize={'11px'}  m="0rem" >Twitter</Box>
              <Box fontSize={'11px'}  m="0rem" >Instagram</Box>
            </Stack>



            <Stack align={'flex-start'} maxW={'maxContent'}>
              <Text fontWeight={'500'} fontSize={'sm'} mb={2}>Mobile</Text>
              <Box fontSize={'11px'}  m="0rem" >iPhone & iPod App</Box>
              <Box fontSize={'11px'}  m="0rem" >Android App</Box>
              <Stack align={'flex-start'}>


              <Text fontWeight={'500'} fontSize={'sm'} mb={2}>Exciting Promos</Text>
              <Box fontSize={'11px'}  m="0rem" >Gadhimai: Ending Mass Slaughter</Box>
              <Box fontSize={'11px'}  m="0rem" >Free Meals</Box>
              <Box fontSize={'11px'}  m="0rem" >Food Bloggers</Box>
              <Box fontSize={'11px'}  m="0rem" >Uber CHIRP</Box>
              <Box fontSize={'11px'}  m="0rem" >Jane Goodall Contest</Box>
              <Box fontSize={'11px'}  m="0rem" >Win Digi iPhone 6</Box>
              <Box fontSize={'11px'}  m="0rem" >Feed The Poor</Box>
              <Box fontSize={'11px'}  m="0rem" >Win Superhero Gifts</Box>
              <Box fontSize={'11px'}  m="0rem" >Win an iPad Mini 3</Box>
            </Stack>



            </Stack>
            <Stack align={'flex-start'}>
              <Text fontWeight={'500'} fontSize={'sm'} mb={2}>Pet Finder.my</Text>
              <Box fontSize={'11px'}  m="0rem" >Adopt A Pet</Box>
              <Box fontSize={'11px'}  m="0rem" >Smartphone Apps</Box>
              <Box fontSize={'11px'}  m="0rem" >WAGazine</Box>
              <Box fontSize={'11px'}  m="0rem" >Discussion Forum</Box>
              <Box fontSize={'11px'}  m="0rem" >Medical Fund</Box>
            </Stack>



          </SimpleGrid>
        </Container>


        <Box py={10}>
          <Text fontSize="11px" textAlign={'center'} pt={3}  >
              Copyright © KindMeal.my, 2014 - 2022. All rights reserved.
          </Text>
          <Text fontSize="11px" textAlign={'center'}   pt={3}>
          This website promotes compassionate, meat-free dining experience. Some food may contain eggs, dairy products or alcohol, please view individual listings for details.
          </Text>
        </Box>
      </Box>
    );
  }

  export default Footer ;