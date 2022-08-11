import express from 'express'
import * as path from 'path'
import { fileURLToPath } from 'url';
import {fetchProducts} from './controllers/products.controller.js'

var app = express();
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// var cors = require('cors');
// var bodyParser = require('body-parser');
// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));
// app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get("/", fetchProducts);
  
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});