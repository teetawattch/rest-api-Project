const express = require("express");
const playerController = require("../controllers/playerController");
const router = express.Router();

router.get("/allplayer", playerController.getAllPlayer);
router.get("/addplayer", playerController.addPlayer);
router.delete("/deleteplayer", playerController.deletePlayer);
router.put("/editplayer/:id", playerController.editPlayer);
router.get('/getplayerfromteamid/:id', playerController.getPlayerFromTeamId)

module.exports = router;
