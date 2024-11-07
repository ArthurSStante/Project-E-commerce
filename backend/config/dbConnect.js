import mongoose from "mongoose";

export const connectDatabase = () => {
  let DB_URI = process.env.DB_URI;

  mongoose.connect(DB_URI).then((con) => {
    console.log(
      `Conectado ao Banco de dados MongoDB com HOST: ${con.connection?.host}`
    );
  });
};
