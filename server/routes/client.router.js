const express = require("express");
const { getProducts, getCustomers, getTransactions } = require("../controllers/client.controller");
const router = express.Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);
module.exports = router;
