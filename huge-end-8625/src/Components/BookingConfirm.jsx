import {useDisclosure,Button,Heading,Modal,ModalBody,Image,ModalFooter,ModalHeader,ModalOverlay,ModalCloseButton,ModalContent} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { Order } from "../Api/Axios";
export function BookingConfirm({data1,data2,data3,data4,data5,data6}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate();
  
    const mycall2=()=>{
      if(data1.quantity>=1){
   Order(data1)
      }
      if(data2.quantity>=1){
        Order(data2)
           }
           if(data3.quantity>=1){
            Order(data3)
               }
               if(data4.quantity>=1){
                Order(data4)
                   }
                   if(data5.quantity>=1){
                        Order(data5)
                           }
                           if(data6.quantity>=1){
                            Order(data6)
                               }
    }
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
                ()=>{ onClose();mycall2(data1,data2,data3,data4,data5,data6) ;navigate(`/`)}}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }