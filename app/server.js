const PORT = 3000;
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (request, response, next)=>{
    response.send("Hello World !!");
});

app.listen(PORT, () =>
    console.log("Server is listening on port " + PORT)
);