
import { useState } from 'react';
import resaHero from '../assets/img/investimento_resa.jpg';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { NumericFormat } from 'react-number-format';
import ResaPieChart from '../components/PieChart';
import ModalConsulenza from '../components/ModalConsulenza';
import logo from '../assets/img/White Logo.png';
import { FadeIn } from '../components/animations/FadeIn';
import consulente from "../assets/img/consulente.png"


const ConsulenzaPrivata = ({gestireDatiConsulenza, nome, setNome, cognome, setCognome, emailUtente, setEmailUtente, telnumero, setTelnumero, motivoPerConsulenzaImmobiliare, setMotivoPerConsulenzaImmobiliare, accettoPrivacy, setAccettoPrivacy, popupConsulenzaImmobiliare,  setConsulenzaImmobiliare}) => {


    return <>
        {/* Hero Section */}
        <FadeIn>
            <div className="w-full min-h-screen bg-red-500 rounded-b-[100%]">
                <div className="flex items-center justify-center h-full text-white">
                    {/* Contact Bar */}
                    <div className="flex md:w-56 sm:w-25 justify-between text-xs sm:text-sm px-2 py-1">
                        {/* phone and email */}
                        <div className="flex sm:flex-col md:flex-row sm:items-start  justify-center items-center">
                            <FaPhone className="mr-0.5 sm:hidden"/>
                            <span className="mr-2 md:w-1/2">+39 331-1887849 | 0573-737305</span>
                            <FaEnvelope className="mr-0.5 md:w-1/2 sm:hidden"/>
                            <span>gunzimangusta@gmail.com</span>
                        </div>

                        {/* time */}
                        <div className="flex  sm:flex-col md:flex-row md:w-20 sm:justify-center items-center sm:items-start justify-start">
                            <FaClock className="mr-0.5 md:text-md sm:hidden"/>
                            <span className="mr-2 w-full md:w-1/2">Lunedi - Venerdi</span>
                            <span className="w-full md:w-1/2">9:30 - 13:00 16:00 - 19:30</span>
                        </div>
                    </div>
                </div>

                <div className="flex mx-[10rem] justify-between  items-center">
                    <img src={logo} className="w-5 ml-1.5" alt="Enrico Erca"/>
                    <NavBar/>
                </div>

                {/* headline */}
                <section className='w-[433px] sm:w-[300px] md:ml-[11rem] md:mt-[5rem] sm:ml-[3rem] sm:mt-[3rem]'>
                    <h1 className='text-white !text-3xl'>
                        <b>Ottieni la</b> <i>guida di un esperto</i> <b>su come navigare meglio nel mercato</b>
                    </h1>
                    <p className='text-white text-xl '>Prendi il prima passo nel tuo investimento intelligente</p>
                    <button onClick={()=>setConsulenzaImmobiliare(true)} className='bg-white cursor-pointer shadow-sm text-red-500 px-1 py-0.5 mt-2 rounded-4xl font-bold'>Prenota subito</button>
                </section>
            </div>

            
            <img src={consulente} className='absolute bottom-[-50px] right-[15%] w-[390px] h-[600px] z-20' alt="" />

            
        </FadeIn>

        {popupConsulenzaImmobiliare && (
            <ModalConsulenza gestireDatiConsulenza={gestireDatiConsulenza} nome={nome} setNome={setNome} cognome={cognome} setCognome={setCognome} emailUtente={emailUtente}setEmailUtente={setEmailUtente} telnumero={telnumero} setTelnumero={setTelnumero} motivoPerConsulenzaImmobiliare={motivoPerConsulenzaImmobiliare} setMotivoPerConsulenzaImmobiliare={setMotivoPerConsulenzaImmobiliare} accettoPrivacy={accettoPrivacy} setAccettoPrivacy={setAccettoPrivacy} popupConsulenzaImmobiliare={popupConsulenzaImmobiliare} setConsulenzaImmobiliare={setConsulenzaImmobiliare}/>
        )}
        
    </>
}

export default ConsulenzaPrivata;