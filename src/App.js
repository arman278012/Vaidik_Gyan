import logo from './logo.svg';
import './App.css';
import TopBar from './Components/TopBar';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import OtpVerification from './Components/OtpVerification';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mathura from './Components/Mathura';
import { useContext } from 'react';
import { AppContext } from './Components/AuthContext';
import RegistrationModal from './Components/RegistrationModal';

function App() {
  const handleOtpChange = () => {
  };

  const { showSuccessModal, hideNav } = useContext(AppContext)


  return (
    <div className="App">
      {
        showSuccessModal ? (<RegistrationModal />) : (<></>)
      }

      <BrowserRouter>
        {
          hideNav ? (<></>) : (<div>
            <TopBar></TopBar>
            <Navbar></Navbar>
          </div>)
        }
        <Routes>
          {/* <Route path='/modal' element={<RegistrationModal />} /> */}
          <Route path='/' element={<Hero />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/otp' element={<OtpVerification onChange={handleOtpChange} />} />
          <Route path='/mathura' element={<Mathura />} />

        </Routes>
        {
          hideNav ? (<></>) : (<Footer></Footer>)
        }
      </BrowserRouter>
    </div >
  );
}

export default App;
