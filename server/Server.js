const express = require("express");
//const data = require("./data.json");
const path = require("path");
const fs = require("fs");

//please set PORT whatever you like, use CLI command: export PORT=(your chose)
//in this case I will use PORT = 8080
const PORT = process.env.PORT || 8080;
const app = express();

const dataPath = path.join(__dirname, "data.json");

app.get("/", (req, res) => {
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    res.send(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening ${PORT}............./`);
});
