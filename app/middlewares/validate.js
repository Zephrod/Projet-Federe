module.exports = (schema) => {
    return (req, res, next) => {
      const { error } = schema.validate(req.body);
      if (error) {
        error.isJoi = true;
        return next(error); // envoyé au middleware d'erreur global
      }
      next();
    };
  };