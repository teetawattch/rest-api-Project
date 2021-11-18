module.exports = (sequelize, Sequelize) => {
  const player = sequelize.define(
    "player",
    {
      player_id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        field: "player_id",
      },
      player_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: "player_name",
      },
      player_age: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        field: "player_age",
      },
      player_position: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: "player_position",
      },
    },
    {
      tableName: "player",
    }
  );
  return player;
};
