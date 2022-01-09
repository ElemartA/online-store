import React, { useContext } from "react";
import { Context } from "../..";
import s from "./NavBar.module.scss";
import phone from "../../assets/phone.svg";
import menu from "../../assets/menu.svg";
import {
  ABOUT_ROUTE,
  ADMIN_ROUTE,
  BASKET_ROUTE,
  CONTACT_ROUTE,
  LOGIN_ROUTE,
  SHOP_ROUTE,
} from "../../utils/consts";
import { Button, Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import "../../reset.scss";
import { useHistory } from "react-router";
import cart from "../../assets/cart.png";
import ProductItem from "../ProductItem/ProductItem";
import jwt_decode from "jwt-decode";

// чтобы mobx мог отслеживать изменение значений состояний, оборачиваем в observer
const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();
  const { product } = useContext(Context);
  let role;
  let email;

  if (user.isAuth === true) {
    role = jwt_decode(localStorage.getItem("token")).role;
    email = jwt_decode(localStorage.getItem("token")).email;
  }

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem("count");
    product.setCartProductCount(0);
    product.setCartProducts([]);
    product.setNamesInCart([]);
    product.setPriceInCart([]);
  };

  user.isAuth === false
    ? localStorage.removeItem("count")
    : console.log("вы авторизованы");

  return (
    <div className={s.main}>
      <Navbar bg="dark" variant="dark" className={s.wrap}>
        <Container className={s.container}>
          <NavLink
            style={{
              color: "white",
              textDecoration: "none",
              fontFamily: "Roboto",
            }}
            className={s.link}
            to={SHOP_ROUTE}
          >
            Онлайн-магазин
          </NavLink>
          <NavLink
            style={{
              color: "white",
              textDecoration: "none",
              fontFamily: "Roboto",
            }}
            className={s.link}
            to={ABOUT_ROUTE}
          >
            О нас
          </NavLink>
          <div className={s.contact}>
            <NavLink
              style={{
                color: "white",
                textDecoration: "none",
                fontFamily: "Roboto",
              }}
              className={s.link}
              to={CONTACT_ROUTE}
            >
              <img alt="phone" src={phone} className={s.phone}></img>
              Контакты
            </NavLink>
          </div>

          {role === "ADMIN" ? (
            <Button
              style={{
                fontFamily: "Roboto",
                marginRight: 10,
              }}
              className={s.link}
              variant={"outline-light"}
              onClick={() => history.push(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
          ) : (
            <span
              style={{
                color: "white",
                fontFamily: "roboto",
              }}
            ></span>
          )}
          {role === "USER" ? (
            <span style={{ color: "white", fontFamily: "roboto" }}>
              Здравствуйте {email}
            </span>
          ) : (
            <span
              style={{ color: "white", fontFamily: "roboto", width: 0 }}
            ></span>
          )}

          {user.isAuth ? (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <Button
                style={{
                  fontFamily: "Roboto",
                }}
                className={s.link}
                variant={"outline-light"}
                onClick={() => {
                  logOut();
                  localStorage.removeItem("token");
                }}
              >
                Выйти
              </Button>
            </Nav>
          ) : (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <Button
                variant={"outline-light"}
                style={{
                  fontFamily: "Roboto",
                  marginRight: 10,
                }}
                className={s.link}
                onClick={() => {
                  history.push(LOGIN_ROUTE);
                }}
              >
                Авторизация
              </Button>
            </Nav>
          )}

          <NavLink to={BASKET_ROUTE} style={{ display: "flex" }}>
            <img alt="cart" src={cart}></img>
            <div style={{ color: "white", marginLeft: 5, marginTop: 7 }}>
              {localStorage.getItem("count")}
            </div>
          </NavLink>
        </Container>
      </Navbar>

      <Dropdown style={{ marginTop: 10 }} autoClose="outside">
        <Dropdown.Toggle
          className={s.button}
          id="dropdown-button-dark-example1"
          variant="secondary"
        >
          <img src={menu} alt="menu-burger" className={s.menu}></img>
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item style={{ fontSize: 16, marginTop: 5 }}>
            <NavLink
              style={{
                color: "white",
                textDecoration: "none",
                fontFamily: "Roboto",
              }}
              className={s.link}
              to={SHOP_ROUTE}
            >
              Онлайн-магазин
            </NavLink>
          </Dropdown.Item>
          <Dropdown.Item style={{ fontSize: 16, marginTop: 5 }}>
            <NavLink
              style={{
                color: "white",
                textDecoration: "none",
                fontFamily: "Roboto",
              }}
              className={s.link}
              to={SHOP_ROUTE}
            >
              О нас
            </NavLink>
          </Dropdown.Item>
          <Dropdown.Item style={{ fontSize: 16, marginTop: 5 }}>
            <NavLink
              style={{
                color: "white",
                textDecoration: "none",
                fontFamily: "Roboto",
              }}
              className={s.link}
              to={SHOP_ROUTE}
            >
              Контакты
            </NavLink>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {user.isAuth ? (
        <Nav className="ml-auto" style={{ color: "white" }}>
          <Button
            style={{
              fontFamily: "Roboto",
              marginRight: 10,
            }}
            className={s.btn}
            variant={"outline-dark"}
            onClick={() => history.push(ADMIN_ROUTE)}
          >
            Админ панель
          </Button>
          <Button
            style={{
              fontFamily: "Roboto",
            }}
            className={s.btn}
            variant={"outline-dark"}
            onClick={() => logOut()}
          >
            Выйти
          </Button>
        </Nav>
      ) : (
        <Nav className="ml-auto" style={{ color: "white" }}>
          <Button
            variant={"outline-light"}
            style={{
              fontFamily: "Roboto",
              marginRight: 10,
            }}
            className={s.btn}
            onClick={() => history.push(LOGIN_ROUTE)}
          >
            Авторизация
          </Button>
        </Nav>
      )}
      <NavLink className={s.minicart} to={BASKET_ROUTE}>
        <img alt="cart" src={cart}></img>
        <div style={{ color: "white" }}>{product.cartProductCount}</div>
      </NavLink>
    </div>
  );
});

export default NavBar;
