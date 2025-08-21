import NavBar from "../components/NavBar";
import heroImage from "../assets/img/heroImage.jpg";
import { FaCompass, FaCompressAlt, FaFile, FaLightbulb, FaPhone, FaEnvelope, FaClock} from "react-icons/fa";
import {MdArchitecture } from "react-icons/md";
import { useState } from "react";
import {GrVmMaintenance} from 'react-icons/gr'
import 'react-toastify/ReactToastify.css'
import Footer from "../components/Footer";
import { toast, ToastContainer } from "react-toastify";
import ModalUtenze from "../components/ModalUtenze";
import logo from '../assets/img/White Logo.png';
import ModalArchitectura from "../components/ModalArchitectura";
import ModalStraOrdinaria from "../components/ModalStraOrdinaria";
import ModalOrdinaria from "../components/ModalOrdinaria";
import { FadeIn } from "../components/animations/FadeIn";


const Servizi = ({popupUtenze, setPopupUtenze, setPopupArchitectura, popupArchitectura, popupConsulenzaImmobiliare, 
setServizioSelezionato, setConsulenzaImmobiliare, gestireContattiWhatsapp, popupEntrate, setPopupEntrate, servizioSelezionato,

// Dati per servizi architectura
ristrutturazione_completa, setRistrutturazione_completa, 
interior_design_arredo, setInterior_design_arredo, 
ridistribuzione_spazi_interni, setRidistribuzione_spazi_interni,
luce_illuminotecnica, setLuce_illuminotecnica, cucine_bagni_camere_su_misura, 
setcucine_bagni_camere_su_misura, noteDellUtente, setNoteDellUtente, indirizzoMobileRis,setIndirizzoMobileRis,
nome, setNome, cognome, setCognome, emailUtente, setEmailUtente, telnumero, setTelnumero, tipodiImmobiliareRis,
set_architectura_interior_design, setTipodiImmobiliareRis, architectura_interior_design,
// Dati per servizio Manutenzione Straordinaria 
setModuloManutenzioneStra, nomeManutenzioneStra, setNomeManutenzioneStra, cognomeManutenzioneStra, setCognomeManutenzioneStra,
    emailUtenteManutenzioneStra, setEmailUtenteManutenzioneStra, telnumeroManutenzioneStra, setTelnumeroManutenzioneStra,
    indirizzoManutenzioneStra, setindirizzoManutenzioneStra, capManutenzioneStra, setCapManutenzioneStra, cittaManutenzioneStra, setCittaManutenzioneStra, tipoDiImmobiliareManutenzioneStra, setTipoDiImmobiliareManutenzioneStra,
    ristrutturazione_parziale,  setRistrutturazione_parziale, perdite_gravi, setPerdite_gravi, Impianti_elettrici_idraulici, setImpianti_elettrici_idraulici, messa_norma_caldaie, setMessa_norma_caldaie, opere_murarie_strutturali,
    setOpere_murarie_strutturali, rifacimento_bagni, setRifacimento_bagni, interventi_post_allagamento, setInterventi_post_allagamento, grado_di_urgenza, setGrado_di_urgenza, accettoPrivacyStraOrdinaria, setAccettoPrivacyStraOrdinaria,
    moduloManutenzioneStra, setDescrizioneManutenzioneStra, descrizioneManutenzioneStra,
    // Manutenzione Ordinaria
    moduloManutenzione, setModuloManutenzione,
    nomeManutenzione, setNomeManutenzione, cognomeManutenzione,
    setCognomeManutenzione, emailUtenteManutenzione,  setEmailUtenteManutenzione, telnumeroManutenzione, setTelnumeroManutenzione,
    indirizzoManutenzione, setindirizzoManutenzione, accettoPrivacyOrdinaria, setAccettoPrivacyOrdinaria,
    capManutenzione, setCapManutenzione, cittaManutenzione, setCittaManutenzione,
    tipoDiImmobiliareManutenzione, setTipoDiImmobiliareManutenzione, impattiElettriciManutenzione, setImpattiElettriciManutenzione, impianto_idraulicoManutenzione, setImpiantoIdraulicoManutenzione, tinteggiaturaManutenzione, setTinteggiaturaManutenzione, pulizieCondoManutenzione, setpulizieCondoManutenzione, controllo_caldaiaManutenzione, setControllo_caldaiaManutenzione, calendarioManutenzione, setcalendarioManutenzione, fasciaGiornoManutenzione, setfasciaGiornoManutenzione, messaggioManutenzione, setMessaggioManutenzione, invia_dati_per_manutenzioni_ordinaria
}) => {
  

    //const [popupEntrate, setPopupEntrate] = useState(false);
    //const [popupUtenze, setPopupUtenze] = useState(false);
    //const [popupConsulenzaImmobiliare, setConsulenzaImmobiliare] = useState(false);

    // HANDLES SELECTED SERVICES
    // const [servizioSelezionato, setServizioSelezionato] = useState("");

    
    // This function helps with redirecting users to the whatsapp
    // const gestireContattiWhatsapp = (e) => {
    //     e.preventDefault();

    //     if(!servizioSelezionato){
    //         // Send a toast message
    //         toast("Scegli un servizio!");
    //         return;
    //     }else {
    //         //const phone = '+393311887849'; //Numero di consulente
    //         const phone = '+393881578442';
    //         let messaggio = `Hello there! I am here for ${servizioSelezionato}`;
    //         if(servizioSelezionato === 'luce' || servizioSelezionato === 'gas' || servizioSelezionato === 'acqua'){

    //             messaggio = `Ciao, Sono Kennedy Ani. Vorrei chidere per il vostro servizio su ${servizioSelezionato}`;
    //             // PREVENTS BUGS FROM SPECIAL CHARACTERS
    //             const encodedMessage = encodeURIComponent(messaggio);

    //             window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank')
    //         }else if(servizioSelezionato === 'comunicazioni' || servizioSelezionato === 'interrogazioni' || servizioSelezionato === 'dispetti'|| servizioSelezionato === 'contratti di affitto' || servizioSelezionato === 'compromessi'){
    //             messaggio = `Ciao, Sono Kennedy Ani. Vorrei sapere un'po sul ${servizioSelezionato}`;
    //             // PREVENTS BUGS FROM SPECIAL CHARACTERS
    //             const encodedMessage = encodeURIComponent(messaggio);
    //             window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank')
    //         }else if(servizioSelezionato === 'consulenza compravendita' || servizioSelezionato === "consulenza d'investimento" || servizioSelezionato === 'consulenza tecnico-legale' || servizioSelezionato === 'consulenza per stranieri' || servizioSelezionato === 'consulenza finanziaria'){
    //             messaggio = `Ciao, Sono Kennedy Ani. Vorrei sapere un'po consulenza  ${servizioSelezionato}`;
    //             // PREVENTS BUGS FROM SPECIAL CHARACTERS
    //             const encodedMessage = encodeURIComponent(messaggio);
    //             window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank')
    //         }
    //     }
    // }
    return <>
    <div>
        {/** Hero section */}
        <FadeIn>

            <div style={{background: `url(${heroImage})`,
                    backgroundSize: `cover`, backgroundPosition: `center`}} className="min-h-screen img bg-cover flex-col items-center bg-center text-white md:px-5 py-2">
                    {/* Contact Bar */}
                    <div className="flex md:w-56  sm:w-25 flex-col sm:flex-row justify-between text-xs sm:text-sm px-2 py-1">
                        {/* phone and email */}
                        <div className="flex sm:flex-col md:flex-row justify-center items-center">
                            <FaPhone className="mr-0.5 sm:hidden"/>
                            <span className="mr-2 md:w-1/2">+39 331-1887849 | 0573-737305</span>
                            <FaEnvelope className="mr-0.5 md:w-1/2 sm:hidden"/>
                            <span>gunzimangusta@gmail.com</span>
                        </div>

                        {/* time */}
                        <div className="flex sm:flex-col md:flex-row md:w-20 items-center sm:items-start justify-start gap-1">
                            <FaClock className="mr-0.5 md:text-md sm:hidden"/>
                            <span className="mr-2 w-full md:w-1/2">Lunedi - Venerdi</span>
                            <span className="w-full md:w-1/2">9:30 - 13:00 16:00 - 19:30</span>
                        </div>
                    </div>
                    <div className="flex sm:justify-between sm:ml-2 sm:items-center">
                        <img src={logo} className="w-5" alt="Enrico Erca"/>
                        <NavBar/>
                    </div>
                    
                    <h1 className="sm:text-5xl sm:mt-4 px-9 sm:px-3 font-bold text-center">Tutto ciò che serve per gestire la tua proprietà, senza pensieri.</h1>
                    <p className="px-9 sm:px-3  text-center font-semibold pt-1">Dalla burocrazia alle bollette, dalla manutenzione alla relocation — ci pensiamo noi.</p>
                    <p className="text-center">Servizi completi per proprietari, inquilini e investitori immobiliari</p>  
            </div>
        </FadeIn>

        <div>
        <FadeIn>
            <h1 className="text-center my-2 sm:!text-lg md:text-2xl font-bold uppercase underline underline-offset-8">Le Nostre Soluzioni</h1>
            {/* Service Sections */}
            <div className="grid md:grid-cols-2 sm:grid-cols-1">
                {/* Service Card */}
                <div onClick={()=>setPopupEntrate(true)} className="my-2 cursor-pointer transition-transform hover:scale-105 mx-2 shadow-xl/20 flex justify-around w-md p-1 items- rounded-xl">
                    <div className="">
                        <h2 className="font-bold text-red-600 " >AGENZIA ENTRATE</h2>
                        <p className="font-semibold">Registrazioni Contratti e/o 
                        compromessi, communicazioni varie    </p>
                    </div>
                    <FaFile className="text-5xl text-red-600"/>
                </div>

                {/* Utenze */}
                <div onClick={()=>setPopupUtenze(true)} className="my-2 mx-2 cursor-pointer transition-transform hover:scale-105 shadow-xl/20 flex justify-around w-md p-1 items- rounded-xl">
                    <div className="">
                        <h2 className="font-bold text-red-600">UTENZE</h2>
                        <p className="font-semibold">Luce, gas e aqua </p>
                    </div>
                    <FaLightbulb className="text-5xl text-red-600"/>
                </div>

               {/* Architectura e Interior Design */}
                <div onClick={()=>setPopupArchitectura(true)} className="my-2 mx-2 cursor-pointer transition-transform hover:scale-105 shadow-xl/20 flex justify-around w-md p-1 items- rounded-xl">
                    <div className="">
                        <h2 className="font-bold text-red-600 " >ARCHITECTURA e INTERIOR DESIGN</h2>
                        <p className="font-semibold">Con Architetti Specializzati in Progettazioni 3D</p>
                    </div>
                    <MdArchitecture className="text-7xl text-red-600"/>
                </div>

                {/* Manutenzioni Straordinario */}
                <div onClick={()=>setModuloManutenzioneStra(true)} className="my-2 mx-2 cursor-pointer transition-transform hover:scale-105 shadow-xl/20 flex justify-around w-md p-1 items- rounded-xl">
                    <div className="">
                        <h2 className="font-bold text-red-600 " >MANUTENZIONI STRAORDINARIO</h2>
                        <p className="font-semibold">Con le ditte con cui collaboriamo al fine di ottenere il prodotto desiderato nella maniera migliore e piu economia</p>
                    </div>
                    <GrVmMaintenance className="text-8xl text-red-600"/>
                </div>

                 {/* La Consulenza Immobiliare */}
                <div onClick={()=>setConsulenzaImmobiliare(true)} className="my-2 mx-2 cursor-pointer transition-transform hover:scale-105 shadow-xl/20 flex justify-around w-md p-1 items- rounded-xl">
                    <div className="">
                        <h2 className="font-bold text-red-600 " >CONSULENZA IMMOBILIARE</h2>
                        <p className="font-semibold">Supporto esperto per comprare, 
                        vendere o gestire immobili con sicurezza.</p>
                    </div>
                    <FaCompass className="text-7xl text-red-600"/>
                </div>

                {/* Manutenzioni Ordinario */}
                <div onClick={()=>setModuloManutenzione(true)} className="my-2 mx-2 cursor-pointer transition-transform hover:scale-105 shadow-xl/20 flex justify-around w-md p-1 items- rounded-xl">
                    <div className="">
                        <h2 className="font-bold text-red-600 " >MANUTENZIONI ORDINARIO</h2>
                        <p className="font-semibold">Manutenzione Caldaia, Servizi Falegnameria, Servizio Idraulica</p>
                    </div>
                    <GrVmMaintenance className="text-8xl text-red-600"/>
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

            {/* ARCHITECTURA | INTERIOR DESIGN */}
            {popupArchitectura && (
                <ModalArchitectura 
                                
                ristrutturazione_completa={ristrutturazione_completa}setRistrutturazione_completa={setRistrutturazione_completa} setPopupArchitectura={setPopupArchitectura}

                interior_design_arredo={interior_design_arredo} setInterior_design_arredo={setInterior_design_arredo}
                
                ridistribuzione_spazi_interni={ridistribuzione_spazi_interni} 
                setRidistribuzione_spazi_interni={setRidistribuzione_spazi_interni}

                luce_illuminotecnica={luce_illuminotecnica} setLuce_illuminotecnica={setLuce_illuminotecnica} cucine_bagni_camere_su_misura={cucine_bagni_camere_su_misura} 

                setcucine_bagni_camere_su_misura={setcucine_bagni_camere_su_misura} noteDellUtente={noteDellUtente} setNoteDellUtente={setNoteDellUtente} indirizzoMobileRis={indirizzoMobileRis} setIndirizzoMobileRis={setIndirizzoMobileRis}
                nome={nome} setNome={setNome} cognome={cognome} setCognome={setCognome} emailUtente={emailUtente} setEmailUtente={setEmailUtente} telnumero={telnumero} setTelnumero={setTelnumero} tipodiImmobiliareRis={tipodiImmobiliareRis}
                set_architectura_interior_design={set_architectura_interior_design} setTipodiImmobiliareRis={setTipodiImmobiliareRis} architectura_interior_design={architectura_interior_design}
                
                />
            )}

            {/* MANUTENZIONE STRAORDINARIA */}
            {moduloManutenzioneStra && (
                <ModalStraOrdinaria
                    nomeManutenzioneStra={nomeManutenzioneStra} setNomeManutenzioneStra={setNomeManutenzioneStra} cognomeManutenzioneStra={cognomeManutenzioneStra} setCognomeManutenzioneStra={setCognomeManutenzioneStra}
                    emailUtenteManutenzioneStra={emailUtenteManutenzioneStra} setEmailUtenteManutenzioneStra={setEmailUtenteManutenzioneStra} telnumeroManutenzioneStra={telnumeroManutenzioneStra}setTelnumeroManutenzioneStra={setTelnumeroManutenzioneStra}
                    indirizzoManutenzioneStra={indirizzoManutenzioneStra} setindirizzoManutenzioneStra={setindirizzoManutenzioneStra} capManutenzioneStra={capManutenzioneStra} setCapManutenzioneStra={setCapManutenzioneStra} cittaManutenzioneStra={cittaManutenzioneStra} setCittaManutenzioneStra={setCittaManutenzioneStra} tipoDiImmobiliareManutenzioneStra={tipoDiImmobiliareManutenzioneStra} setTipoDiImmobiliareManutenzioneStra={setTipoDiImmobiliareManutenzioneStra}
                    ristrutturazione_parziale={ristrutturazione_parziale}  setRistrutturazione_parziale={setRistrutturazione_parziale} perdite_gravi={perdite_gravi} setPerdite_gravi={setPerdite_gravi} Impianti_elettrici_idraulici={Impianti_elettrici_idraulici} setImpianti_elettrici_idraulici={setImpianti_elettrici_idraulici} messa_norma_caldaie={messa_norma_caldaie} setMessa_norma_caldaie={setMessa_norma_caldaie} opere_murarie_strutturali={opere_murarie_strutturali}
                    setOpere_murarie_strutturali={setOpere_murarie_strutturali} rifacimento_bagni={rifacimento_bagni} setRifacimento_bagni={setRifacimento_bagni} interventi_post_allagamento={interventi_post_allagamento} setInterventi_post_allagamento={setInterventi_post_allagamento} grado_di_urgenza={grado_di_urgenza} setGrado_di_urgenza={setGrado_di_urgenza} accettoPrivacyStraOrdinaria={accettoPrivacyStraOrdinaria} setAccettoPrivacyStraOrdinaria={setAccettoPrivacyStraOrdinaria}
                    moduloManutenzioneStra={moduloManutenzioneStra} setModuloManutenzioneStra={setModuloManutenzioneStra} setDescrizioneManutenzioneStra={setDescrizioneManutenzioneStra} descrizioneManutenzioneStra={descrizioneManutenzioneStra}
                />
            )}

            {/* MANUTENZIONE ORDINARIA*/}
            {moduloManutenzione && (
                <ModalOrdinaria
                nomeManutenzione={nomeManutenzione} setNomeManutenzione={setNomeManutenzione} cognomeManutenzione={cognomeManutenzione}
                setCognomeManutenzione={setCognomeManutenzione} emailUtenteManutenzione={emailUtenteManutenzione}  setEmailUtenteManutenzione={setEmailUtenteManutenzione} telnumeroManutenzione={telnumeroManutenzione} setTelnumeroManutenzione={setTelnumeroManutenzione}
                indirizzoManutenzione={indirizzoManutenzione} setindirizzoManutenzione={setindirizzoManutenzione} accettoPrivacyOrdinaria={accettoPrivacyOrdinaria} setAccettoPrivacyOrdinaria={setAccettoPrivacyOrdinaria}
                capManutenzione={capManutenzione} setCapManutenzione={setCapManutenzione} cittaManutenzione={cittaManutenzione} setCittaManutenzione={setCittaManutenzione}
                tipoDiImmobiliareManutenzione={tipoDiImmobiliareManutenzione} setTipoDiImmobiliareManutenzione={setTipoDiImmobiliareManutenzione} impattiElettriciManutenzione={impattiElettriciManutenzione} setImpattiElettriciManutenzione={setImpattiElettriciManutenzione} impianto_idraulicoManutenzione={impianto_idraulicoManutenzione} setImpiantoIdraulicoManutenzione={setImpiantoIdraulicoManutenzione} tinteggiaturaManutenzione={tinteggiaturaManutenzione} setTinteggiaturaManutenzione={setTinteggiaturaManutenzione} pulizieCondoManutenzione={pulizieCondoManutenzione} setpulizieCondoManutenzione={setpulizieCondoManutenzione} controllo_caldaiaManutenzione={controllo_caldaiaManutenzione} setControllo_caldaiaManutenzione={setControllo_caldaiaManutenzione} calendarioManutenzione={calendarioManutenzione} setcalendarioManutenzione={setcalendarioManutenzione} fasciaGiornoManutenzione={fasciaGiornoManutenzione} setfasciaGiornoManutenzione={setfasciaGiornoManutenzione} messaggioManutenzione={messaggioManutenzione} setMessaggioManutenzione={setMessaggioManutenzione} setModuloManutenzione={setModuloManutenzione}
                invia_dati_per_manutenzioni_ordinaria={invia_dati_per_manutenzioni_ordinaria}
                />
            )}
            
        </div>
    </div>
    <ToastContainer position="top-center" autoClose={3000}/>
    {/* Footer */}
    <Footer/>
    </>
}

export default Servizi;