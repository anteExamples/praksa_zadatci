import { Router } from "express";
import {
  renderProducts,
  createProduct,
  getProduct,
} from "../controllers/souvenirs.controllers";
import Product from "../model/Product";

const router = Router();

// Render all tasks
router.get("/", renderProducts);
router.post("/products/add", createProduct);
router.get("/products/:title", getProduct);
export default router;
// Product.findById(req.params.id).exec().then((response) => console.log(response.toJSON()))
