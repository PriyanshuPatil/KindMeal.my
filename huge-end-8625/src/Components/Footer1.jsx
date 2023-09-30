import { Box, Center, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

export default function Footer1(){
    const Props1 = {
        src:'https://www.kindmeal.my/images/intro_deal.png',
        heading:'Get Great Deals',
        text:'Show our FREE digital coupons to instantly enjoy exciting deals'
    }
    const Props2 = {
        src:'https://www.kindmeal.my/images/intro_kindmoment.png',
        heading:'Share KindMoments',
        text:'Spread the joy by sharing your yummy dining moments'
    }
    const Props3 = {
        src:'https://www.kindmeal.my/images/intro_menu.png',
        heading:'Discover Delicious Food',
        text:'Explore the latest exquisite offerings and creative menus'
    }
    const Props4 = {
        src:'https://www.kindmeal.my/images/intro_friends.png',
        heading:'Meet Food Lovers',
        text:'Make new, compassionate friends and share great food tips'
    }
    return (
        <>
            <Center w={{ base: "70%", sm:"70%", md:"90%" }} m='auto' >
               
                <Box mt='50px' mb='30px'  >
                    <Heading fontSize={{ base:"20px" , sm:"10px", md:"25px" }} color='#666666'>Introducing The World's 1st Meat-Free Lifestyle Platform</Heading>
                    <Flex justifyContent='center' mt={5} mb='30px'  gap={5}  >
                        <Text color='#999999' fontSize='2vw'  >Brought to you by</Text><Image w='32%'  src="https://www.kindmeal.my/images/logo-petfinder.png" ></Image>
                    </Flex>
                    <Text color='#888888'fontSize='2vw' >Instant coupon & dining. No upfront coupon payment, booking or printing.</Text>
                </Box>
            </Center>


            <Center w={{ base:"90%" , sm:"90%", md:"70%" }} m='auto' >
                <Box w='90%' m={"auto"} >
                    <Grid gap={{ base:2 , sm:2, md:8 }} gridTemplateColumns={{ base:"repeat(4,1fr)" , sm:"repeat(4,1fr)", md:"repeat(4,1fr)" }} >
                        <Card props={Props1}     />
                        <Card props={Props2}     />
                        <Card props={Props3}     />
                        <Card props={Props4}     />
                    </Grid>
                </Box>
            </Center>



            <Center w='70% ' m='auto' >
                <Text w='80% ' mt='20px' mb='20px'  fontSize='1.5vw' color='#666666'  >Any restaurant or cafe can join KindMeal, vegetarian or not, as long as the deals and menu featured are meat-free.
                Enjoy a great meat-free dining experience. Easily save animal lives, health, environment and money now!</Text>
            </Center>
            <Center w='70% ' m='auto' >
                <Box  mt='20px' mb='15px' rounded={10}  bg='red.500' p={5} color='#fff' >
                    <Text fontSize={{ base: 15, sm: 20, md: 30 }} >Join KindMeal Now</Text>
                    <Text fontSize={{ base: 8, sm: 17, md: 15 }} >Your tasty journey begins here</Text>   
                </Box>
            </Center>
            <Center w='70% ' m='auto' >
            <Text w='80% ' mt='10px' mb='10px'  fontSize='2vw' color='#888888'  >As Featured In</Text>
            </Center>

            <Box >
                <Image w='70% ' m='auto'   mt='10px' mb='20px'  src='https://www.kindmeal.my/images/media-feature2.png'  />
            </Box>

            <Box >
                <Image w='80% ' m='auto' src="https://www.kindmeal.my/images/banner_whykindmeal.png" alt="home_footer_image" />
            </Box>

        </>
    )
}



function Card({props}){
    return(
        <Center >
            <Flex className="featureCard" rounded='20px' p={4}  flexDirection='column' justifyContent='center' alignItems='center' color='#666666'  >
                <Image src={props.src}  w='80%'       />
                <Text fontSize='1.55vw'  > {props.heading}  </Text>
                <Text fontSize='0.95vw' > {props.text} </Text>
            </Flex>
        </Center>
    )
}