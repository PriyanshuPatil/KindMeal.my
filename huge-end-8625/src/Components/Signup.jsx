import { Text, Spacer, Box, Stack, Alert, AlertIcon, useDisclosure, ModalFooter, Button, Modal, ModalBody, Input, Select, RadioGroup, ModalHeader, Radio, ModalOverlay, ModalContent, ModalCloseButton, Image, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import React from 'react';
import { CreateAccount } from '../Api/Axios';
import { useToast } from "@chakra-ui/react";
function SignupModal() {
  const toast = useToast();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");

  const finalRef = React.useRef(null)

  const handleChange = (e) => {

    if (e.target.name == "username") {
      setusername(e.target.value)
    }
    else if (e.target.name == "password") {
      setpassword(e.target.value)
    }
    else {
      setemail(e.target.value)
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
  const [overlay, setOverlay] = useState(<OverlayTwo />)

  return (
    <>

      <Button colorScheme='white' color={'black'} onClick={() => {
        setOverlay(<OverlayTwo />)
        onOpen()
      }} w='60px' fontSize={'12px'} >

        Signup
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose} >
        {overlay}
        <ModalContent bg='white' color='black' p={"10px 5px"}>
          <ModalHeader>
            <Image h={{ base: "5rem", lg: '5rem', sm: "5rem", md: "3rem" }} w={{ base: "80%", sm: "60%", md: "60%" }} src="https://www.kindmeal.my/images/logo-kindmeal.png" m='auto'  ></Image>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={50} ml={30} mr={30}>

            <Box style={{ fontSize: "20px", textAlign: "center", color: "#48160B", fontWeight: "500" }} mt={-5}>User Register</Box>
            <Box mt='20px' >

              <Box mt='20px' >
                <Input onChange={(e) => { handleChange(e) }} name={'username'} placeholder="Username" />
              </Box>


              <Box mt='20px' >
                <Input onChange={(e) => { handleChange(e) }} name={'email'} color='green' placeholder="Email"></Input>
              </Box>


              <Box mt='20px' >
                <Input onChange={(e) => { handleChange(e) }} name={'password'} color='green' placeholder="Password"></Input>
              </Box>
              <Box mt='30px' textAlign={"center"} >
                <Button onClick={() => { CreateAccount({ "username": username, "password": password, "email": email }, toast); onClose(); }} name={'email'} color='white' backgroundColor={"green"} w={"50%"} alignContent={"center"} >Register</Button>
              </Box>


            </Box>
          </ModalBody>

        </ModalContent>
      </Modal>

    </>
  )

}







export default SignupModal;