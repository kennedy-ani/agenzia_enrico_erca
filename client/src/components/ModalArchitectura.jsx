const ModalArchitectura = ({ristrutturazione_completa, setRistrutturazione_completa, 
interior_design_arredo, setInterior_design_arredo, 
ridistribuzione_spazi_interni, setRidistribuzione_spazi_interni,
luce_illuminotecnica, setLuce_illuminotecnica, cucine_bagni_camere_su_misura, 
setcucine_bagni_camere_su_misura, noteDellUtente, setNoteDellUtente, indirizzoMobileRis,setIndirizzoMobileRis,
nome, setNome, cognome, setCognome, emailUtente, setEmailUtente, telnumero, setTelnumero, tipodiImmobiliareRis,
set_architectura_interior_design, setTipodiImmobiliareRis, setPopupArchitectura}) => {
    
    return <>
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white p-2 rounded-lg shadow-lg w-full max-w-2xl overflow-hidden max-h-[90vh] text-center relative">
                <button
                onClick={() => setPopupArchitectura(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl font-bold"
                >
                &times;
                </button>
                <h2 className="text-xl font-bold text-red-600 mb-2">Modal Architectura | Interior Design</h2>
                <p className="text-gray-700">
                    Inserisci i tuoi dati personali
                </p>

                <div className="mt-1 overflow-y-auto max-h-[70vh] pb-5">
                    <h2 className="font-bold">Dati Personali</h2>
                    <div className="flex justify-around items-center my-2">
                        <input type="text" className="p-0.5 rounded-sm bg-gray-300 w-10 outline-0" value={nome} onChange={(e)=>setNome(e.target.value)} name="nome" placeholder="Nome " required/>

                        <input type="text" className="p-0.5 rounded-sm bg-gray-300 w-10 outline-0" value={cognome} onChange={(e)=>setCognome(e.target.value)} name="Cognome" placeholder="Cognome" required/>

                    </div>

                    <input type="text" className="p-0.5 rounded-sm outline-0 bg-gray-300 w-full" value={emailUtente} onChange={(e)=>setEmailUtente(e.target.value)} name="email" placeholder="Email" required/> <br />

                        <input type="tel" className="p-0.5 rounded-sm outline-0 mt-2 bg-gray-300 w-full" name="telefono" value={telnumero} onChange={(e)=>setTelnumero(e.target.value)} placeholder="Telefono" />

                    <h2 className="my-2 font-bold">Immobile</h2>
                    <div className="">
                        <input type="text" className="p-0.5 outline-0 rounded-sm bg-gray-300 w-full" name="indirizzo" value={indirizzoMobileRis} onChange={(e)=>setIndirizzoMobileRis(e.target.value)} placeholder="Indirizzo Immobile"/>
                    </div>
                    <select className=" bg-gray-300 mt-1 w-full outline-0 p-0.5" value={tipodiImmobiliareRis} onChange={(e)=>setTipodiImmobiliareRis(e.target.value)}>
                        <option value="Appartmento">Appartamento</option>
                        <option value="Villa">Villa</option>

                    </select>

                    <h2 className="my-1 font-bold">Tipo di Servizio Richiesto</h2>
                    <div className="flex flex-col justify-left items-center">
                        <label><input type="checkbox" checked={ristrutturazione_completa} name="interventi" onChange={(e)=>setRistrutturazione_completa(e.target.checked)} value="Progetto di ristrutturazione completa" /> Progetto di ristrutturazione completa</label>

                        <label><input type="checkbox" checked={interior_design_arredo} name="interventi" onChange={(e)=>setInterior_design_arredo(e.target.checked)} value="Interior Design e arredo" /> Interior Design e arredo</label>

                        <label><input type="checkbox" name="interventi" value="Studio della luce / illuminotecnica" checked={luce_illuminotecnica} onChange={(e)=>setLuce_illuminotecnica(e.target.checked)}/> Studio della luce / illuminotecnica</label>

                        <label><input type="checkbox" name="interventi" value="Progetto cucine, bagni o camere su misurai" checked={cucine_bagni_camere_su_misura} onChange={(e)=>setcucine_bagni_camere_su_misura(e.target.checked)}/> Progetto cucine, bagni o camere su misura</label>

                        <label><input type="checkbox" name="interventi" value="Ridistribuzione spazi interni" checked={ridistribuzione_spazi_interni} onChange={(e)=>setRidistribuzione_spazi_interni(e.target.checked)}/> Ridistribuzione spazi interni</label>

                    </div>

                    <textarea value={noteDellUtente} onChange={(e)=>setNoteDellUtente(e.target.value)} name="dettagli" placeholder="Descrivi meglio cosa vuoi fare" className="w-full mt-1 bg-gray-300 outline-0 rounded-sm p-0.5"></textarea>

                    <h2 className="mt-1 font-bold">Privacy</h2>
                    <div className="flex flex-col text-left ">
                        <label><input type="checkbox" value="Accetto Privacy" className="" required /> Accetto la privacy policy</label>
                    
                    </div>
                    
                    <button type="submit" onClick={()=>inviaDatiPerRistrutturazione()} className="bg-red-500 text-white rounded-sm p-0.5 mt-2">Invia Richesta</button>
                </div>
            </div>
        </div>
    </>
}

export default ModalArchitectura;