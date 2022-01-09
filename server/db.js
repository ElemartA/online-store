// Сконфигурируем подключение к базе данных.
// Экспортируем объект, который создаем из класса Sequelize. В конструкторе и будем
// указывать конфигурацию (пользователя, пароль и т.д.)
import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
);
