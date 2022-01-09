import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { sequelize } from "./db.js";
import { models } from "./modules/modules.js";
import cors from "cors";
import router from "./routes/index.js";
import { errorHandler } from "./middleware/ErrorHandlingMiddleware.js";
import fileUpload from "express-fileupload";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);

// Обработка ошибок, последний Middleware
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); //будет сверять состояние БД со схемой БД
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
