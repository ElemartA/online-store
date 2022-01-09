import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import ProductItem from "../ProductItem/ProductItem";
import s from "./ProductList.module.scss";

const ProductList = observer(() => {
  const { product } = useContext(Context);
  return (
    <div className={s.blocks}>
      {product.products.map((product) => {
        return <ProductItem key={product.id} product1={product} />;
      })}
    </div>
  );
});

export default ProductList;
