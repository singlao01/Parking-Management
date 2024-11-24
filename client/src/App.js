import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import SignUp from './Components/SignUp'
import ParkingSpace from './Components/ParkingSpace'
import Wallet from './Components/Wallet'
function App() {
  return (
    <div className="App">
      <Navbar/>
     
      <ParkingSpace/>
      
      <Wallet/>

      <Footer/>
      
    </div>
  );
}

export default App;
