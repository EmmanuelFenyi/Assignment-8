require("dotenv").config();
const express = require("express");

require("./config/dbConnect");

const vehicleRoute = require("./router/vehicleRoute");

const app = express();
app.use(express.json());

app.use("/vehicles", vehicleRoute);

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({ message: error.message });
});

module.exports = app.listen(4000, () =>
  console.log("Server is up and running successfully")
);
