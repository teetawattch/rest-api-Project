const db = require("../db/db");
const { player } = db;

const getAllPlayer = async (req, res) => {
  try {
    const data = await player.findAll();
    return res
      .status(200)
      .json({ status: true, message: "success", data: data });
  } catch (error) {
    return res.json({ status: false, message: error });
  }
};

const addPlayer = async (req, res) => {
  try {
    await player.create({
      player_name: req.body.player_name,
      player_age: req.body.player_age,
      player_position: req.body.player_position,
      teamTeamId: req.body.teamTeamId,
    });
    return res.status(201).json({ status: true, message: "success" });
  } catch (error) {
    return res.json({ status: false, message: error });
  }
};

const deletePlayer = async (req, res) => {
  try {
    await player.destroy({
      where: {
        player_id: req.body.player_id,
      },
    });
    return res.status(204).json({ status: true, message: "success" });
  } catch (error) {
    return res.json({ status: false, message: error });
  }
};

const editPlayer = async (req, res) => {
  try {
    id = req.params.id;
    await player.update(
      {
        player_name: req.body.player_name,
        player_age: req.body.player_age,
        player_position: req.body.player_position,
        teamTeamId: req.body.teamTeamId,
      },
      {
        where: {
          player_id: req.params.id,
        },
      }
    );
    res.status(203).json({ status: true, message: "success" });
  } catch (error) {
    res.json({ status: false, message: error });
  }
};

const getPlayerFromTeamId = async (req, res) => {
  try {
    id = req.params.id;
    const data = await player.findAll({
      where: {
        teamTeamId: id,
      },
    });
    return res
      .status(200)
      .json({ status: true, message: "success", data: data });
  } catch (error) {
    return res.json({ status: false, message: error });
  }
};

module.exports = {
  getAllPlayer,
  addPlayer,
  deletePlayer,
  editPlayer,
  getPlayerFromTeamId,
};
