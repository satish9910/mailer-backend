const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");

const { addMail, getEmail,sendMail } = require("../controllers/emailController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/add-email", addMail);
router.get("/get-email", getEmail);
router.post("/sent-email", sendMail);

module.exports = router;
