import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Common/Footer';
import Navbar from './Pages/Common/Navbar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className='text-accent'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
