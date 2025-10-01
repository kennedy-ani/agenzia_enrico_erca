import NavBar from "../components/NavBar";
import heroImage from "../assets/img/heroImage.jpg";
import { Link } from "react-router-dom";
import { FaCompass, FaCompressAlt, FaFile, FaLightbulb, FaPhone, FaEnvelope, FaClock} from "react-icons/fa";
import {MdArchitecture } from "react-icons/md";
import { useState } from "react";
import {GrVmMaintenance} from 'react-icons/gr'
import 'react-toastify/ReactToastify.css'
import Footer from "../components/Footer";
import { toast, ToastContainer } from "react-toastify";
import ModalUtenze from "../components/ModalUtenze";
import logo from '../assets/img/White Logo.png';
import ModalConsulenzaFinanzario from "../components/ModalConsulenzaFinanziaria";
import ModalArchitectura from "../components/ModalArchitectura";
import ModalStraOrdinaria from "../components/ModalStraOrdinaria";
import ModalOrdinaria from "../components/ModalOrdinaria";
import { FadeIn } from "../components/animations/FadeIn";

// agenti
import service_provider_no_pic from '../assets/img/agenti/user.jpg';
import service_provider2 from '../assets/img/agenti/Regione_Toscana_logo.jpg';
import ModalConsulenza from "../components/ModalConsulenza";
import ModalInteriorDesign from "../components/ModalInteriorDesign";

// Work on Modal Forms
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import axios from "axios";
import ModalTrasloco from "../components/ModalTrasloco";
import ModuloConsulenzaFinanzaria from "../components/ModalConsulenzaFinanziaria";
import ModalServizioGeometra from "../components/ModalServizioGeometra";
import ModalAvvocato from "../components/ModalAvvocato";
//import { toast } from "react-toastify";

const Servizi = ({popupUtenze, setPopupUtenze, popupConsulenzaImmobiliare, 
setServizioSelezionato, setConsulenzaImmobiliare, gestireContattiWhatsapp, popupEntrate, setPopupEntrate, servizioSelezionato, 
toast, 
// Dati per consulenza immobiliare
gestireDatiConsulenza, motivoPerConsulenzaImmobiliare, setMotivoPerConsulenzaImmobiliare, accettoPrivacy, setAccettoPrivacy,
popupInterior, setPopupInterior,
// Interior Design
inviaDatiPerInteriorDesign, moduloInteriorDesign, setModuloInteriorDesign,
// Architettura 
inviaDatiPerArchitectura, popupArchitectura, setPopupArchitectura,
// Straordinaria
inviaDatiPerStraOrdinaria, moduloManutenzioneStra, setModuloManutenzioneStra,

// Consulenza
inviaDatiPerConsulenzaImmobiliare, moduloConsulenza,setModuloConsulenza,

// Ordinaria
inviaDatiPerOrdinaria, moduloManutenzione, setModuloManutenzione,

//SERVIZIO TRASLOCO
inviaDatiPerTrasloco,moduloServizioTransloco,setModuloServizioTransloco,

//CONSULENZA FINANZARIO
inviaDatiConsulenzaFinanzario,moduloConsulenzaFinanzario,setModuloConsulenzaFinanzario,

 // GEOMETRA 
inviaDatiServizioGeometra, moduloServizioGeometra, setModuloServizioGeometra,

//AVVOCATO
inviaDatiServizioAvvocato,moduloAvvocato, setModuloavvocato,

}) => {

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

    // Handles errors and validation on the form (Architettura)
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
                reset(); //resettare il modulo dopo submission
            }
        } catch (error) {
            console.error("Errore: ", error);
            toast.error("Errore durante l'invio della richiesta");
        }
    };

    // Handles errors and validation on the form (Consulenza)
    const {register: registerConsulenzaImmobiliare, handleSubmit: handleSubmitConsulenzaImmobiliare, reset:resetConsulenzaImmobiliare, formState: {errors:errorsConsulenzaImmobiliare}} = useForm({
        resolver: yupResolver(inviaDatiPerConsulenzaImmobiliare)
    });
    // Submit data to the backend (ConsulenzaImmobiliare)
    const onSubmitConsulenzaImmobiliare = async (data) => {
        try {
            const response = await axios.post(
                "http://localhost:2001/servizi/consulenza-immobiliare",
                data,
                {headers: {"Content-Type": "application/json"}}
            );

            if(response.status === 200){
                toast.success("Richiesta inviata con successo");
                setModuloConsulenza(false)//Close modal
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


    // Handles errors and validation on the form (Trasloco)
    const {register: registerTrasloco, handleSubmit: handleSubmitTrasloco, reset:resetTrasloco, formState: {errors:errorsTrasloco}} = useForm({
        resolver: yupResolver(inviaDatiPerTrasloco)
    });
    // Submit data to the backend (Trasloco)
    const onSubmitTrasloco = async (data) => {
        try {
            const response = await axios.post(
                "http://localhost:2001/servizi/trasloco",
                data,
                {headers: {"Content-Type": "application/json"}}
            );

            if(response.status === 200){
                toast.success("Richiesta inviata con successo");
                setModuloServizioTransloco(false)//Close modal
                resetTrasloco(); //resettare il modulo dopo submission
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

    // Handles errors and validation on the form (Servizio Geometra)
    const {register: registerServizioGeometra, handleSubmit: handleSubmitServizioGeometra, reset:resetServizioGeometra, formState: {errors:errorsServizioGeometra}} = useForm({
        resolver: yupResolver(inviaDatiServizioGeometra)
    });
    // Submit data to the backend (Servizio Geometra)
    const onSubmitServizioGeometra = async (data) => {
        try {
            const response = await axios.post(
                "http://localhost:2001/servizi/servizio-geometra",
                data,
                {headers: {"Content-Type": "application/json"}}
            );

            if(response.status === 200){
                toast.success("Richiesta inviata con successo");
                setModuloServizioGeometra(false)//Close modal
                resetServizioGeometra(); //resettare il modulo dopo submission
            }
        } catch (error) {
            console.error("Errore: ", error);
            toast.error("Errore durante l'invio della richiesta");
        }
    };


    // Handles errors and validation on the form (Servizio Avvocato)
    const {register: registerServizioAvvocato, handleSubmit: handleSubmitServizioAvvocato, reset:resetServizioAvvocato, formState: {errors:errorsServizioAvvocato}} = useForm({
        resolver: yupResolver(inviaDatiServizioAvvocato)
    });
    // Submit data to the backend (Servizio Avvocato)
    const onSubmitServizioAvvocato = async (data) => {
        try {
            const response = await axios.post(
                "http://localhost:2001/servizi/avvocato",
                data,
                {headers: {"Content-Type": "application/json"}}
            );

            if(response.status === 200){
                toast.success("Richiesta inviata con successo");
                setModuloavvocato(false)//Close modal
                resetServizioAvvocato(); //resettare il modulo dopo submission
            }
        } catch (error) {
            console.error("Errore: ", error);
            toast.error("Errore durante l'invio della richiesta");
        }
    };

    return <>
    <div>
        {/** Hero section */}
        <FadeIn>

                <div style={{background: `url(${heroImage})`,
                    backgroundSize: `cover`, backgroundPosition: `center`}} className=" min-h-screen img bg-cover flex-col items-center bg-center  text-white md:px-5 ">
                    {/* Contact Bar */}
                    <div className="flex flex-col sm:flex-row  w-full justify-between items-center text-sm px-2 py-1">
                        {/* phone and email */}
                        
                        <div className="flex flex-col md:flex-row w-full lg:flex-row md:w-1/2  justify-start md:items-center">
                            <FaPhone className="md:w-1/5  hidden md:inline"/>
                            <span className="md:mr-2 ml-[0rem] md:w-full text-[0.9rem] w-full">+393311887849 | 0573-737305</span>

                            <FaEnvelope className=" md:w-1/5  hidden md:inline"/>
                            <span className=" text-[0.9rem] w-1/2">gunzimangusta@gmail.com</span>
                        </div>
                        

                        {/* time */}
                        <div className="flex flex-col md:justify-end mt-1 md:mt-0 md:ml-5 md:flex-row w-full md:w-1/2 ">
                            <FaClock className="mr-0.5  md:text-md hidden "/>
                            <span className=" md:w-1/2 text-[0.9rem]">Lunedi - Venerdi</span>
                            <span className=" md:w-1/2  text-[0.9rem] ">9:30  - 13:00 | 16:00 - 19:30</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                         <img src={logo} className="w-5 ml-2" alt="Enrico Erca"/>
                    <NavBar/>
                    </div>
                    
                    <h1 className="text-lg md:text-7xl text-center mt-3 mx-1 font-bold">Tutto ciò che serve per gestire la tua proprietà, senza pensieri.</h1>
                    <p className="mt-2 sm:mt-1 text-base md:text-base text-center mx-auto px-1 md:px-5">Dalla burocrazia alle bollette, dalla manutenzione alla relocation — ci pensiamo noi.</p>
                    <p className="text-center">Servizi completi per proprietari, inquilini e investitori immobiliari</p>  
            </div>
        </FadeIn>

        <FadeIn>
            <p className="text-xl font-bold mx-1 my-3 text-center" style={{color: "#36454F"}}>Non e' obbligatorio di acquistare da noi immobili per usufruire dei nostri servizi*</p>
        </FadeIn>
        <div>
        <FadeIn>
            <h1 className="text-center my-2 sm:!text-lg md:text-2xl font-bold uppercase underline underline-offset-8">Le Nostre Soluzioni</h1>
            {/* Service Sections */}
            <div className="grid md:grid-cols-2 sm:grid-cols-1">
                
                {/* Service Card */}
                <div onClick={()=>setPopupEntrate(true)} className="my-2 relative cursor-pointer transition-transform  hover:scale-105 mx-2 shadow-xl/20 flex justify-around sm:max-w-md max-w-10 h-13 sm:h-7 p-1 sm:p-0 items-start rounded-xl ">
                    <div className="w-[10rem] absolute right-20% sm:-right-[5%] top-[-20%]">
                        <img src={service_provider_no_pic} className="w-[10rem] h-[10rem] border-red-500 border-4 rounded-full"/>
                        <p className="font-bold text-center uppercase">Marco Pulcini</p>
                    </div>
                    <div className="mt-5 -ml-3 md:mt-0 md:-ml-5">
                        <h2 className="font-bold text-center sm:text-left text-red-600">AGENZIA ENTRATE</h2>
                        <p className="font-semibold w-7 sm:w-10 sm:text-left text-center">Registrazioni Contratti e/o 
                        compromessi, communicazioni varie</p>
                        <Link to="/" className="font-bold text-center uppercase text-xs">Scopri di più sul fornitore del servizio</Link>
                    </div>
                    <FaFile className="text-5xl hidden text-red-600"/>
                </div>

                {/* Utenze */}
                <div onClick={()=>setPopupUtenze(true)} className="my-2 relative cursor-pointer transition-transform hover:scale-105 mx-2 shadow-xl/20 flex justify-around sm:max-w-md max-w-10  sm:h-7 p-1 sm:p-0 items- rounded-xl ">
                    <div className="w-[10rem] absolute right-20% top-[-20%] sm:-right-[5%]">
                        <img src={service_provider2} className="w-[10rem] h-[10rem] border-red-500 border-4 rounded-full"/>
                        <p className="font-bold text-center uppercase">ZeroCode</p>
                    </div> 
                    <div className="mt-5 -ml-3 md:mt-0 md:-ml-5">
                        <h2 className="font-bold text-center text-red-600 sm:text-left">UTENZE</h2>
                        <p className="font-semibold w-7 sm:w-10 sm:text-left text-center">Luce, gas e aqua </p>
                        <Link to="/" className="font-bold text-center uppercase text-xs">Scopri di più sul fornitore del servizio</Link>
                    </div>
                    <FaLightbulb className="text-5xl hidden text-red-600"/>
                </div>

               {/*Interior Design */}
                <div onClick={()=>setModuloInteriorDesign(true)} className="my-2 relative cursor-pointer transition-transform hover:scale-105 mx-2 shadow-xl/20 flex justify-around sm:max-w-md max-w-10 sm:h-7 p-1 sm:p-0 items- rounded-xl ">
                    <div className="w-[10rem] absolute right-20% top-[-20%] sm:-right-[5%]">
                        <img src={service_provider_no_pic} className="w-[10rem] h-[10rem] border-red-500 border-4 rounded-full"/>
                        <p className="font-bold text-center uppercase">ERIKA</p>
                    </div>
                    <div className="mt-5 -ml-3 md:mt-0 md:-ml-5">
                        <h2 className="font-bold text-center sm:text-left text-red-600 " >INTERIOR DESIGN</h2>
                        <p className="font-semibold w-7 sm:w-10 sm:text-left text-center">Con Designer pronti ad offrire la miglior soluzione per adornare l'immobile</p>
                        <Link to="/" className="font-bold text-center uppercase text-xs">Scopri di più sul fornitore del servizio</Link>
                    </div>
                    <MdArchitecture className="text-7xl hidden text-red-600"/>
                </div>

                {/* Architecttura */}
                <div onClick={()=>setPopupArchitectura(true)} className="my-2 relative cursor-pointer transition-transform hover:scale-105 mx-2 shadow-xl/20 flex justify-around sm:max-w-md max-w-10 h-13 sm:h-7 p-1 sm:p-0 rounded-xl ">
                    <div className="w-[10rem] absolute right-20% sm:-right-[5%] top-[-20%]">
                        <img src={service_provider_no_pic} className="w-[10rem] h-[10rem] border-red-500 border-4 rounded-full"/>
                        <p className="font-bold text-center uppercase">Mirko</p>
                    </div>
                    <div className="mt-5 -ml-3 md:mt-0 md:-ml-5">
                        <h2 className="font-bold text-center sm:text-left text-red-600 " >ARCHITETTURA</h2>
                        <p className="font-semibold w-7  sm:w-10 sm:text-left text-center">Con architetti specializzati in progettazioni 3D</p>
                        <Link to="/" className="font-bold text-center uppercase text-xs">Scopri di più sul fornitore del servizio</Link>
                    </div>
                    <MdArchitecture className="text-7xl hidden text-red-600"/>
                </div>


                {/* Manutenzioni Straordinario */}
                <div onClick={()=>setModuloManutenzioneStra(true)} className="my-2 relative cursor-pointer transition-transform hover:scale-105 mx-1 shadow-xl/20 flex justify-around sm:max-w-md max-w-10 h-13  sm:h-7 p-1 sm:p-0 items- rounded-xl ">
                    <div className="w-[10rem] absolute right-20% top-[-20%] sm:-right-[5%]">
                        <img src={service_provider_no_pic} className="w-[10rem] h-[10rem] border-red-500 border-4 rounded-full"/>
                        <p className="font-bold text-center uppercase">Marco Pulcini</p>
                    </div>
                    <div className="mt-5 -ml-3 md:mt-0 md:-ml-5">
                        <h2 className="font-bold text-center sm:text-left text-red-600 " >MANUTENZIONI STRAORDINARIO</h2>
                        <p className="font-semibold w-7  sm:w-10 sm:text-left text-center">Con le ditte con cui collaboriamo al fine di ottenere il prodotto desiderato nella maniera migliore</p>
                        <Link to="/" className="font-bold text-center uppercase text-xs">Scopri di più sul fornitore del servizio</Link>
                    </div>
                    <GrVmMaintenance className="text-8xl hidden text-red-600"/>
                </div>

                 {/* La Consulenza Immobiliare */}
                <div onClick={()=>setConsulenzaImmobiliare(true)} className="my-2 relative cursor-pointer transition-transform hover:scale-105 mx-2 shadow-xl/20 flex justify-around sm:max-w-md max-w-10 h-13 sm:h-7 p-1 sm:p-0 items- rounded-xl">
                    <div className="w-[10rem] absolute right-20% top-[-20%] sm:-right-[5%]">
                        <img src={service_provider_no_pic} className="w-[10rem] h-[10rem] border-red-500 border-4 rounded-full"/>
                        <p className="font-bold text-center  uppercase">Mirko Erca</p>
                    </div>
                    <div className="mt-5 -ml-3 md:mt-0 md:-ml-5">
                        <h2 className="font-bold text-center text-red-600 sm:text-left" >CONSULENZA IMMOBILIARE</h2>
                        <p className="font-semibold w-7 text-center sm:w-10 sm:text-left ">Supporto esperto per comprare, 
                        vendere o gestire immobili con sicurezza.</p>
                        <Link to="/" className="font-bold text-center uppercase text-xs">Scopri di più sul fornitore del servizio</Link>
                    </div>
                    <FaCompass className="text-7xl hidden text-red-600"/>
                </div>

                {/* Manutenzioni Ordinario */}
                <div onClick={()=>setModuloManutenzione(true)} className="my-2 relative cursor-pointer transition-transform hover:scale-105 mx-2 shadow-xl/20 flex justify-around sm:max-w-md max-w-10 h-13 sm:h-7 p-1 sm:p-0 items- rounded-xl ">
                    <div className="w-[10rem] absolute right-20% top-[-20%] sm:-right-[5%]">
                        <img src={service_provider_no_pic} className="w-[10rem] h-[10rem] border-red-500 border-4 rounded-full"/>
                        <p className="font-bold text-center uppercase">Gerardo Idealmatic</p>
                    </div>
                    <div className="mt-5 -ml-3 md:mt-0 md:-ml-5">
                        <h2 className="font-bold text-center text-red-600 sm:text-left">MANUTENZIONI ORDINARIO</h2>
                        <p className="font-semibold w-7 sm:w-10 sm:text-left text-center">Manutenzione Caldaia, Servizi Falegnameria, Servizio Idraulica</p>
                        <Link to="/" className="font-bold text-center uppercase text-xs">Scopri di più sul fornitore del servizio</Link>
                    </div>
                    <GrVmMaintenance className="text-8xl hidden text-red-600"/>
                </div>

                <div onClick={()=>setModuloServizioTransloco(true)} className="my-2 relative cursor-pointer transition-transform hover:scale-105 mx-2 shadow-xl/20 flex justify-around sm:max-w-md max-w-10 h-13 sm:h-7 p-1 sm:p-0 items- rounded-xl ">
                    <div className="w-[10rem] absolute right-20% top-[-20%] sm:-right-[5%]">
                        <img src={service_provider_no_pic} className="w-[10rem] h-[10rem] border-red-500 border-4 rounded-full"/>
                        <p className="font-bold text-center uppercase">Gerardo Idealmatic</p>
                    </div>
                    <div className="mt-5 -ml-3 md:mt-0 md:-ml-5">
                        <h2 className="font-bold text-center text-red-600 sm:text-left uppercase">Servizi di Trasloco</h2>
                        <p className="font-semibold w-7 sm:w-10 sm:text-left text-center">Manutenzione Caldaia, Servizi Falegnameria, Servizio Idraulica</p>
                        <Link to="/" className="font-bold text-center uppercase text-xs">Scopri di più sul fornitore del servizio</Link>
                    </div>
                    <GrVmMaintenance className="text-8xl hidden text-red-600"/>
                </div>

                <div onClick={()=>setModuloConsulenzaFinanzario(true)} className="my-2 relative cursor-pointer transition-transform hover:scale-105 mx-2 shadow-xl/20 flex justify-around sm:max-w-md max-w-10 h-13 sm:h-7 p-1 sm:p-0 items- rounded-xl ">
                    <div className="w-[10rem] absolute right-20% top-[-20%] sm:-right-[5%]">
                        <img src={service_provider_no_pic} className="w-[10rem] h-[10rem] border-red-500 border-4 rounded-full"/>
                        <p className="font-bold text-center uppercase">Gerardo Idealmatic</p>
                    </div>
                    <div className="mt-5 -ml-3 md:mt-0 md:-ml-5">
                        <h2 className="font-bold text-center text-red-600 sm:text-left uppercase">Consulenza Finanzario</h2>
                        <p className="font-semibold w-7 sm:w-10 sm:text-left text-center">Manutenzione Caldaia, Servizi Falegnameria, Servizio Idraulica</p>
                        <Link to="/" className="font-bold text-center uppercase text-xs">Scopri di più sul fornitore del servizio</Link>
                    </div>
                    <GrVmMaintenance className="text-8xl hidden text-red-600"/>
                </div>

                <div onClick={()=>setModuloServizioGeometra(true)} className="my-2 relative cursor-pointer transition-transform hover:scale-105 mx-2 shadow-xl/20 flex justify-around sm:max-w-md max-w-10 h-13 sm:h-7 p-1 sm:p-0 items- rounded-xl ">
                    <div className="w-[10rem] absolute right-20% top-[-20%] sm:-right-[5%]">
                        <img src={service_provider_no_pic} className="w-[10rem] h-[10rem] border-red-500 border-4 rounded-full"/>
                        <p className="font-bold text-center uppercase">Gerardo Idealmatic</p>
                    </div>
                    <div className="mt-5 -ml-3 md:mt-0 md:-ml-5">
                        <h2 className="font-bold text-center text-red-600 sm:text-left uppercase">Servizio Geometra</h2>
                        <p className="font-semibold w-7 sm:w-10 sm:text-left text-center">Manutenzione Caldaia, Servizi Falegnameria, Servizio Idraulica</p>
                        <Link to="/" className="font-bold text-center uppercase text-xs">Scopri di più sul fornitore del servizio</Link>
                    </div>
                    <GrVmMaintenance className="text-8xl hidden text-red-600"/>
                </div>

                <div onClick={()=>setModuloavvocato(true)} className="my-2 relative cursor-pointer transition-transform hover:scale-105 mx-2 shadow-xl/20 flex justify-around sm:max-w-md max-w-10 h-13 sm:h-7 p-1 sm:p-0 items- rounded-xl ">
                    <div className="w-[10rem] absolute right-20% top-[-20%] sm:-right-[5%]">
                        <img src={service_provider_no_pic} className="w-[10rem] h-[10rem] border-red-500 border-4 rounded-full"/>
                        <p className="font-bold text-center uppercase">Gerardo Idealmatic</p>
                    </div>
                    <div className="mt-5 -ml-3 md:mt-0 md:-ml-5">
                        <h2 className="font-bold text-center text-red-600 sm:text-left uppercase">Avvocato</h2>
                        <p className="font-semibold w-7 sm:w-10 sm:text-left text-center">Manutenzione Caldaia, Servizi Falegnameria, Servizio Idraulica</p>
                        <Link to="/" className="font-bold text-center uppercase text-xs">Scopri di più sul fornitore del servizio</Link>
                    </div>
                    <GrVmMaintenance className="text-8xl hidden text-red-600"/>
                </div>

                <div onClick={()=>setModuloManutenzione(true)} className="my-2 relative cursor-pointer transition-transform hover:scale-105 mx-2 shadow-xl/20 flex justify-around sm:max-w-md max-w-10 h-13 sm:h-7 p-1 sm:p-0 items- rounded-xl ">
                    <div className="w-[10rem] absolute right-20% top-[-20%] sm:-right-[5%]">
                        <img src={service_provider_no_pic} className="w-[10rem] h-[10rem] border-red-500 border-4 rounded-full"/>
                        <p className="font-bold text-center uppercase">Kennedy Ani</p>
                    </div>
                    <div className="mt-5 -ml-3 md:mt-0 md:-ml-5">
                        <h2 className="font-bold text-center text-red-600 sm:text-left">SVILUPPATORE WEB</h2>
                        <p className="font-semibold w-7 sm:w-10 sm:text-left text-center">Manutenzione Caldaia, Servizi Falegnameria, Servizio Idraulica</p>
                        <Link to="/" className="font-bold text-center uppercase text-xs">Scopri di più sul fornitore del servizio</Link>
                    </div>
                    <GrVmMaintenance className="text-8xl hidden text-red-600"/>
                </div>
            </div>
        </FadeIn>


            {popupEntrate && (
                <div>
                    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                        <div className="bg-white p-2 rounded-lg shadow-lg w-24 text-center relative">
                            <button
                            onClick={() => setPopupEntrate(false)}
                            className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl font-bold"
                            >
                            &times;
                            </button>
                            <h2 className="text-xl font-bold text-red-600 mb-2">AGENZIA ENTRATE</h2>
                            <p className="text-gray-700">
                            Scegli  un’operazione
                            </p>
                            <div className="flex flex-col ">
                                <select className="shadow-md bg- p-0.5"
                                value={servizioSelezionato}
                                onChange={(e)=>setServizioSelezionato(e.target.value)}>
                                    <option className="text-center" value="">--Scegli--</option>
                                    <option className="text-center"  value="comunicazioni">Comunicazioni</option>
                                    <option className="text-center" value="interrogazioni">Interrogazioni</option>
                                    <option className="text-center" value="dispetti">Disdette</option>
                                    <option className="text-center" value="contratti di affitto">Contratti di Affitto</option>
                                    <option className="text-center"  value="compromessi">Compromessi</option>
                                </select>
                                <a href="#" onClick={(e)=>gestireContattiWhatsapp(e)} className="bg-green-600 mt-1 p-0.5 !text-white font-bold">Apri Whatsapp</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            )}

            {/* PER LE UTENZE  */}
            {/* {popupUtenze && (
                <ModalUtenze setPopupUtenze={setPopupUtenze} servizioSelezionato={servizioSelezionato} setServizioSelezionato={setServizioSelezionato} gestireContattiWhatsapp={gestireContattiWhatsapp}/>
            )} */}

            
            {/* CONSULENZA */}
            {popupConsulenzaImmobiliare && (<ModalConsulenza
                onSubmitConsulenzaImmobiliare={onSubmitConsulenzaImmobiliare} registerConsulenzaImmobiliare={registerConsulenzaImmobiliare}
                handleSubmitConsulenzaImmobiliare={handleSubmitConsulenzaImmobiliare} resetConsulenzaImmobiliare={resetConsulenzaImmobiliare}
                errorsConsulenzaImmobiliare={errorsConsulenzaImmobiliare}
                setConsulenzaImmobiliare={setConsulenzaImmobiliare}
            />)}

            {/* INTERIOR DESIGN */}
            {moduloInteriorDesign && (
                <ModalInteriorDesign onSubmitInteriorDesign={onSubmitInteriorDesign} handleSubmit={handleSubmit} register={register} errors={errors} setModuloInteriorDesign={setModuloInteriorDesign}/>
            )}

            {/* ARCHITECTURA*/}
            {popupArchitectura && (
                <ModalArchitectura registerArchitettura={registerArchitettura} toast={toast} handleSubmitArchitettura={handleSubmitArchitettura} resetArchitettura={resetArchitettura} onSubmitArchitettura={onSubmitArchitettura} setPopupArchitectura={setPopupArchitectura} errorsArchitettura={errorsArchitettura}/>
            )}

            {/* MANUTENZIONE STRAORDINARIA */}

            {moduloManutenzioneStra && (
                <ModalStraOrdinaria registerStraOrdinaria={registerStraOrdinaria} toast={toast} handleSubmitStraOrdinaria={handleSubmitStraOrdinaria} resetArchitettura={resetArchitettura} moduloManutenzioneStra={moduloManutenzioneStra} setModuloManutenzioneStra={setModuloManutenzioneStra} inviaDatiPerStraOrdinaria={inviaDatiPerStraOrdinaria} onSubmitStraOrdinaria={onSubmitStraOrdinaria} errorsStraOrdinaria={errorsStraOrdinaria}/>
            )}

            {/* MANUTENZIONE ORDINARIA*/}

            {moduloManutenzione && (
                <ModalOrdinaria
                inviaDatiPerOrdinaria={inviaDatiPerOrdinaria} moduloManutenzione={moduloManutenzione} setModuloManutenzione={setModuloManutenzione}
                registerOrdinaria={registerOrdinaria} handleSubmitOrdinaria={handleSubmitOrdinaria}
                onSubmitOrdinaria={onSubmitOrdinaria}
                errorsOrdinaria={errorsOrdinaria}
                toast={toast}
                />
            )}

            {/* TRASLOCO */}
            {moduloServizioTransloco && (
                <ModalTrasloco inviaDatiPerTrasloco={inviaDatiPerTrasloco} moduloServizioTransloco={moduloServizioTransloco} setModuloServizioTransloco={setModuloServizioTransloco}
                registerTrasloco={registerTrasloco} handleSubmitTrasloco={handleSubmitTrasloco}
                onSubmitTrasloco={onSubmitTrasloco}
                errorsTrasloco={errorsTrasloco}
                toast={toast}/>
            )}

            {/* CONSULENZA FINANZARIO */}
            {moduloConsulenzaFinanzario && (
                <ModalConsulenzaFinanzario inviaDatiConsulenzaFinanzario={inviaDatiConsulenzaFinanzario} setModuloConsulenzaFinanzario={setModuloConsulenzaFinanzario}
                registerConsulenzaFinanzario={registerConsulenzaFinanzario} handleSubmitConsulenzaFinanzario={handleSubmitConsulenzaFinanzario}
                onSubmitConsulenzaFinanzario={onSubmitConsulenzaFinanzario}
                errorsConsulenzaFinanzario={errorsConsulenzaFinanzario}
                toast={toast}/>
                
            )}


            {/* SERVIZI  GEOMETRA*/}
            {moduloServizioGeometra && (
                <ModalServizioGeometra inviaDatiServizioGeometra={inviaDatiServizioGeometra} setModuloServizioGeometra={setModuloServizioGeometra} registerServizioGeometra={registerServizioGeometra} handleSubmitServizioGeometra={handleSubmitServizioGeometra} onSubmitServizioGeometra={onSubmitServizioGeometra} errorsServizioGeometra={errorsServizioGeometra}/>
            )}

            {/* SERVIZI AVVOCATO */}
            {moduloAvvocato && (
                <ModalAvvocato inviaDatiServizioAvvocato={inviaDatiServizioAvvocato} setModuloavvocato={setModuloavvocato} registerServizioAvvocato={registerServizioAvvocato} handleSubmitServizioAvvocato={handleSubmitServizioAvvocato} onSubmitServizioAvvocato={onSubmitServizioAvvocato} errorsServizioAvvocato={errorsServizioAvvocato}/>
            )}
            
            
        </div>
    </div>
    <ToastContainer position="top-center" autoClose={3000}/>
    {/* Footer */}
    <Footer/>
    </>
}

export default Servizi;