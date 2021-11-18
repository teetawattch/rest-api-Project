const db = require("../db/db");
const { team } = db;

const getAllTeam = async (req, res) => {
  try {
    const data = await team.findAll();
    return res
      .status(200)
      .json({ status: true, message: "success", data: data });
  } catch (error) {
    return res.json({ status: false, message: error });
  }
};

const addTeam = async (req, res) => {
  try {
    await team.create({
      team_name: req.body.team_name,
      team_league: req.body.team_league,
    });
    return res.status(201).json({ status: true, message: "success" });
  } catch (error) {
    return res.json({ status: false, message: error });
  }
};

const deleteTeam = async (req, res) => {
  try {
    await team.destroy({
      where: {
        team_id: req.body.team_id,
      },
    });
    return res.status(204).json({ status: true, message: "success" });
  } catch (error) {
    return res.json({ status: false, message: error });
  }
};

const editTeam = async (req, res) => {
  try {
    id = req.params.id;
    await team.update(
      {
        team_name: req.body.team_name,
        team_league: req.body.team_league,
      },
      {
        where: {
          team_id: id,
        },
      }
    );
    return res.status(203).json({ status: true, message: "success" });
  } catch (error) {
    return res.json({ status: false, message: error });
  }
};

module.exports = { getAllTeam, addTeam, deleteTeam, editTeam };
