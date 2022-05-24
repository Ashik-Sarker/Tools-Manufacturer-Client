import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authentication/Login';
import Registration from './Pages/Authentication/Registration';
import RequireAuth from './Pages/Authentication/RequireAuth';
import Footer from './Pages/Common/Footer';
import Navbar from './Pages/Common/Navbar';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import BusinessSummary from './Pages/Home/BusinessSummary';
import Home from './Pages/Home/Home';
import Review from './Pages/Home/Review';
import Tools from './Pages/Home/Tools';
import Purchase from './Pages/Purchase/Purchase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import AddProducts from './Pages/Dashboard/AddProducts';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import RequireAdmin from './Pages/Authentication/RequireAdmin';

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
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyProfile/>} />
          <Route path='myOrders' element={<MyOrders/>} />
          <Route path='addReview' element={<RequireAdmin><AddReview/></RequireAdmin>} />
          <Route path='manageOrders' element={<RequireAdmin><ManageOrders/></RequireAdmin>} />
          <Route path='addProducts' element={<RequireAdmin><AddProducts/></RequireAdmin>} />
          <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin/></RequireAdmin>} />
          <Route path='manageProducts' element={<RequireAdmin><ManageProducts/></RequireAdmin>} />
        </Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
