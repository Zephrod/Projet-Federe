const { Router } = require('express');
const authController = require('../controllers/auth');

const router = new Router();

router.post('/login', authController.login);
router.post('/logout',authController.logout)

module.exports = router;