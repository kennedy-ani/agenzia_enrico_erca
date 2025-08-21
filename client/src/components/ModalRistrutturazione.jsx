const ModalRistrutturazioni = ({ristrutturazione, setRistrutturazione, nomeRis, setNomeRis, cognomeRis, setCognomeRis, emailRis, setEmailRis, telfonoRis, setTelfonoRis, indirizzoMobileRis, setIndirizzoMobileRis, tipodiImmobiliareRis, setTipodiImmobiliareRis, superficieRis, setSuperficieRis, stanzedaRis, setStanzedaRis, impattiElettrici, setImpattiElettrici, pavimenti, setPavimenti, descrizioneRis, setDescrizioneRis, budgetRis, setBudgetRis, tempisticheRis, setTempisticheRis, durataRis, setDurataRis, inviaDatiPerRistrutturazione}) => {
    
    return <>
     <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
        <div className="bg-white p-2 rounded-lg shadow-lg w-full max-w-2xl overflow-hidden max-h-[90vh] text-center relative">
            <button
            onClick={() => setRistrutturazione(false)}
            className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl font-bold"
            >
            &times;
            </button>
            <h2 className="text-xl font-bold text-red-600 mb-2">RISTRUTTURAZIONE</h2>
            <p className="text-gray-700">
                Inserisci i tuoi dati personali
            </p>

            <div className="mt-1 overflow-y-auto max-h-[70vh] pb-5">
                <h2 className="font-bold">Dati Personali</h2>
                <div className="flex justify-around items-center my-2">
                    <input type="text" className="p-0.5 rounded-sm bg-gray-300 w-10 outline-0" value={nomeRis} onChange={(e)=>setNomeRis(e.target.value)} name="nome" placeholder="Nome e Cognome" required/>
                    <input type="text" className="p-0.5 rounded-sm bg-gray-300 w-10 outline-0" value={emailRis} onChange={(e)=>setEmailRis(e.target.value)} name="email" placeholder="Email" required/>
                </div>
                    <input type="tel" className="p-0.5 rounded-sm outline-0 bg-gray-300 w-full" name="telefono" value={telfonoRis} onChange={(e)=>setTelfonoRis(e.target.value)} placeholder="Telefono" />

                <h2 className="my-2 font-bold">Immobile</h2>
                <div className="">
                    <input type="text" className="p-0.5 outline-0 rounded-sm bg-gray-300 w-full" name="indirizzo" value={indirizzoMobileRis} onChange={(e)=>setIndirizzoMobileRis(e.target.value)} placeholder="Indirizzo Immobile"/>
                </div>
                <select className=" bg-gray-300 mt-1 w-full outline-0 p-0.5" value={tipodiImmobiliareRis} onChange={(e)=>setTipodiImmobiliareRis(e.target.value)}>
                    <option value="Appartmento">Appartamento</option>
                    <option value="Villa">Villa</option>
                </select>

                <div className="flex justify-between items-center my-1">

                    <input value={superficieRis} onChange={(e)=>setSuperficieRis(e.target.value)} type="number" className="p-0.5 rounded-sm  bg-gray-300 mt-2 outline-0" name="superficie" placeholder="Superficie in mq"/>

                    <input type="number" value={stanzedaRis}  onChange={(e)=>setStanzedaRis(e.target.value)}
                     
                    className="p-0.5 rounded-sm bg-gray-300 mt-2 outline-0" name="stanze" placeholder="N. stanze da ristrutturare" />
                </div>

                <h2 className="my-1 font-bold">Tipo di Ristrutturazione</h2>
                <div className="flex justify-around items-center">
                    <label><input type="checkbox" checked={impattiElettrici} name="interventi" onClick={(e)=>setImpattiElettrici(e.target.checked)} value="Impianti elettrici" /> Impianti elettrici</label>
                    <label><input type="checkbox" name="interventi" value="Pavimenti" checked={pavimenti} onClick={(e)=>setPavimenti(e.target.checked)}/> Pavimenti</label>
                </div>

                <textarea value={descrizioneRis} onChange={(e)=>setDescrizioneRis(e.target.value)} name="dettagli" placeholder="Descrivi meglio cosa vuoi fare" className="w-full mt-1 bg-gray-300 outline-0 rounded-sm p-0.5"></textarea>

                <h2 className="mt-1 font-bold">Budget e Tempistiche</h2>
                <div className="flex flex-col">
                    <input type="number" value={budgetRis} name="budget" onChange={(e)=>setBudgetRis(e.target.value)} className="w-full mt-1 bg-gray-300 outline-0 rounded-sm p-0.5" placeholder="Budget (€)" />
                    {/* Calendario */}
                    <input type="date" value={tempisticheRis} onChange={(e)=>setTempisticheRis(e.target.value)} className="w-full mt-1 bg-gray-300 outline-0 rounded-sm p-0.5" name="data_inizio" />
                </div>
                <select name="tempistiche" value={durataRis} onChange={(e)=>setDurataRis(e.target.value)} className="w-full mt-1 bg-gray-300 outline-0 rounded-sm p-0.5">
                    <option value="1-3">1-3 mesi</option>
                    <option value="3-6">3-6 mesi</option>
                    <option value="6+">Oltre 6 mesi</option>
                </select>

                <h2 className="mt-1 font-bold">Privacy</h2>
                <div className="flex flex-col text-left ">
                    <label><input type="checkbox" className="" required /> Accetto la privacy policy</label>
                   
                </div>
                
                <button type="submit" onClick={()=>inviaDatiPerRistrutturazione()} className="bg-red-500 text-white rounded-sm p-0.5 mt-2">Invia Richesta</button>
            </div>
        </div>
     </div>
        
    </>
}

export default ModalRistrutturazioni;