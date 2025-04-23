const { Router } = require("express");

const userController = require("../controllers/user.js");

const authMiddleware = require("../middlewares/auth.js");
const allowSelfOrRole = require("../middlewares/allowSelfOrRole.js"); //verifie que je suis qui je suis !
const validate = require("../middlewares/validate.js");
const {userCreation} =require("../validators/user.js");

const router = new Router();

router.get("/users", userController.getAll);

router.post("/user", validate(userCreation), userController.create);

router.get("/user/:id", userController.getOne);

router.patch("/user/:id", userController.update);

router.delete("/user/:id", authMiddleware, allowSelfOrRole("admin"), userController.delete);

router.patch("/user/:id/activate", userController.activateAccount);

module.exports = router;