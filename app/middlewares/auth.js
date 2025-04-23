const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = async (req, res, next) => {
  const token = req.cookies.auth_token || req.headers.authorization?.split(' ')[1];
  
  if (!token) return res.sendStatus(401);

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findByPk(payload.id);
    
    if (!req.user) return res.sendStatus(401);
    next();
  } catch (e) {
    return res.sendStatus(401);
  }
};
