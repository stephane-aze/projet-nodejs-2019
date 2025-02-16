const { createModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const UsersFindOneById = require('../../users/services/findOneById');


module.exports = (listToCreate) => {
  const list = {
    ...listToCreate,
    UsersFindOneById,
  };

  return createModel.validate(list)
    .then(connect)
    .then(db => db.collection(collections.LISTS))
    .then(collection => collection.insertOne(list))
    .then(dbResponse => dbResponse.ops[0]);

  /* Can also be write like the
  return model.validate(listToCreate, model)
    .then(() => {
      return connect()
    })
    .then((db) => {
      return db.collection(collections.LISTS)
    })
    .then((collection) => {
      return collection.insertOne(listToCreate)
    })
    .then((dbResponse) => {
      return dbResponse.ops[0]
    });
  */
};
