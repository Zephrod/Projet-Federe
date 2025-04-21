const { Router } = require("express");
const medicalFileController = require("../controllers/medicalFile");

const router = new Router();

// Routes pour les fichiers médicaux
router.get("/medical-files", medicalFileController.getAll);
router.get("/medical-file/:id", medicalFileController.getOne);
router.post("/medical-file", medicalFileController.create);
router.patch("/medical-file/:id", medicalFileController.update);
router.delete("/medical-file/:id", medicalFileController.delete);

module.exports = router;
