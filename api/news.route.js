const express = require("express");
const axios = require("axios");
const { title } = require("process");
const router = express.Router();
const passport = require("passport");

router.get(
  "/news",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWSK}`
      );
      a = news.data.articles;
      res = a.map(k => {
        console.log("Headline=>   " + k.title + "   \n");
      });
    } catch (error) {
      return console.log(error);
    }
  }
);

router.post(
  "/news",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    let search = req.body.search;

    try {
      const news = await axios.get(
        `https://newsapi.org/v2/everything?q=${search}&from=2021-08-30&sortBy=popularity&apiKey=${process.env.NEWSK}`
      );
      a = news.data.articles;
      res = a.map(k => {
        console.log("Headline=>   " + k.title + "   \n");
      });
    } catch (err) {
      console.log(err);
    }
  }
);

module.exports = router;
