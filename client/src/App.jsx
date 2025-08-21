
import './App.css'
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Home from './pages/Home.jsx';
import Annunci from './pages/Annunci.jsx';
import Policy from './pages/Policy.jsx';
import Servizi from './pages/Servizi.jsx';
import Su_di_noi from './pages/Su_di_noi.jsx';
import Resa from './pages/Resa.jsx';
import { useEffect, useState } from 'react';
import preloader from './components/preloader.jsx';

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

  // Chiama l'agente da annuncio
  const chiamaAgenteDaAnnuncio = () => {
    // 
  }

  

  // Funzioni servizi
  const [popupUtenze, setPopupUtenze] = useState(false);//Servizi per l'utenze dei clienti
  const [popupConsulenzaImmobiliare, setConsulenzaImmobiliare] = useState(false);
  const [popupArchitectura, setPopupArchitectura] = useState(false);
  const [popupEntrate, setPopupEntrate] = useState(false);

  const [ristrutturazione, setRistrutturazione] = useState(false);
  // HANDLES SELECTED SERVICES
  const [servizioSelezionato, setServizioSelezionato] = useState("");

  // Ricerca e tutti variabli per ricercare gli annunci immobiliari
  const [annunci, setAnnunci] = useState([]);
  const [valueRicerca, setValueRicerca] = useState('');
  const onChangeRicerca = (e) =>{
    setValueRicerca(e.target.value);
  }
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
  
  // VARIABLE PER ATTIVARE IL MODAL CONSULENZA
  const [moduloConsulenza, setModuloConsulenza] = useState(false);
  // VARIABLE PER ATTIVARE IL MODAL MANUTENZIONE ORDINARIA
  const [moduloManutenzione, setModuloManutenzione] = useState(false);
  //VARIABLE PER ATTIVARE IL MODAL MANUTENZIONE STRAORDINARIA
  const [moduloManutenzioneStra, setModuloManutenzioneStra] = useState(false);

  // VARIABLE PER ATTIVARE IL MODAL ARCHITECTURA E INTERIOR DESIGN
  const [architectura_interior_design, set_architectura_interior_design] = useState(false);

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

  // Consulenza Immobiliare
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [emailUtente, setEmailUtente] = useState("");
  const [telnumero, setTelnumero] = useState("");
  const [messaggio, setMessaggio]= useState("");
  const [accettoPrivacy, setAccettoPrivacy] = useState("");


  //VARIABILI E DATI PER I RISTRUTTURAZIONI
  const [nomeRis, setNomeRis] = useState("");
  const [cognomeRis, setCognomeRis] = useState("");
  const [emailRis, setEmailRis] = useState("");
  const [telfonoRis, setTelfonoRis] = useState("");
  const [indirizzoMobileRis, setIndirizzoMobileRis] = useState("");
  const [tipodiImmobiliareRis, setTipodiImmobiliareRis] = useState("")
  // Superficie e stanze da ristruttazione
  const [superficieRis, setSuperficieRis] = useState("");
  const [stanzedaRis, setStanzedaRis] = useState("");

  // Tipo di Ristrutturazione
  const [impattiElettrici, setImpattiElettrici] = useState("");
  const [pavimenti, setPavimenti] = useState("");
  const [descrizioneRis, setDescrizioneRis] = useState("");

  //Budget e Tempistiche
  const [budgetRis, setBudgetRis] = useState("");
  const [tempisticheRis, setTempisticheRis] = useState("");
  const [durataRis, setDurataRis] = useState("");


  // VARIABILE PER MANUTENZIONE ORDINARIA
  const [nomeManutenzione, setNomeManutenzione] = useState("");
  const [cognomeManutenzione, setCognomeManutenzione] = useState("");
  const [emailUtenteManutenzione, setEmailUtenteManutenzione] = useState("");
  const [telnumeroManutenzione, setTelnumeroManutenzione] = useState("");
  const [indirizzoManutenzione, setindirizzoManutenzione] = useState("");
  const [capManutenzione, setCapManutenzione] = useState("");
  const [cittaManutenzione, setCittaManutenzione] = useState("");
  const [tipoDiImmobiliareManutenzione, setTipoDiImmobiliareManutenzione] = useState("");
  const [impattiElettriciManutenzione, setImpattiElettriciManutenzione] = useState(false);
  const [impianto_idraulicoManutenzione, setImpiantoIdraulicoManutenzione] = useState(false);
  const [tinteggiaturaManutenzione, setTinteggiaturaManutenzione] = useState(false);
  const [pulizieCondoManutenzione, setpulizieCondoManutenzione] = useState(false);
  const [controllo_caldaiaManutenzione, setControllo_caldaiaManutenzione] = useState(false);
  const [calendarioManutenzione, setcalendarioManutenzione] = useState(false);
  const [fasciaGiornoManutenzione, setfasciaGiornoManutenzione] = useState(false);
  const [messaggioManutenzione, setMessaggioManutenzione] = useState(false);
  const [accettoPrivacyOrdinaria, setAccettoPrivacyOrdinaria]=useState(false);


  // VARIABILE PER MANUTENZIONE STRAORDINARIA
  const [nomeManutenzioneStra, setNomeManutenzioneStra] = useState("");
  const [cognomeManutenzioneStra, setCognomeManutenzioneStra] = useState("");
  const [emailUtenteManutenzioneStra, setEmailUtenteManutenzioneStra] = useState("");
  const [telnumeroManutenzioneStra, setTelnumeroManutenzioneStra] = useState("");
  const [indirizzoManutenzioneStra, setindirizzoManutenzioneStra] = useState("");
  const [capManutenzioneStra, setCapManutenzioneStra] = useState("");
  const [cittaManutenzioneStra, setCittaManutenzioneStra] = useState("");
  const [tipoDiImmobiliareManutenzioneStra, setTipoDiImmobiliareManutenzioneStra] = useState("");
  const [ristrutturazione_parziale, setRistrutturazione_parziale] = useState("");
  const [perdite_gravi, setPerdite_gravi] = useState("");
  const [Impianti_elettrici_idraulici, setImpianti_elettrici_idraulici] = useState("");
  const [messa_norma_caldaie, setMessa_norma_caldaie] = useState("");
  const [opere_murarie_strutturali, setOpere_murarie_strutturali] = useState("");
  const [rifacimento_bagni, setRifacimento_bagni] = useState("");
  const [interventi_post_allagamento, setInterventi_post_allagamento] = useState("");
  const [grado_di_urgenza, setGrado_di_urgenza] = useState("");
  const [descrizioneManutenzioneStra, setDescrizioneManutenzioneStra] = useState("");
  const [accettoPrivacyStraOrdinaria, setAccettoPrivacyStraOrdinaria]=useState("");

  // VARIABLE PER ARCHITECTURA E INTERIOR DESIGN
  const [ristrutturazione_completa, setRistrutturazione_completa] = useState(false);
  const [interior_design_arredo, setInterior_design_arredo] = useState(false);
  const [ridistribuzione_spazi_interni, setRidistribuzione_spazi_interni] = useState(false);
  const [luce_illuminotecnica, setLuce_illuminotecnica] = useState(false);
  const [cucine_bagni_camere_su_misura, setcucine_bagni_camere_su_misura] = useState(false);
  const [noteDellUtente, setNoteDellUtente] = useState(false);
  

    // Invia tutti dati inseriti al backend per fissare un appuntamento di consulenza
    const gestireDatiConsulenza = async() => {
        const params = {
            nome: nome,
            cognome: cognome,
            email: emailUtente,
            numeroditelefono: telnumero,
            messaggio: messaggio,
            accettoPrivacy: accettoPrivacy
        }

        const isValidPhone = /^\d{10}$/.test(params.numeroditelefono);

        if(!params.nome.trim()){
          toast.error("Inserisci il nome");
        }else if(!params.cognome.trim()){
          toast.error("Inserisci il cognome")
        }else if(!isValidPhone){
          toast.error("Inserisci un numero di telefono valido (10 cifre)");
        }else if(!params.messaggio.trim()){
          toast.error("Scrivi un messaggio");
        }else if(!params.accettoPrivacy){
          toast.error("Devi accettare la privacy policy")
        }else{
          await axios.post('http://localhost:2001/consulenzaimmobiliare', params,
              {
                headers: {
                  'Content-Type': 'application/json'
                }
              }
            )
            .then((response)=>{
                console.log("Response: ",response.data);
                if(response.status === 200){
                  // Close modal
                  setConsulenzaImmobiliare(false);
                  toast.success("Richesta inviata con successo!");
                  console.log('close');
                }
            }).catch((error)=>{
                console.log("Errore: ",error.message);
                toast.error("Errore durante l'invio della richiesta");
                console.error("Errore: ", error);
            })
        }
    }

    const invia_dati_per_manutenzioni_ordinaria = async() => {

      const params = {
        nome: nomeManutenzione,
        cognome: cognomeManutenzione,
        email: emailUtenteManutenzione,
        numeroditelefono: telnumeroManutenzione,
        indirizzoMobile: indirizzoManutenzione,
        cap: capManutenzione,
        citta: cittaManutenzione,
        tipoDiImmobiliare: tipoDiImmobiliareManutenzione,
        impatti_elettrici_manutenzione: impattiElettriciManutenzione,
        impianto_idraulico: impianto_idraulicoManutenzione,
        tinteggiatura: tinteggiaturaManutenzione,
        pulizie_condo: pulizieCondoManutenzione,
        controllo_caldaia: controllo_caldaiaManutenzione,
        calendario: calendarioManutenzione,
        fascia_giorno: fasciaGiornoManutenzione,
        messaggio: messaggioManutenzione,
        accetto_privacy: accettoPrivacyOrdinaria
      }

      const isValidPhone = /^\d{10}$/.test(params.numeroditelefono);

      if(!params.nome.trim()){
        toast.error("Inserisci il nome");
      }else if(!params.cognome.trim()){
        toast.error("Inserisci il cognome");
      }else if(!isValidPhone){
        toast.error("Inserisci un numero di telefono valido (10 cifre)");
      }else if(!params.indirizzoMobile.trim()){
        toast.error("Scrivi un indirizzo del mobile");
      }else if(!params.cap.trim()){
        toast.error("Scrivi il CAP");
      }else if(!params.citta.trim()){
        toast.error("Scrivi la citta");
      }else if(!params.tipoDiImmobiliare.trim()){
        toast.error("Scegliere il tipo di immobiliare");
      }else if(params.accetto_privacy === false){
        toast.error("Accetta il privacy prima di proseguire");
      }else if(!params.indirizzoMobile.trim()){
        toast.error("Scrivi un messaggio");
      }else if(!params.indirizzoMobile.trim()){
        toast.error("Scrivi un messaggio");
      }else if(!params.indirizzoMobile.trim()){
        toast.error("Scrivi un messaggio");
      }else if(!params.indirizzoMobile.trim()){
        toast.error("Scrivi un messaggio");
      }else if(!params.messaggio.trim()){
        toast.error("Scrivi un messaggio");
      }
      console.log(params);

      // Manda i dati con API al backend
      await axios('http://localhost:2001/consulenza-manutenzione-ordinaria', params, {
        headers: {
          'Content-Type': 'application/json' 
        }
      }).then((response)=>{
        console.log("Response: ", response);
        if(response.status === 200){
          //Close modal 
          setModuloManutenzione(false);
          toast.success("Richiesta inviata con successo!");
          console.log('close');
        }
      }).catch((error)=>{
        console.log("Errore: ", error.message);
        toast.error("Errore durante l'invio della richiesta");
        console.error("Errore: ", error);
      })
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
          nome={nome} setNome={setNome} setCognome={setCognome} cognome={cognome} emailUtente={emailUtente} setEmailUtente={setEmailUtente} telnumero={telnumero} setTelnumero={setTelnumero} messaggio={messaggio} setMessaggio={setMessaggio}
          gestireDatiConsulenza={gestireDatiConsulenza} popupConsulenzaImmobiliare={popupConsulenzaImmobiliare} popupUtenze={popupUtenze} servizioSelezionato={servizioSelezionato} setConsulenzaImmobiliare={setConsulenzaImmobiliare} setServizioSelezionato={setServizioSelezionato} gestireContattiWhatsapp={gestireContattiWhatsapp} setPopupUtenze={setPopupUtenze} moduloConsulenza={moduloConsulenza} setModuloConsulenza={setModuloConsulenza} ristrutturazione={ristrutturazione} setRistrutturazione={setRistrutturazione} accettoPrivacy={accettoPrivacy} setAccettoPrivacy={setAccettoPrivacy}
          valueRicerca={valueRicerca}  setValueRicerca={setValueRicerca}
          // Dati Ricerca
          onChangeRicerca={onChangeRicerca}
          onSearch={onSearch}
          // Dati per la manutenzioni
            nomeManutenzione={nomeManutenzione} setNomeManutenzione={setNomeManutenzione} cognomeManutenzione={cognomeManutenzione}
            setCognomeManutenzione={setCognomeManutenzione} emailUtenteManutenzione={emailUtenteManutenzione} setEmailUtenteManutenzione={setEmailUtenteManutenzione} telnumeroManutenzione={telnumeroManutenzione} setTelnumeroManutenzione={setTelnumeroManutenzione}
            indirizzoManutenzione={indirizzoManutenzione} setindirizzoManutenzione={setindirizzoManutenzione}
            capManutenzione={capManutenzione} setCapManutenzione={setCapManutenzione} cittaManutenzione={cittaManutenzione} setCittaManutenzione={setCittaManutenzione}
            tipoDiImmobiliareManutenzione={tipoDiImmobiliareManutenzione} setTipoDiImmobiliareManutenzione={setTipoDiImmobiliareManutenzione} impattiElettriciManutenzione={impattiElettriciManutenzione} setImpattiElettriciManutenzione={setImpattiElettriciManutenzione} impianto_idraulicoManutenzione={impianto_idraulicoManutenzione} setImpiantoIdraulicoManutenzione={setImpiantoIdraulicoManutenzione} tinteggiaturaManutenzione={tinteggiaturaManutenzione} setTinteggiaturaManutenzione={setTinteggiaturaManutenzione} pulizieCondoManutenzione={pulizieCondoManutenzione} setpulizieCondoManutenzione={setpulizieCondoManutenzione} controllo_caldaiaManutenzione={controllo_caldaiaManutenzione} setControllo_caldaiaManutenzione={setControllo_caldaiaManutenzione} calendarioManutenzione={calendarioManutenzione} setcalendarioManutenzione={setcalendarioManutenzione} fasciaGiornoManutenzione={fasciaGiornoManutenzione} setfasciaGiornoManutenzione={setfasciaGiornoManutenzione} messaggioManutenzione={messaggioManutenzione} setMessaggioManutenzione={setMessaggioManutenzione} accettoPrivacyOrdinaria={accettoPrivacyOrdinaria}
            setAccettoPrivacyOrdinaria={setAccettoPrivacyOrdinaria}
            // Dati per la ristrutturazione
            moduloManutenzione={moduloManutenzione} setModuloManutenzione={setModuloManutenzione}
            nomeRis={nomeRis} setNomeRis={setNomeRis}
            emailRis={emailRis} setEmailRis={setEmailRis}
            cognomeRis={cognomeRis} setCognomeRis={setCognomeRis} telfonoRis={telfonoRis} setTelfonoRis={setTelfonoRis} indirizzoMobileRis={indirizzoMobileRis} setIndirizzoMobileRis={setIndirizzoMobileRis}
            tipodiImmobiliareRis={tipodiImmobiliareRis} setTipodiImmobiliareRis={setTipodiImmobiliareRis} superficieRis={superficieRis} setSuperficieRis={setSuperficieRis} stanzedaRis={stanzedaRis} setStanzedaRis={setStanzedaRis} impattiElettrici={impattiElettrici} setImpattiElettrici={setImpattiElettrici}
            pavimenti={pavimenti} setPavimenti={setPavimenti} descrizioneRis={descrizioneRis} setDescrizioneRis={setDescrizioneRis} budgetRis={budgetRis} setBudgetRis={setBudgetRis} tempisticheRis={tempisticheRis} setTempisticheRis={setTempisticheRis} durataRis={durataRis} setDurataRis={setDurataRis} 

          // Dati Manutenzione straordinaria
          nomeManutenzioneStra={nomeManutenzioneStra} setNomeManutenzioneStra={setNomeManutenzioneStra}
          cognomeManutenzioneStra={cognomeManutenzioneStra} setCognomeManutenzioneStra={setCognomeManutenzioneStra}
          emailUtenteManutenzioneStra={emailUtenteManutenzioneStra} setEmailUtenteManutenzioneStra={setEmailUtenteManutenzioneStra}
          telnumeroManutenzioneStra={telnumeroManutenzioneStra} setTelnumeroManutenzioneStra={setTelnumeroManutenzioneStra}
          indirizzoManutenzioneStra={indirizzoManutenzioneStra} setindirizzoManutenzioneStra={setindirizzoManutenzioneStra}
          capManutenzioneStra={capManutenzioneStra} setCapManutenzioneStra={setCapManutenzioneStra}
          cittaManutenzioneStra={cittaManutenzioneStra} setCittaManutenzioneStra={setCittaManutenzioneStra}
          tipoDiImmobiliareManutenzioneStra={tipoDiImmobiliareManutenzioneStra} setTipoDiImmobiliareManutenzioneStra={setTipoDiImmobiliareManutenzioneStra}
          ristrutturazione_parziale={ristrutturazione_parziale} setRistrutturazione_parziale={setRistrutturazione_parziale}
          perdite_gravi={perdite_gravi} setPerdite_gravi={setPerdite_gravi}
          Impianti_elettrici_idraulici={Impianti_elettrici_idraulici} setImpianti_elettrici_idraulici={setImpianti_elettrici_idraulici}
          messa_norma_caldaie={messa_norma_caldaie} setMessa_norma_caldaie={setMessa_norma_caldaie}
          opere_murarie_strutturali={opere_murarie_strutturali} setOpere_murarie_strutturali={setOpere_murarie_strutturali}
          rifacimento_bagni={rifacimento_bagni} setRifacimento_bagni={setRifacimento_bagni}
          interventi_post_allagamento={interventi_post_allagamento} setInterventi_post_allagamento={setInterventi_post_allagamento}
          grado_di_urgenza={grado_di_urgenza} setGrado_di_urgenza={setGrado_di_urgenza}
          accettoPrivacyStraOrdinaria={accettoPrivacyStraOrdinaria} setAccettoPrivacyStraOrdinaria={setAccettoPrivacyStraOrdinaria}
          moduloManutenzioneStra={moduloManutenzioneStra} setModuloManutenzioneStra={setModuloManutenzioneStra}
          descrizioneManutenzioneStra={descrizioneManutenzioneStra} setDescrizioneManutenzioneStra={setDescrizioneManutenzioneStra}

          // ARCHITECTURA E INTERIOR DESIGN
            architectura_interior_design={architectura_interior_design} set_architectura_interior_design={set_architectura_interior_design}
            ristrutturazione_completa={ristrutturazione_completa} setRistrutturazione_completa={setRistrutturazione_completa}
            interior_design_arredo={interior_design_arredo} setInterior_design_arredo={setInterior_design_arredo} ridistribuzione_spazi_interni={ridistribuzione_spazi_interni}
            setRidistribuzione_spazi_interni={setRidistribuzione_spazi_interni}
            luce_illuminotecnica={luce_illuminotecnica} setLuce_illuminotecnica={setLuce_illuminotecnica}
            cucine_bagni_camere_su_misura={cucine_bagni_camere_su_misura} setcucine_bagni_camere_su_misura={setcucine_bagni_camere_su_misura}
            noteDellUtente={noteDellUtente} setNoteDellUtente={setNoteDellUtente}
          />}/>  

          <Route path="/annunci" element={<Annunci 
          // Images on gallery
          currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}
          goPrev={goPrev} goNext={goNext} isFullScreen={isFullScreen} setIsFullScreen={setIsFullScreen}
          // Funzione per chiamare agente da annuncio
          chiamaAgenteDaAnnuncio={chiamaAgenteDaAnnuncio}

          listingSelected={listingSelected} setlistingSelected={setlistingSelected} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} onOpenGallery={onOpenGallery} isGalleryOpen={isGalleryOpen} setIsGalleryOpen={setIsGalleryOpen} galleryImages={galleryImages} setGalleryImages={setGalleryImages} valueRicerca={valueRicerca}  setValueRicerca={setValueRicerca} onChangeRicerca={onChangeRicerca} getDataAnnunci={getDataAnnunci}/>}/>  

          <Route path="/servizi" element={<Servizi 
          
          popupConsulenzaImmobiliare={popupConsulenzaImmobiliare} gestireContattiWhatsapp={gestireContattiWhatsapp} setConsulenzaImmobiliare={setConsulenzaImmobiliare} servizioSelezionato={servizioSelezionato} setServizioSelezionato={setServizioSelezionato} popupUtenze={popupUtenze} setPopupUtenze={setPopupUtenze}
          popupEntrate={popupEntrate} setPopupEntrate={setPopupEntrate} 
          // ARCHITECTURA INTERIOR E DESIGN
            popupArchitectura={popupArchitectura} setPopupArchitectura={setPopupArchitectura}
            ristrutturazione_completa={ristrutturazione_completa}setRistrutturazione_completa={setRistrutturazione_completa}

                interior_design_arredo={interior_design_arredo} setInterior_design_arredo={setInterior_design_arredo}
                
                ridistribuzione_spazi_interni={ridistribuzione_spazi_interni} 
                setRidistribuzione_spazi_interni={setRidistribuzione_spazi_interni}

                luce_illuminotecnica={luce_illuminotecnica} setLuce_illuminotecnica={setLuce_illuminotecnica} cucine_bagni_camere_su_misura={cucine_bagni_camere_su_misura} 

                setcucine_bagni_camere_su_misura={setcucine_bagni_camere_su_misura} noteDellUtente={noteDellUtente} setNoteDellUtente={setNoteDellUtente} indirizzoMobileRis={indirizzoMobileRis} setIndirizzoMobileRis={setIndirizzoMobileRis}
                nome={nome} setNome={setNome} cognome={cognome} setCognome={setCognome} emailUtente={emailUtente} setEmailUtente={setEmailUtente} telnumero={telnumero} setTelnumero={setTelnumero} tipodiImmobiliareRis={tipodiImmobiliareRis}
                set_architectura_interior_design={set_architectura_interior_design} setTipodiImmobiliareRis={setTipodiImmobiliareRis} architectura_interior_design={architectura_interior_design}
              getDataAnnunci={getDataAnnunci}

              // Straordinaria dati
              moduloManutenzioneStra={moduloManutenzioneStra} setModuloManutenzioneStra={setModuloManutenzioneStra}
              nomeManutenzioneStra={nomeManutenzioneStra} setNomeManutenzioneStra={setNomeManutenzioneStra} cognomeManutenzioneStra={cognomeManutenzioneStra} setCognomeManutenzioneStra={setCognomeManutenzioneStra}
                    emailUtenteManutenzioneStra={emailUtenteManutenzioneStra} setEmailUtenteManutenzioneStra={setEmailUtenteManutenzioneStra} telnumeroManutenzioneStra={telnumeroManutenzioneStra}setTelnumeroManutenzioneStra={setTelnumeroManutenzioneStra}
                    indirizzoManutenzioneStra={indirizzoManutenzioneStra} setindirizzoManutenzioneStra={setindirizzoManutenzioneStra} capManutenzioneStra={capManutenzioneStra} setCapManutenzioneStra={setCapManutenzioneStra} cittaManutenzioneStra={cittaManutenzioneStra} setCittaManutenzioneStra={setCittaManutenzioneStra} tipoDiImmobiliareManutenzioneStra={tipoDiImmobiliareManutenzioneStra} setTipoDiImmobiliareManutenzioneStra={setTipoDiImmobiliareManutenzioneStra}
                    ristrutturazione_parziale={ristrutturazione_parziale}  setRistrutturazione_parziale={setRistrutturazione_parziale} perdite_gravi={perdite_gravi} setPerdite_gravi={setPerdite_gravi} Impianti_elettrici_idraulici={Impianti_elettrici_idraulici} setImpianti_elettrici_idraulici={setImpianti_elettrici_idraulici} messa_norma_caldaie={messa_norma_caldaie} setMessa_norma_caldaie={setMessa_norma_caldaie} opere_murarie_strutturali={opere_murarie_strutturali}
                    setOpere_murarie_strutturali={setOpere_murarie_strutturali} rifacimento_bagni={rifacimento_bagni} setRifacimento_bagni={setRifacimento_bagni} interventi_post_allagamento={interventi_post_allagamento} setInterventi_post_allagamento={setInterventi_post_allagamento} grado_di_urgenza={grado_di_urgenza} setGrado_di_urgenza={setGrado_di_urgenza} accettoPrivacyStraOrdinaria={accettoPrivacyStraOrdinaria} setAccettoPrivacyStraOrdinaria={setAccettoPrivacyStraOrdinaria}
                    setDescrizioneManutenzioneStra={setDescrizioneManutenzioneStra} descrizioneManutenzioneStra={descrizioneManutenzioneStra}

                    // Ordinaria Dati
                    moduloManutenzione={moduloManutenzione} setModuloManutenzione={setModuloManutenzione}
                    nomeManutenzione={nomeManutenzione} setNomeManutenzione={setNomeManutenzione} cognomeManutenzione={cognomeManutenzione}
                    setCognomeManutenzione={setCognomeManutenzione} emailUtenteManutenzione={emailUtenteManutenzione}  setEmailUtenteManutenzione={setEmailUtenteManutenzione} telnumeroManutenzione={telnumeroManutenzione} setTelnumeroManutenzione={setTelnumeroManutenzione}
                    indirizzoManutenzione={indirizzoManutenzione} setindirizzoManutenzione={setindirizzoManutenzione} accettoPrivacyOrdinaria={accettoPrivacyOrdinaria} setAccettoPrivacyOrdinaria={setAccettoPrivacyOrdinaria}
                    capManutenzione={capManutenzione} setCapManutenzione={setCapManutenzione} cittaManutenzione={cittaManutenzione} setCittaManutenzione={setCittaManutenzione}
                    tipoDiImmobiliareManutenzione={tipoDiImmobiliareManutenzione} setTipoDiImmobiliareManutenzione={setTipoDiImmobiliareManutenzione} impattiElettriciManutenzione={impattiElettriciManutenzione} setImpattiElettriciManutenzione={setImpattiElettriciManutenzione} impianto_idraulicoManutenzione={impianto_idraulicoManutenzione} setImpiantoIdraulicoManutenzione={setImpiantoIdraulicoManutenzione} tinteggiaturaManutenzione={tinteggiaturaManutenzione} setTinteggiaturaManutenzione={setTinteggiaturaManutenzione} pulizieCondoManutenzione={pulizieCondoManutenzione} setpulizieCondoManutenzione={setpulizieCondoManutenzione} controllo_caldaiaManutenzione={controllo_caldaiaManutenzione} setControllo_caldaiaManutenzione={setControllo_caldaiaManutenzione} calendarioManutenzione={calendarioManutenzione} setcalendarioManutenzione={setcalendarioManutenzione} fasciaGiornoManutenzione={fasciaGiornoManutenzione} setfasciaGiornoManutenzione={setfasciaGiornoManutenzione} messaggioManutenzione={messaggioManutenzione} setMessaggioManutenzione={setMessaggioManutenzione}
                    invia_dati_per_manutenzioni_ordinaria={invia_dati_per_manutenzioni_ordinaria}
                
          />}/>

          <Route path="/agenzia" element={<Su_di_noi/>}/>
          <Route path='/privacy' element={<Policy/>}/>
          <Route path="/resa" element={<Resa gestireDatiConsulenza={gestireDatiConsulenza} nome={nome} setNome={setNome} setCognome={setCognome} cognome={cognome} emailUtente={emailUtente} setEmailUtente={setEmailUtente} telnumero={telnumero} setTelnumero={setTelnumero} messaggio={messaggio} setMessaggio={setMessaggio} setConsulenzaImmobiliare={setConsulenzaImmobiliare} popupConsulenzaImmobiliare={popupConsulenzaImmobiliare} toast={toast} ToastContainer={ToastContainer}/>}/>
        </Routes>  
      </Router>      
    </>
  )
}

export default App
