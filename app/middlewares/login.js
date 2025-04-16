const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Router } = require("express");
const User = require("../models/users");

const router = new Router();

router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;
  
    try {
      // Rechercher l'utilisateur
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(401);
      }
      //console.log('Mot de passe en clair:', password);
      //console.log('Mot de passe haché:', user.password);
      
      // Comparer le mot de passe en clair avec le mot de passe haché
      const isMatch = await bcrypt.compare(password, user.password);
      //console.log('Résultat de la comparaison:', isMatch);
      if (!isMatch) {
        return res.status(401);
      }
  
      // Générer le token JWT
      const token = jwt.sign(
        {
          id: user.id,
          name: user.name,
          role: user.role,
        },
        process.env.JWT_SECRET
      );
  
      res.json({ token });
    } catch (err) {
      next(err);
    }
  });
  

module.exports = router;
