const mysql = require('mysql2');
const config = require('../database/config.js');
const pool = mysql.createPool(config);


/** ANNUNCI */
const getTuttiAnnunci = async() => {
    try {
        const query = `SELECT * FROM annunci`;
        const [rows] = await pool.promise().execute(query);
        return rows.length > 0 ? rows : [];
    } catch (error) {
        console.error('Error in the execution of the query', error);
        return [];
    }

}

module.exports = {
    getTuttiAnnunci
};