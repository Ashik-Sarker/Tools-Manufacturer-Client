import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authentication/Login';
import Registration from './Pages/Authentication/Registration';
import RequireAuth from './Pages/Authentication/RequireAuth';
import Footer from './Pages/Common/Footer';
import Navbar from './Pages/Common/Navbar';
import BusinessSummary from './Pages/Home/BusinessSummary';
import Home from './Pages/Home/Home';
import Review from './Pages/Home/Review';
import Tools from './Pages/Home/Tools';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase/>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
