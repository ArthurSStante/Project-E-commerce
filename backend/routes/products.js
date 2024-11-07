import express from "express";
import {
  deleteProductbyID,
  getProducts,
  getProductsbyID,
  newProduct,
  updateProductbyID,
} from "../controllers/productControllers.js";

const router = express.Router();

//Rota para obter todos os produtos
router.route("/products").get(getProducts);

//Rota apenas para admin do sistema para cadastrar produtos
router.route("/admin/products").post(newProduct);

//Rota para obter produtos usando ID
router.route("/products/:id").get(getProductsbyID);

//Rota para atualizar produtos usando ID
router.route("/products/:id").put(updateProductbyID);

//Rota para deletar pridutos usando ID
router.route("/products/:id").delete(deleteProductbyID);

export default router;
