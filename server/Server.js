const express = require("express");
//const data = require("./data.json");
const path = require("path");
const fs = require("fs");

//please set PORT whatever you like, use CLI command: export PORT=(your chose)
//in this case I will use PORT = 8080
const PORT = process.env.PORT || 8080;

const app = express();

//app.use(express.static(path.join(__dirname, "data.json")));
console.log(path.join(__dirname, "data.json"));
const dataPath = path.join(__dirname, "data.json");
console.log(dataPath);

//this is route to wher I will keep data (JSON) and use this rout like URL to featch data for widget components
/*
app.get('/', (req, res) => {
    res.send(data)
})
*/
//const dataPath = './data.json'

app.get("/", (req, res) => {
  //fs.readFile('/Users/deelooc21/Desktop/Developer/Projects/assesment skills project/statswidget/server/data.json', 'utf8', (err, data) => {
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
