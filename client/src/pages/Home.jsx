import { BrowserRouter as  Router, Routes, Route, Link, data, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import herox from '../assets/img/home.jpeg';
import image2 from '../assets/img/image2.png';
import guide from '../assets/img/la fondatrice.jpg';
import {FaPiggyBank, FaHome, FaTools, FaPhone, FaEnvelope, FaClock, FaQuestion} from 'react-icons/fa'
import {MdArchitecture} from 'react-icons/md';
import { GrVmMaintenance } from "react-icons/gr";
import proprieta_1 from '../assets/img/proprieta_1.jpg';
import Footer from '../components/Footer.jsx';
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ModalUtenze from "../components/ModalUtenze.jsx";
import ModalConsulenza from "../components/ModalConsulenza.jsx";
import ModalRistrutturazioni from "../components/ModalRistrutturazione.jsx";
import logo from '../assets/img/White Logo.png';
import FAQSchema from "../components/FAQ.jsx";
import { Helmet } from "react-helmet";
import ModalOrdinaria from "../components/ModalOrdinaria.jsx";
import ModalStraOrdinaria from "../components/ModalStraOrdinaria.jsx";

import ModalArchitectura from "../components/ModalArchitectura.jsx";
import { FadeIn } from "../components/animations/FadeIn.jsx";

const Home = ({popupUtenze, nome, setNome, setCognome, cognome, emailUtente, setEmailUtente, telnumero, setTelnumero, setMotivoPerConsulenzaImmobiliare, motivoPerConsulenzaImmobiliare, setServizioSelezionato ,gestireDatiConsulenza,  gestireContattiWhatsapp, setPopupUtenze, popupConsulenzaImmobiliare, setConsulenzaImmobiliare, moduloConsulenza, setModuloConsulenza, ristrutturazione, setRistrutturazione, setAccettoPrivacy, accettoPrivacy, nomeRis, emailRis, setEmailRis, setNomeRis, cognomeRis, setCognomeRis, telfonoRis, setTelfonoRis, indirizzoMobileRis, setIndirizzoMobileRis, tipodiImmobiliareRis, setTipodiImmobiliareRis, superficieRis, setSuperficieRis, stanzedaRis, setStanzedaRis, impattiElettrici, setImpattiElettrici, pavimenti, setPavimenti, descrizioneRis, setDescrizioneRis, budgetRis, setBudgetRis, tempisticheRis, setTempisticheRis, durataRis, setDurataRis, inviaDatiPerRistrutturazione, moduloManutenzione, setModuloManutenzione,
nomeManutenzione, setNomeManutenzione, cognomeManutenzione,
setCognomeManutenzione, emailUtenteManutenzione,  setEmailUtenteManutenzione, telnumeroManutenzione, setTelnumeroManutenzione,
indirizzoManutenzione, setindirizzoManutenzione,
capManutenzione, setCapManutenzione, cittaManutenzione, setCittaManutenzione,
tipoDiImmobiliareManutenzione, setTipoDiImmobiliareManutenzione, impattiElettriciManutenzione, setImpattiElettriciManutenzione, impianto_idraulicoManutenzione, setImpiantoIdraulicoManutenzione, tinteggiaturaManutenzione, setTinteggiaturaManutenzione, pulizieCondoManutenzione, setpulizieCondoManutenzione, controllo_caldaiaManutenzione, setControllo_caldaiaManutenzione, calendarioManutenzione, setcalendarioManutenzione, fasciaGiornoManutenzione, setfasciaGiornoManutenzione, messaggioManutenzione, setMessaggioManutenzione, accettoPrivacyOrdinaria, setAccettoPrivacyOrdinaria,
nomeManutenzioneStra, setNomeManutenzioneStra, cognomeManutenzioneStra, setCognomeManutenzioneStra,
emailUtenteManutenzioneStra, setEmailUtenteManutenzioneStra, telnumeroManutenzioneStra, setTelnumeroManutenzioneStra,
indirizzoManutenzioneStra, setindirizzoManutenzioneStra, capManutenzioneStra, setCapManutenzioneStra, cittaManutenzioneStra, setCittaManutenzioneStra, tipoDiImmobiliareManutenzioneStra, setTipoDiImmobiliareManutenzioneStra,
ristrutturazione_parziale,  setRistrutturazione_parziale, perdite_gravi, setPerdite_gravi, Impianti_elettrici_idraulici, setImpianti_elettrici_idraulici, messa_norma_caldaie, setMessa_norma_caldaie, opere_murarie_strutturali,
setOpere_murarie_strutturali, rifacimento_bagni, setRifacimento_bagni, interventi_post_allagamento, setInterventi_post_allagamento, grado_di_urgenza, setGrado_di_urgenza, accettoPrivacyStraOrdinaria, setAccettoPrivacyStraOrdinaria,
moduloManutenzioneStra, setModuloManutenzioneStra, setDescrizioneManutenzioneStra, descrizioneManutenzioneStra, ristrutturazione_completa, setRistrutturazione_completa, interior_design_arredo, setInterior_design_arredo, ridistribuzione_spazi_interni, setRidistribuzione_spazi_interni,
luce_illuminotecnica, setLuce_illuminotecnica, cucine_bagni_camere_su_misura, setcucine_bagni_camere_su_misura, noteDellUtente, setNoteDellUtente,
set_architectura_interior_design, architectura_interior_design, valueRicerca, setValueRicerca, onChangeRicerca
, setIsModalOpen, setlistingSelected, onOpenGallery}) => {
    /** THE HOME PAGE */
    const [annunci, setAnnunci] = useState([]);
    const getAnnuncImmobiliari = async () =>{
        await axios.get('http://localhost:2001/annunci')
        .then(response=>{setAnnunci(response.data.result)})
        .catch(error=>{console.error("Error:",error)});
    }

    //const [valueRicerca, setValueRicerca] = useState('');
    const redirectAnnunci =  useNavigate();
        
    // const onChangeRicerca = (e) =>{
    //     setValueRicerca(e.target.value);
    // }

    const onSearch = (valueRicerca)=> {
        //Call API
        setValueRicerca(valueRicerca);
       redirectAnnunci(`/annunci?ricercaData=${valueRicerca}`);
        
        console.log("Search: ", valueRicerca);
    }
    useEffect(()=>{
        getAnnuncImmobiliari()
    }, []);


    return <>
        <div>
            {/* Meta description */}
            <div>
                <Helmet>
                    <title>La Scelta Intelligente per il tuo immobile</title>
                    <meta name="description" content="Cerchi casa a Quarrata? Sfoglia gli ultimi annunci di vendita e affitto. Valutazione gratuita e consulenza personalizzata."/>
                </Helmet>

            </div>


            {/** Hero section */}
            <FadeIn>
            <div  style={{background: `url(${herox})`,
                backgroundSize: `cover`, backgroundPosition: `center`}} className=" min-h-screen img bg-cover flex-col items-center bg-center  text-white md:px-5 py-2">
                    
                {/* Contact Bar */}
                <div className="flex md:w-56  sm:w-25 flex-col sm:flex-row justify-between text-xs sm:text-sm px-2 py-1">
                    {/* phone and email */}
                    
                    <div className="flex sm:flex-col md:flex-row sm:items-start  justify-center items-center">
                        <FaPhone className="mr-0.5 sm:hidden"/>
                        <span className="mr-2 md:w-1/2 ">+39 331-1887849 | 0573-737305</span>
                        <FaEnvelope className="mr-0.5 md:w-1/2 sm:hidden"/>
                        <span>gunzimangusta@gmail.com</span>
                    </div>
                    

                    {/* time */}
                    <div className="flex  sm:flex-col md:flex-row md:w-20 sm:justify-center items-center sm:items-start justify-start">
                        <FaClock className="mr-0.5  md:text-md sm:hidden"/>
                        <span className="mr-2 w-full  md:w-1/2">Lunedi - Venerdi</span>
                        <span className="w-full  md:w-1/2">9:30 - 13:00 16:00 - 19:30</span>
                    </div>
                </div>
                <div className="flex sm:justify-between sm:ml-2 sm:items-center">
                    <img src={logo} className="w-5 " alt="Enrico Erca"/>
                    <NavBar/>
                </div>
                <h1 className="text-3xl sm:text-6xl sm:w-25 md:w-50 md:text-7xl text-center mt-6 sm:mt-3 mx-auto font-bold">La scelta intelligente per il tuo immobile!</h1>
                <p className="mt-4 sm:mt-1 text-base sm:w-20 md:text-base text-center md:w-32 mx-auto">Ti aiutiamo a <b>risparmiare su gas e luce</b>, calcolare il <b>valore della tua proprietà</b> e trovare le migliori <b>soluzioni in vendita</b> o <b>in affitto</b>. Hai bisogno di ristrutturazioni o di una consulenza esperta? I nostri consulenti immobiliari sono a tua disposizione!</p>


                {/* Search bar */}
                    <div className="relative w-full max-w-6xl sm:w-26 md:ml-[15rem] px-4">
                        <div className="flex flex-col sm:flex-row items-center gap-2 mt-0 w-[60rem] sm:w-[35rem] ">
                        <input type="search" /*value={valueRicerca}*/ onChange={(e)=>setSearch(e.target.value)} className="border-b text-white border-white outline-none py-0.5 px-1 w-full sm:w-3/4 outline-0 my-1 md:ml-9  lg:ml-0 sm:ml-1 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-white-500 "  name="search_immobili" id="search_immobili" placeholder="Ricerca tutti immobili disponibile, locazione, prezzo, tipo" />
                        {/* <button className="bg-red-500 text-white px-0.5 md:ml-9 py-0.5 hover:border-amber-50 hover:pointer" onClick={()=> onSearch(valueRicerca)}>Cerca</button> */}
                        </div>
                        {/* Search Results */}
                        
                        {valueRicerca && (
                            <div className="absolute z-10 -top-1 left-9 lg:lef-0 w-full sm:top-3 sm:left-0 sm:w-25 bg-white border border-gray-300 rounded-lg shadow-lg">
                                <ul className="divide-y divide-gray-200">
                                    {/* L'agguingo per il filtro per le ricerche */}
                                    {annunci?.filter(item=>{
                                        const  ricerca_dati = valueRicerca.toLowerCase(); 
                                        const titolo = item.titolo.toLowerCase();
                                        //Ritorna un true se il valore e' di ricerca esiste
                                        return ricerca_dati && titolo.startsWith(ricerca_dati) && titolo !== ricerca_dati;
                                    }).map((data)=>(
                                        <li onClick={()=>onSearch(data.titolo)} className="p-1 hover:bg-gray-100 text-black cursor-pointer">{data.titolo}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        
                    </div>
                
                
            </div>
            </FadeIn>

            {/* Listing top 5 recent */}
            <FadeIn>
            <div className=" my-2">
                <h1 className="text-center my-2 sm:!text-lg md:text-2xl font-bold uppercase underline underline-offset-8">Annunci In Evidenza</h1>
                
                
                <div className=" lg:flex  lg:flex-row lg:justify-center lg:gap-6 p-4 sm:p-1">
                    {
                        // Questa parte monstra solo le 3 recenti annunci scaricato
                        Object.keys(annunci).slice(0, 3).map((data)=>{
                            return <>
                                    {/* Card */}
                                    
                                    <div key={annunci[data].id} onClick={()=>{setIsModalOpen(true); setlistingSelected(data); onOpenGallery(data.id)}} className="md:w-72 sm:w-25 sm:mb-2 bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105">
                                        <img
                                            src={`http://localhost:2001/uploads/${annunci[data].img_url}`}
                                            alt={annunci[data].titolo}
                                            className="w-full h-12 object-cover"
                                        />
                                        <div className="p-1 flex flex-col h-full">
                                            <div className="mb-2">
                                                <h3 className="text-xl font-semibold">{annunci[data].titolo}</h3>
                                                <p className="text-gray-500 text-sm">{annunci[data].indirizzo}</p>
                                            </div>
                                            <div className="flex justify-between items-center mb-2">
                                                <h2 className="text-green-600 text-2xl font-bold">€{annunci[data].prezzo} {annunci[data].is_vendita === 0 ? '/mese': ''}</h2>
                                                <span className="text-sm bg-green-100 text-green-700 px-2 py-0.5 rounded">
                                                    {annunci[data].is_vendita === 1 ? 'Vendita': 'Affitto'}
                                                </span>
                                            </div>
                                            <div className="text-gray-600 text-sm flex justify-between items-center">
                                            <p>{annunci[data].camere} camere · {annunci[data].bagni} bagni · 1250 sqft</p>
                                            <a href="#" className="text-blue-500 underline hover:text-blue-700">
                                                Chiama
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                            </>
                        })
                    }

                </div>
                <button className="bg-red-500 text-white px-0.5 mx-auto block py-0.5 hover:border-amber-50 hover:pointer transition-transform hover:scale-75"><Link style={{color:'white'}} to={'/annunci'}>Trovare l'appartamento che fa per te!</Link></button>
            </div>
            </FadeIn>

            {/* Chi siamo */}
            <FadeIn>
            <div style={{background: `url(${image2})`,
                backgroundSize: `cover`, backgroundPosition: `center`}} className="min-h-24 img w-full flex justify-center items-center bg-cover bg-center text-white px-4 py-10 text-center md:text-left">
                <div className="px-2 md:w-2/3">
                    <h2 className="font-bold text-4xl md:text-6xl mb-4">CHI SIAMO</h2>
                    <p>Siamo un'agenzia immobiliare impegnata ad aiutarti a trovare la casa perfetta, sia in affitto che in acquisto, fornendo allo stesso tempo una guida esperta su come risparmiare su gas ed elettricità. La nostra missione è rendere le transazioni immobiliari fluide e convenienti per te!</p>
                </div>
                <img className="w-15 sm:hidden md:block mt-6 md:mt-0 md:ml-6 h-20 border-5" src={guide} alt=""/>
            </div>
            </FadeIn>
            {/* Servizi */}
            <p className="text-xl font-bold my-3 text-center" style={{color: "#36454F"}}>Non  obbligatorio di acquistare da noi immobili per usufruire dei nostri servizi*</p>
            <div className="grid md:grid-cols-3 gap-1 sm:grid-cols-1">
                <FadeIn>
                    <Link onClick={()=>setPopupUtenze(true)} className="transition-transform hover:scale-105 sm:mb-3">
                        < div className="text-center sm:mt-3">
                            <FaPiggyBank className="text-red-500 text-7xl mx-auto"/>
                            <p style={{color: "#36454F"}} className="font-bold mt-1">Gestione delle Bollette</p>
                            <p style={{color: "#36454F"}} className="w-10 mx-auto">Cerchi un sistema di risparmia delle tue bollette? </p>
                        </div>
                    </Link>
                </FadeIn>
                <FadeIn>
                    <Link onClick={()=>setConsulenzaImmobiliare(true)} className="transition-transform hover:scale-105 sm:mb-3">
                        <div className="text-center sm:mt-3">
                            <FaHome className="text-red-500 text-7xl mx-auto"/>
                            <p style={{color: "#36454F"}}  className="font-bold mt-1">Consulenza Immobiliare</p>
                            <p style={{color: "#36454F"}} className="w-10 mx-auto">
                                Clicca qui per prenotare un appuntamento di consulenza <br />
                                <b>Ufficio aperto dalle 9:30 alle 13:00 e dalle 16:00 alle 19:30</b>
                            </p>

                        </div>
                    </Link>
                </FadeIn>

                <FadeIn>
                    {/* Archittetura */}
                    <Link onClick={()=>set_architectura_interior_design(true)} className="transition-transform hover:scale-105 sm:mb-3">
                        <div className="text-center sm:mt-3">
                            <MdArchitecture className="text-red-500 text-7xl mx-auto"/>
                            <p style={{color: "#36454F"}}  className="font-bold mt-1">Architectura <br /> e Interior Design</p>
                            <p style={{color: "#36454F"}} className="w-10 mx-auto">Hai trovato la casa giusta? Ora rendila perfetta.</p>
                        </div>
                    </Link>
                </FadeIn>

                <FadeIn>
                    {/* Manutenzione Ordinaria */}
                    <Link onClick={()=>setModuloManutenzione(true)} className="transition-transform hover:scale-105 sm:mb-3">
                        <div className="text-center sm:mt-3">
                            <GrVmMaintenance className="text-red-500 text-7xl mx-auto"/>
                            <p style={{color: "#36454F"}}  className="font-bold mt-1">Manutenzione Ordinaria</p>
                            <p style={{color: "#36454F"}} className="w-10 mx-auto">Hai trovato la casa giusta? Ora rendila perfetta.</p>
                        </div>
                    </Link>
                </FadeIn>


                <FadeIn>
                    {/* Manutenzione Straodinaria */}
                    <Link onClick={()=>setModuloManutenzioneStra(true)} className="transition-transform hover:scale-105 sm:mb-3">
                        <div className="text-center sm:mt-3">
                            <GrVmMaintenance className="text-red-500 text-7xl mx-auto"/>
                            <p style={{color: "#36454F"}}  className="font-bold mt-1">Manutenzione Straordinaria</p>
                            <p style={{color: "#36454F"}} className="w-10 mx-auto">
                                Hai bisogno di un intervento urgente o di una ristrutturazione importante?<br />
                                <b>📞 Compila la richiesta e verrai ricontattato entro 24 ore</b>
                            </p>
                        </div>
                    </Link>
                </FadeIn>

            </div>
            {popupUtenze === true && (
                
                <ModalUtenze popupUtenze={popupUtenze} gestireContattiWhatsapp={gestireContattiWhatsapp} setServizioSelezionato={setServizioSelezionato} setPopupUtenze={setPopupUtenze}/>
                
            )}

            {popupConsulenzaImmobiliare === true && (
                <ModalConsulenza gestireDatiConsulenza={gestireDatiConsulenza} nome={nome} setNome={setNome} setCognome={setCognome} cognome={cognome} emailUtente={emailUtente} setEmailUtente={setEmailUtente}  telnumero={telnumero} setTelnumero={setTelnumero} setMotivoPerConsulenzaImmobiliare={setMotivoPerConsulenzaImmobiliare} motivoPerConsulenzaImmobiliare={motivoPerConsulenzaImmobiliare} setModuloConsulenza={setModuloConsulenza} toast={toast} 
                setConsulenzaImmobiliare={setConsulenzaImmobiliare} 
                popupConsulenzaImmobiliare={popupConsulenzaImmobiliare}moduloConsulenza={moduloConsulenza} setAccettoPrivacy={setAccettoPrivacy} accettoPrivacy={accettoPrivacy}/>
            )}

            {architectura_interior_design === true && (
                <ModalArchitectura 
                    nome={nome} setNome={setNome} setCognome={setCognome} cognome={cognome} emailUtente={emailUtente} setEmailUtente={setEmailUtente} telnumero={telnumero} setTelnumero={setTelnumero}
                    indirizzoMobileRis={indirizzoMobileRis} setIndirizzoMobileRis={setIndirizzoMobileRis}
                    setTipodiImmobiliareRis={setTipodiImmobiliareRis}
                    tipodiImmobiliareRis={tipodiImmobiliareRis} 
                    ristrutturazione_completa={ristrutturazione_completa} setRistrutturazione_completa={setRistrutturazione_completa} interior_design_arredo={interior_design_arredo} setInterior_design_arredo={setInterior_design_arredo}
                    ridistribuzione_spazi_interni={ridistribuzione_spazi_interni} setRidistribuzione_spazi_interni={setRidistribuzione_spazi_interni}
                    luce_illuminotecnica={luce_illuminotecnica} setLuce_illuminotecnica={setLuce_illuminotecnica} cucine_bagni_camere_su_misura={cucine_bagni_camere_su_misura} 
                    setcucine_bagni_camere_su_misura={setcucine_bagni_camere_su_misura} noteDellUtente={noteDellUtente} setNoteDellUtente={setNoteDellUtente}
                    set_architectura_interior_design={set_architectura_interior_design} architectura_interior_design={architectura_interior_design}
                />
            )}

            {moduloManutenzione === true && (
                <ModalOrdinaria 
                  moduloManutenzione={moduloManutenzione} 
            setModuloManutenzione={setModuloManutenzione}
            nomeManutenzione={nomeManutenzione} setNomeManutenzione={setNomeManutenzione} cognomeManutenzione={cognomeManutenzione}
            setCognomeManutenzione={setCognomeManutenzione} emailUtenteManutenzione={emailUtenteManutenzione} setEmailUtenteManutenzione={setEmailUtenteManutenzione} telnumeroManutenzione={telnumeroManutenzione} setTelnumeroManutenzione={setTelnumeroManutenzione}
            indirizzoManutenzione={indirizzoManutenzione} setindirizzoManutenzione={setindirizzoManutenzione}
            capManutenzione={capManutenzione} setCapManutenzione={setCapManutenzione} cittaManutenzione={cittaManutenzione} setCittaManutenzione={setCittaManutenzione}
            tipoDiImmobiliareManutenzione={tipoDiImmobiliareManutenzione} setTipoDiImmobiliareManutenzione={setTipoDiImmobiliareManutenzione} impattiElettriciManutenzione={impattiElettriciManutenzione} setImpattiElettriciManutenzione={setImpattiElettriciManutenzione} impianto_idraulicoManutenzione={impianto_idraulicoManutenzione} setImpiantoIdraulicoManutenzione={setImpiantoIdraulicoManutenzione} tinteggiaturaManutenzione={tinteggiaturaManutenzione} setTinteggiaturaManutenzione={setTinteggiaturaManutenzione} pulizieCondoManutenzione={pulizieCondoManutenzione} setpulizieCondoManutenzione={setpulizieCondoManutenzione} controllo_caldaiaManutenzione={controllo_caldaiaManutenzione} setControllo_caldaiaManutenzione={setControllo_caldaiaManutenzione} calendarioManutenzione={calendarioManutenzione} setcalendarioManutenzione={setcalendarioManutenzione} fasciaGiornoManutenzione={fasciaGiornoManutenzione} setfasciaGiornoManutenzione={setfasciaGiornoManutenzione} messaggioManutenzione={messaggioManutenzione} setMessaggioManutenzione={setMessaggioManutenzione} accettoPrivacyOrdinaria={accettoPrivacyOrdinaria} setAccettoPrivacyOrdinaria={setAccettoPrivacyOrdinaria}/>
            )}

            {moduloManutenzioneStra === true && (
                <ModalStraOrdinaria 
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
                />
            )}

            {/* FAQs */}
            <section className="faq py-8 ">
                <h2 className="text-center text-black text-2xl sm:text-3xl mb-2">FAQs</h2>
                <p className="text-center text-base sm:text-lg mb-6">Queste sono le domande frequenti</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-4">
                    {/* FAQ 1 */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <FaQuestion className="text-red-500 text-[18rem] md:inline-block sm:hidden"/>
                    <FadeIn>
                        <div>
                            <h1 className="text-gray-800 font-bold uppercase md:!text-4xl sm:!text-2xl sm:text-center mb-2 sm:mx-2 md:text-left md:ml-0">
                            Come faccio a sapere se un immobile è adatto alle mie esigenze?
                            </h1>
                            <p className="text-sm sm:text-center sm:text-base md:text-left md:ml-0 sm:mx-2">
                            Scegliere casa non è solo questione di prezzo: contano la zona, i servizi vicini, la metratura,
                            l’esposizione, e lo stile di vita. <br /><br />
                            Spesso ci si innamora di immobili che non funzionano nel lungo periodo. <br /><br />
                            Per questo, i nostri consulenti analizzano il tuo budget, obiettivi e abitudini per proporti solo immobili
                            in linea reale con le tue esigenze, evitando perdite di tempo. <br /><br />
                            Prova il nostro modulo di ricerca personalizzata: è gratuito e ti aiuta a capire quali case fanno davvero per te.
                            </p>
                        </div>
                    </FadeIn>
                    </div>

                    {/* Schema component */}
                    <FAQSchema />

                    {/* FAQ 2 */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <FaQuestion className="text-red-500 text-[18rem] md:inline-block sm:hidden" />
                    <FadeIn>
                        <div>
                            <h1 className="text-gray-800 font-bold uppercase md:!text-4xl text-lg sm:!text-2xl  mb-2 sm:text-center sm:mx-2 md:text-left md:ml-0">
                            Come posso sapere quanto vale la mia casa?
                            </h1>
                            <p className="text-sm sm:text-base sm:text-center sm:mx-2 md:text-left md:ml-0">
                            Il valore di un immobile dipende da zona, metratura, stato, classe energetica e mercato locale. Ma attenzione:
                            non basta guardare immobili simili online — ogni casa ha caratteristiche uniche che incidono sulla resa reale. <br /><br />
                            Vuoi sapere quanto potresti guadagnare vendendo o affittando la tua proprietà? <br />
                            Usa il nostro calcolatore di resa immobiliare: ti fornisce una stima rapida e gratuita basata su dati reali.
                            </p>
                        </div>
                    </FadeIn>
                    </div>

                    {/* FAQ 3 */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <FaQuestion className="text-red-500 text-[18rem] md:inline-block sm:hidden" />
                    <FadeIn>
                        <div>
                            <h1 className="text-gray-800 font-bold uppercase md:!text-4xl text-lg sm:text-center sm:mx-2 sm:!text-2xl mb-2 md:text-left md:ml-0 ">
                            Quali documenti servono per vendere un immobile?
                            </h1>
                            <p className="text-sm sm:text-base sm:text-center sm:mx-2 md:text-left md:ml-0">
                            Per vendere casa ti servono: l’atto di proprietà, visura e planimetria catastale, APE (Attestato di Prestazione Energetica),
                            dichiarazione di conformità urbanistica e documenti personali. <br /><br />
                            Le certificazioni degli impianti non sono obbligatorie, ma aumentano il valore dell’immobile. <br /><br />
                            <b>Vuoi evitare errori? Scarica la nostra checklist gratuita con tutti i documenti spiegati in modo semplice</b> <br /><br />
                            <Link href="#" className="text-blue-600 underline">Scarica ora</Link>
                            </p>
                        </div>
                    </FadeIn>
                    </div>

                    {/* FAQ 4 */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center  gap-4">
                    <FaQuestion className="text-red-500 text-[18rem] md:inline-block sm:hidden" />
                    <FadeIn>
                        <div>
                            <h1 className="text-gray-800 font-bold uppercase md:!text-4xl text-lg sm:!text-2xl sm:text-center sm:mx-2 mb-2 md:text-left md:ml-0">
                            Aiutate con mutui?
                            </h1>
                            <p className="text-sm sm:text-center sm:mx-2 sm:text-base md:text-left md:ml-0">
                            Sì, supportiamo i nostri clienti in tutte le fasi dell’acquisto, anche nella scelta del mutuo. <br /><br />
                            Collaboriamo con consulenti del credito qualificati e banche locali per offrirti soluzioni personalizzate, con tassi competitivi
                            e condizioni trasparenti. <br /><br />
                            Ti aiutiamo a comprendere quale mutuo è adatto al tuo profilo, quali documenti servono e come aumentare le probabilità di approvazione. <br /><br />
                            Che tu sia un lavoratore dipendente, autonomo o giovane acquirente, non sei solo in questo percorso. <br /><br />
                            📅 Prenota ora un appuntamento gratuito con un nostro agente e ricevi una simulazione su misura. <br /><br />
                            <Link href="#" className="text-blue-600 underline">Prenota ora la tua consulenza</Link>
                            </p>
                        </div>
                    </FadeIn>
                    </div>
                </div>
            </section>

            <ToastContainer position="bottom-right" autoClose={3000}/>
            {/* Footer */}
            <Footer/>
        </div>
    </>
}

export default Home;