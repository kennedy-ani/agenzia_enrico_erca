const {getTuttiAnnunci} = require('../database/engine');
const get_annunci = async(req, res) =>{
    const results = await getTuttiAnnunci();

    return res.status(200).json({result: results});
}

module.exports = get_annunci;