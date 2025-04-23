const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = {
  login: async (req, res, next) => {
    const { email, password } = req.body;
    if(!email || !password){
      return res.status(400);
    }
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401);
    const isMatch = await user.checkPassword(password);
    if (!isMatch) return res.status(401);
    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.json({ token });
  }
};
