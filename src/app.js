// var express = require('express');
// var app = express();

// var cors = require('cors');
// var bodyParser = require('body-parser');
// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));
// app.use(cors());
// app.use(express.json());
// app.set('view engine', 'html');

// const db = require('./db');

// app.get("/", async function(req, res) {
//     const tableData = await db.getAllData();

//     res.send({
//       "status": "success",
//       "tableData": tableData
//     });

//     // res.sendFile('index.html', { root: './views' })
//   });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Our app is running on port ${ PORT }`);
// // });
// var mongo = require('mongodb');
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bodyParser from "body-parser";
import cors from "cors";
import Product from "./model/Product";
const __filename = fileURLToPath(import.meta.url);
import express from "express";
import morgan from "morgan";

import { create } from "express-handlebars";

import indexRoutes from "./routes/productRoutes";
const app = express();
export const __dirname = dirname(__filename);
console.log(__dirname);
const viewsPath = path.join(__dirname, "/views");
console.log(viewsPath);
// settings
app.set("port", process.env.PORT || 3000);

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.engine(
//   ".hbs",
//   create({
//     // layoutsDir: path.join(app.get("views"), "layouts"),
//     partialsDir: path.join(app.get("views"), "partials"),
//     defaulLayout: "main",
//     extname: ".hbs",
//   }).engine
// );
// app.set("view engine", ".hbs");

// // middlewares
// app.use(morgan("dev"));
// app.use(express.urlencoded({ extended: false }));

// // routes
app.use(indexRoutes);

// public route
// app.use(express.static(path.join(__dirname, "public")));
app.set("views", viewsPath);
// app.use((req, res, next) => {
//   res.status(404).render("404");
// });
// app.get('/',function(req,res) {
//   res.sendFile(path.join(__dirname+'/views/index.html'));
// });
// app.post("/products/add", (req, res) => {
//   const product = new Product(req.body);

//   // Output the book to the console for debugging
//   product
//     .save()
//     .then((item) => {
//       res.send("item saved to database");
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(400).send(err.name);
//     });
//   // books.push(book);

// });
export default app;
