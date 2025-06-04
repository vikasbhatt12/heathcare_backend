module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define('Doctor', {
    name: DataTypes.STRING,
    specialization: DataTypes.STRING
  });
  return Doctor;
};
