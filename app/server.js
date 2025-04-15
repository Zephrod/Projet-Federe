const PORT = 3000;
const express = require("express");
const cors = require('cors');

const userRouter = require("./routes/user");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (request, response, next)=>{
    response.send("Hello World !!");
});

app.listen(PORT, () =>
    console.log("Server is listening on port " + PORT)
);