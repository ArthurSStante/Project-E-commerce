import mongoose from "mongoose";
import products from "./data.js";
import Product from "../models/product.js";
import product from "../models/product.js";

const seedProducts = async () => {
  try {
    await mongoose.connec(
      "mongodb+srv://Art:354041@cluster0.d5c3u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    await Product.deleteMany();
    console.log("produtos deletados");

    await Product.insertMany(products);
    console.log("Produtos adicionados");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
