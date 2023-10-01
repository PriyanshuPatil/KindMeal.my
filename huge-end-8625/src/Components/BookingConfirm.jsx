import {useDisclosure,Button,Heading,Modal,ModalBody,Image,ModalFooter,ModalHeader,ModalOverlay,ModalCloseButton,ModalContent} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { Order } from "../Api/Axios";
export function BookingConfirm({data1,data2,data3,data4,data5,data6}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate();
  
    const mycall2=()=>{
     
   Order({username:data1.username,
    email:data1.username,
    price:data1.price*data1.quantity+data2.price*data2.quantity+data3.price*data3.quantity+data4.price*data4.quantity+data5.price*data5.quantity+data6.price*data6.quantity,
    quantity:data1.quantity+data2.quantity+data3.quantity+data4.quantity+data5.quantity+data6.quantity})
     
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