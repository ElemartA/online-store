import React, { useContext, useEffect, useState } from "react";
import s from "./ProductPage.module.scss";
// для отправки на сервер нужно знать id устройства, для этого используем useParams
import { useParams } from "react-router-dom";
import {
  createBasket,
  createBasketProduct,
  createRating,
  fetchOneCart,
  fetchOneProduct,
  fetchOneRating,
  updateProduct,
} from "../../../http/deviceApi";
import { observer } from "mobx-react-lite";
import { Context } from "../../..";
import jwt_decode from "jwt-decode";

const ProductPage = observer(() => {
  const { product } = useContext(Context);
  const { user } = useContext(Context);
  const [product1, setProduct1] = useState({ info: [] });
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [value1, setValue1] = useState(0);
  const [move, setMove] = useState(0);
  const [hover, setHover] = useState(false);
  const [productInCart, setProductInCart] = useState([]);

  const addProductToCart = () => {
    product.setCartProducts([...product.cartProducts, product1]);
    let lastCartProduct = product.cartProducts[product.cartProducts.length - 1];
    let lastCartProduct2 = product.cartProducts.reverse()[0];
    console.log(lastCartProduct.name);
    console.log(lastCartProduct2.name);
    console.log(product.cartId);
    // записываем количество продуктов в корзине
    product.setCartProductCount(product.cartProducts.length);
    console.log(product.cartProducts.length);
    localStorage.setItem("count", product.cartProducts.length);

    product.setMapProductCart([
      ...product.mapProductCart,
      [lastCartProduct.name, lastCartProduct.price],
    ]);

    product.setNamesInCart([...product.namesInCart, lastCartProduct.name]);
    product.setPriceInCart([...product.priceInCart, lastCartProduct.price]);

    // TODO: создавать продукт корзины после нажатия клиентом на кнопку ЗАКАЗАТЬ
  };

  const toggleHover = () => {
    if (hover == false) {
      setHover(true);
    }
    if (hover == true) {
      setHover(false);
    }
  };

  const addRating = () => {
    createRating({ rate: rating, productId: id }).then((data) => {
      console.log("Ваш рейтинг учтен");
    });

    setTimeout(() => {
      fetchOneRating(id).then((data) => {
        setValue1(
          data.rows.length !== 0
            ? Math.round(
                (data.rows
                  .map((el) => Object.entries(el)[1])
                  .map((el) => el[1])
                  .reduce((a, b) => a + b, 0) /
                  data.count) *
                  100
              ) / 100
            : rating
        );
      });
    }, 700);

    // TODO: От PUT запроса с обновлением среднего рейтинга по продукту отказалась, т.к.
    // запрос блокировался и не получал ответ от сервера. Нужно переделывать логику. В итоге
    // сами рейтинги хранятся на сервере, при их получении высчитывается средняя и записывается в стэйт (value1)
    // setTimeout(() => {
    //   updateProduct({
    //     id: id,
    //     rating: value1,
    //   }).then((result) => {
    //     console.log("Рейтинг обновлен");
    //   });
    // }, 1000);

    setTimeout(() => setRating(0), 550);

    let decoded = localStorage.getItem("token");
    let userInfo = jwt_decode(decoded);
    let userId = userInfo.id;
    // createBasket(userId);

    setTimeout(() => {
      fetchOneCart(userId).then((data) => console.log(data));
    }, 1000);
  };

  useEffect(() => {
    fetchOneProduct(id).then((data) => setProduct1(data));
    fetchOneRating(id).then((data) =>
      setValue1(
        data.rows.length !== 0
          ? Math.round(
              (data.rows
                .map((el) => Object.entries(el)[1])
                .map((el) => el[1])
                .reduce((a, b) => a + b, 0) /
                data.count) *
                100
            ) / 100
          : rating
      )
    );
  }, []);

  return (
    <>
      <span className={s.block__title}>{product1.name}</span>
      <div className={s.wrap}>
        <div className={s.wrap__block}>
          <img
            className={s.image}
            alt="foto"
            src={process.env.REACT_APP_API_URL + product1.img}
          ></img>
          <div className={s.title}>
            Характеристики:
            {product1.info.map((info, index) => {
              return (
                <p
                  className={s.description}
                  style={{
                    background: index % 2 === 0 ? "lightgray" : "white",
                  }}
                  key={info.id}
                >
                  {info.title} : {info.description}
                </p>
              );
            })}
          </div>
        </div>
        <div className={s.wrap__second}>
          <div className={s.block}>
            <div className={s.block__first}>
              <div className={s.block__price}>{product1.price} р.</div>
              <button
                onClick={addProductToCart}
                type="button"
                className={s.block__button}
              >
                Добавить в корзину
              </button>
            </div>
            <div className={s.rating}>
              <div className={s.accurate}>
                <div
                  className={s.accurate__body}
                  onMouseEnter={toggleHover}
                  onMouseLeave={toggleHover}
                >
                  <div
                    style={
                      hover
                        ? {
                            width: `${move / 0.05}%`,
                            transition: "all 0.2s ease 0s",
                          }
                        : {
                            width: `${value1 / 0.05}%`,
                            transition: "all 0.2s ease 0s",
                          }
                    }
                    id="accurate__active"
                    className={s.accurate__active}
                  ></div>
                  <div
                    className={s.accurate__items}
                    onClick={(e) => {
                      setRating(e.target.value);
                    }}
                  >
                    <input
                      onMouseEnter={(e) => {
                        setMove(e.target.value);
                      }}
                      onMouseLeave={(e) => {
                        setMove(0);
                      }}
                      type="radio"
                      className={s.accurate__item}
                      value="1"
                      name="rating"
                    ></input>
                    <input
                      onMouseEnter={(e) => {
                        setMove(e.target.value);
                      }}
                      onMouseLeave={(e) => {
                        setMove(0);
                      }}
                      type="radio"
                      className={s.accurate__item}
                      value="2"
                      name="rating"
                    ></input>
                    <input
                      onMouseEnter={(e) => {
                        setMove(e.target.value);
                      }}
                      onMouseLeave={(e) => {
                        setMove(0);
                      }}
                      type="radio"
                      className={s.accurate__item}
                      value="3"
                      name="rating"
                    ></input>
                    <input
                      onMouseEnter={(e) => {
                        setMove(e.target.value);
                      }}
                      onMouseLeave={(e) => {
                        setMove(0);
                      }}
                      type="radio"
                      className={s.accurate__item}
                      value="4"
                      name="rating"
                    ></input>
                    <input
                      onMouseEnter={(e) => {
                        setMove(e.target.value);
                      }}
                      onMouseLeave={(e) => {
                        setMove(0);
                      }}
                      type="radio"
                      className={s.accurate__item}
                      value="5"
                      name="rating"
                    ></input>
                  </div>
                </div>
                <div className={s.accurate__value}>{value1}</div>
              </div>
              <input
                className={s.rating__create}
                placeholder="Введите рейтинг"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              ></input>
              <button className={s.rating__send} onClick={addRating}>
                Голосовать
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default ProductPage;
