import logo from './logo.svg';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Navber from './Pages/Shared/Navber/Navber';


function App() {
  return (
    <div >
      <Navber>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </Navber>
    </div>
  );
}

export default App;
