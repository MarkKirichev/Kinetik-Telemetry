module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    underscored: true,
    timestamps: true,
  });

  User.getModelFilters = () => {
    return ['id', 'email'];
  }

  User.associate = function (models) {
    models.User.hasMany(models.Session, {
      foreignKey: "user_id"
    });
  };

  return User;
};
