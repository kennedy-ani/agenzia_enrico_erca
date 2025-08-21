const {get_all_image_for_listing} = require("../database/engine.js");

const get_annunci_img = async(req, res) => {
    const id_annuncio = req.params.id;

    console.log(req.params);
    const get_image_gallery = await get_all_image_for_listing(id_annuncio);

    let result;
    if(get_image_gallery != []){
        console.log(get_image_gallery);
        result = get_image_gallery;
    }else{
        return res.status(501).json("Errore sul server");
    }

    return res.status(200).json({images: result});
}

module.exports =  get_annunci_img;