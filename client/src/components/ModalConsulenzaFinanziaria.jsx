import { Link } from "react-router-dom";
const ModuloConsulenzaFinanzaria = ({inviaDatiConsulenzaFinanzario, setModuloConsulenzaFinanzario, registerConsulenzaFinanzario, handleSubmitConsulenzaFinanzario, onSubmitConsulenzaFinanzario, errorsConsulenzaFinanzario, toast}) => {
    return <>
        <div>
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                <div className="bg-white sm:max-w-xl p-2 rounded-lg shadow-lg w-full max-w-2xl overflow-hidden max-h-[90vh] text-center relative">
                    <button onClick={()=>setModuloConsulenzaFinanzario(false)}
                    className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl font-bold outline-0"
                    >
                    &times;
                    </button>
                    <h2 className="text-xl font-bold text-red-600 mb-2 uppercase">CONSULENZA Finanziario</h2>
                    <p className="text-gray-700">
                        Inserisci i tuoi dati
                    </p>
                    <div className="overflow-y-auto max-h-[70vh] space-y-4">

                        <form onSubmit={handleSubmitConsulenzaFinanzario(onSubmitConsulenzaFinanzario)}>
                            <div className="flex flex-col md:flex-row  justify-around items-center my-2">
                                <div className="flex flex-col justify-start items-start">
                                    <label className="">Nome</label>
                                    <input placeholder="Es:Enrico" className="p-0.5 rounded-sm bg-gray-200 md:w-10 w-full outline-0" {...registerConsulenzaFinanzario("nome")} />
                                    <p className="error">{errorsConsulenzaFinanzario.nome?.message}</p>
                                </div>

                                <div className="flex flex-col justify-start items-start">
                                    <label className="">Cognome</label>
                                    <input placeholder="Es:Erca" className="p-0.5 rounded-sm bg-gray-200 md:w-10 w-full outline-0" {...registerConsulenzaFinanzario("cognome")} />
                                    <p className="error">{errorsConsulenzaFinanzario.cognome?.message}</p>
                                </div>

                            </div>
                            <div className="flex flex-col md:flex-row  justify-around items-center my-2">
                                
                                <div className="flex flex-col justify-start items-start">
                                    <label className="">Email</label>
                                    <input placeholder="Es:nome@esempio.com" className="p-0.5 rounded-sm bg-gray-200 md:w-10 w-full outline-0" {...registerConsulenzaFinanzario("email")} />
                                    <p className="error">{errorsConsulenzaFinanzario.email?.message}</p>
                                </div>

                                <div className="flex flex-col justify-start items-start">
                                    <label className="">Telefono</label>
                                    <input placeholder="Es:123 456 7890" className="p-0.5 rounded-sm bg-gray-200 w-full outline-0" {...registerConsulenzaFinanzario("numeroditelefono")} />
                                    <p className="error text-red-500">{errorsConsulenzaFinanzario.numeroditelefono?.message}</p>
                                </div>

                            </div>

                            <div className="flex flex-col justify-start items-start">
                                <label className="">Note</label>
                                <textarea className="p-0.5 rounded-sm bg-gray-200 w-full outline-0" {...registerConsulenzaFinanzario("noteDellUtente")} /> <br /><br />
                            </div>

                            <label className="flex justify-start items-center">
                                <input type="checkbox" {...registerConsulenzaFinanzario("accettoPrivacy")} /><p> Accetto La <Link to="/privacy-policy"> Privacy Policy</Link></p> 
                                <p className="error">{errorsConsulenzaFinanzario.accettoPrivacy?.message}</p>
                            </label>

                            <button type="submit" className="bg-red-500 text-white py-0.5 px-2 rounded-full" onClick={inviaDatiConsulenzaFinanzario}>Invia</button>
                        </form>
                    </div>
                </div>
            </div> 

            
        </div>
    </>
}

export default ModuloConsulenzaFinanzaria;