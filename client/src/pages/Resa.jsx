
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


const Resa = ({setConsulenzaImmobiliare, popupConsulenzaImmobiliare, gestireDatiConsulenza, nome, setNome, setCognome, cognome, emailUtente, setEmailUtente, telnumero, setTelnumero, messaggio, setMessaggio, toast, ToastContainer}) => {

    // TUTTI GLI ELEMENTI DA UTILIZZARE A CALCOLARE LA RESA
    const [prezzoDiAcquisto, setPrezzoDiAcquisto] = useState(0);
    const [redditoMensileDaAffitto, setRedditoMensileDaAffitto] = useState(0);
    const [constiAnnuali, setConstiAnnuali] = useState(0);
    const [tassoDiSfitto, setTassoDiSfitto] = useState(0);
    const [resaNetta, setResaNetta] = useState(null);

    // VARIABLE PER ATTIVARE IL MODAL
    const [moduloConsulenza, setModuloConsulenza] = useState(false);

    const calcolaResa = () => {
        const redditoAnnuale = redditoMensileDaAffitto * 12;
        const redditoAnnuoNetto = (redditoAnnuale * (1-tassoDiSfitto / 100)) - constiAnnuali;
        const roi = (redditoAnnuoNetto / prezzoDiAcquisto) * 100;
        setResaNetta(roi.toFixed(2));
    };

    


    return <>
        {/* Hero Section */}
        <FadeIn>
            <div style={{background: `url(${resaHero})`, backgroundSize: `cover`, backgroundPosition: `center`}} className="min-h-screen img bg-cover flex-col items-center bg-center text-white md:px-5 py-2">
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
                <h1 className="sm:text-5xl sm:mt-4 px-9 sm:px-3 pt-3 font-bold text-center">Vuoi sapere quanto potresti guadagnare prima di acquistare un immobile? </h1>
                <p className="px-9 sm:px-3  text-center font-semibold pt-1">Prova subito il nostro calcolatore RESA.</p>
            </div>
        </FadeIn>

        <section className='flex flex-col '>
        {/* Calcolatore */}
            <FadeIn>

                <div className='bg-gray-300 w-2xl block mx-auto sm:w-xl shadow-xl my-5 p-2 rounded-2xl '>
                    <div className='flex p-0.5 justify-between'>
                        <p className='font-bold'>Prezzo di Acquisto dell’Immobile</p>
                        <div>
                            {/* € <input type="number" value={prezzoDiAcquisto} onChange={(e)=>setPrezzoDiAcquisto(Number(e.target.value))} id='prezzoAcquistoImmobile' className='bg-gray-400 font-bold pl-0.5 outline-0' name='prezzoAcquistoImmobile' /> */}
                            € <NumericFormat type="number" value={prezzoDiAcquisto} onValueChange={(values)=>{
                                const {floatValue} = values;
                                setPrezzoDiAcquisto(floatValue === undefined ? '' : floatValue);
                                }}
                                thousandSeparator="."
                                decimalSeparator=","
                                allowLeadingZeros={false}
                                allowNegative={false}
                            id='prezzoAcquistoImmobile' className='bg-gray-400 sm:w-5 font-bold pl-0.5 outline-0' name='prezzoAcquistoImmobile' />
                        </div>
                    </div>

                    <div className='flex justify-between p-0.5'>
                        <p className='font-bold'>Reddito Mensile da Affitto</p>
                        <div>
                            {/* € <input type="number" value={redditoMensileDaAffitto} id='redditoMensileAffitto' onChange={(e)=>setRedditoMensileDaAffitto(Number(e.target.value))} className='bg-gray-400 font-bold outline-0 pl-0.5' name='redditoMensileAffitto' /> */}
                            € <NumericFormat type="number" value={redditoMensileDaAffitto} id='redditoMensileAffitto' 
                            onValueChange={(values)=>{
                                const {floatValue} = values;
                                setRedditoMensileDaAffitto(floatValue === undefined ? '' : floatValue)}}
                                thousandSeparator="."
                                decimalSeparator=","
                                allowLeadingZeros={false}
                                allowNegative={false}
                            className='bg-gray-400 font-bold outline-0 sm:w-5 pl-0.5' name='redditoMensileAffitto'
                            />
                        </div>
                    </div>

                    <div className='flex justify-between p-0.5'>
                        <p className='font-bold'>Costi Annuali (tasse, spese)</p>
                        <div>
                            {/* € <input type="number" value={constiAnnuali} onChange={(e)=>setConstiAnnuali(Number(e.target.value))} id='costiAnnuali' className='bg-gray-400 outline-0 font-bold pl-0.5' name='costiAnnuali' /> */}

                            

                            € <NumericFormat type="number" value={constiAnnuali} onValueChange={(values)=>{
                                const {floatValue} = values;
                                setConstiAnnuali(floatValue === undefined ? '' : floatValue)
                            }} 
                            thousandSeparator="."
                            decimalSeparator=","
                            allowLeadingZeros={false}
                            allowNegative={false}
                            id='costiAnnuali' className='bg-gray-400 outline-0 sm:w-5 font-bold pl-0.5' name='costiAnnuali' />
                        </div>
                    </div>
                    <input onClick={calcolaResa} type="button" value="Calcola Resa" className='bg-black  text-amber-50 font-semibold block mx-auto mt-2 p-0.5 rounded' id='calcolaResa'/>
                </div>
            </FadeIn>
        </section>
        {/* Risultati */}
        <div>
            {resaNetta !== null && (
                <p className='text-center'>
                    La tua RESA netta stimata è : <span className='text-black text-xl'>{resaNetta}%</span>
                    <ResaPieChart
                        affittoAnnuale={redditoMensileDaAffitto * 12}
                        costiAnnuali={constiAnnuali}
                        sfittoPercentuale={tassoDiSfitto}
                    />
                </p>
            )} 

        </div>

        {/* sezione informativa*/}
        <section className='mx-5 mb-2'>
            <p className='text-center mt-5'>
                La RESA è un indicatore chiave per capire quanto ti rende davvero un immobile.  <br /><br />
                Ma non tutte le RESA sono uguali, e spesso ci sono costi nascosti o opportunità di ottimizzazione.
                <br /><br />
                - Una <b>resa del 3-4%</b> può essere bassa, ma sicura in zone centrali.<br /><br />
                - Una <b>resa del 7-8%</b> può sembrare alta, ma nascondere rischi.<br /><br />
                - Il <b>tasso di sfitto</b>, le <b>spese straordinarie</b>, e la <b>gestione affitti</b> fanno la differenza.<br /><br />

            </p>
            <p className='text-center font-bold uppercase'>Vuoi un’analisi personalizzata sul tuo caso specifico?</p>
            
            <div className="text-center mt-3">
                <button onClick={()=>setConsulenzaImmobiliare(true)} className="bg-green-600 !text-white font-semibold px-3 py-1 rounded-xl hover:bg-green-700 transition">
                    Richiedi una consulenza personalizzata 🔍
                </button>
                <p className="text-sm text-gray-600 mt-2">Ti aiutiamo a valutare la tua strategia d'investimento in base ai dati reali.</p>
            </div>
        </section>

        {/* Modal */}
        {popupConsulenzaImmobiliare === true && (
            <ModalConsulenza gestireDatiConsulenza={gestireDatiConsulenza} nome={nome} setNome={setNome} setCognome={setCognome} cognome={cognome} emailUtente={emailUtente} setEmailUtente={setEmailUtente} telnumero={telnumero} setTelnumero={setTelnumero} messaggio={messaggio} setMessaggio={setMessaggio} setModuloConsulenza={setModuloConsulenza} toast={toast} 
            setConsulenzaImmobiliare={setConsulenzaImmobiliare} 
            popupConsulenzaImmobiliare={popupConsulenzaImmobiliare}moduloConsulenza={moduloConsulenza}/>
        )}

        <ToastContainer position="bottom-right" autoClose={3000}/>
        <Footer/>
    </>
}

export default Resa;