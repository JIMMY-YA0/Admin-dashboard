const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const clientRoutes = require("./routes/client.router");
const generalRoutes = require("./routes/general.router");
const managementRoutes = require("./routes/management.router");
const salesRoutes = require("./routes/sales.router");
require("dotenv").config();
//Data imports
const User = require("./models/User");
const { dataUser } = require("./data/index");

// Configuration
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());

// Routes
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("sales", salesRoutes);

// Mongoose Setup
const PORT = process.env.PORT || 8000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}..`));
    // ONLY ADD DATA ONE TIME
    User.insertMany(dataUser);
  })
  .catch((error) => console.log(`${error} did not connect`));
