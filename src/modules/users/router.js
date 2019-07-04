const { Router } = require('express');
const createOne = require('./middleware/createOne.js');
const find = require('./middleware/find');
const deleteOneById = require('./middleware/deleteOneById');
const findOneById = require('./middleware/findOneById');
const updateOneById = require('./middleware/updateOneById');

const router = new Router();

router.route('/users')
  .post(createOne)
  .get(find);

router.route('/users/:users')
  .delete(deleteOneById)
  .patch(updateOneById)
  .get(findOneById);

module.exports = router;
