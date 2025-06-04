const {get_ricerca_annunci} = require('../database/engine.js');
const search_annunci = async(req, res) => {
    const ricerca_dati = req.query;

    // CHECK IF DATA IS EXISISTENT
    if(ricerca_dati !== null){
        //Query Search
        const resultData = await get_ricerca_annunci(ricerca_dati.ricercaData);

        if(resultData){
            console.log("Data recuperati: ",resultData);
            return res.status(200).json({result: resultData});
        }else{
            return res.status(500).json({message: 'Errore nella query'});
        }
    }else{
        return res.status(403).json({message: 'Nessun data inserito'});
    }
}

module.exports = search_annunci;