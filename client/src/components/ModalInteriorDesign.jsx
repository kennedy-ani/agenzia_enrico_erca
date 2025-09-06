import { Link } from "react-router-dom";

const ModalInteriorDesign = ({nome, setNome, cognome, setCognome, emailUtente, setEmailUtente, telnumero, setTelnumero, indirizzoMobileRis,setIndirizzoMobileRis, tipodiImmobiliareRis, setTipodiImmobiliareRis, noteDellUtente, setNoteDellUtente,  inviaDatiPerInteriorDesign, moderno, setModerno, minimal, setMinimal, classico, setClassico, industriale, setIndustriale, luxury, setLuxury, decidereConVoi, setDecidereConVoi, setPopupInterior, setUrlispirazione, urlispirazione, accettoPrivacy, setAccettoPrivacy}) => {

    return <>
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white p-2 rounded-lg shadow-lg w-full max-w-2xl overflow-hidden max-h-[90vh] text-center relative">
                <button
                onClick={() => setPopupInterior(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl font-bold"
                >
                &times;
                </button>
                <h2 className="text-xl font-bold text-red-600 mb-2">Interior Design</h2>
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
                    <select required className=" bg-gray-300 mt-1 w-full outline-0 p-0.5" value={tipodiImmobiliareRis} onChange={(e)=>setTipodiImmobiliareRis(e.target.value)}>
                        <option value="">Scegli il tipo di immobile</option>
                        <option value="appartmento">Appartamento</option>
                        <option value="villa">Villa</option>
                        <option value="ufficio">Ufficio</option>
                        <option value="locale_commerciale">Locale Commerciale</option>

                    </select>

                    <h2 className="my-1 font-bold">Stile Preferito*(Devi Scegliere Uno)</h2>
                    <div className="flex flex-col justify-left items-center">
                        <label><input type="checkbox" checked={moderno} name="moderno" onChange={(e)=>setModerno(e.target.checked)} value="moderno" /> Moderno</label>

                        <label><input type="checkbox" name="minimal" value="minimal" checked={minimal} onChange={(e)=>setMinimal(e.target.checked)}/> Minimal</label>

                        <label><input type="checkbox" name="classico" value="classico" checked={classico} onChange={(e)=>setClassico(e.target.checked)}/> Classico</label>

                        <label>
                            <input type="checkbox" value="Industriale" name="industriale" onChange={(e)=>setIndustriale(e.target.checked)} id="" /> Industriale
                        </label>

                        <label><input type="checkbox" name="luxury" value="luxury" checked={luxury} onChange={(e)=>setLuxury(e.target.checked)}/> Elegante/Di Lusso</label>

                        <label><input type="checkbox" name="decidereConVoi" value="decidereConVoi" checked={decidereConVoi} onChange={(e)=>setDecidereConVoi(e.target.checked)}/> Decidere con voi</label>

                        
                    </div>

                    {/* Link a ispirazione */}
                    <label htmlFor="ispirazione_url">Ispirazioni (link) </label>
                    <input type="url" name="ispirazione_url" id="ispirazione_url" className="p-0.5 rounded-sm outline-0 bg-gray-300 w-full" value={urlispirazione} 
                    placeholder="E.g: https://pinterest.com" onChange={(e)=>setUrlispirazione(e.target.value)} />

                    <textarea value={noteDellUtente} onChange={(e)=>setNoteDellUtente(e.target.value)} name="dettagli" placeholder="Descrivi meglio cosa vuoi fare" className="w-full mt-1 bg-gray-300 outline-0 rounded-sm p-0.5"></textarea>

                    <h2 className="mt-1 font-bold">Privacy</h2>
                    <div className="flex flex-col text-left ">
                        <label><input type="checkbox" checked={accettoPrivacy} className="text-center mx-auto" onClick={(e)=>setAccettoPrivacy(e.target.checked)} required /> Accetto la privacy policy. <br /> <Link to="/privacy">Clicca qui per piu informazione sulla privacy</Link></label>
                    
                    </div>
                    
                    <button type="submit" onClick={()=>inviaDatiPerInteriorDesign()} className="bg-red-500 text-white rounded-sm p-0.5 mt-2">Richiedi Consulenza Design</button>
                </div>
            </div>
        </div>
    </>
}

export default ModalInteriorDesign;
