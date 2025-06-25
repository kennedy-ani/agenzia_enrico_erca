import axios from "axios";
import { useState } from "react";
const ModalConsulenza = ({setModuloConsulenza, setConsulenzaImmobiliare, moduloConsulenza}) => {

    const {nome, setNome} = useState('');
    const {cognome, setCognome} = useState('');
    const {emailUtente, setemailUtente} = useState('');
    const {telnumero, setTelnumero} = useState('');
    const {messaggio, setMessaggio} = useState('');


    // Invia tutti dati inseriti al backend
    const gestireDatiConsulenza = () => {
        const params = {
            nome: nome,
            cognome: cognome,
            email: emailUtente,
            numeroditelefono: telnumero,
            messaggio: messaggio
        }

        console.log(params);
    }

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
                <div className="bg-white p-2 rounded-lg shadow-lg w-full max-w-2xl overflow-hidden max-h-[90vh] text-center relative">
                    <button onClick={()=>setConsulenzaImmobiliare(false)}
                    className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl font-bold"
                    >
                    &times;
                    </button>
                    <h2 className="text-xl font-bold text-red-600 mb-2">CONSULENZA</h2>
                    <p className="text-gray-700">
                        Inserisci i tuoi dati
                    </p>
                    <div className="overflow-y-auto max-h-[70vh] space-y-4">

                        <div className="flex mt-2 text-left flex-col">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id='nome'  className='bg-gray-300 shadow p-0.5 outline-0 w-20 pl-0.5' name='nome' />
                        </div>

                        <div className="flex text-left flex-col mt-2">
                            <label htmlFor="cognome">Cognome</label>
                            <input type="text" id='cognome' className='bg-gray-300 shadow p-0.5 outline-0 w-20 pl-0.5' onChange={()=>setCognome(e.target.value)} name='cognome' />
                        </div>

                        <div className="flex text-left flex-col mt-2">
                            <label htmlFor="email">Email</label>
                            <input type="text" id='email' className='bg-gray-300 shadow p-0.5 outline-0 w-20 pl-0.5' name='email' />
                        </div>

                        <div className="flex text-left flex-col mt-2">
                            <label htmlFor="telnumber">Numero di Telefono</label>
                            <input type="text" id='telnumber' className='bg-gray-300 outline-0 shadow p-0.5  w-20 pl-0.5' name='telnumber' />
                        </div>

                        <div className="flex text-left flex-col mt-2">
                            <label htmlFor="messaggio">Messaggio</label>
                            <textarea name="messaggio" className="outline-0 bg-gray-300 w-20 shadow p-0.5" id="messaggio" cols="30" rows="10"></textarea>
                        </div>
                    
                        <div className="pb-4 text-center">
                            <button onClick={sendWhatsAppMessage}className="bg-green-600 text-white px-4 py-0.5 rounded hover:bg-green-700">
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