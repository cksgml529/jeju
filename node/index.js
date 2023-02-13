const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 5000;

const router = require("./Router");

app.use(cors());

app.use('/api', router);

app.use(express.static(path.join(__dirname, "../main/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../main/build/index.html"));
});

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
});
