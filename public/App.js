import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Common/Footer';
import Navbar from './Pages/Common/Navbar';
import BusinessSummary from './Pages/Home/BusinessSummary';
import Home from './Pages/Home/Home';
import Review from './Pages/Home/Review';
import Tools from './Pages/Home/Tools';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/tools' element={<Tools/>}></Route>
        <Route path='/businessSummary' element={<BusinessSummary/>}></Route>
        <Route path='/reviews' element={<Review/>}></Route>
        {/* <Route path='/login' element={<Home/>}></Route>
        <Route path='/registration' element={<Home/>}></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
