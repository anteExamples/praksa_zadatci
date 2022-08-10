import Product from "../model/Product";
import path from "path";
import { fileURLToPath } from "url";
import { __dirname } from "../app";

export const renderProducts = async (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname + "/views/index.hbs"));

  // try {

  //   const products = await Product.find().lean();
  //   res.render("index", {
  //     products,
  //   });
  // } catch (error) {
  //   console.log({ error });
  //   return res.render("error", { errorMessage: error.message });
  // }
};
export const createProduct = async (req, res, next) => {
  const product = new Product(req.body);
  await product
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      // console.log(err);
      res.status(400).send(err.message);
      // or check for error.name and display corresponding error message and status
    });
};
export const getProduct = async (req, res, next) => {
  console.log(req.method);
  const title = req.params.title;
  const product = await Product.findOne({ title: title });
  
  try{
    console.log(`Product id: ${product.id}, Description: ${product.description}`);
    res.status(200).send(`Product with title ${title} found!`)
  }
  catch(error) {
    res.status(404).send(`Product with title ${title} not found!`)
  }
};
