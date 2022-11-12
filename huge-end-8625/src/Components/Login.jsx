import {Text,Spacer,Box,Stack,Alert,AlertIcon,useDisclosure,ModalFooter, Button,Modal,ModalBody,Input,Select,RadioGroup,ModalHeader,Radio,ModalOverlay,ModalContent,ModalCloseButton} from '@chakra-ui/react';
  import {useState} from 'react';
  import React from 'react';
 import { CreateAccount } from '../Api/Axios';
 import { LoginAccount } from '../Api/Axios';
 import { Appcontext } from '../Context/Appcontext';
import { useContext } from 'react';  

function LoginModal(){
const {isAuth,changeState,logout}=useContext(Appcontext)
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const [category,setcategory]=useState("");
    const [data,setData]=useState([])
    const finalRef = React.useRef(null);
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
          
          Login
          </Button>
          <Modal isCentered isOpen={isOpen} onClose={onClose} >
            {overlay}
            <ModalContent bg='black' color='white'>
              <ModalHeader>Login Account!</ModalHeader>
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


       

          <Box  mt='20px' >
          <Input  name={'password'} onChange={(e)=>{handleChange(e)}} placeholder="Create Password" />
          </Box>

          <Box mt='20px'  >
          <Button color='white' bg='purple.800'  onClick={()=>{MyLogin(username,password,category,onClose,changeState)}} >Create</Button>
         </Box>
        </Box>
        </ModalBody>
             
            </ModalContent>
          </Modal>

        </>
      )  
    
  }



  



export default LoginModal ;


function MyLogin(username,password,category,onClose,changeState){
 let res=LoginAccount({ "user": username, "password": password ,"category":category})
  .then(
        res=>{
           let product =  res.data;
           changeState({ "user": username, "password": password ,"category":category})
            console.log(product);
          
        }
    )
    .catch(
        err => {console.log(err) ;
        alert('Plz Enter Correct Email & Password')}
    )



   onClose() ; 
   alert('Congratulations!...Account Succesfully Login');
  

}