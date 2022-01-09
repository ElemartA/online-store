import React from "react";
import s from "./Loading.module.scss";
import preloader from "../../assets/preloader.svg";

const Loading = () => {
  return (
    <div className={s.preloader}>
      <img src={preloader} width="50" alt="preloader"></img>
    </div>
  );
};

export default Loading;
