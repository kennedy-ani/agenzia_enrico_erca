import { BrowserRouter as  Router, Routes, Route, Link, data } from "react-router-dom";
import NavBar from "../components/NavBar";
import herox from '../assets/img/herox.jpg';
import image2 from '../assets/img/image2.jpg';
import guide from '../assets/img/guide.jpg';
import {FaPiggyBank, FaHome, FaTools} from 'react-icons/fa'
import proprieta_1 from '../assets/img/proprieta_1.jpg';
import Footer from '../components/Footer.jsx';
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
    /** THE HOME PAGE */
    const [annunci, setAnnunci] = useState([]);
    const getAnnuncImmobiliari = async () =>{
        await axios.get('http://localhost:2001/annunci')
        .then(response=>{setAnnunci(response.data.result)})
        .catch(error=>{console.error("Error:",error)});
    }

    useEffect(()=>{
        getAnnuncImmobiliari()
    }, []);


    return <>
        <div>
            
            {/** Hero section */}
            <div style={{background: `url(${herox})`}} className="h-screen bg-cover flex-col items-center bg-center text-white">
                <div className="">
                    <NavBar/>
                </div>
                <div className="text-7xl px-9 pt-3 font-bold">La Scelta Intelligente per il Tuo Immobile e il Risparmio!</div>
                <p className="px-9 pt-3">Ti aiutiamo a <b>risparmiare su gas e luce</b>, calcolare il <b>valore della tua proprietà</b> e trovare le migliori <b>case in vendita</b> o <b>appartamenti in affitto</b>. Hai bisogno di ristrutturazioni o di una consulenza esperta? I nostri consulenti immobiliari sono a tua disposizione!</p>
                <input type="search" className="bg-white text-black w-3/4 rounded-xl py-0.5 px-0.5 outline-0 my-1 md:ml-9 flex justify-between items-center"  name="search_immobili" id="search_immobili" placeholder="Ricerca tutti immobili disponibile" />
                <button className="bg-red-500 text-white px-0.5 md:ml-9 py-0.5 hover:border-amber-50 hover:pointer ">Prenota una Consulenza</button>
            </div>

            {/* Listing top 5 recent */}
            <div className="my-2">
                <h2 className="text-center my-2 font-bold uppercase underline underline-offset-8 ">Annunci In Evidenza</h2>
                
                
                <div className="hidden lg:flex lg:flex-row lg:justify-center lg:gap-6 p-4">
                    {
                        //console.log(typeof annunci.result)
                        Object.keys(annunci).slice(0, 3).map((data, i)=>{
                            return <>
                                    {/* Card */}

                                    <div key={i} className="w-72 bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105">
                                        <img
                                            src={proprieta_1}
                                            alt={annunci[data].titolo}
                                            className="w-full h-12 object-cover"
                                        />
                                        <div className="p-1 flex flex-col h-full">
                                            <div className="mb-2">
                                                <h3 className="text-xl font-semibold">{annunci[data].titolo}</h3>
                                                <p className="text-gray-500 text-sm">{annunci[data].indirizzo}</p>
                                            </div>
                                            <div className="flex justify-between items-center mb-2">
                                                <h2 className="text-green-600 text-2xl font-bold">€500</h2>
                                                <span className="text-sm bg-green-100 text-green-700 px-2 py-0.5 rounded">
                                                    In Vendita
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
                <button className="bg-red-500 text-white px-0.5 mx-auto block py-0.5 hover:border-amber-50 hover:pointer transition-transform hover:scale-75"><Link style={{color:'white'}} to={'/annunci'}>Trovarti l'appartamento fatto per te!</Link></button>
            </div>

            {/* Chi siamo */}
            <div style={{background: `url(${image2})`,
                backgroundSize: `cover`, backgroundPosition: `center`}} className="h-24 w-full flex justify-center items-center bg-cover bg-center text-white px-10">
                <div className="px-2">
                    <h2 className="font-bold text-7xl ">CHI SIAMO</h2>
                    <p>Siamo un'agenzia immobiliare impegnata ad aiutarti a trovare la casa perfetta, sia in affitto che in acquisto, fornendo allo stesso tempo una guida esperta su come risparmiare su gas ed elettricità. La nostra missione è rendere le transazioni immobiliari fluide e convenienti per te!</p>
                </div>
                <img className="w-20  h-20" src={guide} alt=""/>
            </div>

            {/* Servizi */}
            <div className="flex justify-around items-center my-4">
                <Link to={'/chat'} className="transition-transform hover:scale-105">
                    < div className="text-center">
                        <FaPiggyBank className="text-red-500 text-7xl mx-auto"/>
                        <p style={{color: "#36454F"}} className="font-bold mt-1">Gestione delle Bollette</p>
                        <p style={{color: "#36454F"}} className="w-10">Cerchi un sistema di risparmia delle tue bollette? </p>
                    </div>
                </Link>

                <Link to={'/prenotazioni'} className="transition-transform hover:scale-105">
                    <div className="text-center">
                        <FaHome className="text-red-500 text-7xl mx-auto"/>
                        <p style={{color: "#36454F"}}  className="font-bold mt-1">Consulenza Immobiliare</p>
                        <p style={{color: "#36454F"}} className="w-10">Clicca qui per prenotare un appuntamento di consulenza</p>

                    </div>
                </Link>

                <Link to={'/ristrutturazioni'} className="transition-transform hover:scale-105">
                    <div className="text-center">
                        <FaTools className="text-red-500 text-7xl mx-auto"/>
                        <p style={{color: "#36454F"}}  className="font-bold mt-1">Ristrutturazioni</p>
                        <p style={{color: "#36454F"}} className="w-10">Sta pensando d'una ristrutturazione per il tuo domicilio?</p>

                    </div>
                </Link>
            </div>

            {/* Footer */}
            <Footer/>
        </div>
    </>
}

export default Home;