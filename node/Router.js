const express = require("express");
const router = express.Router();
const converter = require("xml-js");

let request = require("request");
const key = process.env.REACT_APP_SERVICE_KEY;
let url =
  "http://openapi.airport.co.kr/service/rest/FlightScheduleList/getDflightScheduleList";
let queryParams =
  "?" + encodeURIComponent("serviceKey") + `=${key}`; /* Service Key*/

router.get("/", (req, res) => {
  request(
    { url: url + queryParams, method: "GET" },
    (error, response, body) => {
      const xmlToJson = converter.xml2json(body);
      res.send(xmlToJson);
    }
  );
});

module.exports = router;
