const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const models = {
  User: require('./User')(sequelize, DataTypes),
  Patient: require('./Patient')(sequelize, DataTypes),
  Doctor: require('./Doctor')(sequelize, DataTypes),
  Mapping: require('./Mapping')(sequelize, DataTypes),
};

Object.values(models).forEach(model => {
  if (model.associate) model.associate(models);
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
