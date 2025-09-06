import axios from "axios";
import { useState } from "react";
const ModalConsulenza = ({gestireDatiConsulenza, nome, setNome, setCognome, cognome, emailUtente, setEmailUtente, telnumero, setTelnumero, motivoPerConsulenzaImmobiliare, setMotivoPerConsulenzaImmobiliare, accettoPrivacy, setAccettoPrivacy, setConsulenzaImmobiliare}) => {

    async function sendWhatsAppMessage(userMessage) {
        const phone = '+393881578442'; // e.g., +39333xxxxxxx
        const apikey = 'your_callmebot_api_key';
        const msg = encodeURIComponent(userMessage);
      
        const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${msg}&apikey=${apikey}`;
      
        await fetch(url);
    }


    return <>
        <div>
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                <div className="bg-white sm:max-w-xl p-2 rounded-lg shadow-lg w-full max-w-2xl overflow-hidden max-h-[90vh] text-center relative">
                    <button onClick={()=>setConsulenzaImmobiliare(false)}
                    className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl font-bold outline-0"
                    >
                    &times;
                    </button>
                    <h2 className="text-xl font-bold text-red-600 mb-2">CONSULENZA</h2>
                    <p className="text-gray-700">
                        Inserisci i tuoi dati
                    </p>
                    <div className="overflow-y-auto max-h-[70vh] space-y-4">

                        <div className="flex mt-2 text-left flex-col">
                            <label htmlFor="nome">Nome*</label>
                            <input type="text" id='nome' value={nome} onChange={(e)=>setNome(e.target.value)} className='bg-gray-300 rounded-sm shadow p-0.5 outline-0 w-20 pl-0.5' placeholder="Es:Enrico" name='nome' required />
                        </div>

                         <div className="flex text-left flex-col mt-2">
                            <label htmlFor="cognome">Cognome*</label>
                            <input type="text" id='cognome' className='bg-gray-300 rounded-sm shadow p-0.5 outline-0 w-20 pl-0.5' value={cognome} onChange={(e)=>setCognome(e.target.value)} name='cognome' placeholder="Es:Erca" required />
                        </div>

                        <div className="flex text-left flex-col mt-2">
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' value={emailUtente} onChange={(e)=>setEmailUtente(e.target.value)} className='bg-gray-300 shadow rounded-sm p-0.5 outline-0 w-20 pl-0.5' placeholder="Es:test@gmail.com" name='email' />
                        </div>

                        <div className="flex text-left flex-col mt-2">
                            <label htmlFor="telnumber">Numero di Telefono*</label>
                            <input type="text" id='telnumber' value={telnumero} onChange={(e)=>{
                                const input = e.target.value;

                                //Allow only digits
                                if(/^\d*$/.test(input)){
                                    //Limit to 10 digits (change this to your desired length)
                                    if(input.length <= 10){
                                        setTelnumero(input);
                                    }
                                }
                            }} className='bg-gray-300 rounded-sm outline-0 shadow p-0.5  w-20 pl-0.5' name='telnumber' placeholder="Es: 3331234567" required/>
                        </div>

                        <div className="flex text-left flex-col mt-2">
                            <label htmlFor="messaggio">Motivo per la consulenza*</label>
                            <textarea name="messaggio" value={motivoPerConsulenzaImmobiliare} onChange={(e)=>setMotivoPerConsulenzaImmobiliare(e.target.value)} className="outline-0 bg-gray-300 rounded-sm w-20 shadow p-0.5" id="messaggio" cols="30" rows="10" required></textarea>
                        </div> 

                        <div className="flex flex-col text-left ">
                             <label><input type="checkbox" checked={accettoPrivacy} onClick={(e)=>setAccettoPrivacy(e.target.checked)} className="" required /> Accetto la privacy policy</label>
                        </div>
                        <div className="pb-4 text-center">
                            <button onClick={()=>gestireDatiConsulenza()}className="bg-green-600 text-white px-4 py-0.5 rounded hover:bg-green-700">
                                Invia Richiesta
                            </button>
                        </div>
                    </div>
                </div>
            </div> 

            
        </div>
    </>
}

export default ModalConsulenza;