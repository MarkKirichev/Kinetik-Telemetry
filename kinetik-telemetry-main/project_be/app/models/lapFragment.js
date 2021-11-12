module.exports = (sequelize, DataTypes) => {
  const LapFragment = sequelize.define('LapFragment', {
    velocity: DataTypes.DOUBLE,
    rpm: DataTypes.INTEGER,
    tps: DataTypes.INTEGER,
    state_of_charge: DataTypes.INTEGER,
    temp_for_motor: DataTypes.INTEGER,
    temp_for_controller: DataTypes.INTEGER,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
  }, {
    underscored: true,
    timestamps: true,
  });

  LapFragment.getModelFilters = () => {
    return ['id', 'lap_id'];
  }

  LapFragment.associate = function (models) {
    models.LapFragment.belongsTo(models.Lap, {
      foreignKey: 'lap_id'
    });
  };

  return LapFragment;
};
