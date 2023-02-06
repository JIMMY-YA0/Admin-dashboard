const express = require("express");
const { getAdmins } = require("../controllers/management.controller");
const router = express.Router();

router.get("/admins", getAdmins);
module.exports = router;
