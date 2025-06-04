const express = require('express');
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 2001;

app.use(express.urlencoded());
app.use(cors());

app.get("/", (req, res)=>{
    return res.status(200).json({message: "Benvenuto!"});
});

/** ALL ROUTES */
const routeAnnunci = require("../server/routes/annunci.js");

app.use('/annunci', routeAnnunci);

app.listen(PORT, ()=>{
    console.log(`Running on http://localhost:${PORT}`);
});