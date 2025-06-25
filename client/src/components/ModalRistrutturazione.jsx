const ModalRistrutturazioni = ({ristrutturazione, setRistrutturazione}) => {
    
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

            <div className="mt-1 overflow-y-auto max-h-[70vh] space-y-4">
                <h2>Dati Personali</h2>
                <div className="flex justify-around items-center mt-2">
                    <input type="text" className="p-0.5 rounded-sm bg-gray-300 w-10" name="nome" placeholder="Nome e Cognome" required/>
                    <input type="text" className="p-0.5 rounded-sm bg-gray-300 w-10" name="email" placeholder="Email" required/>
                </div>
                    <input type="tel" className="p-0.5 rounded-sm bg-gray-300 w-full" name="telefono" placeholder="Telefono" />

                <h2 className="">Immobile</h2>
                <div className="">
                    <input type="text" className="p-0.5 rounded-sm bg-gray-300 w-20" name="indirizzo" placeholder="Indirizzo Immobile"/>
                </div>
                <select className="w-20 bg-gray-300 mt-1 outline-0 p-0.5 ">
                    <option value="Appartmento">Appartamento</option>
                    <option value="Villa">Villa</option>
                </select>

                <div className="flex justify-between items-center mt-2">
                    <input type="number" className="p-0.5 rounded-sm bg-gray-300 mt-2 outline-0" name="superficie" placeholder="Superficie in mq"/>
                    <input type="number" className="p-0.5 rounded-sm bg-gray-300 mt-2 outline-0" name="stanze" placeholder="N. stanze da ristrutturare" />
                </div>

                <h2>Tipo di Ristrutturazione</h2>
                <label><input type="checkbox" name="interventi" value="Impianti elettrici" /> Impianti elettrici</label>
                <label><input type="checkbox" name="interventi" value="Pavimenti" /> Pavimenti</label>
                <textarea name="dettagli" placeholder="Descrivi meglio cosa vuoi fare"></textarea>

                <h2>Budget e Tempistiche</h2>
                <input type="number" name="budget" placeholder="Budget (€)" />
                <input type="date" name="data_inizio" />
                <select name="tempistiche">
                    <option value="1-3">1-3 mesi</option>
                    <option value="3-6">3-6 mesi</option>
                    <option value="6+">Oltre 6 mesi</option>
                </select>

                <h2>Privacy</h2>
                <label><input type="checkbox" required /> Accetto la privacy policy</label>
                <label><input type="checkbox"/> Voglio ricevere offerte</label>

                <button type="submit">Invia Richesta</button>
            </div>
        </div>
     </div>
        
    </>
}

export default ModalRistrutturazioni;