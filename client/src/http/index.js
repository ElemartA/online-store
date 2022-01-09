import axios from "axios";

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// интерцептер, функция которая параметром принимает конфиг
// Здесь в конфиге мы в поле headers добавляем header authorizations
// и указываем наш токен, который получаем из локального хранилища по ключу токен
// при авторизации мы в локальное хранилище его будем добавлятьь

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

// для инстанса authHost добавляем интерцептор для запроса
// он будет отрабатывать перед каждым запросом и подставлять токен в heders.authorization

$authHost.interceptors.request.use(authInterceptor);
export { $host, $authHost };
