module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('lap_fragments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lap_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "laps",
          key: "id"
        },
        onDelete: "CASCADE"
      },
      velocity: {
        type: Sequelize.DOUBLE
      },
      rpm: {
        type: Sequelize.INTEGER
      },
      tps: {
        type: Sequelize.INTEGER
      },
      state_of_charge: {
        type: Sequelize.INTEGER
      },
      temp_for_motor: {
        type: Sequelize.INTEGER
      },
      temp_for_controller: {
        type: Sequelize.INTEGER
      },
      latitude: {
        type: Sequelize.STRING
      },
      longitude: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('lap_fragments');
  }
};