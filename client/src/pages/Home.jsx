import { BrowserRouter as  Router, Routes, Route, Link, data, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import herox from '../assets/img/home.jpeg';
import image2 from '../assets/img/image2.png';
import guide from '../assets/img/la fondatrice.jpg';
import {FaPiggyBank, FaHome, FaPaintBrush, FaTools, FaPhone, FaEnvelope, FaClock, FaQuestion} from 'react-icons/fa'
import {MdArchitecture} from 'react-icons/md';
import { GrVmMaintenance } from "react-icons/gr";
import proprieta_1 from '../assets/img/proprieta_1.jpg';
import Footer from '../components/Footer.jsx';
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ModalUtenze from "../components/ModalUtenze.jsx";
import ModalConsulenza from "../components/ModalConsulenza.jsx";
import ModuloConsulenzaFinanzaria from "../components/ModalConsulenzaFinanziaria.jsx";
import ModalRistrutturazioni from "../components/ModalRistrutturazione.jsx";
import logo from '../assets/img/White Logo.png';
import FAQSchema from "../components/FAQ.jsx";
import { Helmet } from "react-helmet";
import ModalOrdinaria from "../components/ModalOrdinaria.jsx";
import ModalStraOrdinaria from "../components/ModalStraOrdinaria.jsx";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';


import ModalArchitectura from "../components/ModalArchitectura.jsx";
import { FadeIn } from "../components/animations/FadeIn.jsx";
import ModalInteriorDesign from "../components/ModalInteriorDesign.jsx";

const Home = ({valueRicerca, setValueRicerca, onSearch, onOpenGallery, setIsModalOpen, setlistingSelected,
//INTERIOR DESIGN
inviaDatiPerInteriorDesign,  moduloInteriorDesign, 
setModuloInteriorDesign,
// UTENZE
setPopupUtenze, popupUtenze, gestireContattiWhatsapp, setServizioSelezionato, servizioSelezionato,
// DATI CONSULENZA
inviaDatiPerConsulenzaImmobiliare, moduloConsulenza, setModuloConsulenza,
// Dati Mutui
inviaDatiConsulenzaFinanzario,moduloConsulenzaFinanzario,setModuloConsulenzaFinanzario,
//STRAORDINARIA
inviaDatiPerStraOrdinaria, moduloManutenzioneStra, setModuloManutenzioneStra,
// ORDINARIA
inviaDatiPerOrdinaria, moduloManutenzione, setModuloManutenzione,
// ARCHITETTURA
setPopupArchitectura, popupArchitectura, inviaDatiPerArchitectura

}) => {
    /** THE HOME PAGE */
    const [annunci, setAnnunci] = useState([]);
    const getAnnuncImmobiliari = async () =>{
        await axios.get('http://localhost:2001/annunci')
        .then(response=>{setAnnunci(response.data.result)})
        .catch(error=>{console.error("Error:",error)});
    }

    //const [valueRicerca, setValueRicerca] = useState('');
    const redirectAnnunci =  useNavigate();
        
    const onChangeRicerca = (e) =>{
        setValueRicerca(e.target.value);
     }

    // Servizi Disponibili
    const {register: registerConsulenzaImmobiliare, handleSubmit: handleSubmitConsulenzaImmobiliare, reset:resetConsulenzaImmobiliare, formState: {errors:errorsConsulenzaImmobiliare}} = useForm({
        resolver: yupResolver(inviaDatiPerConsulenzaImmobiliare)
    });
    const onSubmitConsulenzaImmobiliare = async (data) => {
        try {
            const response = await axios.post(
                "http://localhost:2001/consulenzaimmobiliare",
                data,
                {headers: {"Content-Type": "application/json"}}
            );

            if(response.status === 200){
                toast.success("Richiesta inviata con successo");
                setModuloConsulenza(false)//Close modal
                resetConsulenzaImmobiliare(); //resettare il modulo dopo submission
            }
        } catch (error) {
            console.error("Errore: ", error);
            toast.error("Errore durante l'invio della richiesta");
        }
    };

    const {register: registerArchitettura, handleSubmit: handleSubmitArchitettura, reset:resetArchitettura, formState: {errors:errorsArchitettura}} = useForm({
        resolver: yupResolver(inviaDatiPerArchitectura)
    });
    // Submit data to the backend (Architettura)
    const onSubmitArchitettura = async (data) => {
        try {
            const response = await axios.post(
                "http://localhost:2001/servizi/consulenza-architettura",
                data,
                {headers: {"Content-Type": "application/json"}}
            );

            if(response.status === 200){
                toast.success("Richiesta inviata con successo");
                setModuloInteriorDesign(false)//Close modal
                reset(); //resettare il modulo dopo submission
            }
        } catch (error) {
            console.error("Errore: ", error);
            toast.error("Errore durante l'invio della richiesta");
        }
    };


    // Handles errors and validation on the form (Ordinaria)
    const {register: registerOrdinaria, handleSubmit: handleSubmitOrdinaria, reset:resetOrdinaria, formState: {errors:errorsOrdinaria}} = useForm({
        resolver: yupResolver(inviaDatiPerOrdinaria)
    });
    // Submit data to the backend (Ordinaria)
    const onSubmitOrdinaria = async (data) => {
        try {
            const response = await axios.post(
                "http://localhost:2001/servizi/consulenza-manutenzione-ordinaria",
                data,
                {headers: {"Content-Type": "application/json"}}
            );

            if(response.status === 200){
                toast.success("Richiesta inviata con successo");
                setModuloManutenzione(false)//Close modal
                reset(); //resettare il modulo dopo submission
            }
        } catch (error) {
            console.error("Errore: ", error);
            toast.error("Errore durante l'invio della richiesta");
        }
    };

    // Handles errors and validation on the form (Consulenza Finanzario)
        const {register: registerConsulenzaFinanzario, handleSubmit: handleSubmitConsulenzaFinanzario, reset:resetConsulenzaFinanzario, formState: {errors:errorsConsulenzaFinanzario}} = useForm({
            resolver: yupResolver(inviaDatiConsulenzaFinanzario)
        });
        // Submit data to the backend (Cosnulensa Finnazario)
        const onSubmitConsulenzaFinanzario = async (data) => {
            try {
                const response = await axios.post(
                    "http://localhost:2001/servizi/consulenza-finanziario",
                    data,
                    {headers: {"Content-Type": "application/json"}}
                );
    
                if(response.status === 200){
                    toast.success("Richiesta inviata con successo");
                    setModuloConsulenzaFinanzario(false)//Close modal
                    resetConsulenzaFinanzario(); //resettare il modulo dopo submission
                }
            } catch (error) {
                console.error("Errore: ", error);
                toast.error("Errore durante l'invio della richiesta");
            }
        };

    // Handles errors and validation on the form (Straordinaria)
    const {register: registerStraOrdinaria, handleSubmit: handleSubmitStraOrdinaria, reset:resetStraOrdinaria, formState: {errors:errorsStraOrdinaria}} = useForm({
        resolver: yupResolver(inviaDatiPerStraOrdinaria)
    });
    // Submit data to the backend (Straordinaria)
    const onSubmitStraOrdinaria = async (data) => {
        try {
            const response = await axios.post(
                "http://localhost:2001/servizi/consulenza-manutenzione-straordinaria",
                data,
                {headers: {"Content-Type": "application/json"}}
            );

            if(response.status === 200){
                toast.success("Richiesta inviata con successo");
                setModuloInteriorDesign(false)//Close modal
                resetStraOrdinaria(); //resettare il modulo dopo submission
            }
        } catch (error) {
            console.error("Errore: ", error);
            toast.error("Errore durante l'invio della richiesta");
        }
    };


    // Handles errors and validation on the form (Interior Design)
        const {register, handleSubmit, reset, formState: {errors}} = useForm({
            resolver: yupResolver(inviaDatiPerInteriorDesign)
        });
        // Submit data to the backend (Interior Design)
        const onSubmitInteriorDesign = async (data) => {
            try {
                const response = await axios.post(
                    "http://localhost:2001/servizi/consulenza-interior-design",
                    data,
                    {headers: {"Content-Type": "application/json"}}
                );
    
                if(response.status === 200){
                    toast.success("Richiesta inviata con successo");
                    setModuloInteriorDesign(false)//Close modal
                    reset(); //resettare il modulo dopo submission
                }
            } catch (error) {
                console.error("Errore: ", error);
                toast.error("Errore durante l'invio della richiesta");
            }
        };




    useEffect(()=>{
        getAnnuncImmobiliari()
    }, []);


    return <>
        <div className="font-display">
            {/* Meta description for SEO Optimization*/}
            <div>
                <Helmet>
                    <title>La Scelta Intelligente per il tuo immobile</title>
                    <meta name="description" content="Cerchi casa a Quarrata? Sfoglia gli ultimi annunci di vendita e affitto. Valutazione gratuita e consulenza personalizzata."/>
                </Helmet>

            </div>


            {/** Hero section */}
            
            <div  style={{background: `url(${herox})`,
                backgroundSize: `cover`, backgroundPosition: `center`}} className=" min-h-screen img bg-cover flex-col items-center bg-center  text-white md:px-5 ">
                    
                {/* Contact Bar */}
                <div className="flex flex-col sm:flex-row  w-full justify-between items-center text-sm px-2 py-1">
                    {/* phone and email */}
                    
                    <FadeIn>
                        <div className="flex flex-col md:flex-row w-full lg:flex-row md:w-1/2  justify-start md:items-center">
                            <FaPhone className="md:w-1/5  hidden md:inline"/>
                            <span className="md:mr-2 ml-[0rem] md:w-full text-[0.9rem] w-full">+393311887849 | 0573-737305</span>

                            <FaEnvelope className=" md:w-1/5  hidden md:inline"/>
                            <span className=" text-[0.9rem] w-1/2">gunzimangusta@gmail.com</span>
                        </div>
                        
                    </FadeIn>

                    {/* time */}
                    <FadeIn>
                        <div className="flex flex-col md:justify-end mt-1 md:mt-0 md:ml-5 md:flex-row w-full md:w-1/2 ">
                            <FaClock className="mr-0.5  md:text-md hidden "/>
                            <span className=" md:w-1/2 text-[0.9rem]">Lunedi - Venerdi</span>
                            <span className=" md:w-1/2  text-[0.9rem] ">9:30  - 13:00 | 16:00 - 19:30</span>
                        </div>
                    </FadeIn>
                </div>

                <FadeIn>
                    <div className="flex justify-between items-center">
                        <img src={logo} className="w-5 ml-2" alt="Enrico Erca"/>
                        <NavBar/>
                    </div>
                </FadeIn>

                <FadeIn><h1 className="text-lg md:text-7xl text-center mt-3 mx-1 font-bold">La scelta intelligente per il tuo immobile!</h1></FadeIn>
                <FadeIn><p className="mt-2 sm:mt-1 text-base md:text-base text-center mx-auto px-1 md:px-5">Ti aiutiamo a <b>risparmiare su gas e luce</b>, calcolare il <b>valore della tua proprietà</b> e trovare le migliori <b>soluzioni in vendita</b> o <b>in affitto</b>. Hai bisogno di ristrutturazioni o di una consulenza esperta? I nostri consulenti immobiliari sono a tua disposizione!</p></FadeIn>
                


                {/* Search bar */}
                <FadeIn>
                    <div className="relative w-full flex justify-center items-center px-1">
                        <div className="flex flex-col sm:flex-row items-center gap-2 mt-0 w-[40rem] md:w-[50rem] justify-center ">
                            <input type="search" /*value={valueRicerca}*/ onChange={(e)=>setSearch(e.target.value)} className="border-b text-white border-white outline-none py-0.5 px-1 sm:w-3/4 outline-0 my-1  sm:ml-1 flex justify-between items-center focus:outline-none focus:ring-2 w-full focus:ring-white-500 "  name="search_immobili" id="search_immobili" placeholder="Ricerca tutti immobili disponibile, locazione, prezzo, tipo" />
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
                </FadeIn>
                
                
            </div>

            {/* Listing top 5 recent */}
            <FadeIn>
            <div className=" my-2">
                <h1 className="text-center my-2 text-md  md:text-2xl font-bold uppercase underline underline-offset-8">Annunci In Evidenza</h1>
                
                
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {
                        // Questa parte monstra solo le 3 recenti annunci scaricato
                        Object.keys(annunci).slice(0, 3).map((data)=>{
                            return <>
                                    {/* Card */}
                                    
                                    <div key={annunci[data].id} onClick={()=>{setIsModalOpen(true); setlistingSelected(data); onOpenGallery(data.id)}} className="w-full mb-2 sm:mb-2 bg-white rounded-2xl shadow-md overflow-hidden  transition-transform hover:scale-105">
                                        <img
                                            src={`http://localhost:2001/uploads/${annunci[data].img_url}`}
                                            alt={annunci[data].titolo}
                                            className="w-full h-12 object-cover"
                                        />
                                        <div className="p-3 flex flex-col h-full">
                                            <div className="mb-2">
                                                <h3 className="text-xl text-center font-semibold">{annunci[data].titolo}</h3>
                                                <p className="text-gray-500 text-center mt-1 text-sm">{annunci[data].indirizzo}</p>
                                            </div>
                                            <div className="flex flex-col justify-between items-center mb-2">
                                                <h2 className="text-green-600 text-2xl font-bold">€{annunci[data].prezzo} {annunci[data].is_vendita === 0 ? '/mese': ''}</h2>
                                                <span className="text-sm bg-green-100 text-green-700 px-2 py-0.5 rounded">
                                                    {annunci[data].is_vendita === 1 ? 'Vendita': 'Affitto'}
                                                </span>
                                            </div>
                                            <div className="text-gray-600 text-sm flex flex-col justify-between items-center">
                                                <p className="w-10">{annunci[data].camere} camere · {annunci[data].bagni} bagni · 1250 sqft</p>
                                                <a href="#" className="text-blue-500 mt-2 underline hover:text-blue-700">
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
            
            <div style={{background: `url(${image2})`,
                backgroundSize: `cover`, backgroundPosition: `center`}} className="min-h-24 img w-full flex flex-col md:flex-row justify-center items-center bg-cover bg-center text-white py-10 md:px-5 text-center  md:text-left">
                <FadeIn>
                    <div className="px-0 md:w-2/3">
                        <h2 className="font-bold md:px-2 text-4xl md:text-6xl mb-4">CHI SIAMO</h2>
                        <p className="px-2">
                            Siamo un'agenzia immobiliare impegnata ad aiutarti a trovare la casa perfetta, sia in affitto che in acquisto, fornendo allo stesso tempo una guida esperta su come risparmiare su gas ed elettricità. La nostra missione è rendere le transazioni immobiliari fluide e convenienti per te!
                        </p>
                    </div>
                </FadeIn>
                <FadeIn>
                    <img className="w-11 h-15 md:w-30 md:h-20 md:block mt-6 md:mt-0 md:ml-3 border-5" src={guide} alt=""/>
                </FadeIn>
            </div>


            {/* Servizi */}
           <FadeIn><p className="text-xl font-bold mx-1 my-3 text-center" style={{color: "#36454F"}}>Non e' obbligatorio di acquistare da noi immobili per usufruire dei nostri servizi*</p></FadeIn> 
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-3">
                <FadeIn>
                    <Link onClick={()=>setPopupUtenze(true)} className="transition-transform hover:scale-105 mb-5 mb:mb-0">
                        < div className="text-center mt-5">
                            <FaPiggyBank className="text-red-500 text-7xl mx-auto"/>
                            <p style={{color: "#36454F"}} className="font-bold mt-1">Gestione delle Bollette</p>
                            <p style={{color: "#36454F"}} className="w-10 mx-auto">Cerchi un sistema di risparmia delle tue bollette? </p>
                        </div>
                    </Link>
                </FadeIn>
                <FadeIn>
                    <Link onClick={()=>setModuloConsulenza(true)} className="transition-transform hover:scale-105">
                        <div className="text-center mt-5">
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
                    <Link onClick={()=>setPopupArchitectura(true)} className="transition-transform hover:scale-105 sm:mb-3">
                        <div className="text-center  mt-5">
                            <MdArchitecture className="text-red-500 text-7xl mx-auto"/>
                            <p style={{color: "#36454F"}}  className="font-bold mt-1">Architettura</p>
                            <p style={{color: "#36454F"}} className="w-10 mx-auto">Hai trovato la casa giusta? Ora rendila perfetta.</p>
                        </div>
                    </Link>
                </FadeIn>

                <FadeIn>
                    {/* Manutenzione Ordinaria */}
                    <Link onClick={()=>setModuloManutenzione(true)} className="transition-transform hover:scale-105 sm:mb-3">
                        <div className="text-center  mt-5">
                            <GrVmMaintenance className="text-red-500 text-7xl mx-auto"/>
                            <p style={{color: "#36454F"}}  className="font-bold mt-1">Manutenzione Ordinaria</p>
                            <p style={{color: "#36454F"}} className="w-10 mx-auto">Hai trovato la casa giusta? Ora rendila perfetta.</p>
                        </div>
                    </Link>
                </FadeIn>

                
                <FadeIn>
                    {/* Manutenzione Straodinaria */}
                    <Link onClick={()=>setModuloManutenzioneStra(true)} className="transition-transform hover:scale-105 sm:mb-3">
                        <div className="text-center  mt-5">
                            <GrVmMaintenance className="text-red-500 text-7xl mx-auto"/>
                            <p style={{color: "#36454F"}}  className="font-bold mt-1">Manutenzione Straordinaria</p>
                            <p style={{color: "#36454F"}} className="w-10 mx-auto">
                                Hai bisogno di un intervento urgente o di una ristrutturazione importante?<br />
                                <b>📞 Compila la richiesta e verrai ricontattato entro 24 ore</b>
                            </p>
                        </div>
                    </Link>
                </FadeIn>

                <FadeIn>
                    {/* Interior Design */}
                    <Link onClick={()=>setModuloInteriorDesign(true)} className="transition-transform hover:scale-105 sm:mb-3">
                        <div className="text-center  mt-5">
                            <FaPaintBrush className="text-red-500 text-7xl mx-auto"/>
                            <p style={{color: "#36454F"}}  className="font-bold mt-1">Interior Design</p>
                            <p style={{color: "#36454F"}} className="w-10 mx-auto">Hai trovato la casa giusta? Ora rendila perfetta.</p>
                        </div>
                    </Link>
                </FadeIn>
            </div>

            <button className="bg-red-500 text-white px-0.5 mx-auto block py-0.5 hover:border-amber-50 hover:pointer transition-transform md:mt-5 hover:scale-75"><Link className="!text-white" to={'/servizi'}>Scopri Tutti I Nostri Servizi</Link></button>
            

            {/* Tutti moduli per ogni servizi */}
            {popupUtenze === true && (
                <ModalUtenze popupUtenze={popupUtenze} gestireContattiWhatsapp={gestireContattiWhatsapp} setServizioSelezionato={setServizioSelezionato} setPopupUtenze={setPopupUtenze}/>
            )}

            {/* CONSULENZA IMMOBILIARE*/}
            {moduloConsulenza && (<ModalConsulenza
                onSubmitConsulenzaImmobiliare={onSubmitConsulenzaImmobiliare} registerConsulenzaImmobiliare={registerConsulenzaImmobiliare}
                handleSubmitConsulenzaImmobiliare={handleSubmitConsulenzaImmobiliare} resetConsulenzaImmobiliare={resetConsulenzaImmobiliare}
                errorsConsulenzaImmobiliare={errorsConsulenzaImmobiliare}
                setModuloConsulenza={setModuloConsulenza}
            />)}

            {/* Consulenza Mutui */}
            {moduloConsulenzaFinanzario && (<ModuloConsulenzaFinanzaria
                inviaDatiConsulenzaFinanzario={inviaDatiConsulenzaFinanzario} setModuloConsulenzaFinanzario={setModuloConsulenzaFinanzario}registerConsulenzaFinanzario={registerConsulenzaFinanzario} handleSubmitConsulenzaFinanzario={handleSubmitConsulenzaFinanzario} onSubmitConsulenzaFinanzario={onSubmitConsulenzaFinanzario} errorsConsulenzaFinanzario={errorsConsulenzaFinanzario}
            />)}

            {/* INTERIOR DESIGN */}
            {moduloInteriorDesign && (
                <ModalInteriorDesign onSubmitInteriorDesign={onSubmitInteriorDesign} handleSubmit={handleSubmit} register={register} errors={errors} setModuloInteriorDesign={setModuloInteriorDesign}/>
            )}

            {/* MANUTENZIONE ORDINARIA */}
            {moduloManutenzione && (
                <ModalOrdinaria inviaDatiPerOrdinaria={inviaDatiPerOrdinaria} moduloManutenzione={moduloManutenzione} setModuloManutenzione={setModuloManutenzione} registerOrdinaria={registerOrdinaria} handleSubmitOrdinaria={handleSubmitOrdinaria} onSubmitOrdinaria={onSubmitOrdinaria}
                errorsOrdinaria={errorsOrdinaria} toast={toast}/>
            )}

            {/* MANUTENZIONE STRAORDINARIA */}
            {moduloManutenzioneStra && (
                <ModalStraOrdinaria registerStraOrdinaria={registerStraOrdinaria} toast={toast} handleSubmitStraOrdinaria={handleSubmitStraOrdinaria} resetArchitettura={resetArchitettura} moduloManutenzioneStra={moduloManutenzioneStra} setModuloManutenzioneStra={setModuloManutenzioneStra} inviaDatiPerStraOrdinaria={inviaDatiPerStraOrdinaria} onSubmitStraOrdinaria={onSubmitStraOrdinaria} errorsStraOrdinaria={errorsStraOrdinaria}/>
            )}

            {/* ARCHITETTURA */}
            {popupArchitectura && (<ModalArchitectura registerArchitettura={registerArchitettura} toast={toast} handleSubmitArchitettura={handleSubmitArchitettura} resetArchitettura={resetArchitettura} onSubmitArchitettura={onSubmitArchitettura} setPopupArchitectura={setPopupArchitectura} errorsArchitettura={errorsArchitettura}/>)}

            

            {/* FAQs */}
            <section className="faq py-8 ">
                
                <p className="text-center text-gray-800 font-bold text-lg mb-6">Domande frequenti</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-4">
                    {/* FAQ 1 */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <FaQuestion className="text-red-500 text-[18rem]  md:inline-block hidden"/>
                    <FadeIn>
                        <div>
                            <h1 className="text-gray-800 text-center mx-2 font-bold uppercase md:text-4xl text-2xl mb-2 md:text-left md:ml-0">
                            Come faccio a sapere se un immobile è adatto alle mie esigenze?
                            </h1>
                            <p className="text-sm text-center mx-2 md:text-left md:ml-0">
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
                    <FaQuestion className="text-red-500 text-[18rem] md:inline-block  hidden" />
                    <FadeIn>
                        <div>
                            <h1 className="text-gray-800 font-bold uppercase md:text-4xl text-2xl  mb-2 text-center mx-2  md:text-left md:ml-0">
                            Come posso sapere quanto vale la mia casa?
                            </h1>
                            <p className="text-sm text-center mx-2 md:text-left md:ml-0">
                            Il valore di un immobile dipende da zona, metratura, stato, classe energetica e mercato locale. Ma attenzione:
                            non basta guardare immobili simili online — ogni casa ha caratteristiche uniche che incidono sulla resa reale. <br /><br />
                            
                            </p>
                        </div>
                    </FadeIn>
                    </div>

                    {/* FAQ 3 */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <FaQuestion className="text-red-500 text-[18rem] md:inline-block  hidden" />
                    <FadeIn>
                        <div>
                            <h1 className="text-gray-800 font-bold uppercase md:!text-4xl text-2xl text-center mx-2  mb-2 md:text-left md:ml-0 ">
                            Quali documenti servono per vendere un immobile?
                            </h1>
                            <p className="text-sm text-center mx-2 md:text-left md:ml-0">
                            Per vendere casa ti servono: l’atto di proprietà, visura e planimetria catastale, APE (Attestato di Prestazione Energetica),
                            dichiarazione di conformità urbanistica e documenti personali. <br /><br />
                            Le certificazioni degli impianti non sono obbligatorie, ma aumentano il valore dell’immobile. <br /><br />
                            
                            </p>
                        </div>
                    </FadeIn>
                    </div>

                    {/* FAQ 4 */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center  gap-4">
                    <FaQuestion className="text-red-500 text-[18rem] md:inline-block  hidden" />
                    <FadeIn>
                        <div>
                            <h1 className="text-gray-800 font-bold uppercase md:!text-4xl text-2xl  text-center mx-2  mb-2 md:text-left md:ml-0">
                            Aiutate con mutui?
                            </h1>
                            <p className="text-sm text-center mx-2 md:text-left md:ml-0">
                            Sì, supportiamo i nostri clienti in tutte le fasi dell’acquisto, anche nella scelta del mutuo. <br /><br />
                            Collaboriamo con consulenti del credito qualificati e banche locali per offrirti soluzioni personalizzate, con tassi competitivi
                            e condizioni trasparenti. <br /><br />
                            Ti aiutiamo a comprendere quale mutuo è adatto al tuo profilo, quali documenti servono e come aumentare le probabilità di approvazione. <br /><br />
                            Che tu sia un lavoratore dipendente, autonomo o giovane acquirente, non sei solo in questo percorso. <br /><br />
                            📅 Prenota ora un appuntamento gratuito con un nostro agente e ricevi una simulazione su misura. <br /><br />
                            <button onClick={()=>setModuloConsulenzaFinanzario(true)}>Prenota ora la tua consulenza</button>
                            {/* <Link to="/" className="text-blue-600 underline">Prenota ora la tua consulenza</Link> */}
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