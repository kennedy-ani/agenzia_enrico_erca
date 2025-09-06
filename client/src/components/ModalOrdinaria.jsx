const ModalOrdinaria = ({moduloManutenzione, invia_dati_per_manutenzioni_ordinaria, setModuloManutenzione,
nomeManutenzione, setNomeManutenzione, cognomeManutenzione,
setCognomeManutenzione, emailUtenteManutenzione,  setEmailUtenteManutenzione, telnumeroManutenzione, setTelnumeroManutenzione,
indirizzoManutenzione, setindirizzoManutenzione, accettoPrivacyOrdinaria, setAccettoPrivacyOrdinaria,
capManutenzione, setCapManutenzione, cittaManutenzione, setCittaManutenzione,
tipoDiImmobiliareManutenzione, setTipoDiImmobiliareManutenzione, impattiElettriciManutenzione, setImpattiElettriciManutenzione, impianto_idraulicoManutenzione, setImpiantoIdraulicoManutenzione, tinteggiaturaManutenzione, setTinteggiaturaManutenzione, pulizieCondoManutenzione, setpulizieCondoManutenzione, controllo_caldaiaManutenzione, setControllo_caldaiaManutenzione, calendarioManutenzione, setcalendarioManutenzione, fasciaGiornoManutenzione, setfasciaGiornoManutenzione, messaggioManutenzione, setMessaggioManutenzione}) => {
    
    return <>
        <div>
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                <div className="bg-white sm:max-w-xl p-2 rounded-lg shadow-lg w-full max-w-2xl overflow-hidden max-h-[90vh] text-center relative">
                    <button onClick={()=>setModuloManutenzione(false)}
                    className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl font-bold outline-0"
                    >
                    &times;
                    </button>
                    <h2 className="text-xl font-bold text-red-600 mb-2">MANUTENZIONE ORDINARIA</h2>
                    <p className="text-gray-700">
                        Inserisci i tuoi dati
                    </p>
                    <div className="overflow-y-auto max-h-[70vh] space-y-4">

                        <div className="flex mt-2 text-left flex-col">
                            <label htmlFor="nome">Nome*</label>
                            <input type="text" id='nome' value={nomeManutenzione} onChange={(e)=>setNomeManutenzione(e.target.value)} className='bg-gray-300 rounded-sm shadow p-0.5 outline-0 w-20 pl-0.5' placeholder="Es:Enrico" name='nome' required />
                        </div>

                         <div className="flex text-left flex-col mt-2">
                            <label htmlFor="cognome">Cognome*</label>
                            <input type="text" id='cognome' className='bg-gray-300 rounded-sm shadow p-0.5 outline-0 w-20 pl-0.5' value={cognomeManutenzione} onChange={(e)=>setCognomeManutenzione(e.target.value)} name='cognome' placeholder="Es:Erca" required />
                        </div>

                        <div className="flex text-left flex-col mt-2">
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' value={emailUtenteManutenzione} onChange={(e)=>setEmailUtenteManutenzione(e.target.value)} className='bg-gray-300 shadow rounded-sm p-0.5 outline-0 w-20 pl-0.5' placeholder="Es:test@gmail.com" name='email' />
                        </div>

                        <div className="flex text-left flex-col mt-2">
                            <label htmlFor="telnumber">Numero di Telefono*</label>
                            <input type="text" id='telnumber' value={telnumeroManutenzione} onChange={(e)=>{
                                const input = e.target.value;

                                //Allow only digits
                                if(/^\d*$/.test(input)){
                                    //Limit to 10 digits (change this to your desired length)
                                    if(input.length <= 10){
                                        setTelnumeroManutenzione(input);
                                    }
                                }
                            }} className='bg-gray-300 rounded-sm outline-0 shadow p-0.5  w-20 pl-0.5' name='telnumber' placeholder="Es: 3331234567" required/>
                        </div>

                        {/* INDRIZZIO DELL'IMMOBILE */}
                        <h1 className="!text-2xl">L'indirizzo completo dell'immobile</h1>
                        
                        <input type="text" id='indirizzoManutenzione' className='bg-gray-300 rounded-sm shadow p-0.5 outline-0 w-20 pl-0.5' value={indirizzoManutenzione} onChange={(e)=>setindirizzoManutenzione(e.target.value)} name='indirizzoManutenzione' placeholder="Es:Via Republica 00 " required />

                        <input type="text" id='capManutenzione' className='bg-gray-300 rounded-sm shadow p-0.5 outline-0 w-20 pl-0.5' value={capManutenzione} onChange={(e)=>setCapManutenzione(e.target.value)} name='capManutenzione' placeholder="Es:60134" required />

                        <input type="text" id='citta' className='bg-gray-300 rounded-sm shadow p-0.5 outline-0 w-20 pl-0.5' value={cittaManutenzione} onChange={(e)=>setCittaManutenzione(e.target.value)} name='citta' placeholder="Es:Pistoia" required />

                        {/* Tipo di Immobiliare */}
                        <select name="tipodiImmobiliareManutenzione" value={tipoDiImmobiliareManutenzione} onChange={(e)=>setTipoDiImmobiliareManutenzione(e.target.value)} className="w-full mt-1 bg-gray-300 outline-0 rounded-sm p-0.5" required>
                            <option value="appartamento">Appartamento</option>
                            <option value="villa">Villa</option>
                            <option value="ufficio">Ufficio</option>
                            <option value="monolocale">Monolocale</option>
                        </select>

                        {/* Tipologia di Manutenzione Richiesta */}
                        <h2 className="my-1 font-bold">Tipo di Manutenzione</h2>
                        <div className="">
                            <label><input type="checkbox" checked={impattiElettriciManutenzione} name="interventi" onChange={(e)=>setImpattiElettriciManutenzione(e.target.checked)} value="Impianti elettrici" /> Impianti elettrici</label><br />

                            <label><input type="checkbox" name="interventi" value="impianto idraulico" checked={impianto_idraulicoManutenzione} onChange={(e)=>setImpiantoIdraulicoManutenzione(e.target.checked)}/> Impianto Idraulico</label><br />

                            <label><input type="checkbox" checked={tinteggiaturaManutenzione} name="tinteggiatura" onChange={(e)=>setTinteggiaturaManutenzione(e.target.checked)} value="Tinteggiatura" />Tinteggiatura</label><br />

                            <label><input type="checkbox" checked={pulizieCondoManutenzione} name="pulizie_condo" onChange={(e)=>setpulizieCondoManutenzione(e.target.checked)} value="Pulizie Condominiali" /> Pulizie Condominiali</label><br />

                            <label><input type="checkbox" checked={controllo_caldaiaManutenzione} name="controllocaldaia" onChange={(e)=>setControllo_caldaiaManutenzione(e.target.checked)} value="Controllo Caldaia / Climatizzatore" /> Controllo Caldaia / Climatizzatore</label><br />

                            {/* Preferenza di Giorno e Fascia Giorno */}
                            <div className="flex sm:flex-col">
                                
                                {/* Calendario */}
                                <input type="date" value={calendarioManutenzione} onChange={(e)=>setcalendarioManutenzione(e.target.value)} className="w-full mt-1 bg-gray-300 outline-0 rounded-sm p-0.5" name="calendarioManutenzione" required/>

                                {/* Fascia Giorno */}
                                <select name="fasciaGiorno" value={fasciaGiornoManutenzione} onChange={(e)=>setfasciaGiornoManutenzione(e.target.value)} className="w-full mt-1 bg-gray-300 outline-0 rounded-sm p-0.5" required>
                                    <option value="9:00 - 12:00">9:00-12:00</option>
                                    <option value="14:00-17:00">14:00-17:00</option>
                                    <option value="17:00-19:00">17:00-19:00</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex text-left flex-col mt-2">
                            <label htmlFor="messaggio">Note Aggiuntive</label>
                            <textarea name="messaggio" value={messaggioManutenzione} onChange={(e)=>setMessaggioManutenzione(e.target.value)} className="outline-0 bg-gray-300 rounded-sm w-20 shadow p-0.5" id="messaggio" cols="30" rows="10" ></textarea>
                        </div> 

                        {/* Immagina caricato */}
                        {/* <label htmlFor="imageManutenzioneOrd" style={{ background:"grey", padding:"5px 10px" }}>Inserire immagine (optionale)</label>
                        <input type="file" className="text-center" placeholder=""name="imageManutenzioneOrd"  id=""/> */}

                        <div className="flex flex-col text-left ">
                             <label><input type="checkbox" checked={accettoPrivacyOrdinaria} onClick={(e)=>setAccettoPrivacyOrdinaria(e.target.checked)} className="" required /> Accetto la privacy policy</label>
                        </div>

                        <div className="pb-4 text-center">
                            <button onClick={()=>invia_dati_per_manutenzioni_ordinaria()}className="bg-green-600 text-white px-4 py-0.5 rounded hover:bg-green-700">
                                Invia Richiesta
                            </button>
                        </div>
                    </div>
                </div>
            </div> 

            
        </div>
    </>
}

export default ModalOrdinaria;