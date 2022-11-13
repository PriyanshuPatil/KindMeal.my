import { Slider } from "../Components/Slider";
import { Box } from '@chakra-ui/react'
import { HomeData } from "../Components/HomeData";
import LoginModal from "../Components/Signup";
function Home(){
    return (
        <Box m='auto' w='70%'>
        <Slider/>
        <HomeData/>
        </Box>
    )
}

export default Home ;