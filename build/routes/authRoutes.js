"use strict";

var express = require("express");

var authController = require("../controllers/authController");

var router = express.Router();
router.get("", authController.authenticate);
router.get("/logout", authController.logout);
router.post("/login", authController.login);
router.post("/register", authController.register);
module.exports = router;