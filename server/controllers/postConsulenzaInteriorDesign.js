const postConsulenzaInteriorDesign = async (req, res) => {
    const {nome, cognome, email, numeroditelefono, indirizzo, tipoDiImmobiliare, stilePreferito, noteDellUtente, url, accettoPrivacy} = req.body;

    if(nome != "" && cognome!="" && email!="" && numeroditelefono!="" && indirizzo!="" && tipoDiImmobiliare!="" && stilePreferito.length > 0 && accettoPrivacy != false){

        try{
            const twilio = require('twilio');
                const accountSid = process.env.ACCOUNT_SID;
                const auth_token = process.env.AUTH_TOKEN;
                const client = twilio(accountSid, auth_token);
            
                try{
                    // manda un messaggio al consulente
                    let messaggioPerAgente = `Nuova Richiesta di Consulenza Interior Design:
                    👨 Nome: ${nome} ${cognome},
                    Email: ${email},
                    Numero di telefono: ${numeroditelefono},
                    Indirizzo: ${indirizzo},
                    Tipo Da Immobiliare: ${tipoDiImmobiliare},
                    Stile Preferito: ${stilePreferito}
                    Messaggio: ${noteDellUtente}`;
            
                    // Numero del agente
                    const numeroAgente = `3881578442`;
                    // Manda messaggio al consulente
                    const messaggioDaMandare = await client.messages.create({
                        from: 'whatsapp:+14155238886',
                        to: `whatsapp:+39${numeroAgente}`,
                        body: messaggioPerAgente
                    })
    
                    
                    //se Twillio risponde
                    if(messaggioDaMandare.sid){
                        // Manda un messaggio di conferma al utente
                        return res.status(200).json({message: 'Messaggio inviato'});
                    }else{
                        // ❌ se non c'e SID prelevato, qualcosa e' andata storto
                        return res.status(500).json({message: 'Errore: il messaggio non è stato inviato al consulente'});
                    }
                }catch(error){
                    console.error("Errore Twilio:", error);
                    return res.status(500).json({
                    success: false,
                    message: "Invio del messaggio fallito",
                    error: error.message,
                    });
                }
    
        }catch(error){
            console.error('Errore:', error.message);
            return res.status(500).json({error: 'Errore durante l’invio della richiesta WhatsApp'})
        }
    }

}

module.exports =  postConsulenzaInteriorDesign;