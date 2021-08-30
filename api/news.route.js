const express = require("express");
const axios = require("axios");
const router = express.Router();
const passport = require("passport");

router.get(
  "/news",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWSK}`
      );

      res.send({
        count: data.totalResults,
        data: data.articles.map(q => {
          return {
            headline: q.title,
            link: q.url,
          };
        }),
      });
    } catch (error) {
      res.send(error);
    }
  }
);

router.post(
  "/news",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    let search = req.body.search;

    try {
      const { data } = await axios.get(
        `https://newsapi.org/v2/everything?q=${search}&from=2021-08-30&sortBy=popularity&apiKey=${process.env.NEWSK}`
      );

      res.send({
        count: data.totalResults,
        data: data.articles.map(q => {
          return {
            headline: q.title,
            link: q.url,
          };
        }),
      });
    } catch (err) {
      res.send(err);
    }
  }
);

module.exports = router;
