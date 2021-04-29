const express = require("express");
const likesController = require("../controllers/likesController");
const router = express.Router();

router.post("/program/:id", likesController.likeProgram);
router.post("/channel/:id", likesController.likeChannel);
router.delete("/program/:id", likesController.unlikeProgram);
router.delete("/channel/:id", likesController.unlikeChannel);

module.exports = router;
