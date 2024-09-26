import './App.css'; 
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import homeimg from './components/images/home.jpeg';
import Aboutus from './components/Aboutus';
import ProfileCreationForm from './components/ProfileCreationForm';

function App() {
  return (
    <Router>
      <div className="App" style={{ 
    
        backgroundSize: "cover", 
        background:"no repeat",
        width:"210vh",
        height: "100vh", 

      }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/aboutus" element={<Aboutus/>}></Route>
          <Route path="/signup"element={<Signup/>}></Route>
          <Route path ="/profile" element={<ProfileCreationForm/>}></Route>
        </Routes>
       
     
      </div>
    
    </Router>
  );
}

export default App;
