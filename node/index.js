const { response } = require("express");
const express = require("express");
const path = require("path");
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, "../main/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../main/build/index.html"));
});
app.get("/api", (req, res) => {
  res.header(
    "Access-Control-Allow-Origin",
    "http://openapi.airport.co.kr/service/rest"
  );
  res.send(data);
});
app.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
});
