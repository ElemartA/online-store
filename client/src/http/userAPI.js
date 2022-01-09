import { $authHost, $host } from "./index.js";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
    role: "USER",
  });
  // по ключу "токен" в локальное хранилище будем помещать токен
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post("api/user/login", {
    email,
    password,
  });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

// export const check = async () => {
//   // пользователь авторизовался, токен сохранился, каждый раз
//   // при обновлении страницы будет вызываться функция check
//   // и если токен не валидный, пользователь будет разлогиниваться
//   // если валидный, то пользователь попадает на страницу магазина под своим аккаунтом

export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
