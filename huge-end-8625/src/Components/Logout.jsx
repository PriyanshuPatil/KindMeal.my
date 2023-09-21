import React from 'react'
import {Text,Spacer,Box,Stack,Alert,AlertIcon,useDisclosure,ModalFooter, Button,Modal,ModalBody,Input,Select,RadioGroup,ModalHeader,Radio,ModalOverlay,ModalContent,ModalCloseButton, Image} from '@chakra-ui/react';
  import {useState} from 'react';
 import { CreateAccount } from '../Api/Axios';
 import { LoginAccount } from '../Api/Axios';
 import { Appcontext } from '../Context/Appcontext';
import { useContext } from 'react';  
import { useToast } from "@chakra-ui/react";
const LogoutModal = () => {
    const {isAuth,changeState,logout}=useContext(Appcontext)
    const [password,setpassword]=useState("");
    const [email,setemail]=useState("");
    const toast = useToast();
    const finalRef = React.useRef(null)
    const OverlayTwo = () => (
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='80%'
          backdropBlur='2px'
        />
      )
    
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [overlay, setOverlay] =useState(<OverlayTwo />)
    
    return (
        <>
          
          <Image onClick={()=>{setOverlay(<OverlayTwo />)
            onOpen()}}  w={{base:"1.5rem",lg:'2rem' ,sm:"2rem", md:"2.5rem"}} h={{base:"1.5rem",lg:'2rem' ,sm:"2rem", md:"1.5rem"}} m='auto' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHwAjgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAwYCB//EADYQAAIBAgQEBQEFCAMAAAAAAAABAgMEBREhMRIiQVETMmFxgVIUI3LB0TNCgpGSoeHwJENT/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APtQAAAAAARLm/pUc4r7yfZdPkCWYlKMfPKMfdlJWv7irnzcEe0dCM23q22/UDoHc0P/AGh/MzGvRltVh/Uc6AOlTzWa1Rk5yFWdN5wnKPsyZQxOpHSslJd+oFuDVQr068c6b+OptAAAAAAAAAGG0k22klq2+hkqMSuvEk6NN8ifM11YC9xCVVuFBuNPrJbyIAAAei3ZutredzUUYaJat9EXVvbUrdckebrJ7sCljbXEvLRn8rI8zo1qaznSnFd+HQ6IAcyC6u7CnWTlTyhU9Nn7lNKLhNwmmpLRpgZhKVOSlBuLXVFvZX0a6UKjyn0fcpjKbTTTyaA6UESwuvtFPhl547+pLAAAAAAI2IV/At24+eWkf1KJEzFaviXTgvLTWXz1IYAytXktzBstlxXFNPbiQF3Z0FQoRj+89ZG8AAAABW4vQXDGvFarll7dP99SyNF8k7Osn9OYFAAgBtt6roVlUj8ov4SU4KUdmtDm2XGE1eOg4PeDAnAAAAeamkJezA52c/EnKf1Ns8iOwAHulLgqwl2eZ4DA6WLTSa1T2Mlfhl0pwVGb5l5fUsAAAAETE6ihZzXWXKiU2ks3ot9SkxC6+0VUov7uG3r6gRUAABOwmeVw49HEgkrDX/zKYF4AABhriWXfQyAOZSyWTBuvYOldVYdOLNez1NIGYpyajFZtvJZFlb4XFpSuJPP6Y9PkYTbrWvJekf1LMCnvLCVF+Lb5uC1yW8T1b4m4rKtHi9UWxHr2VCs85Qyl9UdGB5WIWzWs2vg8VMSt4rl4pPskanhMelaSXqkeoYTTT56s5LsskBDuLutdtQiuGL2hHXP3JVthkPDzuM+J9E/KTaNvSoLKlBR7vqzaBTXmHyoRc6T44LfTVEI6YoL2h9nuZRS5XrH2A0EvDI53kH2TZELLBoc85voskBaAAAAAKzGKOkK6W3LL8is3OjqQjUg4TWcZLJlBWpTt6zhLeL0fddwL22h4dvTj2RtI1jdRuKSz0mt13JIAAAAAAAAAr8Zp8VGnPrGWXwywKrFLtTzoU2mk+Z+vYCu3L6xo+BbRi1zPVlbhlv41XxJLkh36sugAAAAAARr21VzDTScfK/yJIA53Orb1dM4ziW1pf06yUZ8s/wCzNt1a07mOUllJbSW6Ki4tKttrJcUPritPnsBfAoaN9WpZJS4o9nqTaeKwfnptfhYFiCGsStn1kvgxLE7dbcb+AJpiUowi5TkoxXVsrKuKyelGmo+stSBWrVK0vvZyl2QE29xHxM6dvnGOzk937EW0tp3NRRjol5pdkb7XDqlVqVXOnDfL95ltTpwpQUKcVFIBSpxpU1CCySPYAAAAAAAAAAAARa1hb1Xnw8Eu8NP8ESeEy/660cu0lkWoApXhlz08P4kzKwu4e7pr+JlyAKynhSX7Wq3+FE2ha0aH7OCz+p6s3AAAAAAAAAD/2Q==" borderRadius={'100%'} ></Image>
          <Modal isCentered isOpen={isOpen} onClose={onClose} >
            {overlay}
            <ModalContent bg='white' color='black' p={"10px 5px"}>
              <ModalHeader>
              <Image h={{base:"5rem",lg:'5rem' ,sm:"5rem", md:"3rem"}} w={{base:"80%",sm:"60%", md:"60%"}} src="https://www.kindmeal.my/images/logo-kindmeal.png" m='auto'  ></Image>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={50} ml={30} mr={30}>
  
      <Box style={{fontSize:"20px",textAlign:"center",color:"#48160B",fontWeight:"500"}} mt={-5}>Do You Want To Logout ?</Box>
        <Box mt='20px' >
        <Box mt='30px' textAlign={"center"} >
       <Button onClick={()=>{ MyLogout(toast,logout); onClose();}}  color='white' backgroundColor={"green"} w={"50%"} alignContent={"center"} >Logout</Button> 
       </Box> 
         
        </Box>
        </ModalBody>
             
            </ModalContent>
          </Modal>
  
        </>
      )  
    
      
}

export default LogoutModal ;

function MyLogout(toast,logout){
    logout()
    toast({
        title: "Logout Done.",
        description: "You are no more login now.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    
   }