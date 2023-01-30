const express = require("express");
const { getUser } = require("../controllers/general.controller");

const generalRouter = express.Router();

generalRouter.get("/user/:id", getUser);

module.exports = generalRouter;
