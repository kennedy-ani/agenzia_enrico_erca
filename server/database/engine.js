const mysql = require('mysql2');
const config = require('../database/config.js');
const pool = mysql.createPool(config);


/** ANNUNCI */
const getTuttiAnnunci = async() => {
    try {
        //const query = `SELECT * FROM annunci`;
        const query = `SELECT a.titolo, a.indirizzo, a.tipologia_immobili, a.camere, a.bagni, a.descrizione, a.prezzo, a.is_vendita, b.img_url AS img_url, b.is_primary FROM annunci AS a INNER JOIN annunci_img AS b ON a.id = b.id_annunci`;
        const [rows] = await pool.promise().execute(query);
        return rows.length > 0 ? rows : [];
    } catch (error) {
        console.error('Error in the execution of the query', error);
        return [];
    }

}

const get_ricerca_annunci = async(data) => {
    try{
        const searchData = `%${data}%`;
        console.log(searchData);
        const query = `SELECT * FROM annunci WHERE titolo LIKE ? OR indirizzo LIKE ? OR tipologia_immobili LIKE ? OR codice LIKE ? OR descrizione LIKE ?`;
        console.log(query);
        const [rows] = await pool.promise().execute(query, [searchData, searchData, searchData, searchData, searchData]);
        return rows.length > 0 ? rows : [];
    }catch(error){
        console.error('Error in the execution of the query', error);
        return [];
    }
}




module.exports = {
    getTuttiAnnunci,
    get_ricerca_annunci
};