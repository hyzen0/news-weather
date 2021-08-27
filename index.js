const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");

// Config dotev...
require("dotenv").config({
  path: "./config/config.env",
});

const app = express();

// Connect to database
connectDB();

// body parser
app.use(bodyParser.json());

// Load routes
const authRouter = require("./api/auth.route");
const newsRouter = require("./api/news.route");
const weatherRouter = require("./api/weather.route");

// Dev Logging Middleware
if (process.env.NODE_ENV === "development") {
  app.use(cors());
  app.use(morgan("dev"));
}

// Use Routes
app.use("/", res => {
  console.log("working");
});
app.use("/api", authRouter);
app.use("/api/news", newsRouter);
app.use("/api/weather", weatherRouter);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    msg: "Page not found",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
