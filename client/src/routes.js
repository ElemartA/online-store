import About from "./page/About/About.js";
import Admin from "./page/Admin/Admin.js";
import Auth from "./page/Auth/Auth.js";
import Basket from "./page/Basket/Basket.js";
import Contact from "./page/Contact/Contact.js";
import ProductPage from "./page/Shop/ProductPage/ProductPage.js";
import Shop from "./page/Shop/Shop.js";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  PRODUCT_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  ABOUT_ROUTE,
  CONTACT_ROUTE,
} from "./utils/consts.js";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: PRODUCT_ROUTE + "/:id",
    Component: ProductPage,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: ABOUT_ROUTE,
    Component: About,
  },
  {
    path: CONTACT_ROUTE,
    Component: Contact,
  },
];
