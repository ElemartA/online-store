import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import s from "./BrandBar.module.scss";
import Button from "react-bootstrap/Button";
import { Dropdown } from "react-bootstrap";

const BrandBar = observer(() => {
  const { product } = useContext(Context);
  return (
    <div className={s.wrap}>
      <div className={s.container}>
        <div className={s.blocks}>
          {product.brands.map((brand) => {
            return (
              <>
                <Button
                  className={s.block}
                  key={brand.id}
                  onClick={() => product.setSelectedBrand(brand)}
                  variant="outline-secondary"
                >
                  {brand.name}
                </Button>{" "}
              </>
            );
          })}
        </div>
      </div>
      <div className={s.container_opacity}>
        <div className={s.button}>
          <Dropdown style={{ marginTop: 10 }} autoClose="outside">
            <Dropdown.Toggle
              className={s.button__btn}
              id="dropdown-button-dark-example1"
              variant="secondary"
            >
              Бренды
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              {product.brands.map((brand) => {
                return (
                  <Dropdown.Item
                    style={{ fontSize: 20, marginTop: 5 }}
                    onClick={() => product.setSelectedBrand(brand)}
                    key={brand.id}
                  >
                    {brand.name}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>

          <div>
            <div className="row">
              <div className="col-md-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default BrandBar;
{
  /* <div
                  className={
                    brand.id === product.selectedBrand.id
                      ? `${s.block} ${s.active}`
                      : `${s.block}`
                  }
                  key={brand.id}
                  onClick={() => product.setSelectedBrand(brand)}
                >
                  {brand.name}
                </div> */
}
