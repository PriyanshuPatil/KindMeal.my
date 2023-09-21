import { Box, Center, Image, Flex,Tabs,TabList,Tab,TabPanel,TabPanels, Badge, Text,Spacer ,Button,ButtonGroup,HStack,useDisclosure, Spinner} from "@chakra-ui/react";
import { useContext } from "react";
import { Appcontext } from "../Context/Appcontext";
import Home from "../Pages/Home";
import LoginModal from "./Login";
import SignupModal from "./Signup";
import Deals from "../Pages/Deals";
import Kinds from "../Pages/Kind";
import { useNavigate } from "react-router-dom";
import { Switching } from "./Switching";
import LogoutModal from "./Logout";
function Navbar(){
const {isAuth,logout}=useContext(Appcontext);
const navigate = useNavigate();
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
    <Tab _selected={{ color: 'white', bg: 'green.600' }} onClick={()=>{navigate(`/`)}}>Home</Tab>
    <Tab _selected={{ color: 'white', bg: 'green.600' }} onClick={()=>{navigate(`/meals`)}}>Meal Deals</Tab>
    <Tab _selected={{ color: 'white', bg: 'green.600' }} onClick={()=>{navigate(`/moments`)}}>Kind Moments</Tab>
    <Tab _selected={{ color: 'white', bg: 'green.600' }} onClick={()=>{navigate(`/picks`)}}>Hot Picks</Tab>
    <Tab _selected={{ color: 'white', bg: 'green.600' }} onClick={()=>{navigate(`/recipe`)}}>Recipies</Tab>
    <Tab _selected={{ color: 'white', bg: 'green.600' }} onClick={()=>{navigate(`/directory`)}}>Directory</Tab>
    <Tab _selected={{ color: 'white', bg: 'green.600' }} onClick={()=>{navigate(`/articles`)}}>Articles</Tab>
    <Tab _selected={{ color: 'white', bg: 'green.600' }} onClick={()=>{navigate(`/help`)}}>Help</Tab>
   {isAuth.category && <Tab _selected={{ color: 'white', bg: 'green.600' }} onClick={()=>{navigate(`/admin`)}}>Orders</Tab>} 
  </TabList>

  </Box>
   {/* {isAuth.category &&  <Switching/> } */}
  <Box bg='white' w={'75%'} m='auto' >
  
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
 <Box m="auto" fontSize={'14px'} color={'grey'} >{isAuth.username}</Box> 
      <LogoutModal/>
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