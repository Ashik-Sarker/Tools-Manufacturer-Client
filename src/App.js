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
import Blogs from './Pages/Blogs/Blogs';
import ErrorPage from './Pages/Common/ErrorPage';
import Payment from './Pages/Dashboard/Payment';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import MyHome from './Pages/MyPortfolio/MyHome';
import Education from './Pages/MyPortfolio/Education';
import Technologies from './Pages/MyPortfolio/Technologies';
import MyProjects from './Pages/MyPortfolio/MyProjects';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase/></RequireAuth>}></Route>

        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyProfile/>} />
          <Route path='myOrders' element={<MyOrders/>} />
          <Route path='addReview' element={<AddReview/>} />
          <Route path='payment/:id' element={<Payment />} />
          
          <Route path='manageOrders' element={<RequireAdmin><ManageOrders/></RequireAdmin>} />
          <Route path='addProducts' element={<RequireAdmin><AddProducts/></RequireAdmin>} />
          <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin/></RequireAdmin>} />
          <Route path='manageProducts' element={<RequireAdmin><ManageProducts/></RequireAdmin>} />
        </Route>

        <Route path='/login' element={<Login/>}></Route>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        
        <Route path='/myPortfolio' element={<MyPortfolio />}>
          <Route index element={<MyHome/>} />
          <Route path='education' element={<Education/>} />
          <Route path='technologies' element={<Technologies/>} />
          <Route path='projects' element={<MyProjects />} />
        </Route>

        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
