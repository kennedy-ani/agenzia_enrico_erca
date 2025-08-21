import { Helmet } from "react-helmet";

const FAQSchema = () => {
    return <>
        <Helmet>
            <script type="application/json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Come faccio a sapere se un immobile è adatto alle mie esigenze?",
                                "acceptedAnswer": {
                                    "@type": "Answer"
                                    "text": "Scegliere casa non è solo questione di prezzo: contano la zona, i servizi vicini, la metratura, l’esposizione, e lo stile di vita.

                                        Spesso ci si innamora di immobili che non funzionano nel lungo periodo.

                                        Per questo, i nostri consulenti analizzano il tuo budget, obiettivi e abitudini per proporti solo immobili in linea reale con le tue esigenze, evitando perdite di tempo.
                                        
                                        Prova il nostro modulo di ricerca personalizzata: è gratuito e ti aiuta a capire quali case fanno davvero per te."
                                }
                            },

                            {
                                "@type": "Question",
                                "name": "Come posso sapere quanto vale la mia casa?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Il valore di un immobile dipende da zona, metratura, stato, classe energetica e mercato locale. Ma attenzione: non basta guardare immobili simili online — ogni casa ha caratteristiche uniche che incidono sulla resa reale.

                                    Vuoi sapere quanto potresti guadagnare vendendo o affittando la tua proprietà?

                                    Usa il nostro calcolatore di resa immobiliare: ti fornisce una stima rapida e gratuita basata su dati reali."
                                },
                                "linkText": "Calcola ora la resa del tuo immobile",
                                "linkUrl": "#"

                            }

                            
                            {
                                "@type": "Question",
                                "name": "Quali documenti servono per vendere un immobile?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Per vendere casa ti servono: l’atto di proprietà, visura e planimetria catastale, APE (Attestato di Prestazione Energetica), dichiarazione di conformità urbanistica e documenti personali. Le certificazioni degli impianti non sono obbligatorie, ma aumentano il valore dell’immobile.
                                    📥 Vuoi evitare errori? Scarica la nostra checklist gratuita con tutti i documenti spiegati in modo semplice → Scaricala ora"
                                },
                                "linkText": "Scarica la guida completa",
                                "linkUrl": "/checklist-documenti-vendita"
                            }


                            {
                                "@type": "Question",
                                "name": "Aiutate anche con mutui e finanziamenti?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sì, supportiamo i nostri clienti in tutte le fasi dell’acquisto, anche nella scelta del mutuo. Collaboriamo con consulenti del credito qualificati e banche locali per offrirti soluzioni personalizzate, con tassi competitivi e condizioni trasparenti. Ti aiutiamo a comprendere quale mutuo è adatto al tuo profilo, quali documenti servono e come aumentare le probabilità di approvazione.
                                    Che tu sia un lavoratore dipendente, autonomo o giovane acquirente, non sei solo in questo percorso.

                                    📅 Prenota ora un appuntamento gratuito con un nostro agente e ricevi una simulazione su misura →"
                                },
                                "linkText": "Prenota ora la tua consulenza",
                                "linkUrl": "#"
                            }
                        ]
                    }`
                }
            </script>
        </Helmet>
    </>
}

export default FAQSchema;