import {useDisclosure,Button,Heading,Modal,ModalBody,Image,ModalFooter,ModalHeader,ModalOverlay,ModalCloseButton,ModalContent} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
export function BookingConfirm() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate();
    return (
      <>
        <Button color='white' _hover={{'color':"black"}} bg='blue' p='30px ' mt='10px'  fontWeight={'900'} fontFamily={'Monospace'} fontSize='22px'  onClick={onOpen} >Confirm Booking</Button>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered >
          <ModalOverlay />
          <ModalContent bg='gray.900' border='3px solid gray'>
            <ModalHeader>
                <Heading color='white'>Booking Confirm!</Heading>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody >
                
                <Image src='https://media.tenor.com/N7u5cEzdT-YAAAAM/neon-sign-check-mark.gif' m='auto'/>
            </ModalBody>
            <ModalFooter>
              <Button  color={'black'} onClick={
                ()=>{onClose();navigate(`/`)}}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }