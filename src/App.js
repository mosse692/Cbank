import './App.css';
// import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Sidebar from './Components/Sidebar';
import Home from './pages';
import SigninPage from './pages/Signin'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/signin" element={<SigninPage/>} exact />
      </Routes>    
    </Router>
  );
}

export default App;
