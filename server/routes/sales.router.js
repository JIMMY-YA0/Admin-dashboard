const express = require("express");
const { getSales } = require("../controllers/sales.controller");
const router = express.Router();

router.get("/revenue", getSales);

module.exports = router;
