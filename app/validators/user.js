const Joi = require("joi");

const userCreation = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  role: Joi.string().valid("admin", "patient", "medecin")
});

module.exports = { userCreation };
