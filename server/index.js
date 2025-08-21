const express = require('express');
const cors = require("cors");
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 2001;

app.use(express.json())//Helps parse incoming json 
app.use(express.urlencoded());
app.use(cors());

// For accessing images in the database
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get("/", (req, res)=>{
    return res.status(200).json({message: "Benvenuto!"});
});

/** ALL ROUTES */
const routeAnnunci = require("../server/routes/annunci.js");
const routeConsulenza = require("../server/routes/consulenzaImmobiliare.js")

app.use('/annunci', routeAnnunci);
app.use('/consulenzaimmobiliare', routeConsulenza);

app.listen(PORT, ()=>{
    console.log(`Running on http://localhost:${PORT}`);
});