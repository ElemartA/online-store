import React, { useContext, useState } from "react";
import { Context } from "../..";
import s from "./Auth.module.scss";
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "../../utils/consts";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { login, registration } from "../../http/userAPI";
import { observer } from "mobx-react-lite";
import jwt_decode from "jwt-decode";
import {
  createBasket,
  fetchAllBasketOfOne,
  fetchOneCart,
} from "../../http/deviceApi";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const { product } = useContext(Context);
  const location = useLocation();
  const history = useHistory();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
        let decoded = localStorage.getItem("token");
        let userInfo = jwt_decode(decoded);
        let userId = userInfo.id;

        await fetchOneCart(userId).then((data) => {
          product.setCartId(data.id);
          console.log(data);
        });
      } else {
        data = await registration(email, password);
        let decoded = localStorage.getItem("token");
        let userInfo = jwt_decode(decoded);
        let id = userInfo.id;
        createBasket({ userId: id }).then((data) => {
          console.log(data);
        });
      }

      user.setUser(user);
      user.setIsAuth(true);
      history.push(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div className={s.container}>
      <div className={s.card}>
        <p className={s.title}> {isLogin ? "Авторизация" : "Регистрация"}</p>
        <form className={s.form}>
          <label className={s.item} htmlFor="firstName">
            <p className={s.subtitle}>Email:</p>
            <input
              placeholder="Введите email..."
              className={s.input}
              type="text"
              name="firstName"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className={s.item} htmlFor="firstName">
            <p className={s.subtitle}>Password:</p>
            <input
              placeholder="Введите пароль..."
              className={s.input}
              name="password"
              type="password"
              autoComplete="on"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className={s.registration}>
            {isLogin ? (
              <div className={s.subtitle}>
                Нет аккаунта?
                <NavLink className={s.link} to={REGISTRATION_ROUTE}>
                  Зарегистрируйся{" "}
                </NavLink>
              </div>
            ) : (
              <div className={s.subtitle}>
                Есть аккаунт?
                <NavLink className={s.link} to={LOGIN_ROUTE}>
                  Войдите{" "}
                </NavLink>
              </div>
            )}
            <button type="button" className={s.button} onClick={click}>
              {isLogin ? "Войти" : "Регистрация"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

export default Auth;
