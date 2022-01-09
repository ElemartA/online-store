import { $authHost, $host } from "./index.js";

export const createType = async (type) => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};

// получение типов
export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

// удаление типа
export const destroyType = async (id) => {
  const { data } = await $authHost.delete("api/type/" + id);
  return data;
};

export const createBrand = async (brand) => {
  const { data } = await $authHost.post("api/brand", brand);
  return data;
};

// получение брендов
export const fetchBrand = async () => {
  const { data } = await $host.get("api/brand");
  return data;
};

// удаление бренда
export const destroyBrand = async (id) => {
  const { data } = await $authHost.delete("api/brand/" + id);
  return data;
};

export const createProduct = async (product) => {
  const { data } = await $authHost.post("api/product", product);
  return data;
};

// изменение продукта
export const updateProduct = async ({ id, rating }) => {
  const { data } = await $host.put("api/product/" + id, { id, rating });
  return data;
};

// получение продуктов
export const fetchProduct = async (typeId, brandId, page, limit = 5) => {
  const { data } = await $host.get("api/product", {
    params: {
      typeId,
      brandId,
      page,
      limit,
    },
  });
  return data;
};

// получение продукта
export const fetchOneProduct = async (id) => {
  const { data } = await $host.get("api/product/" + id);
  return data;
};

// удаление продукта
export const destroyOneProduct = async (id) => {
  const { data } = await $authHost.delete("api/product/" + id);
  return data;
};

// создание рейтинга
export const createRating = async (rating) => {
  const { data } = await $host.post("api/rating", rating);
  return data;
};

// получение рейтингов
export const fetchRatings = async () => {
  const { data } = await $host.get("api/rating");
  return data;
};

// получение рейтинга одного продукта
export const fetchOneRating = async (productId) => {
  const { data } = await $host.get("api/rating/" + productId);
  return data;
};

export const createBasket = async (id) => {
  const { data } = await $authHost.post("api/basket", id);
  return data;
};

// получение всех корзин
export const fetchCarts = async () => {
  const { data } = await $host.get("api/basket");
  return data;
};

// получение корзины опред. юзера
export const fetchOneCart = async (userId) => {
  const { data } = await $host.get("api/basket/" + userId);
  return data;
};

export const createBasketProduct = async (info) => {
  const { data } = await $authHost.post("api/basket_product", info);
  return data;
};

export const fetchProductsOfBasket = async (basketId) => {
  const { data } = await $host.get("api/basket_product/" + basketId);
  return data;
};

// удаление продукта из корзины
export const destroyCartProduct = async (id) => {
  const { data } = await $host.delete("api/basket_product/" + id);
  return data;
};
