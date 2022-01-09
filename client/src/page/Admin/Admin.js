import React, { useState } from "react";
import CreateType from "../../components/modals/CreateType/CreateType";
import CreateBrand from "../../components/modals/CreateBrand/CreateBrand";
import s from "./Admin.module.scss";
import CreateProduct from "../../components/modals/CreateProduct/CreateProduct.js";
import DestroyProduct from "../../components/modals/DestroyProduct/DestroyProduct.js";
import DestroyBrand from "../../components/modals/DestroyBrand/DestroyBrand.js";
import DestroyType from "../../components/modals/DestroyType/DestroyType.js";

const Admin = () => {
  const [typeVisible, setTypeVisible] = useState(false);
  const [brandVisible, setBrandVisible] = useState(false);
  const [productVisible, setProductVisible] = useState(false);
  const [destroyVisible, setDestroyVisible] = useState(false);
  const [destroyBrandVisible, setDestroyBrandVisible] = useState(false);
  const [destroyTypeVisible, setDestroyTypeVisible] = useState(false);

  return (
    <div className={s.admin}>
      <button className={s.admin__button} onClick={() => setTypeVisible(true)}>
        Добавить тип
      </button>
      <button className={s.admin__button} onClick={() => setBrandVisible(true)}>
        Добавить бренд
      </button>
      <button
        className={s.admin__button}
        onClick={() => {
          setProductVisible(true);
        }}
      >
        Добавить продукт
      </button>
      <button
        className={`${s.admin__button} ${s.admin__del}`}
        onClick={() => {
          setDestroyVisible(true);
        }}
      >
        Удалить продукт
      </button>
      <button
        className={`${s.admin__button} ${s.admin__del}`}
        onClick={() => setDestroyBrandVisible(true)}
      >
        Удалить бренд
      </button>
      <button
        className={`${s.admin__button} ${s.admin__del}`}
        onClick={() => setDestroyTypeVisible(true)}
      >
        Удалить тип
      </button>
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateProduct
        show={productVisible}
        onHide={() => setProductVisible(false)}
      />
      <DestroyProduct
        show={destroyVisible}
        onHide={() => setDestroyVisible(false)}
      />
      <DestroyBrand
        show={destroyBrandVisible}
        onHide={() => setDestroyBrandVisible(false)}
      />
      <DestroyType
        show={destroyTypeVisible}
        onHide={() => setDestroyTypeVisible(false)}
      />
    </div>
  );
};

export default Admin;
