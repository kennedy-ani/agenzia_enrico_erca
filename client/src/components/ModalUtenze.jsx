const ModalUtenze = ({setPopupUtenze,setServizioSelezionato, servizioSelezionato, gestireContattiWhatsapp}) => {

    return <>
        <div>
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                <div className="bg-white p-2 rounded-lg shadow-lg md:w-24 mx-auto  text-center relative">
                    <button
                    onClick={() => setPopupUtenze(false)}
                    className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl font-bold"
                    >
                    &times;
                    </button>
                    <h2 className="text-xl font-bold text-red-600 mb-2">UTENZE</h2>
                    <p className="text-gray-700">
                        Scegli  un’operazione
                    </p>

                    <div className="flex flex-col">
                        <select name="" value={servizioSelezionato} onChange={(e)=>setServizioSelezionato(e.target.value)}className="shadow-md bg- p-0.5 outline-none " id="">
                            <option className="text-center" value="">--Scegli--</option>
                            <option className="text-center" value="luce">Luce</option>
                            <option className="text-center" value="gas">Gas</option>
                            <option className="text-center" value="acqua">Acqua<b> (devi avere con noi il contratto gas o luce)</b></option>
                        </select>

                        <a href="#" onClick={(e)=>gestireContattiWhatsapp(e)} className="bg-green-600 p-0.5 mt-1 !text-white font-bold">Apri Whatsapp</a>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
}

export default ModalUtenze;