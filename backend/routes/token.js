const express = require("express");

const router = express.Router();

const { createToken, getStkPush } = require("../controllers/token");

router.post("/", createToken, getStkPush);

module.exports = router;
