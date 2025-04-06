const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const propertyRoutes = require("./routes/properties");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/properties", propertyRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
