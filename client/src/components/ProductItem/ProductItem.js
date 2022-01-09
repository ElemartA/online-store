import React, { useContext, useState } from "react";
import s from "./ProductItem.module.scss";
import littleStar from "../../assets/littleStar.svg";
import { useHistory } from "react-router";
import { PRODUCT_ROUTE } from "../../utils/consts.js";
import { Context } from "../..";
import { fetchOneRating } from "../../http/deviceApi";

const ProductItem = ({ product1 }) => {
  const { product } = useContext(Context);
  const history = useHistory();
  const [value, setValue] = useState(0);

  fetchOneRating(product1.id).then(
    (data) => {
      setValue(
        data.rows.length !== 0
          ? Math.round(
              (data.rows
                .map((el) => Object.entries(el)[1])
                .map((el) => el[1])
                .reduce((a, b) => a + b, 0) /
                data.count) *
                100
            ) / 100
          : 0
      );
    },
    [value]
  );

  return (
    <div
      className={s.block}
      onClick={() => history.push(PRODUCT_ROUTE + "/" + product1.id)}
    >
      <img
        className={s.block__img}
        alt="foto"
        src={product1.img}
        width={150}
        height={150}
        style={{
          marginTop: 4,
          objectFit: "contain",
        }}
      ></img>
      <div className={s.block__wrap}>
        <div className={s.block__name}>{product1.name}</div>
        <div className={s.block__info}>
          <div>{value}</div>
          <img
            className={s.block__img}
            src={littleStar}
            width={20}
            height={20}
            alt="foto"
          ></img>
        </div>
      </div>
      <div className={s.block__code}>
        {" "}
        <span className={s.block__code}>Код товара: </span>
        {product1.id}
      </div>
    </div>
  );
};

export default ProductItem;
