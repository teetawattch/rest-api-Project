const express = require("express");
const app = express();
const cors = require('cors')

const playerRoute = require("./routes/player");
const teamRoute = require("./routes/team");

app.use(express.json());
app.use(cors())

const db = require("./db/db");
db.sequelize.sync();

app.get("/", async (req, res) => {
  res.sendStatus(200);
});
app.use("/player", playerRoute);
app.use("/team", teamRoute);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
