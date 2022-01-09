import React, { useContext, useEffect, useState } from "react";
import { Button, ButtonToolbar, Table } from "react-bootstrap";
import cart from "../../assets/cart.png";
import { fetchOneProduct, fetchProductsOfBasket } from "../../http/deviceApi";
import s from "./Basket.module.scss";
import jwt_decode from "jwt-decode";
import { Context } from "../..";
import { values } from "mobx";

const Basket = () => {
  const [productInCart, setProductInCart] = useState([]);
  const [count, setCount] = useState(0);
  const [arrayOfName, setArrayOfName] = useState([]);
  const [arrayOfPrice, setArrayOfPrice] = useState([]);
  const { product } = useContext(Context);

  let decoded = localStorage.getItem("token");
  let userInfo = jwt_decode(decoded);
  let basketId = userInfo.id;

  const foo = () => {
    console.log(product.cartProducts[0].id);
    console.log(product.namesInCart);
    console.log(product.priceInCart);
    console.log(product.mapProductCart);
  };

  useEffect(() => {
    setProductInCart(product.cartProducts);
    console.log(product.cartProducts);
    setCount(product.cartProducts.length);
    console.log(product.cartProducts.length);
  }, []);

  return (
    <div className={s.wrap}>
      <p className={s.title}>Корзина</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Название</th>
            <th>Количество</th>
            <th>Цена</th>
          </tr>
        </thead>

        <tbody>
          {product.mapProductCart.map((el, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{el[0]}</td>
                <td>1</td>
                <td>{el[1]}</td>
              </tr>
            );
          })}
          <tr>
            <td colSpan="2">Итого</td>
            <td>{count}</td>
            <td>{product.priceInCart.reduce((a, b) => a + b, 0)}</td>
          </tr>
        </tbody>
      </Table>
      <Button
        style={{ marginRight: 5 }}
        onClick={foo}
        variant="outline-secondary"
      >
        Заказать
      </Button>
      <img alt="cart" src={cart}></img>
    </div>
  );
};

export default Basket;
