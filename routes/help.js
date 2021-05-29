const express = require("express");

const help = require("../controllers/help-controller");

const router = express.Router();

router.get("/", help.getAllHelps);
router.get("/:id", help.getHelpById);
router.post("/", help.addNewHelp);

module.exports = router;
