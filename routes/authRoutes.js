const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

router.get("", authController.authenticate);
router.get("/logout", authController.logout);
router.post("/login", authController.login);
router.post("/register", authController.register);

module.exports = router;
