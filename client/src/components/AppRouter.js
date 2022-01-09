import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Context } from "../index.js";
import { authRoutes, publicRoutes } from "../routes.js";
import { SHOP_ROUTE } from "../utils/consts.js";

const AppRouter = observer(() => {
  // заглушка, будет показывать, авторизован пользователь либо нет
  const { user } = useContext(Context);

  return (
    <Switch>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} component={Component} exact />;
        })}

      {publicRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} component={Component} exact />;
      })}
      <Redirect to={SHOP_ROUTE} />
    </Switch>
  );
});

export default AppRouter;
