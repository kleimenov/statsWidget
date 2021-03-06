const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const PORT = process.env.PORT || 3030;
const app = express();
app.use(cors());

const dataPath = path.join(__dirname, "data.json");

app.get("/data", (req, res) => {
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    res.send(JSON.parse(data));
  });
});



if (process.env.NODE_ENV === 'production') {
  
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is listening ${PORT}............./`);
});
