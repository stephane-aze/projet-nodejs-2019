const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  name: joi.string(),
  firstname: joi.string(),
  email: joi.string().email(),
  password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  access_token: [joi.string(), joi.number()],
}).with('name', 'firstname').without('password', 'access_token');

const updateModel = joi.object().keys({
  name: joi.string(),
  firstname: joi.string(),
  email: joi.string().email(),
  password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  access_token: [joi.string(), joi.number()],
});

module.exports = {
  createModel,
  updateModel,
};
