const express = require("express");
const teamController = require("../controllers/teamController");
const router = express.Router();

router.get("/getallteam", teamController.getAllTeam);
router.post("/addteam", teamController.addTeam);
router.delete("/deleteteam", teamController.deleteTeam);
router.put("/editteam/:id", teamController.editTeam);

module.exports = router;
