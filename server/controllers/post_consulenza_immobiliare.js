
const post_consulenza_immobiliare = async (req, res) => {
    try{
        const {nome, cognome, email, numeroditelefono, messaggio} = req.body;
        const twilio = require('twilio');
        const accountSid = process.env.ACCOUNT_SID;
        const auth_token = process.env.AUTH_TOKEN;
        const client = twilio(accountSid, auth_token);
       
        try{
            // manda un messaggio al consulente
            let messaggioPerAgente = `Nuova Richiesta di Consulenza:
            👨 Nome: ${nome} ${cognome},
            Email: ${email},
            Numero di telefono: ${numeroditelefono},
            Messaggio: ${messaggio}`;
    
            // Numero del agente
            const numeroAgente = `3881578442`;
            // Manda messaggio al consulente
            const messaggioDaMandare = await client.messages.create({
                from: 'whatsapp:+14155238886',
                to: `whatsapp:+39${numeroAgente}`,
                body: messaggioPerAgente
            })

            console.log("Test")
            
            //se Twillio risponde
            if(messaggioDaMandare.sid){
                // Manda un messaggio di conferma al utente
                console.log("hhshshshsh")
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


module.exports = post_consulenza_immobiliare;