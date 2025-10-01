import {Link } from "react-router-dom";

const ModalArchitectura = ({registerArchitettura, handleSubmitArchitettura, resetArchitettura, errorsArchitettura, onSubmitArchitettura, setPopupArchitectura}) => {
    
    return <>
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white p-2 rounded-lg shadow-lg w-full max-w-2xl overflow-hidden max-h-[90vh] text-center relative">
                <button
                onClick={() => setPopupArchitectura(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl font-bold"
                >
                &times;
                </button>
                <h2 className="text-xl font-bold text-red-600 mb-2 uppercase">Architettura</h2>
                <p className="text-gray-700">
                    Inserisci i tuoi dati personali
                </p>

                <div className="mt-1 overflow-y-auto max-h-[70vh] pb-5">
                    <form onSubmit={handleSubmitArchitettura(onSubmitArchitettura)}>
                        <div className="flex flex-col md:flex-row  justify-around items-center my-2">
                            <div className="flex flex-col justify-start items-start">
                                <label className="">Nome</label>
                                <input placeholder="Es:Enrico" className="p-0.5 rounded-sm bg-gray-200 md:w-10 w-full outline-0" {...registerArchitettura("nome")} />
                                <p className="error">{errorsArchitettura.nome?.message}</p>
                            </div>

                            <div className="flex flex-col justify-start items-start">
                                <label className="">Cognome</label>
                                <input placeholder="Es:Erca" className="p-0.5 rounded-sm bg-gray-200 md:w-10 w-full outline-0" {...registerArchitettura("cognome")} />
                                <p className="error">{errorsArchitettura.cognome?.message}</p>
                            </div>

                        </div>
                        <div className="flex flex-col md:flex-row  justify-around items-center my-2">
                            
                            <div className="flex flex-col justify-start items-start">
                                <label className="">Email</label>
                                <input placeholder="Es:nome@esempio.com" className="p-0.5 rounded-sm bg-gray-200 md:w-10 w-full outline-0" {...registerArchitettura("email")} />
                                <p className="error">{errorsArchitettura.email?.message}</p>
                            </div>

                            <div className="flex flex-col justify-start items-start">
                                <label className="">Telefono</label>
                                <input placeholder="Es:123 456 7890" className="p-0.5 rounded-sm bg-gray-200 w-full outline-0" {...registerArchitettura("numeroditelefono")} />
                                <p className="error text-red-500">{errorsArchitettura.numeroditelefono?.message}</p>
                            </div>

                        </div>

                        <div className="flex flex-col justify-start items-start">
                            <label className="">Note</label>
                            <textarea className="p-0.5 rounded-sm bg-gray-200 w-full outline-0" {...registerArchitettura("noteDellUtente")} /> <br /><br />
                        </div>

                        <label className="flex justify-start items-center">
                            <input type="checkbox" {...registerArchitettura("accettoPrivacy")} /><p> Accetto La <Link to="/privacy-policy"> Privacy Policy</Link></p> 
                            <p className="error">{errorsArchitettura.accettoPrivacy?.message}</p>
                        </label>

                        <button type="submit" className="bg-red-500 text-white py-0.5 px-2 rounded-full">Invia</button>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default ModalArchitectura;