const PORT = 3000;
const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/hello", (request, response, next)=>{
    res.json({ message: "Salut depuis le backend !" });
});

app.listen(PORT, () =>
    console.log("Server is listening on port " + PORT)
);