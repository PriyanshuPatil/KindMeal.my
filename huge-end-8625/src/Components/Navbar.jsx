import { Box, Center, Image, Flex,Tabs,TabList,Tab,TabPanel,TabPanels, Badge, Text,Spacer ,Button,ButtonGroup,HStack,useDisclosure} from "@chakra-ui/react";
import { useContext } from "react";
import { Appcontext } from "../Context/Appcontext";
import Home from "../Pages/Home";
import LoginModal from "./Login";
import SignupModal from "./Signup";
import Deals from "../Pages/Deals";
import Kinds from "../Pages/Kind";
function Navbar(){
const {isAuth}=useContext(Appcontext)
    return (
        <>
        <Box h={{base:"auto",lg:'5rem' ,sm:"auto", md:"3rem"}} w={{base:"100%",lg:"75%", sm:"100%", md:"90%"}} m={'auto'} >
         <Flex>
          <Image h={{base:"5rem",lg:'5rem' ,sm:"5rem", md:"3rem"}} w={{base:"40%",sm:"30%", md:"30%"}} src="https://www.kindmeal.my/images/logo-kindmeal.png" m='auto'  ></Image>  
         <Spacer/>
         <Box display={'flex'} gap={{base:"5px",lg:'30pxrem' ,sm:"20pxrem", md:"15pxrem"}} ml='10%'>
            <Image w={{base:"1.5rem",lg:'2rem' ,sm:"2rem", md:"2.5rem"}} h={{base:"1.5rem",lg:'2rem' ,sm:"2rem", md:"1.5rem"}} m='auto' src="https://www.kindmeal.my/images/follow_blog_grey.png"></Image>
            <Image w={{base:"1.5rem",lg:'2rem' ,sm:"2rem", md:"2.5rem"}} h={{base:"1.5rem",lg:'2rem' ,sm:"2rem", md:"1.5rem"}} m='auto' src="https://www.kindmeal.my/images/follow_facebook_grey.png"></Image>
            <Image w={{base:"1.5rem",lg:'2rem' ,sm:"2rem", md:"2.5rem"}} h={{base:"1.5rem",lg:'2rem' ,sm:"2rem", md:"1.5rem"}} m='auto' src="https://www.kindmeal.my/images/follow_twitter_grey.png"></Image>
         </Box>
         <Spacer/>
        
       {isAuth.auth && <NAV_After isAuth={isAuth}/> || <NAV_Before/>}
         </Flex>
        </Box>
        <Box background={'white'}>
       
        <Tabs variant='unstyled'  >
          <Box  w={'100%'} m='auto' bg='green.400' >
  <TabList color='white' gap='15px' fontSize={'14px'} bg='green.400' w={'75%'} m='auto' ml='auto'>
    <Tab _selected={{ color: 'white', bg: 'green.600' }}>Home</Tab>
    <Tab _selected={{ color: 'white', bg: 'green.600' }}>Meal Deals</Tab>
    <Tab _selected={{ color: 'white', bg: 'green.600' }}>Kind Moments</Tab>
    <Tab _selected={{ color: 'white', bg: 'green.600' }}>Hot Picks</Tab>
    <Tab _selected={{ color: 'white', bg: 'green.600' }}>Recipies</Tab>
    <Tab _selected={{ color: 'white', bg: 'green.600' }}>Directory</Tab>
    <Tab _selected={{ color: 'white', bg: 'green.600' }}>Articles</Tab>
    <Tab _selected={{ color: 'white', bg: 'green.600' }}>Help</Tab>
  </TabList>
  </Box>
  <Box bg='white' w={'75%'} m='auto' >
  <TabPanels >
    <TabPanel>
      <Home/>
    </TabPanel>
    <TabPanel>
   <Deals/>
    </TabPanel>
    <TabPanel>
      <Kinds/>
    </TabPanel>
  </TabPanels>
  </Box>
</Tabs>
        </Box>
        </>
    )

}


function NAV_After({isAuth}){

  return (
    <Box  gap={{base:"5px",lg:'5px' ,sm:"5px", md:"5px"}}  display={'grid'} gridTemplateColumns={{base:'repeat(2, 1fr)',lg:'repeat(4, 1fr)' ,sm:'repeat(2, 1fr)', md:'repeat(2, 1fr)'}}>
    <Image w={{base:"1.5rem",lg:'2rem' ,sm:"2rem", md:"2.5rem"}} h={{base:"1.5rem",lg:'2rem' ,sm:"2rem", md:"1.5rem"}} m='auto' src="https://www.kindmeal.my/images/icon_notice.png"></Image>
      <Box m="auto" fontSize={'14px'} color={'grey'} >{isAuth.user}</Box>
      <Image w={{base:"1.5rem",lg:'2rem' ,sm:"2rem", md:"2.5rem"}} h={{base:"1.5rem",lg:'2rem' ,sm:"2rem", md:"1.5rem"}} m='auto' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHwAjgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAwYCB//EADYQAAIBAgQEBQEFCAMAAAAAAAABAgMEBREhMRIiQVETMmFxgVIUI3LB0TNCgpGSoeHwJENT/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APtQAAAAAARLm/pUc4r7yfZdPkCWYlKMfPKMfdlJWv7irnzcEe0dCM23q22/UDoHc0P/AGh/MzGvRltVh/Uc6AOlTzWa1Rk5yFWdN5wnKPsyZQxOpHSslJd+oFuDVQr068c6b+OptAAAAAAAAAGG0k22klq2+hkqMSuvEk6NN8ifM11YC9xCVVuFBuNPrJbyIAAAei3ZutredzUUYaJat9EXVvbUrdckebrJ7sCljbXEvLRn8rI8zo1qaznSnFd+HQ6IAcyC6u7CnWTlTyhU9Nn7lNKLhNwmmpLRpgZhKVOSlBuLXVFvZX0a6UKjyn0fcpjKbTTTyaA6UESwuvtFPhl547+pLAAAAAAI2IV/At24+eWkf1KJEzFaviXTgvLTWXz1IYAytXktzBstlxXFNPbiQF3Z0FQoRj+89ZG8AAAABW4vQXDGvFarll7dP99SyNF8k7Osn9OYFAAgBtt6roVlUj8ov4SU4KUdmtDm2XGE1eOg4PeDAnAAAAeamkJezA52c/EnKf1Ns8iOwAHulLgqwl2eZ4DA6WLTSa1T2Mlfhl0pwVGb5l5fUsAAAAETE6ihZzXWXKiU2ks3ot9SkxC6+0VUov7uG3r6gRUAABOwmeVw49HEgkrDX/zKYF4AABhriWXfQyAOZSyWTBuvYOldVYdOLNez1NIGYpyajFZtvJZFlb4XFpSuJPP6Y9PkYTbrWvJekf1LMCnvLCVF+Lb5uC1yW8T1b4m4rKtHi9UWxHr2VCs85Qyl9UdGB5WIWzWs2vg8VMSt4rl4pPskanhMelaSXqkeoYTTT56s5LsskBDuLutdtQiuGL2hHXP3JVthkPDzuM+J9E/KTaNvSoLKlBR7vqzaBTXmHyoRc6T44LfTVEI6YoL2h9nuZRS5XrH2A0EvDI53kH2TZELLBoc85voskBaAAAAAKzGKOkK6W3LL8is3OjqQjUg4TWcZLJlBWpTt6zhLeL0fddwL22h4dvTj2RtI1jdRuKSz0mt13JIAAAAAAAAAr8Zp8VGnPrGWXwywKrFLtTzoU2mk+Z+vYCu3L6xo+BbRi1zPVlbhlv41XxJLkh36sugAAAAAARr21VzDTScfK/yJIA53Orb1dM4ziW1pf06yUZ8s/wCzNt1a07mOUllJbSW6Ki4tKttrJcUPritPnsBfAoaN9WpZJS4o9nqTaeKwfnptfhYFiCGsStn1kvgxLE7dbcb+AJpiUowi5TkoxXVsrKuKyelGmo+stSBWrVK0vvZyl2QE29xHxM6dvnGOzk937EW0tp3NRRjol5pdkb7XDqlVqVXOnDfL95ltTpwpQUKcVFIBSpxpU1CCySPYAAAAAAAAAAAARa1hb1Xnw8Eu8NP8ESeEy/660cu0lkWoApXhlz08P4kzKwu4e7pr+JlyAKynhSX7Wq3+FE2ha0aH7OCz+p6s3AAAAAAAAAD/2Q==" borderRadius={'100%'} ></Image>
    </Box>
  )
}

function NAV_Before(){

  return (
    <HStack m="10px" display={'grid'} gridTemplateColumns={{base:'repeat(4, 1fr)',lg:'repeat(4, 1fr)' ,sm:'repeat(1, 1fr)', md:'repeat(2, 1fr)'}} >
   <LoginModal/>
  <Button colorScheme='facebook' onClick={()=>{alert("Plz Try To Login With User-ID & Password ")}} w='60px' fontSize={'12px'}>
    Facebook
  </Button>
  <Button colorScheme='green'  onClick={()=>{alert("Plz Try To Login With User-ID & Password ")}} w='60px' fontSize={'12px'}>
    Email
  </Button>
  <SignupModal/>
</HStack>
  )
}



export default Navbar;