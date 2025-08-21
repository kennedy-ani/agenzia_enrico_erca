const mysql = require('mysql2');
const config = require('../database/config.js');
const pool = mysql.createPool(config);


/** ANNUNCI */
const getTuttiAnnunci = async(limit, offset) => {
    try {
        // get listings
        const query = `SELECT a.id, a.titolo, a.indirizzo, a.tipologia_immobili, a.camere, a.bagni, a.descrizione, a.prezzo, a.is_vendita, b.img_url AS img_url, b.is_primary FROM annunci AS a INNER JOIN annunci_img AS b ON a.id = b.id_annunci WHERE b.is_primary = 1 ORDER BY a.id, b.id ASC LIMIT ? OFFSET ?`;
        const [rows] = await pool.promise().execute(query, [limit, offset]);
        return rows.length > 0 ? rows : [];
    } catch (error) {
        console.error('Error in the execution of the query', error);
        return [];
    }

}

const getTotalCountAnnunci = async() => {
    try{
        const query = `SELECT COUNT(*) as total FROM annunci `;
        const [rows] = await pool.promise().execute(query);
        return rows.length > 0 ? rows[0].total: 0;//return number directly
    }catch(error){
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

const get_all_image_for_listing = async(id_annuncio) => {
    try{
        console.log("Check id:",id_annuncio)
        const query = `SELECT * FROM annunci_img WHERE id_annunci = ? ORDER BY is_primary DESC`;
        console.log(query);
        const [rows] = await pool.promise().execute(query, [id_annuncio]);
        return rows.length > 0 ? rows : [];
    }catch(error){
        console.error('Error in the execution of the query', error);
        return [];
    }
}


module.exports = {
    getTuttiAnnunci,
    get_ricerca_annunci,
    get_all_image_for_listing,
    getTotalCountAnnunci
};