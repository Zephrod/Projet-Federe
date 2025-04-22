const { Router } = require("express");
const appointmentController = require("../controllers/appointment");
const authMiddleware = require("../middlewares/auth");

const router = new Router();

router.post("/appointments", authMiddleware, appointmentController.create);
router.get("/appointments",authMiddleware, appointmentController.getAll); //get all yours so need to check the id
router.delete("/appointments/:id",authMiddleware, appointmentController.delete);

module.exports = router;