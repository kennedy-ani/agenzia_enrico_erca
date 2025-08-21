const ModalStraOrdinaria = ({
    nomeManutenzioneStra, setNomeManutenzioneStra, cognomeManutenzioneStra, setCognomeManutenzioneStra,
    emailUtenteManutenzioneStra, setEmailUtenteManutenzioneStra, telnumeroManutenzioneStra, setTelnumeroManutenzioneStra,
    indirizzoManutenzioneStra, setindirizzoManutenzioneStra, capManutenzioneStra, setCapManutenzioneStra, cittaManutenzioneStra, setCittaManutenzioneStra, tipoDiImmobiliareManutenzioneStra, setTipoDiImmobiliareManutenzioneStra,
    ristrutturazione_parziale,  setRistrutturazione_parziale, perdite_gravi, setPerdite_gravi, Impianti_elettrici_idraulici, setImpianti_elettrici_idraulici, messa_norma_caldaie, setMessa_norma_caldaie, opere_murarie_strutturali,
    setOpere_murarie_strutturali, rifacimento_bagni, setRifacimento_bagni, interventi_post_allagamento, setInterventi_post_allagamento, grado_di_urgenza, setGrado_di_urgenza, accettoPrivacyStraOrdinaria, setAccettoPrivacyStraOrdinaria,
    moduloManutenzioneStra, setModuloManutenzioneStra, setDescrizioneManutenzioneStra, descrizioneManutenzioneStra
}) => {
    return <>
        <div>
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                <div className="bg-white sm:max-w-xl p-2 rounded-lg shadow-lg w-full max-w-2xl overflow-hidden max-h-[90vh] text-center relative">
                    <button onClick={()=>setModuloManutenzioneStra(false)}
                    className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl font-bold outline-0"
                    >
                    &times;
                    </button>
                    <h2 className="text-xl font-bold text-red-600 mb-2">MANUTENZIONE STRAORDINARIA</h2>
                    <p className="text-gray-700">
                        Inserisci i tuoi dati
                    </p>
                    <div className="overflow-y-auto max-h-[70vh] space-y-4">

                        <div className="flex mt-2 text-left flex-col">
                            <label htmlFor="nome">Nome*</label>
                            <input type="text" id='nome' value={nomeManutenzioneStra} onChange={(e)=>setNomeManutenzioneStra(e.target.value)} className='bg-gray-300 rounded-sm shadow p-0.5 outline-0 w-20 pl-0.5' placeholder="Es:Enrico" name='nome' required />
                        </div>

                         <div className="flex text-left flex-col mt-2">
                            <label htmlFor="cognome">Cognome*</label>
                            <input type="text" id='cognome' className='bg-gray-300 rounded-sm shadow p-0.5 outline-0 w-20 pl-0.5' value={cognomeManutenzioneStra} onChange={(e)=>setCognomeManutenzioneStra(e.target.value)} name='cognome' placeholder="Es:Erca" required />
                        </div>

                        <div className="flex text-left flex-col mt-2">
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' value={emailUtenteManutenzioneStra} onChange={(e)=>setEmailUtenteManutenzioneStra(e.target.value)} className='bg-gray-300 shadow rounded-sm p-0.5 outline-0 w-20 pl-0.5' placeholder="Es:test@gmail.com" name='email' />
                        </div>

                        <div className="flex text-left flex-col mt-2">
                            <label htmlFor="telnumber">Numero di Telefono*</label>
                            <input type="text" id='telnumber' value={telnumeroManutenzioneStra} onChange={(e)=>{
                                const input = e.target.value;

                                //Allow only digits
                                if(/^\d*$/.test(input)){
                                    //Limit to 10 digits (change this to your desired length)
                                    if(input.length <= 10){
                                        setTelnumeroManutenzioneStra(input);
                                    }
                                }
                            }} className='bg-gray-300 rounded-sm outline-0 shadow p-0.5  w-20 pl-0.5' name='telnumber' placeholder="Es: 3331234567" required/>
                        </div>

                        {/* INDRIZZIO DELL'IMMOBILE */}
                        <h1 className="!text-2xl">L'indirizzo completo dell'immobile</h1>
                        
                        <input type="text" id='indirizzoManutenzione' className='bg-gray-300 rounded-sm shadow p-0.5 outline-0 w-20 pl-0.5' value={indirizzoManutenzioneStra} onChange={(e)=>setindirizzoManutenzioneStra(e.target.value)} name='indirizzoManutenzione' placeholder="Es:Via Republica 00 " required />

                        <input type="text" id='capManutenzione' className='bg-gray-300 rounded-sm shadow p-0.5 outline-0 w-20 pl-0.5' value={capManutenzioneStra} onChange={(e)=>setCapManutenzioneStra(e.target.value)} name='capManutenzione' placeholder="Es:60134" required />

                        <input type="text" id='citta' className='bg-gray-300 rounded-sm shadow p-0.5 outline-0 w-20 pl-0.5' value={cittaManutenzioneStra} onChange={(e)=>setCittaManutenzioneStra(e.target.value)} name='citta' placeholder="Es:Pistoia" required />

                        {/* Tipo di Immobiliare */}
                        {/* <select name="tipodiImmobiliareManutenzione" value={tipoDiImmobiliareManutenzione} onChange={(e)=>setTipoDiImmobiliareManutenzione(e.target.value)} className="w-full mt-1 bg-gray-300 outline-0 rounded-sm p-0.5" required>
                            <option value="appartamento">Appartamento</option>
                            <option value="villa">Villa</option>
                            <option value="ufficio">Ufficio</option>
                            <option value="monolocale">Monolocale</option>
                        </select> */}

                        {/* Tipologia di Manutenzione Richiesta */}
                        <h2 className="my-1 font-bold">Tipo di Manutenzione Straordinaria</h2>
                        <div className="">
                            <label><input type="checkbox" checked={ristrutturazione_parziale} name="interventi" onChange={(e)=>setRistrutturazione_parziale(e.target.checked)} value="Impianti elettrici" /> Ristrutturazione Parziale o Totale</label><br />

                            <label><input type="checkbox" name="interventi" value="impianto idraulico" checked={perdite_gravi} onChange={(e)=>setPerdite_gravi(e.target.checked)}/> Perdite gravi o infiltrazioni</label><br />

                            <label><input type="checkbox" checked={Impianti_elettrici_idraulici} name="tinteggiatura" onChange={(e)=>setImpianti_elettrici_idraulici(e.target.checked)} value="Tinteggiatura" />Impianti elettrici o idraulici da rifare</label><br />

                            <label><input type="checkbox" checked={messa_norma_caldaie} name="pulizie_condo" onChange={(e)=>setMessa_norma_caldaie(e.target.checked)} value="Pulizie Condominiali" /> Messa a norma caldaie o impianti</label><br />

                            <label><input type="checkbox" checked={opere_murarie_strutturali} name="controllocaldaia" onChange={(e)=>setOpere_murarie_strutturali(e.target.checked)} value="Controllo Caldaia / Climatizzatore" />Opere murarie o strutturali</label><br />

                            <label><input type="checkbox" checked={rifacimento_bagni} name="controllocaldaia" onChange={(e)=>setRifacimento_bagni(e.target.checked)} value="Controllo Caldaia / Climatizzatore" />Rifacimento bagni o cucine</label><br />

                            <label><input type="checkbox" checked={interventi_post_allagamento} name="controllocaldaia" onClick={(e)=>setInterventi_post_allagamento(e.target.checked)} value="Controllo Caldaia / Climatizzatore" />Interventi post-allagamento o emergenze</label><br />

                            {/* Preferenza di Giorno e Fascia Giorno */}
                            <div className="flex sm:flex-col">
                                
                                <select name="grado_di_urgenza" value={grado_di_urgenza} onChange={(e)=>setGrado_di_urgenza(e.target.value)} className="w-full mt-1 bg-gray-300 outline-0 rounded-sm p-0.5" required>
                                    <option value="appartamento">Subito</option>
                                    <option value="villa">Entro 24h</option>
                                    <option value="ufficio">Entro la settimana</option>
                                    <option value="monolocale">Da Pianificare</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex text-left flex-col mt-2">
                            <label htmlFor="messaggio">Descrizione del problema o lavoro</label>
                            <textarea name="messaggio" value={descrizioneManutenzioneStra} onChange={(e)=>setDescrizioneManutenzioneStra(e.target.value)} className="outline-0 bg-gray-300 rounded-sm w-20 shadow p-0.5" id="messaggio" cols="30" rows="10" ></textarea>
                        </div> 

                        {/* Immagina caricato */}
                        <label htmlFor="imageManutenzioneOrd" style={{ background:"grey", padding:"5px 10px" }}>Inserire immagine (optionale ma utile)</label>
                        <input type="file" className="text-center" placeholder=""name="imageManutenzioneOrd"  id=""/>

                        <div className="flex flex-col text-left ">
                             <label><input type="checkbox" checked={accettoPrivacyStraOrdinaria} onClick={(e)=>setAccettoPrivacyStraOrdinaria(e.target.checked)} className="" required /> Accetto la privacy policy</label>
                        </div>
                        <div className="pb-4 text-center">
                            <button onClick={()=>gestireDatiManutenzioneStra()}className="bg-green-600 text-white px-4 py-0.5 rounded hover:bg-green-700">
                                Invia Richiesta
                            </button>
                        </div>
                    </div>
                </div>
            </div> 

            
        </div>
    </>
}

export default ModalStraOrdinaria;