module.exports = (sequelize, DataTypes) => {
  const Lap = sequelize.define('Lap', {
    time: DataTypes.DOUBLE,
  }, {
    underscored: true,
    timestamps: true,
  });

  Lap.getModelFilters = () => {
    return ['id', 'session_id'];
  }

  Lap.associate = function (models) {
    models.Lap.belongsTo(models.Session, {
      foreignKey: 'session_id'
    });
    models.Lap.hasMany(models.LapFragment, {
      foreignKey: "lap_id"
    });
  };

  return Lap;
};
