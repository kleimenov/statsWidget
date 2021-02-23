## statsWidget (statistics widget) 
This is skills assessment project.
UPD: project deployed on Heroku: [Statswidget](https://statswidget.herokuapp.com)

### Project description and structure.
For this project I use REN + d3.js stack (`React`, `Express.js`, `Node.js`).
Client side implemented on React, for data visualization I used `d3.js`.
Server side implemented on Express.js (Node.js).

#### Please install node modules after you download the project.
Run `npm install` from the project folder.

#### Please before you start React App, start data server.
Start App CLI command `npm start` from /client/src folder.
Start Server CLI command `node Server.js` from the project folder.

### Directory tree representation
```
statsWidget
├── client
|   ├── public
│   |   └── index.html
|   ├── src
|   └── Main
|   |   ├── Areachart.js
|   |   ├── Card.js
|   |   ├── Chart.js
|   |   ├── Donutchart.ejs
|   |   ├── Filters.js
|   |   ├── Legend.js
|   |   ├── Main.ejs
|   |   └── UseD3.js
|   |
|   ├── Sidebars
|   |   ├── Header.js
|   |   └── Toolbar.ejs
|   |
|   ├── App.js
|   ├── index.css
|   ├── index.js
|   |
|   └── package.json.
|
├── data.json
|
├──Server.js
|
├──README.md
|
└── package.json
```

