
const post_consulenza_immobiliare = async (req, res) => {
    try{
        const {nome, cognome, email, numeroditelefono, messaggio} = req.body;
        const twilio = require('twilio');
        const accountSid = process.env.ACCOUNT_SID;
        const auth_token = process.env.AUTH_TOKEN;
        const client = twilio(accountSid, auth_token);
       
        let messaggioPerAgente = `Nuova Richiesta di Consulenza:
        👨 Nome: ${nome} ${cognome},
        Email: ${email},
        Numero di telefono: ${numeroditelefono},
        Messaggio: ${messaggio}`;

        // Numero del agente
        const numeroAgente = `3881578442`;
        // Manda messaggio al consulente
        await client.messages.create({
            from: 'whatsapp:+14155238886',
            to: `whatsapp:+39${numeroAgente}`,
            body: messaggioPerAgente
        }).then(messaggio=>console.log(messaggio));

        return res.status(200).json({message: 'Messaggio inviato'});

    }catch(error){
        console.error('Errore:', error.message);
        return res.status(500).json({error: 'Errore durante l’invio della richiesta WhatsApp'})
    }
}


module.exports = post_consulenza_immobiliare;