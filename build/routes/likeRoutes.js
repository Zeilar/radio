"use strict";

var express = require("express");

var likesController = require("../controllers/likesController");

var router = express.Router();
router.post("/program/:id", likesController.likeProgram);
router.post("/channel/:id", likesController.likeChannel);
router["delete"]("/program/:id", likesController.unlikeProgram);
router["delete"]("/channel/:id", likesController.unlikeChannel);
module.exports = router;