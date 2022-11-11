import logo from './logo.svg';
import './App.css';
import Footer1 from './Components/Footer1';
import Navbar from './Components/Navbar';
import { Slider } from './Components/Slider';
import { HomeData } from './Components/HomeData';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Slider/>
     <HomeData/>
    </div>
  );
}

export default App;
