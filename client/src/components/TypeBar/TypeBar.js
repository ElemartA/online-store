import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { Context } from "../..";
import "../../reset.scss";
import s from "./TypeBar.module.scss";

const TypeBar = observer(() => {
  const { product } = useContext(Context);

  return (
    <div className={s.button}>
      <Dropdown style={{ marginTop: 10 }} autoClose="outside">
        <Dropdown.Toggle
          className={s.button__btn}
          id="dropdown-button-dark-example1"
          variant="secondary"
        >
          Меню
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          {product.types.map((type) => {
            return (
              <Dropdown.Item
                style={{ fontSize: 20, marginTop: 5 }}
                onClick={() => product.setSelectedType(type)}
                key={type.id}
              >
                {type.name}
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
  );
});

export default TypeBar;
