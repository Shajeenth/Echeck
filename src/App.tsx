import { Route,Routes } from 'react-router-dom';
import Navbar from './pages/components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Play from './pages/Play';


function App() {
  return (
   <>
    <Navbar/>
      <div>
    <Routes>        
      <Route path="/"  element={<Home/>} />
      <Route path="/login"  element={<Login/>} />
      <Route path="/register"  element={<Register/>} />
      <Route path="/play"  element={<Play/>} />
    </Routes>
    </div>
    </>
   
  );
}

export default App;
