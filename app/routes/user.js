const { Router } = require("express");

const userController = require("../controllers/user.js");
const authMiddleware = require("../middlewares/auth.js")
const allowSelfOrRole = require("../middlewares/allowSelfOrRole.js"); //verifie que je suis qui je suis !

const router = new Router();

router.get("/users", authMiddleware, userController.getAll);

router.post("/user", userController.create);

router.get("/user/:id", userController.getOne);

router.patch("/user/:id", userController.update);

router.delete("/user/:id", auth, allowSelfOrRole("admin"), userController.delete);

router.patch("/user/:id/activate", userController.activateAccount);

module.exports = router;