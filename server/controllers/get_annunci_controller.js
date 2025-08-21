const {getTuttiAnnunci, getTotalCountAnnunci} = require("../database/engine");
const get_annunci = async(req, res) =>{
    try {
        const page = parseInt(req.params.page) || 1;
        const limit = parseInt(req.params.page) || 10;
        const offset = (page - 1) * limit;

        // Get listings
        const data = await getTuttiAnnunci(limit, offset);

        // Total count
        const total = await getTotalCountAnnunci();
        
        return res.status(200).json({
            result: data,
            page, 
            limit,
            total,
            totalPages: Math.ceil(total/limit)
        });
    } catch (error) {
        console.error(error);
        return res.status(501).json({message: "Errore nel parte del server: "+error.message});
    }
    
}

module.exports = get_annunci;