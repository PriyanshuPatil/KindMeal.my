import { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
export function Pagination(props) {
  const {current,onChange,onChange1} =props;
  const prev = (
    <Button
      
      disabled={current==1}
      onClick={onChange}
      margin='10px'
      bg='black'
      color='white'
    >
      Prev
    </Button>
  );
  const currentPage = <Button  margin='10px'
  bg='black'
  color='white' disabled={false}>{current}</Button>;
  const next = (
    <Button
    
      disabled={current==20}
      
      onClick={onChange1}
      margin='10px'
      bg='black'
      color='white'
    >
      Next
    </Button>
  );
  return (
  <Box bg='purple.400' w='90%' borderRadius={'10px'} m='auto' mt='10px'>
      <div>
      {prev}
      <Button  margin='10px' bg='black'
      color='white' disabled={true}>{currentPage}</Button>
      {next}
      </div>
    </Box>
  );
}

