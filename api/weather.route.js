const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/weather", async (req, res) => {
  let { lat, lon } = req.body;

  //conver UNIX to UTC
  const timeConverter = UNIX_timestamp => {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var day = days[a.getDay()];
    var time = day + " " + month + " " + date + " " + year + " ";
    return time;
  };

  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${process.env.WEATHERK}`
    );

    const array = data.daily.map(q => {
      return {
        date: timeConverter(q.dt),
        main: String(
          q.weather.map(q => {
            return q.main;
          })
        ),
        temp: q.temp.max,
      };
    });

    res.send({
      count: 5,
      unit: "metric",
      locaton: "Dehradun",
      data: array.slice(0, 5),
    });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
