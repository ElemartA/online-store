import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter.js";
import NavBar from "./components/NavBar/NavBar.js";
import { observer } from "mobx-react-lite";
import { Context } from "./index.js";
import { check } from "./http/userAPI.js";
import Loading from "./components/Loading/Loading.js";
import Footer from "./components/Footer/Footer.js";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  // первый параметр функция, второй массив, если массив пустой, то ф-ция отработает единожды
  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(user); // !!наверное user.setUser(user)
        user.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
});

export default App;
