const express = require('express');
const cors = require("cors");
const app = express();
const path = require('path');
const PORT = process.env.PORT || 2001;

app.use(express.urlencoded());
app.use(cors());

// For accessing images in the database
app.use('/images', express.static(path.join(__dirname, 'assets', 'images')));

app.get("/", (req, res)=>{
    return res.status(200).json({message: "Benvenuto!"});
});

/** ALL ROUTES */
const routeAnnunci = require("../server/routes/annunci.js");

app.use('/annunci', routeAnnunci);

app.listen(PORT, ()=>{
    console.log(`Running on http://localhost:${PORT}`);
});