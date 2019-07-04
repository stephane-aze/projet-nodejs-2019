const { createModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
/* const userDeletePassword = require('../helpers/deletePassword');
const userFindOneById = require('../services/findOneById');
*/

module.exports = (userToCreate) => {
  return createModel.validate(userToCreate)
    // .then(() => userFindOneById(userToCreate.))
    .then(connect)
    .then(db => db.collection(collections.USERS))
    .then(collection => collection.insertOne(userToCreate))
    .then(dbResponse => dbResponse.ops[0]);

  /* Can also be write like the
  return model.validate(userToCreate, model)
    .then(() => {
      return connect()
    })
    .then((db) => {
      return db.collection(collections.LISTS)
    })
    .then((collection) => {
      return collection.insertOne(userToCreate)
    })
    .then((dbResponse) => {
      return dbResponse.ops[0]
    });
  */
};
