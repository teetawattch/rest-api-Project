module.exports = (sequelize, Sequelize) => {
  const team = sequelize.define(
    "team",
    {
      team_id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        field: "team_id",
      },
      team_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: "team_name",
      },
      team_league: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: "team_league",
      },
    },
    {
      tableName: "team",
    }
  );
  return team;
};
