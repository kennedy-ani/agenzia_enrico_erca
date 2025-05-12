
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Annunci from './pages/Annunci.jsx';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>  
          <Route path="/annunci" element={<Annunci/>}/>  
        </Routes>  
      </Router>      
    </>
  )
}

export default App
