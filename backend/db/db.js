const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("football", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
  define: {
    timestamps: true,
  },
  logging: false,
});

const db = {};

db.Sequelize = sequelize;
db.sequelize = sequelize;

db.player = require("./models/player")(sequelize, Sequelize);
db.team = require("./models/team")(sequelize, Sequelize);

db.team.hasMany(db.player, {
  foreigKey: { name: "team_id", field: "team_id" },
});
db.player.belongsTo(db.team, { foreigKey: "team_id" });

module.exports = db;
