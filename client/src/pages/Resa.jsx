
import { useState } from 'react';
import resaHero from '../assets/img/investimento_resa.jpg';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { NumericFormat } from 'react-number-format';
import ResaPieChart from '../components/PieChart';


const Resa = () => {

    const [prezzoDiAcquisto, setPrezzoDiAcquisto] = useState(0);
    const [redditoMensileDaAffitto, setRedditoMensileDaAffitto] = useState(0);
    const [constiAnnuali, setConstiAnnuali] = useState(0);
    const [tassoDiSfitto, setTassoDiSfitto] = useState(0);
    const [resaNetta, setResaNetta] = useState(null);

    const calcolaResa = () => {
        const redditoAnnuale = redditoMensileDaAffitto * 12;
        const redditoAnnuoNetto = (redditoAnnuale * (1-tassoDiSfitto / 100)) - constiAnnuali;
        const roi = (redditoAnnuoNetto / prezzoDiAcquisto) * 100;
        setResaNetta(roi.toFixed(2));
    };


    return <>
        {/* Hero Section */}
        <div style={{background: `url(${resaHero})`, backgroundSize: `cover`, backgroundPosition: `center`}} className="h-screen bg-cover flex-col items-center bg-center text-white">
            <div className="">
                <NavBar/>
            </div>
            <div className="text-3xl px-5 pt-3 uppercase font-bold ">Vuoi sapere quanto potresti guadagnare prima di acquistare un immobile? </div>
            <p className="px-9 text-center font-semibold pt-1">Prova subito il nostro calcolatore RESA.</p>
        </div>

        <section className='flex flex-col '>
        {/* Calcolatore */}
            <div className='bg-gray-300 w-2xl block mx-auto shadow-xl my-5 p-2 rounded-2xl'>
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
                         id='prezzoAcquistoImmobile' className='bg-gray-400 font-bold pl-0.5 outline-0' name='prezzoAcquistoImmobile' />
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
                        className='bg-gray-400 font-bold outline-0 pl-0.5' name='redditoMensileAffitto'
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
                        id='costiAnnuali' className='bg-gray-400 outline-0 font-bold pl-0.5' name='costiAnnuali' />
                    </div>
                </div>

                <div className='flex justify-between p-0.5'>
                    <p className='font-bold'>Tasso di Sfitto (opzionale)</p>
                    <div>
                        {/* % <input type="number" id='tassodiSfitto' value={tassoDiSfitto} onChange={(e)=>setTassoDiSfitto(Number(e.target.value))} className='bg-gray-400 outline-0 font-bold pl-0.5' name='tassodiSfitto' /> */}

                        % <NumericFormat type="number" id='tassodiSfitto' value={tassoDiSfitto} onValueChange={(values)=>{
                            const {floatValue} = values;
                            setTassoDiSfitto(floatValue === undefined ? '' : floatValue)
                        }} 
                        thousandSeparator="."
                        decimalSeparator=","
                        allowLeadingZeros={false}
                        allowNegative={false}
                        className='bg-gray-400 outline-0 font-bold pl-0.5' name='tassodiSfitto' />
                    </div>
                </div>

                <input onClick={calcolaResa} type="button" value="Calcola Resa" className='bg-black  text-amber-50 font-semibold block mx-auto mt-2 p-0.5 rounded' id='calcolaResa'/>
            </div>
        </section>
        {/* Risultati */}
        <div>
            {resaNetta !== null && (
                <div className='text-center'>
                    La tua RESA netta stimata è : <span className='text-black text-xl'>{resaNetta}%</span>
                    <ResaPieChart
                        affittoAnnuale={redditoMensileDaAffitto * 12}
                        costiAnnuali={constiAnnuali}
                        sfittoPercentuale={tassoDiSfitto}
                    />
                </div>
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
            
            <div class="text-center mt-3">
                <a href="/consulenza" class="bg-green-600 !text-white font-semibold px-3 py-1 rounded-xl hover:bg-green-700 transition">
                    Richiedi una consulenza personalizzata 🔍
                </a>
                <p class="text-sm text-gray-600 mt-2">Ti aiutiamo a valutare la tua strategia d'investimento in base ai dati reali.</p>
            </div>
        </section>

        <Footer/>
    </>
}

export default Resa;