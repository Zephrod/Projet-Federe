const { Router } = require("express");
const userController = require("../controllers/user.js");
// ! ajouter les middlewares 

const router = new Router();

router.get("/user", userController.getAll);

router.post("/user", userController.create);

router.get("/user/:id", userController.getOne);

router.patch("/user/:id", userController.update);

router.delete("/user/:id",  userController.delete);

router.patch("/user/:id/activate", userController.activateAccount);

module.exports = router;