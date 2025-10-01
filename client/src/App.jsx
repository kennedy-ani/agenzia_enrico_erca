
import './App.css'
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Home from './pages/Home.jsx';
import Annunci from './pages/Annunci.jsx';
import Policy from './pages/Policy.jsx';
import Servizi from './pages/Servizi.jsx';
import Su_di_noi from './pages/Su_di_noi.jsx';
import Resa from './pages/ConsulenzaPrivata.jsx';
import { useEffect, useState } from 'react';
import preloader from './components/preloader.jsx';
import ConsulenzaPrivata from './pages/ConsulenzaPrivata.jsx';
import Collaborazioni from './pages/Collaborazioni.jsx';
// Schema Per Dati sul modulo
import * as yup from 'yup';

function App() {

  // Preloader
  const [preloader, setpreloader] = useState(true);

  // Funzionalita per gli annunci
  const [galleryImages, setGalleryImages] = useState([]);
  const [listingSelected, setlistingSelected] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  // Variable for setting the zoom in
  const [isFullScreen, setIsFullScreen] = useState(false);
  const onOpenGallery = (id_annuncio) => {
      axios.get(`http://localhost:2001/annunci/${id_annuncio}/images`)
      .then(res=>{
        // Arrays of urls that the gallery needs
        const urls = res.data.images.map(img=> (`http://localhost:2001/uploads/${img.img_url}`));
        console.log(urls);
        setGalleryImages(urls)
        setIsGalleryOpen(true);
      })
      .catch(console.error);
  }
  // Image index for each image in the array
  const [currentIndex, setCurrentIndex]= useState(0);
  const goPrev = () => {
    setCurrentIndex((prev)=>{
      return prev === 0 ? galleryImages.length - 1 : prev - 1
    });
  }

  const goNext = () => {
    setCurrentIndex((next)=>{
      // if you are at the last image, go back to 0, otherwise, move forward
      return next === galleryImages.length - 1 ? 0 : next + 1;
    })
  }

  //InteriorDesignSchema
  const inviaDatiPerInteriorDesign = yup.object().shape({
    nome: yup.string().required("Inserisci il nome"),
    cognome: yup.string().required("Inserisci il cognome"),
    email: yup.string().email("Email non valida").required("Inserisci la tua email"),
    numeroditelefono: yup.string()
      .matches(/^\d{10}$/, "Inserisci un numero valido (10 cifre)")
      .required("Numero di telefono richiesto"),
    noteDellUtente: yup.string().nullable(),
    accettoPrivacy: yup.bool().oneOf([true], "Devi accettare la privacy policy"),
  });

  // ArchitetturaSchema
  const inviaDatiPerArchitectura = yup.object().shape({
     nome: yup.string().required("Inserisci il nome"),
    cognome: yup.string().required("Inserisci il cognome"),
    email: yup.string().email("Email non valida").required("Inserisci la tua email"),
    numeroditelefono: yup.string()
      .matches(/^\d{10}$/, "Inserisci un numero valido (10 cifre)")
      .required("Numero di telefono richiesto"),
    noteDellUtente: yup.string().nullable(),
    accettoPrivacy: yup.bool().oneOf([true], "Devi accettare la privacy policy"),
  });

  // StraordinariaSchema
  const inviaDatiPerStraOrdinaria = yup.object().shape({
     nome: yup.string().required("Inserisci il nome"),
    cognome: yup.string().required("Inserisci il cognome"),
    email: yup.string().email("Email non valida").required("Inserisci la tua email"),
    numeroditelefono: yup.string()
      .matches(/^\d{10}$/, "Inserisci un numero valido (10 cifre)")
      .required("Numero di telefono richiesto"),
    noteDellUtente: yup.string().nullable(),
    accettoPrivacy: yup.bool().oneOf([true], "Devi accettare la privacy policy"),
  });

  //ConsulenzaImmobiliareSchema
  const inviaDatiPerConsulenzaImmobiliare = yup.object().shape({
     nome: yup.string().required("Inserisci il nome"),
    cognome: yup.string().required("Inserisci il cognome"),
    email: yup.string().email("Email non valida").required("Inserisci la tua email"),
    numeroditelefono: yup.string()
      .matches(/^\d{10}$/, "Inserisci un numero valido (10 cifre)")
      .required("Numero di telefono richiesto"),
    noteDellUtente: yup.string().nullable(),
    accettoPrivacy: yup.bool().oneOf([true], "Devi accettare la privacy policy"),
  });

  //ManutenzioniOrdinariaSchema
  const inviaDatiPerOrdinaria = yup.object().shape({
    nome: yup.string().required("Inserisci il nome"),
    cognome: yup.string().required("Inserisci il cognome"),
    email: yup.string().email("Email non valida").required("Inserisci la tua email"),
    numeroditelefono: yup.string()
      .matches(/^\d{10}$/, "Inserisci un numero valido (10 cifre)")
      .required("Numero di telefono richiesto"),
    noteDellUtente: yup.string().nullable(),
    accettoPrivacy: yup.bool().oneOf([true], "Devi accettare la privacy policy"),
  });

  // TraslocoSchema
  const inviaDatiPerTrasloco = yup.object().shape({
    nome: yup.string().required("Inserisci il nome"),
    cognome: yup.string().required("Inserisci il cognome"),
    email: yup.string().email("Email non valida").required("Inserisci la tua email"),
    numeroditelefono: yup.string()
      .matches(/^\d{10}$/, "Inserisci un numero valido (10 cifre)")
      .required("Numero di telefono richiesto"),
    noteDellUtente: yup.string().nullable(),
    accettoPrivacy: yup.bool().oneOf([true], "Devi accettare la privacy policy"),
  });

  // ConsulenzaImmobiliare
  const inviaDatiConsulenzaFinanzario = yup.object().shape({
    nome: yup.string().required("Inserisci il nome"),
    cognome: yup.string().required("Inserisci il cognome"),
    email: yup.string().email("Email non valida").required("Inserisci la tua email"),
    numeroditelefono: yup.string()
      .matches(/^\d{10}$/, "Inserisci un numero valido (10 cifre)")
      .required("Numero di telefono richiesto"),
    noteDellUtente: yup.string().nullable(),
    accettoPrivacy: yup.bool().oneOf([true], "Devi accettare la privacy policy"),
  });

  // ServizioGeometra
  const inviaDatiServizioGeometra = yup.object().shape({
    nome: yup.string().required("Inserisci il nome"),
    cognome: yup.string().required("Inserisci il cognome"),
    email: yup.string().email("Email non valida").required("Inserisci la tua email"),
    numeroditelefono: yup.string()
      .matches(/^\d{10}$/, "Inserisci un numero valido (10 cifre)")
      .required("Numero di telefono richiesto"),
    noteDellUtente: yup.string().nullable(),
    accettoPrivacy: yup.bool().oneOf([true], "Devi accettare la privacy policy"),
  });

  //Servizio Avvocato
   const inviaDatiServizioAvvocato = yup.object().shape({
    nome: yup.string().required("Inserisci il nome"),
    cognome: yup.string().required("Inserisci il cognome"),
    email: yup.string().email("Email non valida").required("Inserisci la tua email"),
    numeroditelefono: yup.string()
      .matches(/^\d{10}$/, "Inserisci un numero valido (10 cifre)")
      .required("Numero di telefono richiesto"),
    noteDellUtente: yup.string().nullable(),
    accettoPrivacy: yup.bool().oneOf([true], "Devi accettare la privacy policy"),
  });



  // Funzioni servizi
  const [popupUtenze, setPopupUtenze] = useState(false);//Servizi per l'utenze dei clienti
  const [popupConsulenzaImmobiliare, setConsulenzaImmobiliare] = useState(false);
  const [popupArchitectura, setPopupArchitectura] = useState(false);
  const [popupEntrate, setPopupEntrate] = useState(false);
  // VARIABLE PER ATTIVARE IL MODAL CONSULENZA
  const [moduloConsulenza, setModuloConsulenza] = useState(false);
  // VARIABLE PER ATTIVARE IL MODAL MANUTENZIONE ORDINARIA
  const [moduloManutenzione, setModuloManutenzione] = useState(false);
  //VARIABLE PER ATTIVARE IL MODAL MANUTENZIONE STRAORDINARIA
  const [moduloManutenzioneStra, setModuloManutenzioneStra] = useState(false);

  // VARIABLE PER ATTIVARE IL MODAL ARCHITECTURA E INTERIOR DESIGN
  const [moduloInteriorDesign, setModuloInteriorDesign] = useState(false);

  const [moduloServizioTransloco, setModuloServizioTransloco] = useState(false);
  const [moduloConsulenzaFinanzario, setModuloConsulenzaFinanzario] = useState(false);
  const [moduloServizioGeometra, setModuloServizioGeometra] = useState(false);
  const [moduloAvvocato, setModuloavvocato] = useState(false);
  const [moduloSviluppatoreweb, setModuloSviluppatoreweb] = useState(false);
  
  // HANDLES SELECTED SERVICES
  const [servizioSelezionato, setServizioSelezionato] = useState("");

  // Ricerca e tutti variabli per ricercare gli annunci immobiliari
  const [annunci, setAnnunci] = useState([]);
  const [valueRicerca, setValueRicerca] = useState('');
  // const onChangeRicerca = (e) =>{
  //   setValueRicerca(e.target.value);
  // }
  //const navigare = useNavigate();//redirect a
  const onSearch = (valueRicerca)=> {
        //Call API
      setValueRicerca(valueRicerca);
      navigare(`/annunci?ricercaData=${encodeURIComponent(valueRicerca)}`);// encode in case of space
        
        console.log("Search: ", valueRicerca);
  }

  const getDataAnnunci = async(ricercaParolaChiave)=>{
    const search = document.getElementById('search_immobili').value;
    
    const keyword = ricercaParolaChiave || (search ? search : '');
    
    const dataObject = {ricercaData: keyword};

    await axios.get('http://localhost:2001/annunci/ricerca', {
        params: dataObject
    })
    .then(response=>{setAnnunci(response.data.result)})
    .catch(error=>{console.error(error)})
  }
  
  const gestireContattiWhatsapp = (e) => {
    e.preventDefault();

    if(!servizioSelezionato){
        // Send a toast message
        toast("Scegli un servizio!");
        return;
    }else {
        //const phone = '+393311887849'; //Numero di consulente
        const phone = '+393881578442';
        let messaggio = `Salve! Sono qui per questo servizio: ${servizioSelezionato}`;
        if(servizioSelezionato === 'luce' || servizioSelezionato === 'gas' || servizioSelezionato === 'acqua'){

            messaggio = `Ciao! Vorrei chidere per il vostro servizio su ${servizioSelezionato}`;
            // PREVENTS BUGS FROM SPECIAL CHARACTERS
            const encodedMessage = encodeURIComponent(messaggio);

            window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank')
        }else if(servizioSelezionato === 'comunicazioni' || servizioSelezionato === 'interrogazioni' || servizioSelezionato === 'dispetti'|| servizioSelezionato === 'contratti di affitto' || servizioSelezionato === 'compromessi'){
            messaggio = `Ciao! Vorrei sapere un'po sul ${servizioSelezionato}`;
            // PREVENTS BUGS FROM SPECIAL CHARACTERS
            const encodedMessage = encodeURIComponent(messaggio);
            window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank')
        }else if(servizioSelezionato === 'consulenza compravendita' || servizioSelezionato === "consulenza d'investimento" || servizioSelezionato === 'consulenza tecnico-legale' || servizioSelezionato === 'consulenza per stranieri' || servizioSelezionato === 'consulenza finanziaria'){
            messaggio = `Ciao! Vorrei sapere un'po consulenza  ${servizioSelezionato}`;
            // PREVENTS BUGS FROM SPECIAL CHARACTERS
            const encodedMessage = encodeURIComponent(messaggio);
            window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank')
        }
    }
  }

    

    useEffect(()=>{
      const timer = setTimeout(()=>{
        setpreloader(false);

      },1500)//1.5 seconds
      return ()=> clearTimeout(timer);
    }, []);
    
    return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home 
          valueRicerca={valueRicerca} setValueRicerca={setValueRicerca}
          onSearch={onSearch}
          onOpenGallery={onOpenGallery}
          setIsModalOpen={setIsModalOpen}
          setlistingSelected={setlistingSelected}

          // POPUP UTENZE
          popupUtenze={popupUtenze} setPopupUtenze={setPopupUtenze} gestireContattiWhatsapp={gestireContattiWhatsapp} setServizioSelezionato={setServizioSelezionato}

          //INTERIOR DESIGN
          inviaDatiPerInteriorDesign={inviaDatiPerInteriorDesign} moduloInteriorDesign={moduloInteriorDesign} 
          setModuloInteriorDesign={setModuloInteriorDesign}
        
          // DATI CONSULENZA
          inviaDatiPerConsulenzaImmobiliare={inviaDatiPerConsulenzaImmobiliare} moduloConsulenza={moduloConsulenza} setModuloConsulenza={setModuloConsulenza}
          // DATI CONSULENZA FINANZARIO
          inviaDatiConsulenzaFinanzario={inviaDatiConsulenzaFinanzario} moduloConsulenzaFinanzario={moduloConsulenzaFinanzario} setModuloConsulenzaFinanzario={setModuloConsulenzaFinanzario}
          //STRAORDINARIA
          inviaDatiPerStraOrdinaria={inviaDatiPerStraOrdinaria} moduloManutenzioneStra={moduloManutenzioneStra} setModuloManutenzioneStra={setModuloManutenzioneStra}

          // ORDINARIA
          inviaDatiPerOrdinaria={inviaDatiPerOrdinaria} moduloManutenzione={moduloManutenzione} setModuloManutenzione={setModuloManutenzione}
          
          // ARCHITETTURA
          popupArchitectura={popupArchitectura} setPopupArchitectura={setPopupArchitectura} inviaDatiPerArchitectura={inviaDatiPerArchitectura}
          />}/>  

          <Route path="/annunci" element={<Annunci 
          // Images on gallery
          currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}
          goPrev={goPrev} goNext={goNext} isFullScreen={isFullScreen} setIsFullScreen={setIsFullScreen} listingSelected={listingSelected} setlistingSelected={setlistingSelected} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} onOpenGallery={onOpenGallery} isGalleryOpen={isGalleryOpen} setIsGalleryOpen={setIsGalleryOpen} galleryImages={galleryImages} setGalleryImages={setGalleryImages} valueRicerca={valueRicerca}  setValueRicerca={setValueRicerca} /*onChangeRicerca={onChangeRicerca}*/ getDataAnnunci={getDataAnnunci}/>}/>  

          <Route path="/servizi" element={<Servizi popupConsulenzaImmobiliare={popupConsulenzaImmobiliare} gestireContattiWhatsapp={gestireContattiWhatsapp} setConsulenzaImmobiliare={setConsulenzaImmobiliare} servizioSelezionato={servizioSelezionato} setServizioSelezionato={setServizioSelezionato} popupUtenze={popupUtenze} setPopupUtenze={setPopupUtenze} popupEntrate={popupEntrate} setPopupEntrate={setPopupEntrate}  

          //TOAST
          toast={toast}
          //DATI INTERIOR E DESIGN
          inviaDatiPerInteriorDesign={inviaDatiPerInteriorDesign} moduloInteriorDesign={moduloInteriorDesign} setModuloInteriorDesign={setModuloInteriorDesign}
          
          // DATI ARCHITETTURA
          inviaDatiPerArchitectura={inviaDatiPerArchitectura} popupArchitectura={popupArchitectura} setPopupArchitectura={setPopupArchitectura}

          // Dati Straordinaria
          inviaDatiPerStraOrdinaria={inviaDatiPerStraOrdinaria} moduloManutenzioneStra={moduloManutenzioneStra} setModuloManutenzioneStra={setModuloManutenzioneStra}

          // DATI CONSULENZA
          inviaDatiPerConsulenzaImmobiliare={inviaDatiPerConsulenzaImmobiliare} moduloConsulenza={moduloConsulenza} setModuloConsulenza={setModuloConsulenza}

          // DATI ORDINARIA
          inviaDatiPerOrdinaria={inviaDatiPerOrdinaria} 
          moduloManutenzione={moduloManutenzione} setModuloManutenzione={setModuloManutenzione}

          //DATI TRASLOCO
          inviaDatiPerTrasloco={inviaDatiPerTrasloco} 
          moduloServizioTransloco={moduloServizioTransloco} setModuloServizioTransloco={setModuloServizioTransloco}

          // CONSULENZA FINANZIARIO / MUTUO
          inviaDatiConsulenzaFinanzario={inviaDatiConsulenzaFinanzario}
          moduloConsulenzaFinanzario={moduloConsulenzaFinanzario} setModuloConsulenzaFinanzario={setModuloConsulenzaFinanzario}

          // GEOMETRA 
          inviaDatiServizioGeometra={inviaDatiServizioGeometra}
          moduloServizioGeometra={moduloServizioGeometra}setModuloServizioGeometra={setModuloServizioGeometra}

          //AVVOCATO
          inviaDatiServizioAvvocato={inviaDatiServizioAvvocato}
          moduloAvvocato={moduloAvvocato} setModuloavvocato={setModuloavvocato}

          />}/>

          <Route path="/agenzia" element={<Su_di_noi/>}/>
          <Route path='/privacy' element={<Policy/>}/>
          <Route path="/consulenza-privata" element={<ConsulenzaPrivata inviaDatiPerConsulenzaImmobiliare={inviaDatiPerConsulenzaImmobiliare} moduloConsulenza={moduloConsulenza} setModuloConsulenza={setModuloConsulenza}/>}/>
          <Route path='/collaboratori' element={<Collaborazioni/>}/>
        </Routes>  
      </Router>      

      {/* Toast Notification */}
      <ToastContainer position='bottom-right' autoClose={3000}/>
    </>
  )
}

export default App
