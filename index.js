const express = require("express");
const bodyparser = require("body-parser");
const passport = require("passport");
const connectDB = require("./config/db");

// Config dotev...
require("dotenv").config({
  path: "./config/config.env",
});

const app = express();

// Connect to database
connectDB();

// body parser
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//Load Routes
const auth = require("./api/auth.route");
const news = require("./api/news.route");
const weather = require("./api/weather.route");

app.use(passport.initialize());

require("./strategies/jsonwtStrategy")(passport);

app.get("/", (req, res) => {
  res.send("Working");
});

app.use("/api", auth);
app.use("/api", news);
app.use("/api", weather);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Running`));
