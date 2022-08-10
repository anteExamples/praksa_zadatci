import express from 'express'
import {getAllData, initiDB} from './db.js'

var app = express();

// var cors = require('cors');
// var bodyParser = require('body-parser');
// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));
// app.use(cors());
app.use(express.json());
app.set('view engine', 'html');

// const db = require('./db');


app.get("/", async (req, res)  => {
    await initiDB();

    const tableData = await getAllData();
    
    res.send({
      "status": "success",
      "tableData": tableData
    });

    // res.sendFile('index.html', { root: './views' })
  });
  
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});