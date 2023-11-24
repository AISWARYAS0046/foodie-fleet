import './App.css';
import './Components/login.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Components/login.js';
import Signup from './Components/Signup';
import AddOrUpdate from './Components/AddOrUpdate';
import Home from './home';
import Page1 from './page1'; 
// import Profile from './profile'; 
// import Verify from './verify'; 
// import Landing from './landing'; 
// import PaymentDetails from './PaymentDetails';
 import Profile from './Service/profile';
 import Verify from './verify';
//  import Landing from './Service/landing';
 import PaymentDetails from './PaymentDetails';
function App() {
  return (
    <div className="App">
      <title>BITE BRIGHT
      </title>
    <BrowserRouter>
    <Routes>
    <Route path="/" element ={<Login />}></Route>
    <Route path="/register" element ={<Signup />}></Route>
    <Route path="/add" element ={<AddOrUpdate />}></Route>
    <Route path="/home" element ={<Home />}></Route>
    <Route path="/page1" element ={<Page1 />}></Route>
    <Route path="/profile" element ={<Profile />}></Route>
    <Route path="/verify" element ={<Verify />}></Route>
    {/* <Route path="/" element ={<Landing />}></Route> */}
    <Route path="/paymentdetails" element ={<PaymentDetails />}></Route>
    <Route path="/update/:id" element ={<AddOrUpdate />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;