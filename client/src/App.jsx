
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Annunci from './pages/Annunci.jsx';
import Servizi from './pages/Servizi.jsx';
import Su_di_noi from './pages/Su_di_noi.jsx';
import Resa from './pages/resa.jsx';
import { useState } from 'react';

function App() {

  // Funzioni servizi
  const [popupUtenze, setPopupUtenze] = useState(false);//Servizi per l'utenze dei clienti
  const [popupConsulenzaImmobiliare, setConsulenzaImmobiliare] = useState(false);

  const [ristrutturazione, setRistrutturazione] = useState(false);
  // HANDLES SELECTED SERVICES
  const [servizioSelezionato, setServizioSelezionato] = useState("");
  
  // VARIABLE PER ATTIVARE IL MODAL
  const [moduloConsulenza, setModuloConsulenza] = useState(false);
  
  const gestireContattiWhatsapp = (e) => {
    e.preventDefault();

    if(!servizioSelezionato){
        // Send a toast message
        toast("Scegli un servizio!");
        return;
    }else {
        //const phone = '+393311887849'; //Numero di consulente
        const phone = '+393881578442';
        let messaggio = `Hello there! I am here for ${servizioSelezionato}`;
        if(servizioSelezionato === 'luce' || servizioSelezionato === 'gas' || servizioSelezionato === 'acqua'){

            messaggio = `Ciao, Sono Kennedy Ani. Vorrei chidere per il vostro servizio su ${servizioSelezionato}`;
            // PREVENTS BUGS FROM SPECIAL CHARACTERS
            const encodedMessage = encodeURIComponent(messaggio);

            window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank')
        }else if(servizioSelezionato === 'comunicazioni' || servizioSelezionato === 'interrogazioni' || servizioSelezionato === 'dispetti'|| servizioSelezionato === 'contratti di affitto' || servizioSelezionato === 'compromessi'){
            messaggio = `Ciao, Sono Kennedy Ani. Vorrei sapere un'po sul ${servizioSelezionato}`;
            // PREVENTS BUGS FROM SPECIAL CHARACTERS
            const encodedMessage = encodeURIComponent(messaggio);
            window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank')
        }else if(servizioSelezionato === 'consulenza compravendita' || servizioSelezionato === "consulenza d'investimento" || servizioSelezionato === 'consulenza tecnico-legale' || servizioSelezionato === 'consulenza per stranieri' || servizioSelezionato === 'consulenza finanziaria'){
            messaggio = `Ciao, Sono Kennedy Ani. Vorrei sapere un'po consulenza  ${servizioSelezionato}`;
            // PREVENTS BUGS FROM SPECIAL CHARACTERS
            const encodedMessage = encodeURIComponent(messaggio);
            window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank')
        }
    }
  }
    
    return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home popupConsulenzaImmobiliare={popupConsulenzaImmobiliare} popupUtenze={popupUtenze} servizioSelezionato={servizioSelezionato} setConsulenzaImmobiliare={setConsulenzaImmobiliare} setServizioSelezionato={setServizioSelezionato} gestireContattiWhatsapp={gestireContattiWhatsapp} setPopupUtenze={setPopupUtenze} moduloConsulenza={moduloConsulenza} setModuloConsulenza={setModuloConsulenza} ristrutturazione={ristrutturazione} setRistrutturazione={setRistrutturazione}/>}/>  
          <Route path="/annunci" element={<Annunci/>}/>  
          <Route path="/servizi" element={<Servizi popupConsulenzaImmobiliare={popupConsulenzaImmobiliare} gestireContattiWhatsapp={gestireContattiWhatsapp} setConsulenzaImmobiliare={setConsulenzaImmobiliare} servizioSelezionato={servizioSelezionato} setServizioSelezionato={setServizioSelezionato} popupUtenze={popupUtenze} setPopupUtenze={setPopupUtenze} />}/>
          <Route path="/agenzia" element={<Su_di_noi/>}/>
          <Route path="/resa" element={<Resa/>}/>
        </Routes>  
      </Router>      
    </>
  )
}

export default App
