import { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
export function Pagination(props) {
  const {current,onChange,onChange1} =props;
  const prev = (
    <Button
      
      disabled={current==1}
      onClick={onChange}
      margin='10px'
      bg='purple.800'
      color='white'
    >
      Prev
    </Button>
  );
  const currentPage = <Button  margin='10px'
  bg='purple.800'
  color='white' >{current}</Button>;
  const next = (
    <Button
    
      disabled={current==20}
      
      onClick={onChange1}
      margin='10px'
     bg='purple.800'
      color='white'
    >
      Next
    </Button>
  );
  return (
  <Box bg='gray.200' w='90%' borderRadius={'10px'} m='auto' mt='10px'>
      <div>
      {prev}
      <Button bg='purple.800'  margin='10px' 
      color='white' disabled={true}>{currentPage}</Button>
      {next}
      </div>
    </Box>
  );
}

