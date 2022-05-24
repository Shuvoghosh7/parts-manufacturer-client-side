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




function App() {
  return (
    <div >
      <Navber>
      <Routes>
        <Route path='/' element={<Home/>}/>
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
        <Route path='myprofile' element={<Myprofile/>} />
        </Route>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
      <Footer/>
      </Navber>
    </div>
  );
}

export default App;
