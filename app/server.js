const PORT = 3000;
const express = require("express");
const cors = require('cors');

const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (request, response, next)=>{
    response.send("Hello World !!");
});

app.use(userRouter);
app.use(authRouter);

// 404 fallback
app.use((req, res, next) => {
    res.status(404).json({ message: "Route non trouvée" });
  });
  
  // Middleware d'erreurs
  app.use((err, req, res, next) => {
    console.error("💥 Erreur :", err);
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  });
app.listen(PORT, () =>
    console.log("Server is listening on port " + PORT)
);