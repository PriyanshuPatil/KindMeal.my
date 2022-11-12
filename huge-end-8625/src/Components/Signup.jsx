import {Text,Spacer,Box,Stack,Alert,AlertIcon,useDisclosure,ModalFooter, Button,Modal,ModalBody,Input,Select,RadioGroup,ModalHeader,Radio,ModalOverlay,ModalContent,ModalCloseButton} from '@chakra-ui/react';
  import {useState} from 'react';
  import React from 'react';
 import { CreateAccount } from '../Api/Axios';
function SignupModal(){

    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const [gender,setgender]=useState("male");
    const [category,setcategory]=useState("");
  
    const finalRef = React.useRef(null)
 
  const handleChange=(e)=>{
   
  if(e.target.name=="username"){
    setusername(e.target.value)
  }
  else if(e.target.name=="password"){
    setpassword(e.target.value)
  }
  
  
  else if(e.target.name=="category"){
    setcategory(e.target.value=="Admin"?true:false)
  }
 else {
    setgender(e.target.value)
 }
  }
  

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
          
          <Button colorScheme='white' color={'black'} onClick={()=>{setOverlay(<OverlayTwo />)
              onOpen()}} w='60px' fontSize={'12px'} > 
          
          Signup
          </Button>
          <Modal isCentered isOpen={isOpen} onClose={onClose} >
            {overlay}
            <ModalContent bg='black' color='white'>
              <ModalHeader>Create Account!</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>


        <Box mt='20px' >

        <Box mt='20px' >
          <Input  onChange={(e)=>{handleChange(e)}} name={'username'} placeholder="Enter Username"/>
         </Box>


          <Box mt='20px' >
          <Select  onChange={(e)=>{handleChange(e)}} name={'category'} color='green'>
          <option >Select Category:-</option>
            <option >User</option>
            <option >Admin</option>
          </Select>
         </Box> 


         <Box mt='20px' >
          <Select  onChange={(e)=>{handleChange(e)}} name={'gender'} color='green'>
          <option >Select Gender:-</option>
            <option >Male</option>
            <option >Female</option>
          </Select>
         </Box> 


       

          <Box  mt='20px' >
          <Input  name={'password'} onChange={(e)=>{handleChange(e)}} placeholder="Create Password" />
          </Box>

          <Box mt='20px'  >
          <Button color='white' bg='purple.800'  onClick={()=>{CreateAccount({ "user": username, "password": password , "admin": category ,"gender":gender }) ; onClose();alert('Congratulations!...Account Succesfully Created');}} >Create</Button>
         </Box>
        </Box>
        </ModalBody>
             
            </ModalContent>
          </Modal>

        </>
      )  
    
  }



  



export default SignupModal ;