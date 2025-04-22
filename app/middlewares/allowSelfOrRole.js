// middlewares/allowSelfOrRole.js
module.exports = (role) => {
    return (req, res, next) => {
      const userId = parseInt(req.params.id);
  
      if (req.user.role === role || req.user.id === userId) {
        return next();
      }
  
      return res.sendStatus(403);
    };
  };
  
  // Usage
  router.delete("/user/:id", auth, allowSelfOrRole("admin"), userController.delete);
  