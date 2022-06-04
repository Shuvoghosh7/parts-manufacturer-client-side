import logo from './logo.svg';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Navber from './Pages/Shared/Navber/Navber';
import Footer from './Pages/Shared/Footer/Footer';
import Purchase from './Pages/Purchase/Purchase';
import Singin from './Pages/Authentication/Singin';
import Singup from './Pages/Authentication/Singup';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import Notfound from './Pages/Notfound/Notfound';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import Review from './Pages/Dashboard/Review';
import Myprofile from './Pages/Dashboard/Myprofile';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import AddProduct from './Pages/Dashboard/AddProduct';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAdmin from './Pages/Authentication/RequireAdmin/RequireAdmin';
import Payment from './Pages/Dashboard/Payment';
import WellcomeDashboard from './Pages/Dashboard/WellcomeDashboard';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Blogs from './Pages/Blogs/Blogs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Products from './Pages/Home/Home/Products/Products';


function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div >
      <Navber>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>

        <Route path='/purchase/:purchaseId' element={
          <RequireAuth>
            <Purchase/>
          </RequireAuth>
        }/>
        <Route path='/singin' element={<Singin/>}/>
        <Route path='/singup' element={<Singup/>}/>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard/>
          </RequireAuth>
        }>
        <Route path='myorder' element={<MyOrders/>} />
        <Route path='review' element={<Review/>} />
        <Route path='/dashboard' element={<WellcomeDashboard/>} />
        <Route path='myprofile' element={<Myprofile/>} />
        <Route path='payment/:id' element={<Payment/>} />
        <Route path='manageOrders' element={<RequireAdmin><ManageAllOrders/></RequireAdmin>} />
        <Route path='AddProduct' element={<RequireAdmin><AddProduct/></RequireAdmin>} />
        <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin/></RequireAdmin>} />
        <Route path='manageProducts' element={<RequireAdmin><ManageProducts/></RequireAdmin>} />
        </Route>
        <Route path='/myPortfolio' element={<MyPortfolio/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
      <Footer/>
      <ToastContainer />
      </Navber>
    </div>
  );
}

export default App;
