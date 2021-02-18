const express = require("express");
//const data = require("./data.json");
const path = require("path");
const fs = require("fs");
//This module helps React server get data without problems with headers. 
//It isn't the most effective and safe way to share data between servers, 
//but in this case, it will work well.
const cors = require("cors");

//please set PORT whatever you like, use CLI command: export PORT=(your chose)
//in this case I will use PORT = 8080
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());

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
