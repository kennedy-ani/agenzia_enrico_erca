
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Annunci from './pages/Annunci.jsx';
import Servizi from './pages/Servizi.jsx';
import Su_di_noi from './pages/Su_di_noi.jsx';
import Resa from './pages/resa.jsx';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>  
          <Route path="/annunci" element={<Annunci/>}/>  
          <Route path="/servizi" element={<Servizi/>}/>
          <Route path="/agenzia" element={<Su_di_noi/>}/>
          <Route path="/resa" element={<Resa/>}/>
        </Routes>  
      </Router>      
    </>
  )
}

export default App
