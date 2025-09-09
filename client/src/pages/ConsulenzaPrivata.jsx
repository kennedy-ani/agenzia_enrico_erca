
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
            <div className="w-full min-h-screen bg-red-500 rounded-b-[100%] md:px-5 ">
                <div className="flex flex-col sm:flex-row  w-full justify-between items-center text-sm px-2 py-1">
                    {/* phone and email */}
                    
                    <div className="flex flex-col md:flex-row w-full lg:flex-row md:w-1/2  justify-start md:items-center">
                        <FaPhone className="md:w-1/5  hidden md:inline"/>
                        <span className="md:mr-2 ml-[0rem] md:w-full text-white text-[0.9rem] w-full">+393311887849 | 0573-737305</span>

                        <FaEnvelope className=" md:w-1/5  hidden md:inline"/>
                        <span className=" text-[0.9rem] text-white w-1/2">gunzimangusta@gmail.com</span>
                    </div>
                    

                    {/* time */}
                    <div className="flex text-white flex-col md:justify-end mt-1 md:mt-0 md:ml-5 md:flex-row w-full md:w-1/2 ">
                        <FaClock className="mr-0.5  md:text-md hidden "/>
                        <span className=" md:w-1/2 text-[0.9rem]">Lunedi - Venerdi</span>
                        <span className=" md:w-1/2  text-[0.9rem] ">9:30  - 13:00 | 16:00 - 19:30</span>
                    </div>
                </div>

                <div className="flex justify-between text-white items-center">
                    <img src={logo} className="w-5 ml-2" alt="Enrico Erca"/>
                    <NavBar/>
                </div>

                {/* headline */}
                <section className='md:w-[433px] w-[300px] md:ml-[11rem] md:mt-[5rem] ml-[1rem] mt-[1rem] '>
                    <h1 className='text-white md:text-3xl text-center md:text-left text-md'>
                        <b>Ottieni la</b> <i>guida di un esperto</i> <b>su come navigare meglio nel mercato</b>
                    </h1>
                    <p className='text-white text-center md:text-left mt-1 md:mt-0 text-sm'>Prendi il prima passo nel tuo investimento intelligente</p>
                    <button onClick={()=>setConsulenzaImmobiliare(true)} className='bg-white text-sm w-7 cursor-pointer shadow-sm text-red-500 px-1 block mx-auto md:mx-0 py-0.5 md:mt-2 mt-1 rounded-4xl font-bold'>Prenota subito</button>
                </section>
            </div>

            
            <img src={consulente} className='absolute bottom-[-50px] md:block right-[15%] md:w-[390px] md:h-[600px] hidden w-[150px] z-20' alt="" />

            
        </FadeIn>

        {popupConsulenzaImmobiliare && (
            <ModalConsulenza gestireDatiConsulenza={gestireDatiConsulenza} nome={nome} setNome={setNome} cognome={cognome} setCognome={setCognome} emailUtente={emailUtente}setEmailUtente={setEmailUtente} telnumero={telnumero} setTelnumero={setTelnumero} motivoPerConsulenzaImmobiliare={motivoPerConsulenzaImmobiliare} setMotivoPerConsulenzaImmobiliare={setMotivoPerConsulenzaImmobiliare} accettoPrivacy={accettoPrivacy} setAccettoPrivacy={setAccettoPrivacy} popupConsulenzaImmobiliare={popupConsulenzaImmobiliare} setConsulenzaImmobiliare={setConsulenzaImmobiliare}/>
        )}
        
    </>
}

export default ConsulenzaPrivata;