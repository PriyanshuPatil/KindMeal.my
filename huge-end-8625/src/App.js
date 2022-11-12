import logo from './logo.svg';
import './App.css';
import Footer1 from './Components/Footer1';
import Navbar from './Components/Navbar';
import { Slider } from './Components/Slider';
import { HomeData } from './Components/HomeData';
import Home from './Pages/Home';
import Footer2 from './Components/Footer2';
import SignupModal from './Components/Signup';
import LoginModal from './Components/Login';
function App() {
  return (
    <div className="App">
    <LoginModal/>
     <SignupModal/>
    </div>
  );
}

export default App;
