require("dotenv").config();
const express = require("express");
const router = express.Router();
const converter = require("xml-js");

let request = require("request");
const SURVICE_KEY = process.env.SURVICE_KEY;
let url = `http://openapi.airport.co.kr/service/rest/FlightStatusList/getFlightStatusList?ServiceKey=${SURVICE_KEY}`;

router.get("/", (req, res) => {
  request({ url: url, method: "GET" }, (error, response, body) => {
    const xmlToJson = converter.xml2json(body, { compact: true, spaces: 4 });
    res.send(xmlToJson);
  });
});

module.exports = router;
