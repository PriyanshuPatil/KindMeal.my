import { Slider } from "../Components/Slider";
import { HomeData } from "../Components/HomeData";
import LoginModal from "../Components/Signup";
function Home(){
    return (
        <>
        <LoginModal/>
        <Slider/>
        <HomeData/>
        </>
    )
}

export default Home ;