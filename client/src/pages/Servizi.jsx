import NavBar from "../components/NavBar";
import heroImage from "../assets/img/heroImage.jpg";
import { FaCompass, FaCompressAlt, FaFile, FaLightbulb } from "react-icons/fa";
import { useState } from "react";
import 'react-toastify/ReactToastify.css'
import Footer from "../components/Footer";
import { toast, ToastContainer } from "react-toastify";
import ModalUtenze from "../components/ModalUtenze";


const Servizi = ({popupUtenze, setPopupUtenze}) => {
  

    const [popupEntrate, setPopupEntrate] = useState(false);
    //const [popupUtenze, setPopupUtenze] = useState(false);
    const [popupConsulenzaImmobiliare, setConsulenzaImmobiliare] = useState(false);

    // HANDLES SELECTED SERVICES
    const [servizioSelezionato, setServizioSelezionato] = useState("");

    
    // This function helps with redirecting users to the whatsapp
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
    return <>
    <div>
        {/** Hero section */}
        <div style={{background: `url(${heroImage})`,
                backgroundSize: `cover`, backgroundPosition: `center`}} className="h-screen bg-cover flex-col items-center bg-center text-white">
                <div className="">
                    <NavBar/>
                </div>
                <div className="text-3xl px-9 pt-3 uppercase font-bold ">Tutto ciò che serve per gestire la tua proprietà, senza pensieri.</div>
                <p className="px-9 text-center font-semibold pt-1">Dalla burocrazia alle bollette, dalla manutenzione alla relocation — ci pensiamo noi.</p>
                <p className="text-center">Servizi completi per proprietari, inquilini e investitori immobiliari</p>  
        </div>

        <div>
            <h2 className="underline font-bold text-3xl uppercase text-center py-2">Le Nostre Soluzioni</h2>
            {/* Service Sections */}
            <div className="grid grid-cols-2">
                {/* Serivice Card */}
                <div onClick={()=>setPopupEntrate(true)} className="my-2 mx-2 shadow-xl/20 flex justify-around w-md p-1 items- rounded-xl">
                    <div className="">
                        <h2 className="font-bold text-red-600 " >AGENZIA ENTRATE</h2>
                        <p className="font-semibold">Registrazioni Contratti e/o 
                        compromessi, communicazioni varie    </p>
                    </div>
                    <FaFile className="text-5xl text-red-600"/>
                </div>


                <div onClick={()=>setPopupUtenze(true)} className="my-2 mx-2 shadow-xl/20 flex justify-around w-md p-1 items- rounded-xl">
                    <div className="">
                        <h2 className="font-bold text-red-600">UTENZE</h2>
                        <p className="font-semibold">Luce, gas e aqua </p>
                    </div>
                    <FaLightbulb className="text-5xl text-red-600"/>
                </div>

                <div onClick={()=>setConsulenzaImmobiliare(true)} className="my-2 mx-2 shadow-xl/20 flex justify-around w-md p-1 items- rounded-xl">
                    <div className="">
                        <h2 className="font-bold text-red-600 " >CONSULENZA IMMOBILIARE</h2>
                        <p className="font-semibold">Supporto esperto per comprare, 
                        vendere o gestire immobili con sicurezza.</p>
                    </div>
                    <FaCompass className="text-7xl text-red-600"/>
                </div>

            </div>


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
            {popupUtenze && (
                <ModalUtenze setPopupUtenze={setPopupUtenze} servizioSelezionato={servizioSelezionato} setServizioSelezionato={setServizioSelezionato} gestireContattiWhatsapp={gestireContattiWhatsapp}/>
            )}

            
            {/* CONSULENZA */}
            {popupConsulenzaImmobiliare && (
                <div>
                    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                        <div className="bg-white p-2 rounded-lg shadow-lg w-24 text-center relative">
                            <button
                            onClick={() => setConsulenzaImmobiliare(false)}
                            className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl font-bold"
                            >
                            &times;
                            </button>
                            <h2 className="text-xl font-bold text-red-600 mb-2">CONSULENZA IMMOBILIARE</h2>
                            <p className="text-gray-700">
                                Scegli  un’operazione
                            </p>

                            <div className="flex flex-col">
                                <select name="" value={servizioSelezionato} onChange={(e)=>setServizioSelezionato(e.target.value)}className="shadow-md bg- p-0.5" id="">
                                    <option className="text-center" value="">--Scegli--</option>

                                    <option className="text-center" value="consulenza compravendita">Consulenza Immobiliare Compravendita</option>

                                    <option className="text-center" value="consulenza d'investimento">Consulenza Immobiliare per ASTE</option>

                                    <option className="text-center" value="consulenza tecnico-legale">Consulenza Immobiliare per Affitto</option>

                                    <option className="text-center" value="consulenza finanziaria">Consulenza Immobiliare per Terreni</option>
                                </select>
                                
                                 <a href="#" onClick={(e)=>gestireContattiWhatsapp(e)} className="bg-green-600 p-0.5 mt-1 !text-white font-bold">Apri Whatsapp</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
    <ToastContainer position="top-center" autoClose={3000}/>
    {/* Footer */}
    <Footer/>
    </>
}

export default Servizi;