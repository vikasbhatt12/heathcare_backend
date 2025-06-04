module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    disease: DataTypes.STRING
  });

  Patient.associate = (models) => {
    Patient.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return Patient;
};
