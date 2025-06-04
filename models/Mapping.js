module.exports = (sequelize, DataTypes) => {
  const Mapping = sequelize.define('Mapping', {});
  Mapping.associate = (models) => {
    Mapping.belongsTo(models.Patient, { foreignKey: 'patientId' });
    Mapping.belongsTo(models.Doctor, { foreignKey: 'doctorId' });
  };
  return Mapping;
};
