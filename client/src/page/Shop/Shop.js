import React, { useContext, useEffect } from "react";
import "../../reset.scss";
import TypeBar from "../../components/TypeBar/TypeBar";
import s from "./Shop.module.scss";
import BrandBar from "../../components/BrandBar/BrandBar";
import ProductList from "../../components/ProductList/ProductList";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import { fetchBrand, fetchProduct, fetchTypes } from "../../http/deviceApi";
import Pages from "../../components/Pages/Pages";
import Slider from "../../components/Carousel/Carousel.js";

const Shop = observer(() => {
  const { product } = useContext(Context);

  // единожды при открытии стр. шопа нужно подгружать устройство
  useEffect(() => {
    fetchTypes().then((data) => product.setType(data));
    fetchBrand().then((data) => product.setBrand(data));
    fetchProduct(null, null, 1, 10).then((data) => {
      product.setProducts(data.rows);
      product.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchProduct(
      product.selectedType.id,
      product.selectedBrand.id,
      product.page,
      10
    ).then((data) => {
      product.setProducts(data.rows);
      product.setTotalCount(data.count);
    });
  }, [product.page, product.selectedType, product.selectedBrand]);

  return (
    <div className={s.wrap}>
      <TypeBar />
      <div className={s.container}>
        <BrandBar />
        <Slider />
        <ProductList />
        <Pages />
      </div>
    </div>
  );
});

export default Shop;
