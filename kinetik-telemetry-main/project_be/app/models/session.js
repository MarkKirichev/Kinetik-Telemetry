module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    weather: DataTypes.STRING,
  }, {
    underscored: true,
    timestamps: true,
  });

  Session.getModelFilters = () => {
    return ['id', 'weather', 'user_id'];
  }

  Session.associate = function (models) {
    models.Session.belongsTo(models.User, {
      foreignKey: 'user_id'
    });
    models.Session.hasMany(models.Lap, {
      foreignKey: "session_id"
    });
  };

  return Session;
};
